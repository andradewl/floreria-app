/* eslint-disable @typescript-eslint/no-explicit-any */
import React, { useEffect, useState } from 'react';
// import { obtenerProductos } from '../../config/backEndAdmin/backProductos';
import { Typography, Grid, Paper, Container, Box, IconButton, TextField, Button } from '@mui/material';
import { Link, useNavigate } from 'react-router-dom';
import EditIcon from '@mui/icons-material/Edit';
import { getOcasiones } from '../../config/apiFirebase';
import { Ocasionest } from '../../interfaces/interfaces';
import DeleteIcon from '@mui/icons-material/Delete';
import { deleteOcasionByid, getProducosByIdsOcasiones } from '../../config/backEndAdmin/backendOcasiones';
import { NotificacionSuccess, Notificacionerror } from '../../components/Alert';
// import { ProductoExtra } from '../../interfaces/interfaces';

// interface Producto {
//   id: string;
//   nombre: string;
//   precio: number;
//   existencias: number;
//   imagen: string;
// }

const Ocasiones = () => {
  const [productos, setProductos] = useState<Ocasionest[]>([]);
  const [searchTerm, setSearchTerm] = useState('');
  const [notiError, setNotiError ] = React.useState(false);
  const [notiSucces, setNotiSucces ] = React.useState(false);
  // const [notiInfo, ] = React.useState(false);
  const [mensajeNotificacion, setMensajeNotificacion] = React.useState("");


  const navigate = useNavigate();

  useEffect(() => {
    

    fetchData();
  }, []);


  const fetchData = async () => {
    try {
      const productosData = await getOcasiones();

      if(productosData){
          setProductos(productosData);
      }
      
    } catch (error) {
      console.error("Error al obtener los productos: ", error);
    }
  };


  const handleSearch = (event: React.ChangeEvent<HTMLInputElement>) => {
    setSearchTerm(event.target.value);
  };

  const filteredProductos = productos.filter(producto =>
    producto.nombre.toLowerCase().includes(searchTerm.toLowerCase())
  );

  const deleteOcasion = async (id:string) =>{
    // console.log("goaf,lsfmsad")
    console.log(id)
    const dataXd = await getProducosByIdsOcasiones(id)

    if(dataXd){
      setMensajeNotificacion("Esta ocasion tiene productos relacionados asegurate de cambiarlos antes de borrarlos")
      setNotiError(true)
      setTimeout(() => {
        setNotiError(false)
      }, 2000);
      // console.log("no borrar")
    }else{

      try{
        await deleteOcasionByid(id)
        setMensajeNotificacion("Borrado con exito, espere")
        setNotiSucces (true)
        setTimeout(() => {
          setNotiSucces(false)
        }, 2000);
        fetchData()
      }catch(error){
        setMensajeNotificacion("Ha ocurrido un error intentelo de nuevo")
        setNotiError(true)
        setTimeout(() => {
          setNotiError(false)
        }, 2000);
      }
      
      // console.log("borrar")
    }
    // console.log(dataXd)
  }

  return (
    <Container maxWidth="md" sx={{ mt: 4}}>
      <Typography variant="h5" align="center" gutterBottom sx={{ fontWeight: '600', paddingBottom: '2%', fontFamily: "Cormorant" }}>
        Ocasiones
      </Typography>
      <Box sx={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', mb: 4 }}>
        <TextField
          label="Buscar Ocasion"
          variant="outlined"
          value={searchTerm}
          onChange={handleSearch}
          sx={{ width: '70%' }}
        />
        <Button
          variant="contained"
          color="primary"
          onClick={() => navigate('/NuevaOcasion')}
        >
          Nueva Ocasion
        </Button>
      </Box>
      <Grid container spacing={3}>
        {filteredProductos.map((producto) => (
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
              <Box sx={{ textAlign: 'center', mb: 2 }}>
                {producto.imagen && (
                  <Box 
                    component="img"
                    src={producto.imagen}
                    alt={producto.descripcion}
                    sx={{ 
                      width: '100%',
                      height: '200px',
                      objectFit: 'cover',
                      borderRadius: '4px'
                    }}
                  />
                )}
              </Box>
              <Box sx={{ textAlign: 'center', flexGrow: 1 }}>
                <Typography variant="h6" gutterBottom>{producto.nombre}</Typography>
                {/* <Typography variant="body1" color="text.secondary" gutterBottom>${producto.precio.toFixed(2)}</Typography> */}
                {/* <Typography
                  variant="body2"
                  sx={{ color: getColor(producto.existencia) }}
                >
                  Existencias: {producto.existencia}
                </Typography> */}
              </Box>
              <Box sx={{ display: 'flex', justifyContent: 'flex-end', mt: 2 }}>
                <Link to={`/EditarOcasion/${producto.id}`}>
                  <IconButton aria-label="editar">
                    <EditIcon />
                  </IconButton>
                </Link>
                  <IconButton aria-label="eliminar" onClick={()=>deleteOcasion(producto.id)}>
                    <DeleteIcon />
                  </IconButton>
              </Box>
            </Paper>
          </Grid>
        ))}
      </Grid>
      {notiError &&
        <Notificacionerror message={mensajeNotificacion}/>
      }

      {notiSucces &&
          <NotificacionSuccess message={mensajeNotificacion}/>
      }
    </Container>
  );
};

export default Ocasiones;
