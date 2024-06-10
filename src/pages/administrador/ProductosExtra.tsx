import React, { useState, useEffect } from "react";
import {
  TextField,
  Button,
  Typography,
  Grid,
  Paper,
  CircularProgress,
  Container,
  Box,
  IconButton,
} from "@mui/material";
import { Link, useNavigate } from "react-router-dom";
import EditIcon from "@mui/icons-material/Edit";
import { obtenerProductosExtra, eliminarProductoExtra } from "../../config/backEndAdmin/backProductosExtra";

const ProductosExtra = () => {
  const [productosExtra, setProductosExtra] = useState<any[]>([]);
  const [loading, setLoading] = useState(true);
  const [searchTerm, setSearchTerm] = useState("");

  useEffect(() => {
    cargarProductosExtra();
  }, []);

  const cargarProductosExtra = async () => {
    setLoading(true);
    const productos = await obtenerProductosExtra();
    setProductosExtra(productos);
    setLoading(false);
  };

  const navigate = useNavigate();

  const handleEliminarProductoExtra = async (id: string) => {
    await eliminarProductoExtra(id);
    cargarProductosExtra();
  };

  const handleSearch = (event: React.ChangeEvent<HTMLInputElement>) => {
    setSearchTerm(event.target.value);
  };

  const filteredProductos = productosExtra.filter((producto) =>
    producto.nombre.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <Container maxWidth="md" sx={{ mt: 4 }}>
      <Typography
        variant="h5"
        align="center"
        gutterBottom
        sx={{ fontWeight: "600", paddingBottom: "2%", fontFamily: "Cormorant" }}
      >
        Productos extras en exhibición
      </Typography>
      <Box sx={{ display: "flex", justifyContent: "space-between", alignItems: "center", mb: 4 }}>
        <TextField
          label="Buscar Producto"
          variant="outlined"
          value={searchTerm}
          onChange={handleSearch}
          sx={{ width: "70%" }}
        />
        <Button variant="contained" color="primary" onClick={() => navigate("/FormNvoProducto")}>
          Nuevo Producto
        </Button>
      </Box>
      <Grid container spacing={3}>
        {loading ? (
          <Grid item xs={12} sx={{ display: "flex", justifyContent: "center" }}>
            <CircularProgress />
          </Grid>
        ) : (
          filteredProductos.map((producto) => (
            <Grid item xs={12} sm={6} md={4} key={producto.id}>
              <Paper
                elevation={3}
                sx={{
                  width: "100%",
                  height: "100%",
                  display: "flex",
                  flexDirection: "column",
                  justifyContent: "space-between",
                  p: 2,
                }}
              >
                <Box sx={{ textAlign: "center", mb: 2 }}>
                  {producto.imagen && (
                    <Box
                      component="img"
                      src={producto.imagen}
                      alt={producto.nombre}
                      sx={{
                        width: "100%",
                        height: "200px",
                        objectFit: "cover",
                        borderRadius: "4px",
                      }}
                    />
                  )}
                </Box>
                <Box sx={{ textAlign: "center", flexGrow: 1 }}>
                  <Typography variant="h6" gutterBottom>
                    {producto.nombre}
                  </Typography>
                  <Typography variant="body1" color="text.secondary" gutterBottom>
                    ${producto.precio.toFixed(2)}
                  </Typography>
                  <Typography variant="body2">
                    Existencias: {producto.existencia}
                  </Typography>
                </Box>
                <Box sx={{ display: "flex", justifyContent: "flex-end", mt: 2 }}>
                  <Link to={`/editarProducto/${producto.id}`} style={{ textDecoration: "none" }}>
                    <IconButton aria-label="editar">
                      <EditIcon />
                    </IconButton>
                  </Link>
                  <IconButton
                    aria-label="eliminar"
                    onClick={() => handleEliminarProductoExtra(producto.id)}
                  >
                  </IconButton>
                </Box>
              </Paper>
            </Grid>
          ))
        )}
      </Grid>
    </Container>
  );
};

export default ProductosExtra;
