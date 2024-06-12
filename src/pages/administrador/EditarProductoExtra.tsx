import React, { useEffect, useState } from "react";
import { useParams, useNavigate } from "react-router-dom";
import {
  obtenerProductoExtraPorId,
  actualizarProductoExtra,
} from "../../config/backEndAdmin/backProductosExtra";
import { Typography, Grid, TextField, Button, Box, Paper } from "@mui/material";
import ArrowBackIcon from "@mui/icons-material/ArrowBack";
import { getAuth } from "firebase/auth";
import { NotificacionSuccess } from "../../components/Alert";

const EditarProductoExtra = () => {
  const { id } = useParams<{ id: string }>();
  const navigate = useNavigate();
  const auth = getAuth();
  const user = auth.currentUser;

  const [productoExtra, setProductoExtra] = useState<any>({
    nombre: "",
    precio: 0,
    existencia: 0,
    imagen: "",
    imagenFile: null,
  });
  const [showSuccessNotification, setShowSuccessNotification] = useState(false);

  useEffect(() => {
    const fetchProductoExtra = async () => {
      try {
        if (id) {
          const productoExtraData = await obtenerProductoExtraPorId(id);
          setProductoExtra(productoExtraData);
        } else {
          console.error("El ID del producto extra no está definido.");
        }
      } catch (error) {
        console.error("Error al obtener el producto extra:", error);
      }
    };

    fetchProductoExtra();
  }, [id]);

  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value, files } = event.target;
    if (name === "imagenFile" && files && files[0]) {
      setProductoExtra({
        ...productoExtra,
        [name]: files[0],
        imagen: URL.createObjectURL(files[0]),
      });
    } else {
      setProductoExtra({ ...productoExtra, [name]: value });
    }
  };

  const handleActualizarProductoExtra = async () => {
    try {
      if (!user) {
        console.error("Usuario no autenticado.");
        return;
      }
  
      if (!id) {
        console.error("El ID del producto extra no está definido.");
        return;
      }
  
      if (
        !productoExtra.nombre ||
        productoExtra.precio === undefined ||
        productoExtra.existencia === undefined
      ) {
        console.error("Algunos campos del producto extra no están definidos.");
        return;
      }
  
      // Convertir los campos numéricos a number antes de la actualización
      const productoExtraActualizado = {
        ...productoExtra,
        precio: Number(productoExtra.precio),
        existencia: Number(productoExtra.existencia),
      };
  
      // Llama a la función actualizarProductoExtra con los parámetros adecuados
      await actualizarProductoExtra(
        id,
        productoExtraActualizado.nombre,
        productoExtraActualizado.precio,
        productoExtraActualizado.existencia,
        productoExtraActualizado.imagenFile
      );
  
      setShowSuccessNotification(true);
      setTimeout(() => {
        navigate(`/Usuario/${user?.uid}`);
      }, 2500);
    } catch (error) {
      console.error("Error al actualizar el producto extra:", error);
    }
  };
  
  const handleRegresar = () => {
    navigate(`/Usuario/${user?.uid}`);
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
          Editar Producto Extra
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
                value={productoExtra.nombre}
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
                value={productoExtra.precio}
                onChange={handleChange}
              />
            </Grid>
            <Grid item xs={12} sm={6}>
              <TextField
                name="existencia"
                label="Existencia"
                variant="outlined"
                fullWidth
                type="number"
                value={productoExtra.existencia}
                onChange={handleChange}
              />
            </Grid>
            <Grid item xs={12}>
              <input
                type="file"
                accept="image/*"
                name="imagenFile"
                onChange={handleChange}
              />
            </Grid>
            {productoExtra.imagen && (
              <Grid item xs={12}>
                <img
                  src={productoExtra.imagen}
                  alt="Producto Extra"
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
            <Button
              variant="contained"
              onClick={handleActualizarProductoExtra}
            >
              Guardar cambios
            </Button>
          </Box>
        </Paper>
      </Grid>
      {showSuccessNotification && (
        <NotificacionSuccess message="Producto extra actualizado correctamente, redirigiendo..." />
      )}
    </Grid>
  );
};

export default EditarProductoExtra;
