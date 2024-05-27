import React, { useEffect, useState } from 'react';
import { obtenerProductos } from '../../config/backEndAdmin/backProductos';
import { Typography, Grid, Paper, Container, Box, IconButton } from '@mui/material';
import { Link } from 'react-router-dom';
import EditIcon from '@mui/icons-material/Edit';

interface Producto {
  id: string;
  nombre: string;
  precio: number;
  existencias: number;
}

const ProductosAdmin = () => {
  const [productos, setProductos] = useState<Producto[]>([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const productosData = await obtenerProductos();
        setProductos(productosData.map((producto: any) => ({
          id: producto.id,
          nombre: producto.nombre,
          precio: producto.precio,
          existencias: producto.existencias,
        })));
      } catch (error) {
        console.error("Error al obtener los productos: ", error);
      }
    };

    fetchData();
  }, []);

  const getColor = (existencias: number) => {
    if (existencias <= 5) return 'red';
    if (existencias < 10) return 'orange';
    return 'green';
  };

  return (
    <Container maxWidth="md" sx={{ mt: 4 }}>
      <Typography variant="h5" align="center" gutterBottom sx={{ fontWeight: '600', paddingBottom:'5%' }}>
        Productos en exhibición 
      </Typography>
      <Grid container spacing={3}>
        {productos.map((producto) => (
          <Grid item xs={12} sm={6} md={4} key={producto.id}>
            <Paper
              elevation={3}
              sx={{
                width: '100%',
                height: '100%',
                display: 'flex',
                flexDirection: 'column',
                justifyContent: 'space-between',
                p: 2,
              }}
            >
              <Box sx={{ textAlign: 'center' }}>
                <Typography variant="h6" gutterBottom>{producto.nombre}</Typography>
                <Typography variant="body1" color="text.secondary" gutterBottom>${producto.precio.toFixed(2)}</Typography>
                <Typography
                  variant="body2"
                  sx={{ color: getColor(producto.existencias) }}
                >
                  Existencias: {producto.existencias}
                </Typography>
              </Box>
              <Box sx={{ display: 'flex', justifyContent: 'flex-end' }}>
                <Link to={`/editarProducto/${producto.id}`}>
                  <IconButton aria-label="editar">
                    <EditIcon />
                  </IconButton>
                </Link>
              </Box>
            </Paper>
          </Grid>
        ))}
      </Grid>
    </Container>
  );
};

export default ProductosAdmin;
