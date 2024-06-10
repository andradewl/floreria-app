import React, { useEffect, useState } from "react";
import { useParams, useNavigate } from "react-router-dom";
import {
  obtenerProductoPorId,
  actualizarProducto,
} from "../../config/backEndAdmin/backProductos";
import {
  Typography,
  Grid,
  TextField,
  Button,
  Box,
  Paper,
  FormControl,
  InputLabel,
  Select,
  MenuItem,
} from "@mui/material";
import ArrowBackIcon from "@mui/icons-material/ArrowBack";
import { getAuth } from "firebase/auth";
import { NotificacionSuccess } from "../../components/Alert";
import { SelectChangeEvent } from "@mui/material";

const EditarProducto = () => {
  const { id } = useParams<{ id: string }>();
  const navigate = useNavigate();
  const auth = getAuth();
  const user = auth.currentUser;

  const [producto, setProducto] = useState<any>({
    nombre: "",
    precio: 0,
    existencias: 0,
    descripcion: "",
    descuento: 0,
    imagen: "",
    imagenFile: null,
    sku: "", // Nuevo campo SKU
    ocasiones: "", // Nuevo campo Ocasión
  });
  const [showSuccessNotification, setShowSuccessNotification] = useState(false);

  useEffect(() => {
    const fetchProducto = async () => {
      try {
        if (id) {
          const productoData = await obtenerProductoPorId(id);
          setProducto(productoData);
        } else {
          console.error("El ID del producto no está definido.");
        }
      } catch (error) {
        console.error("Error al obtener el producto:", error);
      }
    };

    fetchProducto();
  }, [id]);

 const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value, files } = event.target;
    if (name === 'imagenFile' && files && files[0]) {
      setProducto({ ...producto, [name]: files[0], imagen: URL.createObjectURL(files[0]) });
    } else {
      setProducto({ ...producto, [name]: value });
    }
  };

  const handleActualizarProducto = async () => {
    try {
      if (!user) {
        console.error("Usuario no autenticado.");
        return;
      }

      if (!id) {
        console.error("El ID del producto no está definido.");
        return;
      }

      if (
        !producto.nombre ||
        !producto.descripcion ||
        producto.descuento === undefined ||
        producto.existencias === undefined ||
        producto.precio === undefined
      ) {
        console.error("Algunos campos del producto no están definidos.");
        return;
      }

      // Convertir los campos numéricos a number antes de la actualización
      const productoActualizado = {
        ...producto,
        precio: Number(producto.precio),
        existencias: Number(producto.existencias),
        descuento: Number(producto.descuento),
      };

      await actualizarProducto(
        id,
        productoActualizado.descripcion,
        productoActualizado.descuento,
        productoActualizado.existencias,
        productoActualizado.nombre,
        productoActualizado.precio,
        producto.imagenFile,
        productoActualizado.ocasiones,
        productoActualizado.sku
      );

      setShowSuccessNotification(true);
      setTimeout(() => {
        navigate(`/Usuario/${user.uid}`);
      }, 2500);
    } catch (error) {
      console.error("Error al actualizar el producto:", error);
    }
  };

  const handleRegresar = () => {
    navigate(`/Usuario/${user?.uid}`);
  };
  const handleOcasionesChange = (event: SelectChangeEvent<string>) => {
    setProducto({ ...producto, ocasiones: event.target.value });
  };

  return (
    <Grid container spacing={2} justifyContent="center" sx={{ py: 12 }}>
      <Grid item xs={12}>
        <Button startIcon={<ArrowBackIcon />} onClick={handleRegresar}>
          Regresar
        </Button>
        <Typography
          variant="h5"
          align="center"
          gutterBottom
          sx={{
            fontWeight: "600",
            paddingBottom: "2%",
            fontFamily: "Cormorant",
          }}
        >
          Editar Producto
        </Typography>
      </Grid>
      <Grid item xs={12} md={6}>
        <Paper sx={{ padding: 2 }}>
          <Grid container spacing={2}>
            <Grid item xs={12}>
              <TextField
                name="nombre"
                label="Nombre"
                variant="outlined"
                fullWidth
                value={producto.nombre}
                onChange={handleChange}
              />
            </Grid>
            <Grid item xs={12}>
              <TextField
                name="descripcion"
                label="Descripción"
                variant="outlined"
                fullWidth
                multiline
                rows={4}
                value={producto.descripcion}
                onChange={handleChange}
              />
            </Grid>
            <Grid item xs={12} sm={6}>
              <TextField
                name="precio"
                label="Precio"
                variant="outlined"
                fullWidth
                type="number"
                value={producto.precio}
                onChange={handleChange}
              />
            </Grid>
            <Grid item xs={12} sm={6}>
              <TextField
                name="existencias"
                label="Existencias"
                variant="outlined"
                fullWidth
                type="number"
                value={producto.existencias}
                onChange={handleChange}
              />
            </Grid>
            <Grid item xs={12}>
              <TextField
                name="descuento"
                label="Descuento"
                variant="outlined"
                fullWidth
                type="number"
                value={producto.descuento}
                onChange={handleChange}
              />
            </Grid>
            <Grid item xs={12}>
              <TextField
                name="sku"
                label="SKU" // Agregar campo SKU
                variant="outlined"
                fullWidth
                value={producto.sku}
                onChange={handleChange}
              />
            </Grid>
            <Grid item xs={12}>
              <FormControl variant="outlined" fullWidth>
                <InputLabel id="ocasion-label">Ocasión</InputLabel>
                <Select
                  labelId="ocasion-label"
                  id="ocasion"
                  name="ocasiones"
                  value={producto.ocasiones} // Establecer el valor del Select con el estado del producto
                  onChange={handleOcasionesChange}
                  label="Ocasión"
                >
                  <MenuItem value="0yVDjdZV0mHgHr3yEAYL">Cumpleaños</MenuItem>
                  <MenuItem value="NYgxe9cNReefkqpfDJwP">Combos</MenuItem>
                  <MenuItem value="O9KkqcH19LmVyYEoImI2">Funerales</MenuItem>
                  <MenuItem value="VPsWrkoUwhfNsAl2hhgi">Para Mamá</MenuItem>
                  <MenuItem value="aP1IaxCTSZwMStDc7Imf">Para Ella</MenuItem>
                  <MenuItem value="lCjmAOg75ZW5egsmrRWG">Regalos</MenuItem>
                  <MenuItem value="ngJWcrzXs73P8v40Tgqy">Ofertas</MenuItem>
                  <MenuItem value="paEglukYtsTk8F0D0M9I">Para Él</MenuItem>
                  <MenuItem value="tVoHFTujxBqvzH9z4ycd">
                    Centros de Mesa
                  </MenuItem>
                  <MenuItem value="vsHhw8nY1G1mHJKw097c">Kits</MenuItem>
                </Select>
              </FormControl>
            </Grid>
            <Grid item xs={12}>
              <input
                type="file"
                accept="image/*"
                name="imagenFile"
                onChange={handleChange}
              />
            </Grid>
            {producto.imagen && (
              <Grid item xs={12}>
                <img
                  src={producto.imagen}
                  alt="Producto"
                  style={{
                    maxWidth: "100%",
                    maxHeight: "300px",
                    margin: "auto",
                    display: "block",
                  }}
                />
              </Grid>
            )}
          </Grid>
          <Box sx={{ textAlign: "center", marginTop: 2 }}>
            <Button variant="contained" onClick={handleActualizarProducto}>
              Guardar cambios
            </Button>
          </Box>
        </Paper>
      </Grid>
      {showSuccessNotification && (
        <NotificacionSuccess message="Producto actualizado correctamente, redirigiendo..." />
      )}
    </Grid>
  );
};

export default EditarProducto;
