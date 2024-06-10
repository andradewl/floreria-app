import React, { useState, useEffect } from "react";
import {
  agregarProducto,
  subirImagen,
} from "../../config/backEndAdmin/backProductos";
import {
  obtenerProductosExtra,
} from "../../config/backEndAdmin/backProductosExtra";
import { useNavigate } from "react-router-dom";
import {
  TextField,
  Button,
  Typography,
  Grid,
  Select,
  MenuItem,
  InputLabel,
  FormControl,
  Paper,
  Checkbox,
  FormControlLabel,
  Box,
} from "@mui/material";
import { getAuth } from "firebase/auth";
import ArrowBackIcon from "@mui/icons-material/ArrowBack";
import { NotificacionSuccess, Notificacionerror } from "../../components/Alert";
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
  const [productosExtra, setProductosExtra] = useState<any[]>([]);
  const [productosExtraSeleccionados, setProductosExtraSeleccionados] = useState<string[]>([]); // Estado para almacenar los IDs de los productos extra seleccionados
  const [showSuccessNotification, setShowSuccessNotification] = useState(false);
  const [notiError, setNotiError] = useState(false);
  const [mensajeNotificacion, setMensajeNotificacion] = useState("");

  const navigate = useNavigate();
  const auth = getAuth();
  const user = auth.currentUser;

  // Cargar productos extra al cargar el componente
  useEffect(() => {
    cargarProductosExtra();
  }, []);

  const cargarProductosExtra = async () => {
    try {
      const productosExtraData = await obtenerProductosExtra();
      setProductosExtra(productosExtraData);
    } catch (error) {
      console.error("Error al cargar productos extra:", error);
    }
  };

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
          producto.sku,
          productosExtraSeleccionados // Pasar los IDs de los productos extra seleccionados al agregar el producto
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

  const handleProductoExtraChange = (id: string) => {
    // Manejar el cambio de selección del producto extra
    if (productosExtraSeleccionados.includes(id)) {
      // Si el ID ya está seleccionado, quitarlo del array
      setProductosExtraSeleccionados(productosExtraSeleccionados.filter(item => item !== id));
    } else {
      // Si el ID no está seleccionado, agregarlo al array
      setProductosExtraSeleccionados([...productosExtraSeleccionados, id]);
    }
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
                      <MenuItem value="0yVDjdZV0mHgHr3yEAYL">
                        Cumpleaños
                      </MenuItem>
                      <MenuItem value="NYgxe9cNReefkqpfDJwP">Combos</MenuItem>
                      <MenuItem value="O9KkqcH19LmVyYEoImI2">
                        Funerales
                      </MenuItem>
                      <MenuItem value="VPsWrkoUwhfNsAl2hhgi">
                        Para Mamá
                      </MenuItem>
                      <MenuItem value="aP1IaxCTSZwMStDc7Imf">
                        Para Ella
                      </MenuItem>
                      <MenuItem value="lCjmAOg75ZW5egsmrRWG">
                        Regalos
                      </MenuItem>
                      <MenuItem value="ngJWcrzXs73P8v40Tgqy">
                        Ofertas
                      </MenuItem>
                      <MenuItem value="paEglukYtsTk8F0D0M9I">
                        Para Él
                      </MenuItem>
                      <MenuItem value="tVoHFTujxBqvzH9z4ycd">
                        Centros de Mesa
                      </MenuItem>
                      <MenuItem value="vsHhw8nY1G1mHJKw097c">Kits</MenuItem>
                    </Select>
                  </FormControl>
                </Grid>
                <Grid item xs={12}>
                  <Button
                    variant="contained"
                    component="label"
                    fullWidth
                    sx={{ mt: 2 }}
                  >
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
                    Productos Extras
                  </Typography>
                </Grid>
                {productosExtra.map((productoExtra) => (
                  <Grid item xs={4} key={productoExtra.id}>
                    <Paper elevation={3} sx={{ p: 2 }}>
                      <Typography variant="h6" gutterBottom>
                        {productoExtra.nombre}
                      </Typography>
                      <Typography variant="body1" gutterBottom>
                        Precio: ${productoExtra.precio.toFixed(2)}
                      </Typography>
                      <Typography variant="body2" gutterBottom>
                        Existencias: {productoExtra.existencias}
                      </Typography>
                      {productoExtra.imagen && (
                          <Box sx={{ textAlign: 'center', mb: 2 }}>
                            <img
                              src={productoExtra.imagen}
                              alt={productoExtra.nombre}
                              style={{
                                width: '100%',
                                height: '200px',
                                objectFit: 'cover',
                                borderRadius: '4px'
                              }}
                            />
                          </Box>
                        )}
                      <FormControlLabel
                        control={
                          <Checkbox
                            checked={
                              productosExtraSeleccionados.includes(productoExtra.id)
                            }
                            onChange={() =>
                              handleProductoExtraChange(productoExtra.id)
                            }
                          />
                        }
                        label="Seleccionar"
                      />
                    </Paper>
                  </Grid>
                ))}
                <Grid item xs={12}>
                  <Button
                    type="submit"
                    variant="contained"
                    color="primary"
                    fullWidth
                    sx={{ mt: 2 }}
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
