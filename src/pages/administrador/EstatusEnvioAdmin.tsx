import React, { useEffect, useState } from "react";
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
} from "@mui/material";
import { getPedidosUsuario, actualizarEstatusPedido } from "../../config/backEndAdmin/backEstatusAdmin";

interface Pedido {
  id: string; // Identificador único del pedido
  nombre: string;
  cantidad: number;
  total: number;
  fecha: string;
  estatusEnv: string;
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
  const [botonDeshabilitado, setBotonDeshabilitado] = useState(false);

  useEffect(() => {
    async function fetchPedidos() {
      try {
        const pedidosData = await getPedidosUsuario();
        setPedidos(pedidosData);
      } catch (error) {
        console.error("Error al obtener los pedidos:", error);
      }
    }

    fetchPedidos();
  }, []);

  const handleActualizarEstatus = async (id: string) => {
    try {
      if (!pedidos) return; // Verificar si pedidos existe antes de continuar
  
      const pedidoToUpdate = pedidos.find((pedido) => pedido.id === id);
      if (!pedidoToUpdate) {
        console.error("Pedido no encontrado.");
        return;
      }
  
      let nuevoEstatus: string;
      switch (pedidoToUpdate.estatusEnv) {
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
      const pedidosActualizados = pedidos.map((pedido) => {
        if (pedido.id === id) {
          return { ...pedido, estatusEnv: nuevoEstatus };
        }
        return pedido;
      });
      setPedidos(pedidosActualizados);
      if (nuevoEstatus === "Entregado") {
        setBotonDeshabilitado(true);
      }
    } catch (error) {
      console.error("Error al actualizar el estatus del pedido:", error);
    }
  };
  
  

  return (
    <Grid container justifyContent="center">
      <Grid item xs={12} md={10} lg={8}>
        <Typography variant="h5" align="center" gutterBottom>
          Estatus de Envío
        </Typography>
        <TableContainer component={Paper}>
          <Table aria-label="simple table">
            <TableHead>
              <TableRow>
                <TableCell align="left">
                  <Typography variant="subtitle1" sx={{ fontWeight: "bold" }}>
                    Nombre
                  </Typography>
                </TableCell>
                <TableCell align="center">
                  <Typography variant="subtitle1" sx={{ fontWeight: "bold" }}>
                    Imagen
                  </Typography>
                </TableCell>
                <TableCell align="right">
                  <Typography variant="subtitle1" sx={{ fontWeight: "bold" }}>
                    Cantidad
                  </Typography>
                </TableCell>
                <TableCell align="right">
                  <Typography variant="subtitle1" sx={{ fontWeight: "bold" }}>
                    Total
                  </Typography>
                </TableCell>
                <TableCell align="center">
                  <Typography variant="subtitle1" sx={{ fontWeight: "bold" }}>
                    Detalles
                  </Typography>
                </TableCell>
                <TableCell align="right">
                  <Typography variant="subtitle1" sx={{ fontWeight: "bold" }}>
                    Estatus de Envío
                  </Typography>
                </TableCell>
                <TableCell align="right">
                  <Typography variant="subtitle1" sx={{ fontWeight: "bold" }}>
                    Actualizar Estatus
                  </Typography>
                </TableCell>
              </TableRow>
            </TableHead>
            <TableBody>
              {pedidos &&
                pedidos.map((pedido: Pedido) => (
                  <TableRow key={pedido.id}>
                    <TableCell>{pedido.nombre}</TableCell>
                    <TableCell align="center">
                      <img
                        src={pedido.imagen}
                        alt="Imagen del producto"
                        style={{ maxWidth: "100px", maxHeight: "100px" }}
                      />
                    </TableCell>
                    <TableCell align="right">{pedido.cantidad}</TableCell>
                    <TableCell align="right">{pedido.total}</TableCell>
                    <TableCell align="center">
                      <Tooltip
                        title={`Calle: ${pedido.direccion}, Colonia: ${pedido.colonia}, Ciudad: ${pedido.ciudad}, CP: ${pedido.cp}, Estado: ${pedido.estado}, Teléfono: ${pedido.telefono}, Destinatario: ${pedido.nombreEnvio}`}
                        arrow
                      >
                        <Button variant="contained">Dirección</Button>
                      </Tooltip>
                    </TableCell>
                    <TableCell
                      align="right"
                      sx={{
                        color: (() => {
                          switch (pedido.estatusEnv) {
                            case "Preparando":
                              return "#FFA500";
                            case "En camino":
                              return "#0000FF";
                            case "Enviado":
                              return "#FFD700";
                            case "Entregado":
                              return "#008000";
                            default:
                              return "inherit";
                          }
                        })(),
                        fontWeight: "bold",
                      }}
                    >
                      {pedido.estatusEnv}
                    </TableCell>
                    <TableCell align="right">
                      <Button
                        variant="contained"
                        onClick={() => handleActualizarEstatus(pedido.id)}
                        disabled={botonDeshabilitado}
                      >
                        Actualizar Estatus
                      </Button>
                    </TableCell>
                  </TableRow>
                ))}
            </TableBody>
          </Table>
        </TableContainer>
      </Grid>
    </Grid>
  );
}
