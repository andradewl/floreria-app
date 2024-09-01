import { useState, useEffect } from "react";
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
  // Tooltip,
  Menu,
  MenuItem,
  FormControl,
  InputLabel,
  Select,
  SelectChangeEvent,
  // SelectChangeEvent,
} from "@mui/material";
// import { getPedidosUsuario, actualizarEstatusPedido, getAllPedidos } from "../../config/backEndAdmin/backEstatusAdmin";

import { NuevoPedidoback, EstadosPedidos } from "../../interfaces/interfaces";

import { getAllPedidos, getAllEstadosPedidos, actualizarEstatusPedido } from "../../config/backEndAdmin/backEstatusAdmin";
// import React from "react";

// interface Pedido {
//   id: string;
//   nombre: string;
//   cantidad: number;
//   total: number;
//   fecha: string;
//   estatus: string;
//   direccion: string;
//   colonia: string;
//   ciudad: string;
//   cp: string;
//   estado: string;
//   telefono: string;
//   nombreEnvio: string;
//   imagen: string;
// }

export default function EstatusEnvioAdministrador() {
  const [pedidos, setPedidos] = useState<NuevoPedidoback[] | null>(null);
  const [estatusPedido, setEstatusPedido] = useState<EstadosPedidos[] | null>(null);

  // const [botonesDeshabilitados, setBotonesDeshabilitados] = useState<Record<string, boolean>>({});
  const [anchorEl, setAnchorEl] = useState<null | HTMLElement>(null);
  const open = Boolean(anchorEl);

  const handleClose = () => {
    setAnchorEl(null);
  };

  async function fetchPedidos() {
    try {
      const pedidosData = await getAllPedidos();
      const estadosPedidosData = await getAllEstadosPedidos();
      setEstatusPedido(estadosPedidosData)
      setPedidos(pedidosData)
      console.log(estatusPedido)

      // console.log(pedidosData)
      // setPedidos(pedidosData);
      // const botonesDeshabilitadosInicial = pedidosData.reduce((acc, pedido) => {
      //   acc[pedido.id] = pedido.estatusEnv === "Entregado";
      //   return acc;
      // }, {});
      // setBotonesDeshabilitados(botonesDeshabilitadosInicial);
    } catch (error) {
      console.error("Error al obtener los pedidos:", error);
    }
  }


  useEffect(() => {
    fetchPedidos();
  }, []);

  const handleChange = async (event: SelectChangeEvent, id:string) => {

    const res = event.target.value as string
    // setAge(event.target.value as string);
    console.log(id, res)

    try{
      await actualizarEstatusPedido(id, res);
      fetchPedidos()
    }catch(error){
      // setMensajeNotificacion("Ha ocurrido un error intentelo mas tarde")
      // setNotiError(true)
      // setTimeout(() => {
      //   setNotiError(false)
      // }, 2000);
      console.log(error)
    }
  };

  // const handleActualizarEstatus = async (id: string) => {
  //   try {
  //     if (!pedidos) return;
  
  //     const pedidoToUpdate = pedidos.find((pedido) => pedido.id === id);
  //     if (!pedidoToUpdate) {
  //       console.error("Pedido no encontrado.");
  //       return;
  //     }
  
  //     let nuevoEstatus: string;
  //     switch (pedidoToUpdate.estatus) {
  //       case "Recoger en tienda":
  //         nuevoEstatus = "Entregado";
  //         break;
  //       case "Preparando":
  //         nuevoEstatus = "Enviado";
  //         break;
  //       case "Enviado":
  //         nuevoEstatus = "En camino";
  //         break; 
  //       case "En camino":
  //         nuevoEstatus = "Entregado";
  //         break;
  //       default:
  //         nuevoEstatus = "Preparando";
  //     }
  
  //     await actualizarEstatusPedido(id, nuevoEstatus);
  //     const pedidosActualizados = pedidos.map((pedido) =>
  //       pedido.id === id ? { ...pedido, estatusEnv: nuevoEstatus } : pedido
  //     );
  //     setPedidos(pedidosActualizados);
  //     setBotonesDeshabilitados({ ...botonesDeshabilitados, [id]: nuevoEstatus === "Entregado" });
  //   } catch (error) {
  //     console.error("Error al actualizar el estatus del pedido:", error);
  //   }
  // };
  

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
                {["Id", "Pedido", "Total", "Ver pedido", "Actualizar Estatus"].map((heading, index) => (
                  <TableCell key={index} sx={{ fontWeight: 'bold', color: 'primary.contrastText' }} align={index > 1 && index < 5 ? "right" : "center"}>{heading}</TableCell>
                ))}
              </TableRow>
            </TableHead>
            <TableBody>
              {pedidos ? (
                pedidos.map((pedido: NuevoPedidoback) => (
                  <TableRow key={pedido.id} sx={{ '&:nth-of-type(odd)': { backgroundColor: 'action.hover' }, '&:nth-of-type(even)': { backgroundColor: 'background.default' } }}>
                    <TableCell>{pedido.id}</TableCell>
                    <TableCell align="center">
                      Pedido Nuevo
                    </TableCell>
                    <TableCell align="right">{pedido.total}</TableCell>
                    <TableCell align="right">
                      <Button variant="contained" onClick={() => console.log("cambiar estatus")} >Ver Pedido</Button>
                    </TableCell>
                    {/* <TableCell align="center">
                      {estatusPedido && estatusPedido.map((espedido) => {
                        if (espedido.id === pedido.entrega) {
                          return <>{espedido.Nombre}</>;
                        }
                        return null; // Devuelve null para las iteraciones donde no coincida la condición
                      })}

                    </TableCell> */}
                    <TableCell align="right">
                    <FormControl fullWidth>
                        <InputLabel id="demo-simple-select-label">Estatus</InputLabel>
                        <Select
                          labelId="demo-simple-select-label"
                          id="demo-simple-select"
                          value={pedido.entrega}
                          label="Estatus"
                          onChange={(event) => handleChange(event, pedido.id)}
                        >
                          {estatusPedido && estatusPedido.map((espedido) => (
                          // {estatusPedido ? estatusPedido.map((espedido) => (
                            <MenuItem value={espedido.id}>{espedido.Nombre}</MenuItem>
                          ))}
                        </Select>
                      </FormControl>
                      {/* <Button variant="contained" onClick={() => console.log("cambiar estatus")} >Actualizar Estatus</Button> */}
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
