import React, { useState, useEffect } from "react";
import {
  Grid,
  Typography,
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
  Paper,
  Button,
  Tooltip,
  Menu,
  MenuItem,
} from "@mui/material";
import { getPedidosUsuario, actualizarEstatusPedido } from "../../config/backEndAdmin/backEstatusAdmin";

interface Pedido {
  id: string;
  nombre: string;
  cantidad: number;
  total: number;
  fecha: string;
  estatus: string;
  direccion: string;
  colonia: string;
  ciudad: string;
  cp: string;
  estado: string;
  telefono: string;
  nombreEnvio: string;
  imagen: string;
}

export default function EstatusEnvioAdministrador() {
  const [pedidos, setPedidos] = useState<Pedido[] | null>(null);
  const [botonesDeshabilitados, setBotonesDeshabilitados] = useState<Record<string, boolean>>({});
  const [anchorEl, setAnchorEl] = useState<null | HTMLElement>(null);
  const open = Boolean(anchorEl);

  const handleClose = () => {
    setAnchorEl(null);
  };

  useEffect(() => {
    async function fetchPedidos() {
      try {
        const pedidosData = await getPedidosUsuario();
        setPedidos(pedidosData);
        const botonesDeshabilitadosInicial = pedidosData.reduce((acc, pedido) => {
          acc[pedido.id] = pedido.estatusEnv === "Entregado";
          return acc;
        }, {});
        setBotonesDeshabilitados(botonesDeshabilitadosInicial);
      } catch (error) {
        console.error("Error al obtener los pedidos:", error);
      }
    }
    fetchPedidos();
  }, []);

  const handleActualizarEstatus = async (id: string) => {
    try {
      if (!pedidos) return;
  
      const pedidoToUpdate = pedidos.find((pedido) => pedido.id === id);
      if (!pedidoToUpdate) {
        console.error("Pedido no encontrado.");
        return;
      }
  
      let nuevoEstatus: string;
      switch (pedidoToUpdate.estatus) {
        case "Recoger en tienda":
          nuevoEstatus = "Entregado";
          break;
        case "Preparando":
          nuevoEstatus = "Enviado";
          break;
        case "Enviado":
          nuevoEstatus = "En camino";
          break; 
        case "En camino":
          nuevoEstatus = "Entregado";
          break;
        default:
          nuevoEstatus = "Preparando";
      }
  
      await actualizarEstatusPedido(id, nuevoEstatus);
      const pedidosActualizados = pedidos.map((pedido) =>
        pedido.id === id ? { ...pedido, estatusEnv: nuevoEstatus } : pedido
      );
      setPedidos(pedidosActualizados);
      setBotonesDeshabilitados({ ...botonesDeshabilitados, [id]: nuevoEstatus === "Entregado" });
    } catch (error) {
      console.error("Error al actualizar el estatus del pedido:", error);
    }
  };
  

  return (
    <Grid container justifyContent="center">
      <Grid item xs={12} md={10} lg={8}>
        <Typography variant="h5" align="center" gutterBottom sx={{ fontWeight: '600', paddingBottom: '2%', fontFamily: "Cormorant", }}>
          Estatus de Envío
        </Typography>
        <Menu anchorEl={anchorEl} open={open} onClose={handleClose}>
          {["Preparando", "Enviado", "En camino", "Entregado"].map((estatus, index) => (
            <MenuItem key={index} onClick={handleClose}>{estatus}</MenuItem>
          ))}
        </Menu>
        <TableContainer component={Paper} sx={{ maxWidth: 1500, margin: '0 auto', border: '2px solid', borderColor: 'primary.main', borderRadius: 2, boxShadow: 5 }}>
          <Table aria-label="simple table">
            <TableHead>
              <TableRow sx={{ backgroundColor: 'primary.main' }}>
                {["Nombre", "Imagen", "Cantidad", "Total", "Detalles", "Estatus de Envío", "Actualizar Estatus"].map((heading, index) => (
                  <TableCell key={index} sx={{ fontWeight: 'bold', color: 'primary.contrastText' }} align={index > 1 && index < 5 ? "right" : "center"}>{heading}</TableCell>
                ))}
              </TableRow>
            </TableHead>
            <TableBody>
              {pedidos ? (
                pedidos.map((pedido: Pedido) => (
                  <TableRow key={pedido.id} sx={{ '&:nth-of-type(odd)': { backgroundColor: 'action.hover' }, '&:nth-of-type(even)': { backgroundColor: 'background.default' } }}>
                    <TableCell>{pedido.nombre}</TableCell>
                    <TableCell align="center">
                      <img src={pedido.imagen} alt="Imagen del producto" style={{ maxWidth: "100px", maxHeight: "100px" }} />
                    </TableCell>
                    <TableCell align="right">{pedido.cantidad}</TableCell>
                    <TableCell align="right">{pedido.total}</TableCell>
                    <TableCell align="center">
                      <Tooltip title={`Calle: ${pedido.direccion}, Colonia: ${pedido.colonia}, Ciudad: ${pedido.ciudad}, CP: ${pedido.cp}, Estado: ${pedido.estado}, Teléfono: ${pedido.telefono}, Destinatario: ${pedido.nombreEnvio}`} arrow>
                        <Button variant="contained">Dirección</Button>
                      </Tooltip>
                    </TableCell>
                    <TableCell align="right" sx={{ color: pedido.estatus === "Preparando" ? "#FFA500" : pedido.estatus === "En camino" ? "#0000FF" : pedido.estatus === "Enviado" ? "#FFD700" : pedido.estatus === "Entregado" ? "#008000" : "inherit", fontWeight: "bold" }}>{pedido.estatus}</TableCell>
                    <TableCell align="right">
                      <Button variant="contained" onClick={() => handleActualizarEstatus(pedido.id)} disabled={botonesDeshabilitados[pedido.id]}>Actualizar Estatus</Button>
                    </TableCell>
                  </TableRow>
                ))
              ) : (
                <TableRow>
                  <TableCell colSpan={7}>
                    <Typography variant="body1" color="error">No se encontraron pedidos.</Typography>
                  </TableCell>
                </TableRow>
              )}
            </TableBody>
            <tfoot>
              <TableRow>
                <TableCell colSpan={7} sx={{ textAlign: 'center', padding: 2 }}>Fin del Estatus de Envío</TableCell>
              </TableRow>
            </tfoot>
          </Table>
        </TableContainer>
      </Grid>
    </Grid>
  );
}
