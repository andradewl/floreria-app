import {  Box, Button, Grid, Pagination, PaginationItem, Paper, Typography } from "@mui/material";


import imageBoda from'../assets/secciones/6.png'
import imageParaElla from'../assets/secciones/7.jpg'
import descuento2 from'../assets/secciones/9.jpg'
import descuento3 from'../assets/secciones/10.jpg'
import nuevos from'../assets/secciones/11.jpg'
import kits from'../assets/secciones/12.jpg'
import regalos from'../assets/secciones/12.jpg'

import ArrowBackIcon from '@mui/icons-material/ArrowBack';
import ArrowForwardIcon from '@mui/icons-material/ArrowForward';


import { stylesComponents } from "../styles/stylesComponentes"

import '../styles/fuentes.css'
// import Banners from "../components/Banners";

// import FavoriteBorderIcon from '@mui/icons-material/FavoriteBorder';
// // import FavoriteIcon from '@mui/icons-material/Favorite';
// import RemoveRedEyeIcon from '@mui/icons-material/RemoveRedEye';
import { getOcasiones, getProducts } from "../config/apiFirebase";
import React from "react";

import { Flower, Ocasionest } from "../interfaces/interfaces"
import { useNavigate } from 'react-router-dom';
import BarraDeBusqueda from "../components/BarraDeBusqueda";


