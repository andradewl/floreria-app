import React, { useEffect, useState } from "react";
import {
  Grid,
  Typography,
  Table,
  TableBody,
//   TableCell,
  TableContainer,
  TableHead,
  TableRow,
  Paper,
  TableCell,
  IconButton,
//   TextField,
//   Button,
//   Menu,
//   MenuItem,
//   Box,
} from "@mui/material";
import DeleteIcon from '@mui/icons-material/Delete';
// import FilterListIcon from "@mui/icons-material/FilterList";
// import { getPedidosUsuario } from "../../config/backEndAdmin/backHistPedidos";
import { getContactoUusarios } from "../../config/backEndAdmin/backendContacto";
import { NotificacionSuccess, Notificacionerror } from "../../components/Alert";
import { deleteContaco } from "../../config/backEndAdmin/backendOcasiones";
// import { deleteOcasionByid } from "../../config/backEndAdmin/backendOcasiones";

interface Contacto {
    id: string;
    nombre: string;
    asunto: string;
    correoElectronico: string;
    mensaje: string;
    telefono: string;
  }
export default function MensajeContacto() {
  const [pedidos, setPedidos] = useState<Contacto[]>([]);
  const [notiError, setNotiError ] = React.useState(false);
  const [notiSucces, setNotiSucces ] = React.useState(false);
  // const [notiInfo, ] = React.useState(false);
  const [mensajeNotificacion, setMensajeNotificacion] = React.useState("");
//   const [busqueda, setBusqueda] = useState<string>("");
//   const [, setAnchorEl] = useState<null | HTMLElement>(null);
//   const [, setFiltroSeleccionado] = useState<string | null>(null);
  // const [filtroSeleccionado, setFiltroSeleccionado] = useState<string | null>(null);
//   const open = Boolean(anchorEl);

//   const parseFecha = (fechaString: string) => {
//     const parts = fechaString.split('-'); // Dividir la fecha en partes
//     const day = parseInt(parts[0]); // Obtener el día
//     const month = parseInt(parts[1]); // Obtener el mes
//     const year = parseInt(parts[2]); // Obtener el año
//     return new Date(year, month - 1, day); // Crear objeto Date (meses en JavaScript son de 0 a 11)
//   };

//   const handleClick = (event: React.MouseEvent<HTMLElement>) => {
//     setAnchorEl(event.currentTarget);
//   };

//   const handleClose = () => {
//     setAnchorEl(null);
//   };

  useEffect(() => {
    

    fetchPedidos();
  }, []);


   const fetchPedidos = async () => {
    try {
      const pedidosData = await getContactoUusarios();
      setPedidos(pedidosData);
    } catch (error) {
      console.error("Error al obtener los pedidos:", error);
    }
  }
//   const handleFiltrarPor = (tipoFiltro: string) => {
//     console.log("Tipo de filtro seleccionado:", tipoFiltro); // Verificar el tipo de filtro seleccionado

//     setFiltroSeleccionado(tipoFiltro);

//     // Aplicar filtro según el tipo seleccionado
//     let pedidosFiltrados = [...pedidos].flat(); // Copiar y desagregar los pedidos internos

//     if (tipoFiltro === 'fecha') {
//       console.log("Ordenando por fecha...");
//       pedidosFiltrados = pedidosFiltrados.sort((a, b) => {
//         const fechaA = parseFecha(a.fecha); // Convertir fecha de string a Date
//         const fechaB = parseFecha(b.fecha); // Convertir fecha de string a Date
//         console.log("Comparando fechas:", fechaA, fechaB);
//         console.log("Fecha a:", fechaA, "Fecha b:", fechaB);
//         return fechaB.getTime() - fechaA.getTime(); // Ordenar de la más reciente a la más antigua
//       });
//     } else if (tipoFiltro === 'cantidad') {
//       console.log("Ordenando por cantidad...");
//       pedidosFiltrados = pedidosFiltrados.sort((a, b) => a.cantidad - b.cantidad); // Ordenar de menor a mayor cantidad
//     } else if (tipoFiltro === 'total') {
//       console.log("Ordenando por total...");
//       pedidosFiltrados = pedidosFiltrados.sort((a, b) => a.total - b.total); // Ordenar de menor a mayor total
//     }
//     // Actualizar el estado de los pedidos filtrados
//     setPedidos([pedidosFiltrados]); // Reagregamos los pedidos en un nuevo array
//   };

//   const filteredPedidos = pedidos
//     .flat()
//     .filter((pedido) =>
//       pedido.nombre.toLowerCase().includes(busqueda.toLowerCase())
//     );

const deleteOcasion = async (id:string) =>{
    // console.log("goaf,lsfmsad")
    console.log(id)
      try{
        await deleteContaco(id)
        setMensajeNotificacion("Borrado con exito, espere")
        setNotiSucces (true)
        setTimeout(() => {
          setNotiSucces(false)
        }, 2000);
        fetchPedidos()
      }catch(error){
        setMensajeNotificacion("Ha ocurrido un error intentelo de nuevo")
        setNotiError(true)
        setTimeout(() => {
          setNotiError(false)
        }, 2000);
      
      
      // console.log("borrar")
    }
    // console.log(dataXd)
  }

  return (
    <>
        <Grid container justifyContent="center">
        <Grid item xs={12} md={10} lg={8}>
            <Typography
            variant="h5"
            align="center"
            gutterBottom
            sx={{ fontWeight: "600", paddingBottom: "2%", fontFamily: "Cormorant" }}
            >
            Historial de Pedidos
            </Typography>

            {/* Barra de búsqueda y botón de filtro */}

            <TableContainer
            component={Paper}
            sx={{
                maxWidth: 800,
                margin: "0 auto",
                border: "2px solid",
                borderColor: "primary.main",
                borderRadius: 2,
                boxShadow: 5,
            }}
            >
            <Table aria-label="simple table">
                <TableHead>
                <TableRow sx={{ backgroundColor: "primary.main" }}>
                    <TableCell sx={{ fontWeight: "bold", color: "primary.contrastText" }}>
                    Nombre
                    </TableCell>
                    <TableCell
                    sx={{ fontWeight: "bold", color: "primary.contrastText" }}
                    align="right"
                    >
                    Asunto
                    </TableCell>
                    <TableCell
                    sx={{ fontWeight: "bold", color: "primary.contrastText" }}
                    align="right"
                    >
                    Mensaje
                    </TableCell>
                    <TableCell
                    sx={{ fontWeight: "bold", color: "primary.contrastText" }}
                    align="right"
                    >
                    Contacto
                    </TableCell>
                    <TableCell
                    sx={{ fontWeight: "bold", color: "primary.contrastText" }}
                    align="right"
                    >
                    Opciones
                    </TableCell>
                </TableRow>
                </TableHead>
                <TableBody>
                {pedidos.length > 0 ? (
                    pedidos.map((pedido: Contacto, index: number) => (
                    <TableRow
                        key={index}
                        sx={{
                        "&:nth-of-type(odd)": { backgroundColor: "action.hover" },
                        "&:nth-of-type(even)": { backgroundColor: "background.default" },
                        }}
                    >
                        <TableCell>{pedido.nombre}</TableCell>
                        <TableCell align="right">{pedido.asunto}</TableCell>
                        <TableCell align="right">{pedido.mensaje}</TableCell>
                        <TableCell align="right">{pedido.correoElectronico}, {pedido.telefono}</TableCell>
                        <TableCell align="right">
                            <IconButton aria-label="borrar" onClick={()=>deleteOcasion(pedido.id)}>
                                <DeleteIcon />
                            </IconButton>
                        </TableCell>
                    </TableRow>
                    ))
                ) : (
                    <TableRow>
                    <TableCell colSpan={4} align="center">
                        <Typography variant="body1" color="error">
                        No se encontraron pedidos.
                        </Typography>
                    </TableCell>
                    </TableRow>
                )}
                </TableBody>
                <tfoot>
                <TableRow>
                    <TableCell colSpan={4} sx={{ textAlign: "center", padding: 2 }}>
                    Fin del Historial de Contacto
                    </TableCell>
                </TableRow>
                </tfoot>
            </Table>
            </TableContainer>
        </Grid>
        </Grid>
        {notiError &&
        <Notificacionerror message={mensajeNotificacion}/>
      }

      {notiSucces &&
          <NotificacionSuccess message={mensajeNotificacion}/>
      }
    </>
  );
}
