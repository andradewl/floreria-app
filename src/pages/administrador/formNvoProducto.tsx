import React, { useState } from "react";
import {
  agregarProducto,
  subirImagen,
} from "../../config/backEndAdmin/backProductos";
import { useNavigate } from "react-router-dom";
import {
  TextField,
  Button,
  Container,
  Typography,
  Grid,
  Select,
  MenuItem,
  InputLabel,
  FormControl,
  Paper,
} from "@mui/material";
import { getAuth } from "firebase/auth";
import { NotificacionSuccess, Notificacionerror } from "../../components/Alert";
import ArrowBackIcon from "@mui/icons-material/ArrowBack";
import { SelectChangeEvent } from "@mui/material";

const FormNvoProducto = () => {
  const [producto, setProducto] = useState<any>({
    nombre: "",
    precio: 0,
    existencias: 0,
    descripcion: "",
    descuento: 0,
    imagenFile: null,
    imagenPreview: null,
    sku: "",
    ocasiones: "",
  });
  const [showSuccessNotification, setShowSuccessNotification] = useState(false);
  const [notiError, setNotiError] = useState(false);
  const [mensajeNotificacion, setMensajeNotificacion] = useState("");

  const navigate = useNavigate();
  const auth = getAuth();
  const user = auth.currentUser;

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    try {
      if (producto.imagenFile && user) {
        const idProducto = Date.now().toString();
        const imagenURL = await subirImagen(idProducto, producto.imagenFile);

        await agregarProducto(
          producto.descripcion,
          producto.descuento,
          producto.existencias,
          producto.nombre,
          producto.precio,
          imagenURL,
          producto.ocasiones,
          producto.sku
        );
        setShowSuccessNotification(true);
        setTimeout(() => {
          navigate(`/Usuario/${user.uid}`);
        }, 2500);
      } else {
        setMensajeNotificacion(
          "Por favor, selecciona una imagen y asegúrate de estar autenticado."
        );
        setNotiError(true);
        setTimeout(() => {
          setNotiError(false);
        }, 2000);
      }
    } catch (error) {
      setMensajeNotificacion(
        "Error al agregar el producto, intentelo de nuevo"
      );
      setNotiError(true);
      setTimeout(() => {
        setNotiError(false);
      }, 2000);
      console.error(error);
    }
  };

  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.target.files && e.target.files[0]) {
      const file = e.target.files[0];
      setProducto({
        ...producto,
        imagenFile: file,
        imagenPreview: URL.createObjectURL(file),
      });
    }
  };

  const handleRegresar = () => {
    navigate(`/Usuario/${user?.uid}`);
  };

  const handleOcasionesChange = (event: SelectChangeEvent<string>) => {
    setProducto({ ...producto, ocasiones: event.target.value });
  };

  return (
    <>
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
            Agregar Producto
          </Typography>
        </Grid>
        <form onSubmit={handleSubmit}>
          <Grid container spacing={2} justifyContent="center">
            <Grid item xs={12} md={6}>
              <Paper sx={{ padding: 2 }}>
                <Grid container spacing={2} alignItems="center">
                  <Grid item xs={12}>
                    <TextField
                      fullWidth
                      label="Nombre"
                      value={producto.nombre}
                      onChange={(e) =>
                        setProducto({ ...producto, nombre: e.target.value })
                      }
                      required
                    />
                  </Grid>
                  <Grid item xs={12}>
                    <TextField
                      fullWidth
                      label="Descripción"
                      value={producto.descripcion}
                      onChange={(e) =>
                        setProducto({
                          ...producto,
                          descripcion: e.target.value,
                        })
                      }
                      required
                      multiline
                      rows={4}
                    />
                  </Grid>
                  <Grid item xs={6}>
                    <TextField
                      fullWidth
                      label="Precio"
                      type="number"
                      value={producto.precio}
                      onChange={(e) =>
                        setProducto({
                          ...producto,
                          precio: parseFloat(e.target.value),
                        })
                      }
                      required
                    />
                  </Grid>
                  <Grid item xs={6}>
                    <TextField
                      fullWidth
                      label="Existencias"
                      type="number"
                      value={producto.existencias}
                      onChange={(e) =>
                        setProducto({
                          ...producto,
                          existencias: parseInt(e.target.value),
                        })
                      }
                      required
                    />
                  </Grid>
                  <Grid item xs={12}>
                    <TextField
                      fullWidth
                      label="Descuento"
                      type="number"
                      value={producto.descuento}
                      onChange={(e) =>
                        setProducto({
                          ...producto,
                          descuento: parseInt(e.target.value),
                        })
                      }
                      required
                    />
                  </Grid>
                  <Grid item xs={12}>
                    <TextField
                      fullWidth
                      label="SKU"
                      value={producto.sku}
                      onChange={(e) =>
                        setProducto({ ...producto, sku: e.target.value })
                      }
                      required
                    />
                  </Grid>
                  <Grid item xs={12}>
                    <FormControl fullWidth>
                      <InputLabel id="ocasiones-label">Ocasión</InputLabel>
                      <Select
                        labelId="ocasiones-label"
                        id="ocasiones"
                        value={producto.ocasiones}
                        onChange={handleOcasionesChange}
                        required
                      >
                        <MenuItem value="Cumpleaños">Cumpleaños</MenuItem>
                        <MenuItem value="Combos">Combos</MenuItem>
                        <MenuItem value="Funerales">Funerales</MenuItem>
                        <MenuItem value="Para Mamá">Para Mamá</MenuItem>
                        <MenuItem value="Para Ella">Para Ella</MenuItem>
                        <MenuItem value="Regalos">Regalos</MenuItem>
                        <MenuItem value="Ofertas">Ofertas</MenuItem>
                        <MenuItem value="Para Él">Para Él</MenuItem>
                        <MenuItem value="Centros de Mesa">
                          Centros de Mesa
                        </MenuItem>
                        <MenuItem value="Kits">Kits</MenuItem>
                      </Select>
                    </FormControl>
                  </Grid>
                  <Grid item xs={12}>
                    <Button variant="contained" component="label" fullWidth>
                      Subir Imagen
                      <input
                        type="file"
                        hidden
                        onChange={handleFileChange}
                        required
                      />
                    </Button>
                  </Grid>
                  {producto.imagenPreview && (
                    <Grid item xs={12}>
                      <img
                        src={producto.imagenPreview}
                        alt="Vista Preliminar"
                        style={{
                          width: "100%",
                          height: "200px",
                          objectFit: "cover",
                          borderRadius: "4px",
                        }}
                      />
                    </Grid>
                  )}
                  <Grid item xs={12}>
                    <Button
                      type="submit"
                      variant="contained"
                      color="primary"
                      fullWidth
                    >
                      Agregar Producto
                    </Button>
                  </Grid>
                </Grid>
              </Paper>
            </Grid>
          </Grid>
        </form>
      </Grid>
      {showSuccessNotification && (
        <NotificacionSuccess message="Producto Agregado Correctamente, redirigiendo..." />
      )}
      {notiError && <Notificacionerror message={mensajeNotificacion} />}
    </>
  );
};

export default FormNvoProducto;
