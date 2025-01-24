/* eslint-disable react-hooks/exhaustive-deps */
import React, { useEffect, useState } from 'react';
// import { agregarProducto, subirImagen } from '../../config/backEndAdmin/backProductos';
import { useParams } from 'react-router-dom';
import { TextField, Button, Container, Typography, Box } from '@mui/material';
// import { getAuth } from 'firebase/auth'; // Importar getAuth para obtener el usuario actual
import { NotificacionSuccess, Notificacionerror } from '../../components/Alert'; // Importar NotificacionSuccess
import { actualizarCodigoPostal, getCPById } from '../../config/backEndAdmin/backendCodigosPostales';
import { Codigospostales } from '../../interfaces/interfaces';
import Carga from '../../components/Carga';

const EditarCodigoPostal = () => {
    const { id } = useParams();

    // const [showSuccessNotification, setShowSuccessNotification] = useState(false); // Estado para la notificación
    const [showSuccessNotification, ] = useState(false); // Estado para la notificación

    // const [codigoPostal, setCodigoPostal] = useState('');
    // const [envio, setEnvio] = useState(0);
    //   const [descripcion, setDescripcion] = useState(0);

    const [notiError, setNotiError ] = React.useState(false);
    // const [notiSucces, setNotiSucces ] = React.useState(false);
    // const [notiInfo, ] = React.useState(false);
    const [mensajeNotificacion, setMensajeNotificacion] = React.useState("");

    const [codigoPostalData, setcodigoPostalData] = useState<Codigospostales | null>(null);
    const [updateNuevoCodigo, setUpdateNuevoCodigo] = React.useState("");
    const [updateNuevoPrecioCodigo, setUpdateNuevoPrecioCodigo] = React.useState(0);
    const [IDCodigo, setIDCodigo] = React.useState("");

    // const [product, setProduct] = React.useState<Flower | null>(null);

    // const navigate = useNavigate();
    // const auth = getAuth();
    // const user = auth.currentUser

    useEffect(() => {

        // const idstring = id?.toString()
        // if(idstring){
            getCP()
        // }

        // const idProducto=String(id)
        //     const productData = await getProductById(idProducto);
    }, []);

    const getCP =async ()=>{
        try{
            const idProducto=String(id)
            const cpdata = await getCPById(idProducto);
            if(cpdata){
                setUpdateNuevoCodigo(cpdata.cp)
                setUpdateNuevoPrecioCodigo(cpdata.envio)
                setIDCodigo(cpdata.id)
                setcodigoPostalData(cpdata)
            }
        }catch(error){
            console.log(error)
        }
    }


    const precioEnvio = async(e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>)=>{
        const valor = e.target.value
        const valorToNumber = parseInt(valor)
        console.log(valorToNumber)
        setUpdateNuevoPrecioCodigo(valorToNumber)
    }




  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    if(updateNuevoCodigo!='' && updateNuevoPrecioCodigo>0){
      try{
          await actualizarCodigoPostal(IDCodigo, updateNuevoCodigo, updateNuevoPrecioCodigo)
      }catch(error){
        console.log(error)
      }
      console.log(updateNuevoCodigo, updateNuevoPrecioCodigo)
    }else{
      setMensajeNotificacion("llene los datos correctamente")
      setNotiError(true)
      setTimeout(() => {
        setNotiError(false)
      }, 2000);
    }
  };


  if (!codigoPostalData) {
    return <Carga />;
}
  return (
    <>
      <Container maxWidth="sm" sx={{marginBottom:'5%', marginTop:'5%' }}>
        <Typography variant="h5" align="center" gutterBottom sx={{ fontWeight: '600', paddingBottom: '2%', fontFamily: "Cormorant"}}>
          Editar Codigo Postal
        </Typography>
        <Box component="form" onSubmit={handleSubmit} sx={{ mt: 3 }}>
        {/* <Box component="form"  sx={{ mt: 3 }}> */}
          <TextField
            fullWidth
            label="Codigo Postal"
            value={updateNuevoCodigo}
            onChange={(e) => setUpdateNuevoCodigo(e.target.value)}
            required
            sx={{ mb: 2 }}
          />
          <TextField
            fullWidth
            type="number"
            label="Precio de envio"
            value={updateNuevoPrecioCodigo}
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
            Actualizar Producto
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

export default EditarCodigoPostal;
