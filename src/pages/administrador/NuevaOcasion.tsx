import React, { useState } from 'react';
// import { agregarProducto } from '../../config/backEndAdmin/backProductos';
import { useNavigate } from 'react-router-dom';
import { TextField, Button, Container, Typography, Box } from '@mui/material';
import { getAuth } from 'firebase/auth'; // Importar getAuth para obtener el usuario actual
import { NotificacionSuccess, Notificacionerror } from '../../components/Alert'; // Importar NotificacionSuccess
import { agregarOcasion, subirImagenOcasion } from '../../config/backEndAdmin/backendOcasiones';

const NuevaOcasion = () => {
  const [nombre, setNombre] = useState('');
  const [descripcion, setDescripcion] = useState('');
  const [imagenFile, setImagenFile] = useState<File | null>(null);
  const [imagenPreview, setImagenPreview] = useState<string | null>(null); // Estado para la vista preliminar de la imagen
  const [showSuccessNotification, setShowSuccessNotification] = useState(false); // Estado para la notificación

  const [notiError, setNotiError ] = React.useState(false);
  // const [notiSucces, setNotiSucces ] = React.useState(false);
  // const [notiInfo, ] = React.useState(false);
  const [mensajeNotificacion, setMensajeNotificacion] = React.useState("");


  const navigate = useNavigate();
  const auth = getAuth();
  const user = auth.currentUser;

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

      if (imagenFile == null) {
        console.log('error')
        setMensajeNotificacion("Por favor, selecciona una imagen y asegúrate de estar autenticado.")
        setNotiError(true)
        setTimeout(() => {
          setNotiError(false)
        }, 2000);
        return
      }

      console.log(imagenFile, user)
      try {
        if(user){
          const idProducto = Date.now().toString(); // Puedes usar otro método para generar el ID
          const imagenURL = await subirImagenOcasion(idProducto, imagenFile);

          await agregarOcasion(descripcion, nombre, imagenURL);
          setShowSuccessNotification(true); // Mostrar la notificación de éxito
          setTimeout(() => {
            navigate(`/Usuario/${user.uid}`);
          }, 2500); // Esperar 3 segundos antes de redirigir
        }else{
          console.log('error')
          setMensajeNotificacion("Ocurrio un error intentelo de nuevo")
          setNotiError(true)
          setTimeout(() => {
            setNotiError(false)
          }, 2000);
          return
        }
        
      } catch (error) {
        setMensajeNotificacion("Error al agregar el producto, intentelo de nuevo")
          setNotiError(true)
          setTimeout(() => {
            setNotiError(false)
          }, 2000);
        console.error(error);
      }
   
  };

  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.target.files && e.target.files[0]) {
      const file = e.target.files[0];
      setImagenFile(file);

      // Crear una vista preliminar de la imagen
      const reader = new FileReader();
      reader.onloadend = () => {
        setImagenPreview(reader.result as string);
      };
      reader.readAsDataURL(file);
    }
  };

  return (
    <>
      <Container maxWidth="sm" sx={{marginTop:'5%', marginBottom:'5%' }}>
        <Typography variant="h5" align="center" gutterBottom sx={{ fontWeight: '600', paddingBottom: '2%', fontFamily: "Cormorant" }}>
          Nueva Ocasion
        </Typography>
        <Box component="form" onSubmit={handleSubmit} sx={{ mt: 3 }}>
          <TextField
            fullWidth
            label="Nombre"
            value={nombre}
            onChange={(e) => setNombre(e.target.value)}
            required
            sx={{ mb: 2 }}
          />
          <TextField
            fullWidth
            label="Descripción"
            value={descripcion}
            onChange={(e) => setDescripcion(e.target.value)}
            required
            sx={{ mb: 2 }}
          />
          <Button
            variant="contained"
            component="label"
            fullWidth
            sx={{ mb: 2 }}
          >
            Subir Imagen
            <input
              type="file"
              hidden
              onChange={handleFileChange}
              required
            />
          </Button>
          {imagenPreview && (
            <Box sx={{ textAlign: 'center', mb: 2 }}>
              <Box 
                component="img"
                src={imagenPreview}
                alt="Vista Preliminar"
                sx={{ 
                  width: '100%',
                  height: '200px',
                  objectFit: 'cover',
                  borderRadius: '4px'
                }}
              />
            </Box>
          )}
          <Button
            type="submit"
            variant="contained"
            color="primary"
            fullWidth
            disabled={imagenFile ==null  && nombre=='' && descripcion==''}
          >
            Agregar Producto
          </Button>
        </Box>
        {showSuccessNotification && <NotificacionSuccess message="Producto Agregado Correctamente, redirigiendo..." />}
      </Container>

      {notiError &&
        <Notificacionerror message={mensajeNotificacion}/>
      }

      {/* {notiSucces &&
          <NotificacionSuccess message={mensajeNotificacion}/>
      } */}
    </>
  );
};

export default NuevaOcasion;
