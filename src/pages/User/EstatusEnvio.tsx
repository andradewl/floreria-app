/* eslint-disable no-inner-declarations */
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
import { getPedidosUsuario } from "../../config/backEndUsuarios/backEstatus";

interface Pedido {
  nombre: string;
  cantidad: number;
  total: number;
  fecha: string;
  estatusEnv: string;
  imagen: string; // Agregamos el campo imagen al tipo Pedido
}

export default function EstatusEnvio() {
  const [pedidos, setPedidos] = useState<Pedido[] | null>(null);

  useEffect(() => {
    const userId = JSON.parse(sessionStorage.getItem("userlogIn") || "{}").id;

    if (userId) {
      async function fetchPedidos() {
        try {
          const pedidosData = await getPedidosUsuario(userId);
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
          Estatus de Envío
        </Typography>
        <TableContainer component={Paper}>
          <Table aria-label="simple table">
            <TableHead>
              <TableRow>
                <TableCell>Nombre</TableCell>
                <TableCell>Imagen</TableCell> {/* Agregamos la columna para la imagen */}
                <TableCell align="right">Cantidad</TableCell>
                <TableCell align="right">Total</TableCell>
                <TableCell align="right">Estatus de Envío</TableCell>
              </TableRow>
            </TableHead>
            <TableBody>
              {pedidos &&
                pedidos.map((pedido: Pedido, index: number) => (
                  <TableRow key={index}>
                    <TableCell>{pedido.nombre}</TableCell>
                    <TableCell>
                      <img src={pedido.imagen} alt="Imagen del producto" style={{ width: 50, height: 50 }} />
                    </TableCell> {/* Mostramos la imagen */}
                    <TableCell align="right">{pedido.cantidad}</TableCell>
                    <TableCell align="right">{pedido.total}</TableCell>
                    <TableCell
                      align="right"
                      sx={{
                        color: (() => {
                          switch (pedido.estatusEnv) {
                            case "Preparando":
                              return "#FFA500"; // Naranja
                            case "En camino":
                              return "#0000FF"; // Azul
                            case "Enviado":
                              return "#FFD700"; // Amarillo
                            case "Entregado":
                              return "#008000"; // Verde
                            default:
                              return "inherit";
                          }
                        })(),
                        fontWeight: "bold",
                      }}
                    >
                      {pedido.estatusEnv}
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
