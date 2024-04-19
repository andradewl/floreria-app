import { useEffect, useState } from "react";
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
} from "@mui/material";
import { getPedidosUsuario } from "../../config/backEndUsuarios/backHistPedidos";

interface Pedido {
  nombre: string;
  cantidad: number;
  precio: number;
}

export default function HistPedidos() {
  const [pedidos, setPedidos] = useState<Pedido[][]>([]); // Modifica el estado inicial para que sea un array de arrays de Pedido

  useEffect(() => {
    // Obtenemos el ID del usuario del sessionStorage al montar el componente
    const userId = JSON.parse(sessionStorage.getItem("userlogIn") || "{}").id;
  
    // Verificamos si hay un ID de usuario válido
    if (userId) {
      // Obtenemos los pedidos del usuario actual
      async function fetchPedidos() {
        try {
          const pedidosData = await getPedidosUsuario(userId);
          console.log("Datos de pedidos obtenidos:", pedidosData);
          setPedidos(pedidosData);
        } catch (error) {
          console.error("Error al obtener los pedidos:", error);
        }
      }
  
      fetchPedidos();
    } else {
      console.error("ID de usuario no encontrado en sessionStorage.");
    }
  }, []);
  

  return (
    <Grid container justifyContent="center">
      <Grid item xs={12} md={10} lg={8}>
        <Typography variant="h5" align="center" gutterBottom>
          Historial de Pedidos
        </Typography>
        <TableContainer component={Paper}>
          <Table aria-label="simple table">
            <TableHead>
              <TableRow>
                <TableCell>Nombre</TableCell>
                <TableCell align="right">Cantidad</TableCell>
                <TableCell align="right">Precio</TableCell>
              </TableRow>
            </TableHead>
            <TableBody>
              {pedidos.map((pedidoArray: Pedido[], index: number) => (
                pedidoArray.map((pedido: Pedido, innerIndex: number) => (
                  <TableRow key={index * 1000 + innerIndex}>
                    <TableCell>{pedido.nombre}</TableCell>
                    <TableCell align="right">{pedido.cantidad}</TableCell>
                    <TableCell align="right">{pedido.precio}</TableCell>
                  </TableRow>
                ))
              ))}
            </TableBody>
          </Table>
        </TableContainer>
      </Grid>
    </Grid>
  );
}
