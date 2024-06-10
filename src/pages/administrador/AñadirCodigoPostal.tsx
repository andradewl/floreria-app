import React, { useState } from 'react';
// import { agregarProducto, subirImagen } from '../../config/backEndAdmin/backProductos';
import { useNavigate } from 'react-router-dom';
import { TextField, Button, Container, Typography, Box } from '@mui/material';
import { getAuth } from 'firebase/auth'; // Importar getAuth para obtener el usuario actual
import { NotificacionSuccess, Notificacionerror } from '../../components/Alert'; // Importar NotificacionSuccess
import { nuevoCodigoPostal } from '../../config/backEndAdmin/backendCodigosPostales';

const AñadirCodigoPostal = () => {
  
  const [showSuccessNotification, setShowSuccessNotification] = useState(false); // Estado para la notificación

  const [codigoPostal, setCodigoPostal] = useState('');
  const [envio, setEnvio] = useState(0);
//   const [descripcion, setDescripcion] = useState(0);

  const [notiError, setNotiError ] = React.useState(false);
  // const [notiSucces, setNotiSucces ] = React.useState(false);
  // const [notiInfo, ] = React.useState(false);
  const [mensajeNotificacion, setMensajeNotificacion] = React.useState("");


  const navigate = useNavigate();
  const auth = getAuth();
  const user = auth.currentUser;


  const precioEnvio = async(e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>)=>{
    const valor = e.target.value
    const valorToNumber = parseInt(valor)
    console.log(valorToNumber)
    setEnvio(valorToNumber)
  }


  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    if(codigoPostal!='' && envio>0){
      try {
        await nuevoCodigoPostal(codigoPostal, envio)

        if(user){
          setMensajeNotificacion("Codigo Postal Añadido correctamente")
          setShowSuccessNotification(true); // Mostrar la notificación de éxito
          setTimeout(() => {
            navigate(`/Usuario/${user.uid}`);
          }, 2500); // Esperar 3 segundos ant
        }else{
          setMensajeNotificacion("Error al agregar el producto, intentelo de nuevo")
          setNotiError(true)
          setTimeout(() => {
            setNotiError(false)
          }, 2000);
        // console.error(error);
        }
        
      } catch (error) {
        setMensajeNotificacion("Error al agregar el producto, intentelo de nuevo")
          setNotiError(true)
          setTimeout(() => {
            setNotiError(false)
          }, 2000);
        console.error(error);
      }
    }else{
      setMensajeNotificacion("llene los datos correctamente")
      setNotiError(true)
      setTimeout(() => {
        setNotiError(false)
      }, 2000);
    }
  };

  return (
    <>
      <Container maxWidth="sm" sx={{marginBottom:'5%', marginTop:'5%' }}>
        <Typography variant="h5" align="center" gutterBottom sx={{ fontWeight: '600', paddingBottom: '2%', fontFamily: "Cormorant"}}>
          Nuevo Codigo Postal
        </Typography>
        <Box component="form" onSubmit={handleSubmit} sx={{ mt: 3 }}>
          <TextField
            fullWidth
            label="Codigo Postal"
            value={codigoPostal}
            onChange={(e) => setCodigoPostal(e.target.value)}
            required
            sx={{ mb: 2 }}
          />
          <TextField
            fullWidth
            type="number"
            label="Precio de envio"
            value={envio}
            onChange={(e) => precioEnvio(e)}
            required
            sx={{ mb: 2 }}
        />

        <Button
            type="submit"
            variant="contained"
            color="primary"
            fullWidth
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

export default AñadirCodigoPostal;
