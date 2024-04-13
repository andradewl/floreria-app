import {  Box, Grid, Paper, Typography } from "@mui/material";

import one from'../assets/secciones/1.jpg'
import two from'../assets/secciones/2.jpg'
import three from '../assets/secciones/3.jpg'
import condolencias from '../assets/secciones/4.png'
import imageArregloMesa from'../assets/secciones/5.jpg'
import imageBoda from'../assets/secciones/6.png'
import imageParaElla from'../assets/secciones/7.jpg'
import descuento1 from'../assets/secciones/7.jpg'
import descuento2 from'../assets/secciones/9.jpg'
import descuento3 from'../assets/secciones/10.jpg'
import nuevos from'../assets/secciones/11.jpg'
import kits from'../assets/secciones/12.jpg'
import regalos from'../assets/secciones/12.jpg'


import { stylesComponents } from "../styles/stylesComponentes"

import '../styles/fuentes.css'
import Banners from "../components/Banners";

// import FavoriteBorderIcon from '@mui/icons-material/FavoriteBorder';
// // import FavoriteIcon from '@mui/icons-material/Favorite';
// import RemoveRedEyeIcon from '@mui/icons-material/RemoveRedEye';
import { getProducts } from "../config/apiFirebase";
import React from "react";

import { Flower } from "../interfaces/interfaces"
import { useNavigate } from 'react-router-dom';


const steps = [
    {
        id:1,
        label: 'Titulo',
        imgPath: descuento1,
        url: 130.10
    },
    {
        id:1,
        label: 'Titulo',
        imgPath: one,
        url: 130.10

    },
    {
        id:1,
        label: 'Titulo',
        imgPath: two,
        url: 130.10
    },
    {
        id:1,
        label: 'Titulo',
        imgPath: condolencias,
        url: 130.10
    },
    {
        id:1,
        label: 'Titulo',
        imgPath: three,
        url: 130.10

    },
    {
        id:1,
        label: 'Titulo',
        imgPath: imageArregloMesa,
        url: 130.10
    },
    {
        id:1,
        label: 'Titulo',
        imgPath: imageBoda,
        url: 130.10
    },
    {
        id:1,
        label: 'Titulo',
        imgPath: descuento2,
        url: 130.10

    },
    {
        id:1,
        label: 'Titulo',
        imgPath: descuento3,
        url: 130.10
    },
    {
        id:1,
        label: 'Titulo',
        imgPath: imageParaElla,
        url: 130.10
    },
    {
        id:1,
        label: 'Titulo',
        imgPath: nuevos,
        url: 130.10

    },
    {
        id:1,
        label: 'Titulo',
        imgPath: kits,
        url: 130.10
    },
    {
        id:1,
        label: 'Titulo',
        imgPath: regalos,
        url: 130.10
    },
];


