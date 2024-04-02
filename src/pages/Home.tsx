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

import FavoriteBorderIcon from '@mui/icons-material/FavoriteBorder';
// import FavoriteIcon from '@mui/icons-material/Favorite';
import RemoveRedEyeIcon from '@mui/icons-material/RemoveRedEye';
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
            {/* <Breadcrumbs maxItems={2} aria-label="breadcrumb" style={{paddingLeft:'50px'}}>
                <Link underline="hover" color="inherit" href="#">
                    Home
                </Link>
                 <Link underline="hover" color="inherit" href="#">
                    Catalog
                </Link>
                <Link underline="hover" color="inherit" href="#">
                    Accessories
                </Link>
                <Link underline="hover" color="inherit" href="#">
                    New Collection
                </Link>
                <Typography color="text.primary">Belts</Typography>
            </Breadcrumbs> */}

            {/**
             *
                Banner de inicio
             */}
            <Grid>

                <Banners/>

            </Grid>

            <Grid sx={{pt:5, pb:5, pl:{xs:5, md:10}, pr:{xs:5, md:10}}}>
                <Grid style={{textAlign:'center', padding:'8px'}} data-aos="fade-right">
                    <Typography variant="h3" color="initial" fontSize='34px' fontFamily={'Archivo Black, sans-serif'} style={{color:'#B29426'}} p={2}>
                        ¡Pequeños detalles marcando diferencia!
                    </Typography>
                    <Typography variant="h4" color="initial" fontSize='17px' fontFamily={'Archivo Black, sans-serif'} style={{color:'#000000'}} p={2}>
                        En Flores Rickys encontrarás lo que necesitas para cada ocasión con ofertas.

                    </Typography>
                </Grid>

                <Grid sx={stylesComponents.megaContenedorOcasiones}>
                    <Grid container display={'flex'}>

                        {steps.map((item) => (
                            <Grid item xs={12} sm={6} lg={4} xl={3} sx={stylesComponents.contenedorOcasiones}>
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

            {/* <Grid container>
                <Grid item xs={12} style={{ position: 'relative', width: '100%', height: '400px' }}>
                    <img src={banerIndex} alt="" style={{ width: '100%', height: '100%', objectFit: 'cover' }} />
                    <Grid container style={{ position: 'absolute', top: '50%', left: '50%', transform: 'translate(-50%, -50%)', backgroundColor: 'rgba(224, 43, 86, 0.35)', padding: '50px', borderRadius: '5px', width: '100%', height: '100%' }}>
                        <Box style={{width:'100%'}} pl={10} pr={10}>
                            <Typography variant="h2" style={{ fontFamily: 'Archivo Black, sans-serif', color: '#ffff' }} >Fanaticos de las flores</Typography>
                        </Box>
                        <Box style={{width:'100%'}} pl={10} pr={10}>
                            <Typography variant="h5" style={{ fontFamily: 'Archivo Black, sans-serif', color: '#ffff' }}>Flores y globos especiales</Typography>
                        </Box>
                        <Box  p={2} textAlign="end" ml={4} >
                                <Button
                                    style={{border:'2px solid #b42981', backgroundImage:'linear-gradient(to right, #FF6464 0%, #FF6464  51%, #FF81CE  100%)', margin: '10px', textTransform: 'uppercase', transition: '0.5s', color: 'white', borderStyle:'none', borderRadius:'50px', fontFamily:'Archivo Black, sans-serif', padding:'10px'                         }}
                                >
                                    Registrate Ahora
                                </Button>
                        </Box>

                    </Grid>
                </Grid>
            </Grid> */}


            <Grid p={5}>
                <Grid style={{textAlign:'center', padding:'8px'}} >
                    <Typography variant="h3" color="initial" fontSize='34px' fontFamily={'Archivo Black, sans-serif'} style={{color:'#B29426'}} >
                        Ofertas
                    </Typography>
                </Grid>

                <Grid>
                    <Grid container sx={stylesComponents.ContenedorProductos} >
                        {flores && flores.map((item) => (
                            <Grid item sm={12} md={6} lg={2.4} sx={stylesComponents.contenedorProducto}>
                                <Box display={'flex'} style={{justifyContent:'center'}}>
                                    <Grid sx={stylesComponents.contenerdorImagenProducto} onClick={()=>handleRedirectToProductId(item.id)}>
                                        <img src={item.imagen} alt="" width={'100%'} height={'100%'} style={{ objectFit: 'cover', position:'relative'}} />
                                        <Grid width={'100%'} height={'100%'} sx={{position: 'absolute', textAling:'left', padding:'2px' }}>
                                            <Box sx={{ backgroundColor:'#ef8f61', width:'50%', color:'white', borderRadius:'5px', fontSize:'20px' }}>
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
                                                justifyContent: 'center',
                                                textAlign: 'center',
                                                padding: '2px'
                                            }}
                                            >
                                                <Grid sx={{width:{xs:'300px', md:'400px', lg:'200px'}}}>
                                                    <Box sx={{ padding: {xs:'10px', lg:'2px'} }}>
                                                        <Box sx={{justifyContent:'center', textAlign:'center', padding:'2px'}} >
                                                            <FavoriteBorderIcon sx={{width:'50%', justifyContent:'center', textAlign:'center'}}/>
                                                            <RemoveRedEyeIcon sx={{width:'50%', justifyContent:'center', textAlign:'center'}}/>
                                                        </Box>
                                                        <Box sx={{ justifyContent:'center', textAlign:'center', padding:'2px'}} onClick={()=>handleRedirectToProductId(item.id)}>
                                                            <Typography variant="h6" color="initial" fontFamily={'Montserrat, sans-serif'} fontSize={16} textAlign={'center'} style={{color:'#404040', textAlign:'center'}}>{item.nombre}</Typography>
                                                        </Box>
                                                        <Box sx={{display:'flex',justifyContent:'center', textAlign:'center', padding:'2px'}}>
                                                            <Typography variant="h6" color="initial" fontFamily={'Archivo Black, sans-serif'} fontSize={16} textAlign={'center'} style={{color:'#404040', textAlign:'center', width:'50%',  textDecorationLine: 'line-through' }}>${item.precio}</Typography>
                                                            <Typography variant="h6" color="initial" fontFamily={'Archivo Black, sans-serif'} fontSize={16} textAlign={'center'} style={{color:'black', textAlign:'center', width:'50%' }}>${item.descuento}</Typography>
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
                                                justifyContent: 'center',
                                                textAlign: 'center',
                                                padding: '2px'
                                            }}
                                        >
                                            <Grid
                                                sx={{width:{xs:'300px', md:'400px', lg:'200px'}}}
                                            >
                                                <Box sx={{ padding: {xs:'10px', lg:'2px'} }}>
                                                    <Box sx={{ justifyContent: 'center', textAlign: 'center' }}>
                                                        <FavoriteBorderIcon sx={{ width: '50%' }} />
                                                        <RemoveRedEyeIcon sx={{ width: '50%' }} />
                                                    </Box>
                                                    <Box
                                                        sx={{
                                                            justifyContent: 'center',
                                                            textAlign: 'center',
                                                        }}
                                                    >
                                                        <Typography
                                                            variant="h6"
                                                            color="initial"
                                                            fontFamily="Montserrat, sans-serif"
                                                            fontSize={16}
                                                            textAlign="center"
                                                            style={{ color: '#404040' }}
                                                        >
                                                        {item.nombre}
                                                        </Typography>
                                                    </Box>
                                                    <Box sx={{ justifyContent: 'center', textAlign: 'center', padding: '2px' }}>
                                                        <Typography
                                                            variant="h6"
                                                            color="initial"
                                                            fontFamily="Archivo Black, sans-serif"
                                                            fontSize={16}
                                                            textAlign="center"
                                                            style={{ color: '#404040' }}
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