const steps = [
    {
        id:1,
        label: 'Titulo',
        imgPath: "https://www.floreselgato.com/_next/image?url=https%3A%2F%2Fadmin.floreselgato.com%2Fwp-content%2Fuploads%2F2022%2F04%2Fcelebra-tu-aniversario.jpg&w=2048&q=75",
        url: 130.10
    },
    {
        id:1,
        label: 'Titulo',
        imgPath: "https://www.floreselgato.com/_next/image?url=https%3A%2F%2Fadmin.floreselgato.com%2Fwp-content%2Fuploads%2F2022%2F04%2Fcumpleanos.jpg&w=1920&q=75",
        url: 130.10

    },
    {
        id:1,
        label: 'Titulo',
        imgPath: "https://www.floreselgato.com/_next/image?url=https%3A%2F%2Fadmin.floreselgato.com%2Fwp-content%2Fuploads%2F2022%2F04%2FLo-mejor-en-Canastas.jpg&w=2048&q=75",
        url: 130.10
    },
    {
        id:1,
        label: 'Titulo',
        imgPath: "https://www.floreselgato.com/_next/image?url=https%3A%2F%2Fadmin.floreselgato.com%2Fwp-content%2Fuploads%2F2022%2F04%2FPara-felicitar-a-esa-persona-especial.jpg&w=2048&q=75",
        url: 130.10
    },
    {
        id:1,
        label: 'Titulo',
        imgPath: "https://www.floreselgato.com/_next/image?url=https%3A%2F%2Fadmin.floreselgato.com%2Fwp-content%2Fuploads%2F2022%2F04%2FPresenta-tus-Condolencias.jpg&w=2048&q=75",
        url: 130.10

    },
    {
        id:1,
        label: 'Titulo',
        imgPath: "https://www.floreselgato.com/_next/image?url=https%3A%2F%2Fadmin.floreselgato.com%2Fwp-content%2Fuploads%2F2022%2F04%2Fcentros-de-mesa.jpg&w=2048&q=75",
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
    const [ocasinesDataId, setOcasinesDataId] = React.useState<Ocasionest[]>([]);

    React.useEffect(()=>{
        fetchFlores()
    },[])


    const fetchFlores = async () => {
        try {
            const flowersData = await getProducts();
            const ocasionesDataid = await getOcasiones()
            setOcasinesDataId(ocasionesDataid)
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
            <Grid sx={{width:'100%', position: 'relative'}}>
                <Grid sx={{width:'100%', height: {xs:'300px', md:'auto'}, position:'relative', zIndex:1}}>
                    <img src="https://firebasestorage.googleapis.com/v0/b/prowlflores.appspot.com/o/multimedia%2Fimagenes%2FFondos%2FCaptura%20de%20pantalla%202024-05-09%20121118.png?alt=media&token=5b4c51d7-b60f-4f9a-9504-31cb33650362" style={{width:'100%', height:'100%', objectFit:'cover', objectPosition:'left'}} alt="" />
                </Grid>
                <Grid sx={{position: 'absolute',top: 0, left: 0, width: '100%', height: '100%', backgroundColor: '#0000004d', zIndex: 2}}>
                    <Grid sx={{ paddingLeft:"2%", paddingTop:{xs: "20%", sm:"12%",md:"13%"} }}>
                        <Typography variant="h1" color="initial" sx={{
                            color:'white',
                            fontFamily: "Cormorant",
                            fontOpticalSizing: "auto",
                            fontWeight: "<weight>",
                            fontStyle: "normal",
                            fontSize:{xs: "40px",md:"60px"}
                        }}>Sorprende a mamá</Typography>
                        <Typography variant="body1" color="initial" sx={{
                            color:'white',
                            fontFamily: "Cormorant",
                            fontOpticalSizing: "auto",
                            fontWeight: "<weight>",
                            fontStyle: "normal",
                            fontSize:{xs: "15px",md:'20px'}
                        }}>Porque mama tambien merece ser consentida</Typography>
                        <Button
                        sx={{
                            background:'white',
                            color:'black',
                            fontSize:{xs: '12px',md:'17px'},
                            padding:'17px',
                            paddingLeft:'40px',
                            paddingRight:'40px',
                            marginTop:{xs:'50px',sm:'30px',md:'60px',lg:'100px'}
                        }}
                        >
                            Productos Disponibles para mama
                        </Button>
                    </Grid>
                </Grid>
            </Grid>

            {/* <Grid>
                <Banners/>
            </Grid> */}

            <Grid>
                <BarraDeBusqueda/>
            </Grid>

            <Grid  sx={{paddingLeft:{xl:'10%', md:'3%',xs:'5%'}, paddingRight:{xl:'10%',md:'3%', xs:'5%', backgroundColor:'#fbf8f4'}}} pb={8}>
                <Grid style={{textAlign:'start', padding:'8px', paddingTop:'80px', paddingBottom:'80px' }} data-aos="fade-right">
                    <Typography variant="h1" color="initial"
                        sx={{
                            color:'#fb7185',
                            fontFamily: "Cormorant",
                            fontOpticalSizing: "auto",
                            fontWeight: "<weight>",
                            fontStyle: "normal",
                            fontSize:{md:'45px', xs:'25px'}
                            }}>
                        ¡Pequeños detalles marcando diferencia!
                    </Typography>
                    <Typography variant="subtitle1" color="initial" fontSize='17px'
                        sx={{color:'black',
                            fontFamily: "Cormorant",
                            fontOpticalSizing: "auto",
                            fontWeight: "<weight>",
                            fontStyle: "normal",
                            fontSize:{md:'25px'}}} >
                        En Flores El Gato encontrarás lo que necesitas para cada ocasión.
                    </Typography>
                </Grid>

                <Grid >
                    <Grid container display={'flex'}>

                        {steps.map((item) => (
                            <Grid item xs={6} md={4} sx={stylesComponents.contenedorOcasiones} p={'8px'}>
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
                    </Grid>
                </Grid>

            </Grid>

            <Grid sx={{paddingLeft:{xl:'15%', md:'1%',xs:'5%'}, paddingRight:{xl:'15%',md:'1%', xs:'5%'}, paddingTop:'80px', paddingBottom:'80px' }} >
                <Grid style={{textAlign:'center', padding:'8px'}} >
                    <Typography variant="h1" color="initial" fontSize='34px'  sx={{
                            color:'#fb7185',
                            fontFamily: "Cormorant",
                            fontOpticalSizing: "auto",
                            fontWeight: "<weight>",
                            fontStyle: "normal",
                            fontSize:{md:'45px', xs:'25px'}
                            }} pb={4}>
                        Mas Vendidos
                    </Typography>
                    <Typography variant="subtitle1" color="initial" fontSize='17px'
                        sx={{color:'black',
                            fontFamily: "Cormorant",
                            fontOpticalSizing: "auto",
                            fontWeight: "<weight>",
                            fontStyle: "normal",
                            fontSize:{md:'20px'}}} pb={8}>
                        Ver Todo →
                    </Typography>
                </Grid>

                <Grid>
                    <Grid container sx={stylesComponents.ContenedorProductos} >
                        {flores && flores.map((item) => (
                            <Grid item xs={6} md={3}  sx={stylesComponents.contenedorProducto}>
                                <Box display={'flex'} style={{justifyContent:'center'}}>
                                    <Grid sx={stylesComponents.contenerdorImagenProducto} onClick={()=>handleRedirectToProductId(item.id)}>
                                        <img src={item.imagen} alt="" width={'100%'} height={'100%'} style={{ objectFit: 'cover', position:'relative', borderRadius:'7px'}} />
                                        {item.descuento &&
                                            <Grid width={'100%'} height={'100%'} sx={{position: 'absolute', textAling:'left' }}>
                                                <Box sx={{ backgroundColor:'#ef8f61', width:'50%', color:'white', borderRadius:'5px', fontSize:'20px', margin:'5px' }}>
                                                    !Oferta¡
                                                </Box>
                                            </Grid>
                                        }
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
                                                    <Box sx={{ paddingTop:'2px' }}>
                                                        <Box sx={{padding:'2px'}} onClick={()=>handleRedirectToProductId(item.id)}>
                                                            <Typography variant="body1" color="initial" style={{color:'#404040',
                                                                fontFamily: "Cormorant",
                                                                fontOpticalSizing: "auto",
                                                                fontWeight: "<weight>",
                                                                fontStyle: "normal",
                                                                textAlign:'left',
                                                                fontSize:'17px',
                                                                whiteSpace:'nowrap', overflow:'hidden'
                                                            }}>{item.nombre}</Typography>
                                                            <Typography variant="body1" color="initial"  style={{color:'#404040',
                                                                fontFamily: "Cormorant",
                                                                fontOpticalSizing: "auto",
                                                                fontWeight: "<weight>",
                                                                fontStyle: "normal",
                                                                textAlign:'left',
                                                                fontSize:'12px'
                                                            }}>
                                                                {ocasinesDataId && ocasinesDataId.map((item2) => (
                                                                    item2.id === item.ocasion ? item2.nombre : null
                                                                ))}
                                                                </Typography>
                                                        </Box>
                                                        <Box sx={{display:'flex',padding:'2px',width: '100%',}}>
                                                            <Typography variant="body2" color="initial"  style={{color:'#404040',textAlign:'left', width:'50%',  textDecorationLine: 'line-through', fontWeight: 'bold', fontSize:'12px' }}>${item.precio}</Typography>
                                                            <Typography variant="body2" color="initial"  style={{color:'#9c0ba8', textAlign:'right',width:'50%', fontWeight: 'bold',fontSize:'12px' }}>${item.descuento}</Typography>
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
                                            }}
                                        >
                                            <Grid
                                                sx={{
                                                    width: '100%',
                                                }}
                                            >
                                                <Box sx={{ padding: {xs:'10px', lg:'2px'} }}>
                                                    <Box sx={{ padding: '2px' }}>
                                                        <Typography variant="body1" color="initial" style={{color:'#404040',
                                                            fontFamily: "Cormorant",
                                                            fontOpticalSizing: "auto",
                                                            fontWeight: "<weight>",
                                                            fontStyle: "normal",
                                                            textAlign:'left',
                                                            fontSize:'17px',
                                                            whiteSpace:'nowrap', overflow:'hidden'
                                                        }}>{item.nombre}</Typography>
                                                        <Typography variant="body1" color="initial"  style={{color:'#404040',
                                                            fontFamily: "Cormorant",
                                                            fontOpticalSizing: "auto",
                                                            fontWeight: "<weight>",
                                                            fontStyle: "normal",
                                                            textAlign:'left',
                                                            fontSize:'12px'
                                                        }}>
                                                            {ocasinesDataId && ocasinesDataId.map((item2) => (
                                                                item2.id === item.ocasion ? item2.nombre : null
                                                            ))}
                                                        </Typography>
                                                        {/* <Typography
                                                            variant="h6"
                                                            color="initial"
                                                            fontSize={16}
                                                            textAlign="center"
                                                            style={{ color: '#9c0ba8' }}
                                                        >
                                                        ${item.precio}
                                                        </Typography> */}
                                                    </Box>
                                                    <Box
                                                    >
                                                        {/* <Typography
                                                            variant="h6"
                                                            color="initial"
                                                            fontSize={16}
                                                            style={{ color: '#404040' }}
                                                        >
                                                        {item.nombre} */}
                                                        {/* </Typography> */}
                                                        <Typography variant="body2" color="initial"  style={{color:'#9c0ba8', textAlign:'left', fontWeight: 'bold',fontSize:'12px' }}>${item.precio }</Typography>
                                                    </Box>
                                                </Box>
                                            </Grid>
                                        </Grid>

                                    )

                                }

                            </Grid>
                        ))}

                        <Pagination
                            count={10}
                            renderItem={(flores) => (
                                <PaginationItem
                                slots={{ previous: ArrowBackIcon, next: ArrowForwardIcon }}
                                {...flores}
                                />
                            )}
                        />



                    </Grid>
                </Grid>

            </Grid>
        </>
    )
}


export default Home