function Home(){

    const navigate = useNavigate()
    const [flores, setFlores] = React.useState<Flower[]>([]);


    React.useEffect(()=>{

        fetchFlores()
    },[])

    React.useEffect(()=>{
        console.log('floresxd', flores)
    },[flores])


    const fetchFlores = async () => {
        try {
            const flowersData = await getProducts();
            console.log(flowersData)
            setFlores(flowersData);
        } catch (error) {
            console.error('Error fetching flowers:', error);
        }
    };

    const handleRedirectToProductId = (id:string) => {
        navigate('/Producto/'+id);
    };

    return(
        <>

            <Grid>

                <Banners/>

            </Grid>

            <Grid  sx={{paddingLeft:{xl:'10%', md:'7%',xs:'5%'}, paddingRight:{xl:'10%',md:'7%', xs:'5%'} }}  >
                <Grid style={{textAlign:'center', padding:'8px'}} data-aos="fade-right">
                    <Typography variant="h3" color="initial"  sx={{color:'#B29426',  fontSize:{xs:'24px', md:'34px'}}} p={2}>
                        ¡Pequeños detalles marcando diferencia!
                    </Typography>
                    <Typography variant="h4" color="initial" fontSize='17px'  sx={{color:'#000000',  fontSize:{xs:'14px', md:'17px'}}} p={2}>
                        En Flores Rickys encontrarás lo que necesitas para cada ocasión con ofertas.
                    </Typography>
                </Grid>

                <Grid >
                    <Grid container display={'flex'}>

                        {steps.map((item) => (
                            <Grid item xs={12} md={4} sx={stylesComponents.contenedorOcasiones} p={'5px'}>
                                <Box sx={stylesComponents.cajaDatosOcasioners}>
                                    <Grid sx={stylesComponents.contenedorImagen}>
                                        <img src={item.imgPath} alt="" width={'100%'} height={'100%'} style={{ objectFit: 'cover'}}/>
                                    </Grid>
                                    <Paper sx={stylesComponents.animacionTextoSobreImagenOcasiones}>
                                        <Typography variant="h4" color="initial" sx={stylesComponents.letraSobreImagen}>{item.label}</Typography>
                                    </Paper>
                                </Box>
                            </Grid>
                        ))}


                        {/* <Grid item xs={12} sm={6} lg={4} xl={3} sx={stylesComponents.contenedorOcasiones}>
                            <Box sx={stylesComponents.cajaDatosOcasioners}>
                                <Grid sx={stylesComponents.contenedorImagen}>
                                    <img src={one} alt="" width={'100%'} height={'100%'} style={{ objectFit: 'cover'}}/>
                                </Grid>
                            </Box>
                        </Grid> */}



                    </Grid>
                </Grid>

            </Grid>

            <Grid sx={{paddingLeft:{xl:'10%', md:'7%',xs:'5%'}, paddingRight:{xl:'10%',md:'7%', xs:'5%'} }} >
                <Grid style={{textAlign:'center', padding:'8px'}} >
                    <Typography variant="h3" color="initial" fontSize='34px'  style={{color:'#B29426'}} >
                        Ofertas
                    </Typography>
                </Grid>

                <Grid>
                    <Grid container sx={stylesComponents.ContenedorProductos} >
                        {flores && flores.map((item) => (
                            <Grid item xs={12} md={6} lg={3} sx={stylesComponents.contenedorProducto}>
                                <Box display={'flex'} style={{justifyContent:'center'}}>
                                    <Grid sx={stylesComponents.contenerdorImagenProducto} onClick={()=>handleRedirectToProductId(item.id)}>
                                        <img src={item.imagen} alt="" width={'100%'} height={'100%'} style={{ objectFit: 'cover', position:'relative'}} />
                                        <Grid width={'100%'} height={'100%'} sx={{position: 'absolute', textAling:'left' }}>
                                            <Box sx={{ backgroundColor:'#ef8f61', width:'50%', color:'white', borderRadius:'5px', fontSize:'20px', margin:'5px' }}>
                                                !Oferta¡
                                            </Box>
                                        </Grid>
                                    </Grid>
                                </Box>

                                {
                                    item.descuento ?
                                    (
                                        <>
                                            <Grid
                                                container
                                                sx={{
                                                    width: '100%',
                                                }}
                                            >
                                                <Grid
                                                sx={{
                                                    width: '100%',
                                                }}
                                                >
                                                    <Box sx={{ padding: {xs:'10px', lg:'2px'} }}>
                                                        {/* <Box sx={{justifyContent:'center', textAlign:'center', padding:'2px'}} >
                                                            <FavoriteBorderIcon sx={{width:'50%', justifyContent:'center', textAlign:'center'}}/>
                                                            <RemoveRedEyeIcon sx={{width:'50%', justifyContent:'center', textAlign:'center'}}/>
                                                        </Box> */}
                                                        <Box sx={{padding:'2px'}} onClick={()=>handleRedirectToProductId(item.id)}>
                                                            <Typography variant="h6" color="initial"  fontSize={16}  style={{color:'#404040'}}>{item.nombre}</Typography>
                                                        </Box>
                                                        <Box sx={{display:'flex',padding:'2px',width: '100%',}}>
                                                            <Typography variant="h6" color="initial"  fontSize={16}  style={{color:'#404040', width:'50%',  textDecorationLine: 'line-through', fontWeight: 'bold' }}>${item.precio}</Typography>
                                                            <Typography variant="h6" color="initial"  fontSize={16}  style={{color:'#9c0ba8', width:'50%', fontWeight: 'bold' }}>${item.descuento}</Typography>
                                                        </Box>
                                                    </Box>
                                                </Grid>

                                            </Grid>
                                        </>
                                    )
                                    :
                                    (
                                        <Grid
                                            container
                                            sx={{
                                                width: '100%',
                                                // padding: '2px'
                                            }}
                                        >
                                            <Grid
                                                sx={{
                                                    width: '100%',
                                                }}
                                            >
                                                <Box sx={{ padding: {xs:'10px', lg:'2px'} }}>
                                                    {/* <Box sx={{ justifyContent: 'center', textAlign: 'center' }}>
                                                        <FavoriteBorderIcon sx={{ width: '50%' }} />
                                                        <RemoveRedEyeIcon sx={{ width: '50%' }} />
                                                    </Box> */}
                                                    <Box
                                                    >
                                                        <Typography
                                                            variant="h6"
                                                            color="initial"
                                                            fontSize={16}
                                                            style={{ color: '#404040' }}
                                                        >
                                                        {item.nombre}
                                                        </Typography>
                                                    </Box>
                                                    <Box sx={{ padding: '2px' }}>
                                                        <Typography
                                                            variant="h6"
                                                            color="initial"
                                                            fontSize={16}
                                                            textAlign="center"
                                                            style={{ color: '#9c0ba8' }}
                                                        >
                                                        ${item.precio}
                                                        </Typography>
                                                    </Box>
                                                </Box>
                                            </Grid>
                                        </Grid>

                                    )

                                }

                            </Grid>
                        ))}

                    </Grid>
                </Grid>

            </Grid>
        </>
    )
}


export default Home

