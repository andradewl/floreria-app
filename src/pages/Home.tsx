import {  Box, Breadcrumbs, Button, Grid, Link, Paper, Typography } from "@mui/material";
import banerIndex from '../assets/banerIndex.png'
import imageArregloMesa from'../assets/secciones/imageArregloMesa.png'
import imageBoda from'../assets/secciones/imageBoda.png'
import imageParaElla from'../assets/secciones/imageParaElla.png'
import imagerParaEl from'../assets/secciones/imagerParaEl.png'
import one from'../assets/secciones/One.png'
import two from'../assets/secciones/two.png'
import three from '../assets/secciones/three.png'
import condolencias from '../assets/secciones/Condolencias.webp'
import product1 from '../assets/productos/productOne.jpg'
import product2 from '../assets/productos/productTwo.webp'

import product3 from '../assets/productos/productThree.jpg'
import product4 from '../assets/productos/productFor.webp'
import product5 from '../assets/productos/productFive.jpg'
import product6 from '../assets/productos/productSix.jpg'
import product7 from '../assets/productos/productsEVEN.jpg'
import product8 from '../assets/productos/productEight.webp'
import product9 from '../assets/productos/productnNain.webp'
import product10 from '../assets/productos/productTen.jpg'
import product11 from '../assets/productos/productEleven.webp'

import '../styles/fuentes.css'
import { stylesComponents } from "../styles/stylesComponentes";

function Home(){
    return(
        <>
            <Breadcrumbs maxItems={2} aria-label="breadcrumb" style={{paddingLeft:'50px'}}>
                <Link underline="hover" color="inherit" href="#">
                    Home
                </Link>
                {/*  <Link underline="hover" color="inherit" href="#">
                    Catalog
                </Link>
                <Link underline="hover" color="inherit" href="#">
                    Accessories
                </Link>
                <Link underline="hover" color="inherit" href="#">
                    New Collection
                </Link>
                <Typography color="text.primary">Belts</Typography> */}
            </Breadcrumbs>

            <Grid container >
                <Grid  item xs={12} md={6} container justifyContent="center" alignItems="center">
                    <Grid p={6} sx={{backgroundColor:'#F898D8'}} >
                        <Grid textAlign="start"
                            sx={{
                                marginLeft:{
                                    xl:4,
                                    sm:1
                                }
                            }}
                        >
                            <Typography variant="h1" color="initial" sx={stylesComponents.titlesBanners}>
                                Flores para toda ocasión
                            </Typography>
                        </Grid>
                        <Grid  p={1} textAlign="start">
                            <Typography variant="h3" color="initial" sx={stylesComponents.titles3Banners}>
                                Aqui lo encuentras
                            </Typography>
                        </Grid>
                        <Grid pt={10} textAlign="start">
                            <Button sx={stylesComponents.buttonBanners}>
                                Registrate Ahora
                            </Button>
                        </Grid>
                    </Grid>
                </Grid>


                <Grid  item xs={12} md={6}>
                    <Box p={2} textAlign="start">
                        <img src={banerIndex} style={{width:'100%', borderRadius:'100%'}} alt="" />
                    </Box>
                </Grid>
            </Grid>

            <Grid p={5}>
                <Grid style={{textAlign:'center', padding:'8px'}} data-aos="fade-right">
                    <Typography variant="h3" color="initial" fontSize='34px' fontFamily={'Archivo Black, sans-serif'} style={{color:'#B29426'}} >
                        ¡Pequeños detalles marcando diferencia!
                    </Typography>
                    <Typography variant="h4" color="initial" fontSize='17px' fontFamily={'Archivo Black, sans-serif'} style={{color:'#000000'}} >
                        En Flores Daysis encontrarás lo que necesitas para cada ocasión.
                    </Typography>
                </Grid>

                <Grid sx={stylesComponents.megaContenedorOcasiones}>
                    <Grid container display={'flex'}>


                        <Grid item xs={12} sm={6} lg={4} xl={3} sx={stylesComponents.contenedorOcasiones}>
                            <Box sx={stylesComponents.cajaDatosOcasioners}>
                                <Grid sx={stylesComponents.contenedorImagen}>
                                    <img src={one} alt="" width={'100%'} height={'100%'} style={{ objectFit: 'cover'}}/>
                                </Grid>
                            </Box>
                        </Grid>


                        <Grid item xs={12} sm={6} lg={4} xl={3} sx={stylesComponents.contenedorOcasiones}>
                            <Box sx={stylesComponents.cajaDatosOcasioners}>
                                <Grid sx={stylesComponents.contenedorImagen}>
                                    <img src={imageArregloMesa} alt="" width={'100%'} height={'100%'} style={{ objectFit: 'cover'}}/>
                                </Grid>
                                <Paper sx={stylesComponents.animacionTextoSobreImagenOcasiones}>
                                    <Typography variant="h4" color="initial" sx={stylesComponents.letraSobreImagen}>Arreglos</Typography>
                                </Paper>
                            </Box>
                        </Grid>


                        <Grid item xs={12} sm={6} lg={4} xl={3} sx={stylesComponents.contenedorOcasiones}>
                            <Box sx={stylesComponents.cajaDatosOcasioners}>
                                <Grid sx={stylesComponents.contenedorImagen}>
                                    <img src={imageBoda} alt="" width={'100%'} height={'100%'} style={{ objectFit: 'cover'}}/>
                                </Grid>
                                <Paper sx={stylesComponents.animacionTextoSobreImagenOcasiones} >
                                    <Typography variant="h4" color="initial" sx={stylesComponents.letraSobreImagen}>Bodas</Typography>
                                </Paper>
                            </Box>
                        </Grid>


                        <Grid item xs={12} sm={6} lg={4} xl={3} sx={stylesComponents.contenedorOcasiones}>
                            <Box sx={stylesComponents.cajaDatosOcasioners}>
                                <Grid sx={stylesComponents.contenedorImagen}>
                                    <img src={imageParaElla} alt="" width={'100%'} height={'100%'} style={{ objectFit: 'cover'}}/>
                                </Grid>
                                <Paper sx={stylesComponents.animacionTextoSobreImagenOcasiones}>
                                    <Typography variant="h4" color="initial" sx={stylesComponents.letraSobreImagen}>Para ella</Typography>
                                </Paper>
                            </Box>
                        </Grid>


                        <Grid item xs={12} sm={6} lg={4} xl={3} sx={stylesComponents.contenedorOcasiones}>
                            <Box
                                sx={stylesComponents.cajaDatosOcasioners}>
                                <Grid sx={stylesComponents.contenedorImagen}>
                                    <img src={imagerParaEl} alt="" width={'100%'} height={'100%'} style={{ objectFit: 'cover'}}/>
                                </Grid>
                                <Paper
                                    sx={stylesComponents.animacionTextoSobreImagenOcasiones}
                                >
                                    <Typography variant="h4" color="initial" sx={stylesComponents.letraSobreImagen}>Para él</Typography>
                                </Paper>
                            </Box>
                        </Grid>



                        <Grid item xs={12} sm={6} lg={4} xl={3} sx={stylesComponents.contenedorOcasiones}>
                            <Box
                                sx={stylesComponents.cajaDatosOcasioners}>
                                <Grid sx={stylesComponents.contenedorImagen}>
                                    <img src={two} alt="" width={'100%'} height={'100%'} style={{ objectFit: 'cover'}}/>
                                </Grid>
                            </Box>
                        </Grid>

                        <Grid item xs={12} sm={6} lg={4} xl={3} sx={stylesComponents.contenedorOcasiones}>
                            <Box sx={stylesComponents.cajaDatosOcasioners}>
                                <Grid sx={stylesComponents.contenedorImagen}>
                                    <img src={condolencias} alt="" width={'100%'} height={'100%'} style={{ objectFit: 'cover'}}/>
                                </Grid>
                                <Paper sx={stylesComponents.animacionTextoSobreImagenOcasiones}>
                                    <Typography variant="h4" color="initial" sx={stylesComponents.letraSobreImagen}>Condolencias</Typography>
                                </Paper>
                            </Box>
                        </Grid>


                        <Grid item xs={12} sm={6} lg={4} xl={3} sx={stylesComponents.contenedorOcasiones}>
                            <Box sx={stylesComponents.cajaDatosOcasioners}>
                                <Grid sx={stylesComponents.contenedorImagen}>
                                    <img src={three} alt="" width={'100%'} height={'100%'} style={{ objectFit: 'cover'}}/>
                                </Grid>
                            </Box>
                        </Grid>

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
                        Lo mas vendido
                    </Typography>
                </Grid>

                <Grid>
                    <Grid container sx={stylesComponents.ContenedorProductos} >

                        <Grid item sm={12}  md={4} lg={3} sx={stylesComponents.contenedorProducto}>
                            <Box display={'flex'} style={{justifyContent:'center'}}>
                                <Grid style={{width:'235px', height:'300px'}}>
                                    <img src={product1} alt="" width={'100%'} height={'100%'} style={{ objectFit: 'cover'}}/>
                                </Grid>
                            </Box>
                            <Box p={1}>
                                <Typography variant="h6" color="initial" fontFamily={'Montserrat, sans-serif'} fontSize={16} textAlign={'start'} style={{color:'#404040', textAlign:'center'}} >Arreglo Multicolor</Typography>
                                <Typography variant="h6" color="initial" fontFamily={'Archivo Black, sans-serif'} fontSize={16} textAlign={'start'} style={{color:'#404040', textAlign:'center' }}>$100.00</Typography>
                            </Box>
                            <Box >
                                <Button style={{border:'2px solid #b42981', backgroundImage:'linear-gradient(to right, #FF6464 0%, #FF6464  51%, #FF81CE  100%)', textTransform: 'uppercase', transition: '0.5s', color: 'white', borderStyle:'none', borderRadius:'50px', fontFamily:'Archivo Black, sans-serif', padding:'10px', width:'200px' }}>
                                    Ver
                                </Button>
                            </Box>
                        </Grid>
                        <Grid item sm={12}  md={4} lg={3} sx={stylesComponents.contenedorProducto}>
                                <Box display={'flex'} style={{justifyContent:'center'}}>
                                    <Grid style={{width:'235px', height:'300px'}}>
                                        <img src={product2} alt="" width={'100%'} height={'100%'} style={{ objectFit: 'cover'}}/>
                                    </Grid>
                                </Box>
                                <Box p={1}>
                                    <Typography variant="h6" color="initial" fontFamily={'Montserrat, sans-serif'} fontSize={16} textAlign={'start'} style={{color:'#404040', textAlign:'center'}}>Arreglo Multicolor</Typography>
                                    <Typography variant="h6" color="initial" fontFamily={'Archivo Black, sans-serif'} fontSize={16} textAlign={'start'} style={{color:'#404040', textAlign:'center' }}>$100.00</Typography>
                                </Box>
                                <Box >
                                    <Button style={{border:'2px solid #b42981', backgroundImage:'linear-gradient(to right, #FF6464 0%, #FF6464  51%, #FF81CE  100%)', textTransform: 'uppercase', transition: '0.5s', color: 'white', borderStyle:'none', borderRadius:'50px', fontFamily:'Archivo Black, sans-serif', padding:'10px', width:'200px' }}>
                                        Ver
                                    </Button>
                            </Box>
                        </Grid>
                        <Grid item sm={12}  md={4} lg={3} sx={stylesComponents.contenedorProducto}>
                            <Box display={'flex'} style={{justifyContent:'center'}}>
                                <Grid style={{width:'235px', height:'300px'}}>
                                    <img src={product3} alt="" width={'100%'} height={'100%'} style={{ objectFit: 'cover'}}/>
                                </Grid>
                            </Box>
                            <Box p={1}>
                                <Typography variant="h6" color="initial" fontFamily={'Montserrat, sans-serif'} fontSize={16} textAlign={'start'} style={{color:'#404040', textAlign:'center'}}>Arreglo Multicolor</Typography>
                                <Typography variant="h6" color="initial" fontFamily={'Archivo Black, sans-serif'} fontSize={16} textAlign={'start'} style={{color:'#404040', textAlign:'center' }}>$100.00</Typography>
                            </Box>
                            <Box >
                                <Button style={{border:'2px solid #b42981', backgroundImage:'linear-gradient(to right, #FF6464 0%, #FF6464  51%, #FF81CE  100%)', textTransform: 'uppercase', transition: '0.5s', color: 'white', borderStyle:'none', borderRadius:'50px', fontFamily:'Archivo Black, sans-serif', padding:'10px', width:'200px' }}>
                                    Ver
                                </Button>
                        </Box>
                        </Grid>
                        <Grid item sm={12}  md={4} lg={3} sx={stylesComponents.contenedorProducto}>
                            <Box display={'flex'} style={{justifyContent:'center'}}>
                                <Grid style={{width:'235px', height:'300px'}}>
                                    <img src={product4} alt="" width={'100%'} height={'100%'} style={{ objectFit: 'cover'}}/>
                                </Grid>
                            </Box>
                            <Box p={1}>
                                <Typography variant="h6" color="initial" fontFamily={'Montserrat, sans-serif'} fontSize={16} textAlign={'start'} style={{color:'#404040', textAlign:'center'}}>Arreglo Multicolor</Typography>
                            </Box>
                            <Box display={'flex'}>
                                <Typography variant="h6" color="initial" fontFamily={'Archivo Black, sans-serif'} fontSize={16} textAlign={'start'} style={{color:'red', textAlign:'center', width:'50%',  textDecorationLine: 'line-through' }}>$100.00</Typography>
                                <Typography variant="h6" color="initial" fontFamily={'Archivo Black, sans-serif'} fontSize={16} textAlign={'start'} style={{color:'blue', textAlign:'center', width:'50%' }}>$83.00</Typography>
                            </Box>
                            <Box >
                                <Button style={{border:'2px solid #b42981', backgroundImage:'linear-gradient(to right, #FF6464 0%, #FF6464  51%, #FF81CE  100%)', textTransform: 'uppercase', transition: '0.5s', color: 'white', borderStyle:'none', borderRadius:'50px', fontFamily:'Archivo Black, sans-serif', padding:'10px', width:'200px' }}>
                                    Ver
                                </Button>
                        </Box>
                        </Grid>
                        <Grid item sm={12}  md={4} lg={3} sx={stylesComponents.contenedorProducto}>
                            <Box display={'flex'} style={{justifyContent:'center'}}>
                                <Grid style={{width:'235px', height:'300px'}}>
                                    <img src={product5} alt="" width={'100%'} height={'100%'} style={{ objectFit: 'cover'}}/>
                                </Grid>
                            </Box>
                            <Box p={1}>
                                <Typography variant="h6" color="initial" fontFamily={'Montserrat, sans-serif'} fontSize={16} textAlign={'start'} style={{color:'#404040', textAlign:'center'}}>Arreglo Multicolor</Typography>
                                <Typography variant="h6" color="initial" fontFamily={'Archivo Black, sans-serif'} fontSize={16} textAlign={'start'} style={{color:'#404040', textAlign:'center' }}>$100.00</Typography>
                            </Box>
                            <Box >
                                <Button style={{border:'2px solid #b42981', backgroundImage:'linear-gradient(to right, #FF6464 0%, #FF6464  51%, #FF81CE  100%)', textTransform: 'uppercase', transition: '0.5s', color: 'white', borderStyle:'none', borderRadius:'50px', fontFamily:'Archivo Black, sans-serif', padding:'10px', width:'200px' }}>
                                    Ver
                                </Button>
                            </Box>
                        </Grid>
                        <Grid item sm={12}  md={4} lg={3} sx={stylesComponents.contenedorProducto}>
                            <Box display={'flex'} style={{justifyContent:'center'}}>
                                <Grid style={{width:'235px', height:'300px'}}>
                                    <img src={product6} alt="" width={'100%'} height={'100%'} style={{ objectFit: 'cover'}}/>
                                </Grid>
                            </Box>
                            <Box p={1}>
                                <Typography variant="h6" color="initial" fontFamily={'Montserrat, sans-serif'} fontSize={16} textAlign={'start'} style={{color:'#404040', textAlign:'center'}}>Arreglo Multicolor</Typography>
                                <Typography variant="h6" color="initial" fontFamily={'Archivo Black, sans-serif'} fontSize={16} textAlign={'start'} style={{color:'#404040', textAlign:'center' }}>$100.00</Typography>
                            </Box>
                            <Box >
                                <Button style={{border:'2px solid #b42981', backgroundImage:'linear-gradient(to right, #FF6464 0%, #FF6464  51%, #FF81CE  100%)', textTransform: 'uppercase', transition: '0.5s', color: 'white', borderStyle:'none', borderRadius:'50px', fontFamily:'Archivo Black, sans-serif', padding:'10px', width:'200px' }}>
                                    Ver
                                </Button>
                        </Box>
                        </Grid>
                        <Grid item sm={12}  md={4} lg={3} sx={stylesComponents.contenedorProducto}>
                            <Box display={'flex'} style={{justifyContent:'center'}}>
                                <Grid style={{width:'235px', height:'300px'}}>
                                    <img src={product7} alt="" width={'100%'} height={'100%'} style={{ objectFit: 'cover'}}/>
                                </Grid>
                            </Box>
                            <Box p={1}>
                                <Typography variant="h6" color="initial" fontFamily={'Montserrat, sans-serif'} fontSize={16} textAlign={'start'} style={{color:'#404040', textAlign:'center'}}>Arreglo Multicolor</Typography>
                                <Typography variant="h6" color="initial" fontFamily={'Archivo Black, sans-serif'} fontSize={16} textAlign={'start'} style={{color:'#404040', textAlign:'center' }}>$100.00</Typography>
                            </Box>
                            <Box >
                                <Button style={{border:'2px solid #b42981', backgroundImage:'linear-gradient(to right, #FF6464 0%, #FF6464  51%, #FF81CE  100%)', textTransform: 'uppercase', transition: '0.5s', color: 'white', borderStyle:'none', borderRadius:'50px', fontFamily:'Archivo Black, sans-serif', padding:'10px', width:'200px' }}>
                                    Ver
                                </Button>
                        </Box>
                        </Grid>
                        <Grid item sm={12}  md={4} lg={3} sx={stylesComponents.contenedorProducto}>
                            <Box display={'flex'} style={{justifyContent:'center'}}>
                                <Grid style={{width:'235px', height:'300px'}}>
                                    <img src={product8} alt="" width={'100%'} height={'100%'} style={{ objectFit: 'cover'}}/>
                                </Grid>
                            </Box>
                            <Box p={1}>
                                <Typography variant="h6" color="initial" fontFamily={'Montserrat, sans-serif'} fontSize={16} textAlign={'start'} style={{color:'#404040', textAlign:'center'}}>Arreglo Multicolor</Typography>
                            </Box>
                            <Box display={'flex'}>
                                <Typography variant="h6" color="initial" fontFamily={'Archivo Black, sans-serif'} fontSize={16} textAlign={'start'} style={{color:'red', textAlign:'center', width:'50%',  textDecorationLine: 'line-through' }}>$100.00</Typography>
                                <Typography variant="h6" color="initial" fontFamily={'Archivo Black, sans-serif'} fontSize={16} textAlign={'start'} style={{color:'blue', textAlign:'center', width:'50%' }}>$83.00</Typography>
                            </Box>
                            <Box >
                                <Button style={{border:'2px solid #b42981', backgroundImage:'linear-gradient(to right, #FF6464 0%, #FF6464  51%, #FF81CE  100%)', textTransform: 'uppercase', transition: '0.5s', color: 'white', borderStyle:'none', borderRadius:'50px', fontFamily:'Archivo Black, sans-serif', padding:'10px', width:'200px' }}>
                                    Ver
                                </Button>
                            </Box>
                        </Grid>
                        <Grid item sm={12}  md={4} lg={3} sx={stylesComponents.contenedorProducto}>
                            <Box display={'flex'} style={{justifyContent:'center'}}>
                                <Grid style={{width:'235px', height:'300px'}}>
                                    <img src={product9} alt="" width={'100%'} height={'100%'} style={{ objectFit: 'cover'}}/>
                                </Grid>
                            </Box>
                            <Box p={1}>
                                <Typography variant="h6" color="initial" fontFamily={'Montserrat, sans-serif'} fontSize={16} textAlign={'start'} style={{color:'#404040', textAlign:'center'}}>Arreglo Multicolor</Typography>
                                <Typography variant="h6" color="initial" fontFamily={'Archivo Black, sans-serif'} fontSize={16} textAlign={'start'} style={{color:'#404040', textAlign:'center' }}>$100.00</Typography>
                            </Box>
                            <Box >
                                <Button style={{border:'2px solid #b42981', backgroundImage:'linear-gradient(to right, #FF6464 0%, #FF6464  51%, #FF81CE  100%)', textTransform: 'uppercase', transition: '0.5s', color: 'white', borderStyle:'none', borderRadius:'50px', fontFamily:'Archivo Black, sans-serif', padding:'10px', width:'200px' }}>
                                    Ver
                                </Button>
                            </Box>
                        </Grid>
                        <Grid item sm={12}  md={4} lg={3} sx={stylesComponents.contenedorProducto}>
                            <Box display={'flex'} style={{justifyContent:'center'}}>
                                <Grid style={{width:'235px', height:'300px'}}>
                                    <img src={product10} alt="" width={'100%'} height={'100%'} style={{ objectFit: 'cover'}}/>
                                </Grid>
                            </Box>
                            <Box p={1}>
                                <Typography variant="h6" color="initial" fontFamily={'Montserrat, sans-serif'} fontSize={16} textAlign={'start'} style={{color:'#404040', textAlign:'center'}}>Arreglo Multicolor</Typography>
                                <Typography variant="h6" color="initial" fontFamily={'Archivo Black, sans-serif'} fontSize={16} textAlign={'start'} style={{color:'#404040', textAlign:'center' }}>$100.00</Typography>
                            </Box>
                            <Box >
                                <Button style={{border:'2px solid #b42981', backgroundImage:'linear-gradient(to right, #FF6464 0%, #FF6464  51%, #FF81CE  100%)', textTransform: 'uppercase', transition: '0.5s', color: 'white', borderStyle:'none', borderRadius:'50px', fontFamily:'Archivo Black, sans-serif', padding:'10px', width:'200px' }}>
                                    Ver
                                </Button>
                        </Box>
                        </Grid>
                        <Grid item sm={12}  md={4} lg={3} sx={stylesComponents.contenedorProducto}>
                            <Box display={'flex'} style={{justifyContent:'center'}}>
                                <Grid style={{width:'235px', height:'300px'}}>
                                    <img src={product11} alt="" width={'100%'} height={'100%'} style={{ objectFit: 'cover'}}/>
                                </Grid>
                            </Box>
                            <Box p={1}>
                                <Typography variant="h6" color="initial" fontFamily={'Montserrat, sans-serif'} fontSize={16} textAlign={'start'} style={{color:'#404040', textAlign:'center'}}>Arreglo Multicolor</Typography>
                                <Typography variant="h6" color="initial" fontFamily={'Archivo Black, sans-serif'} fontSize={16} textAlign={'start'} style={{color:'#404040', textAlign:'center' }}>$100.00</Typography>
                            </Box>
                            <Box >
                                <Button style={{border:'2px solid #b42981', backgroundImage:'linear-gradient(to right, #FF6464 0%, #FF6464  51%, #FF81CE  100%)', textTransform: 'uppercase', transition: '0.5s', color: 'white', borderStyle:'none', borderRadius:'50px', fontFamily:'Archivo Black, sans-serif', padding:'10px', width:'200px' }}>
                                    Ver
                                </Button>
                        </Box>
                        </Grid>

                        <Grid item sm={12}  md={4} lg={3} sx={stylesComponents.contenedorProducto}>
                            <Box display={'flex'} style={{justifyContent:'center'}}>
                                <Grid style={{width:'235px', height:'300px'}}>
                                    <img src={product1} alt="" width={'100%'} height={'100%'} style={{ objectFit: 'cover'}}/>
                                </Grid>
                            </Box>
                            <Box p={1}>
                                <Typography variant="h6" color="initial" fontFamily={'Montserrat, sans-serif'} fontSize={16} textAlign={'start'} style={{color:'#404040', textAlign:'center'}}>Arreglo Multicolor</Typography>
                                <Typography variant="h6" color="initial" fontFamily={'Archivo Black, sans-serif'} fontSize={16} textAlign={'start'} style={{color:'#404040', textAlign:'center' }}>$100.00</Typography>
                            </Box>
                            <Box >
                                <Button style={{border:'2px solid #b42981', backgroundImage:'linear-gradient(to right, #FF6464 0%, #FF6464  51%, #FF81CE  100%)', textTransform: 'uppercase', transition: '0.5s', color: 'white', borderStyle:'none', borderRadius:'50px', fontFamily:'Archivo Black, sans-serif', padding:'10px', width:'200px' }}>
                                    Ver
                                </Button>
                            </Box>
                        </Grid>
                        <Grid item sm={12}  md={4} lg={3} sx={stylesComponents.contenedorProducto}>
                                <Box display={'flex'} style={{justifyContent:'center'}}>
                                    <Grid style={{width:'235px', height:'300px'}}>
                                        <img src={product2} alt="" width={'100%'} height={'100%'} style={{ objectFit: 'cover'}}/>
                                    </Grid>
                                </Box>
                                <Box p={1}>
                                    <Typography variant="h6" color="initial" fontFamily={'Montserrat, sans-serif'} fontSize={16} textAlign={'start'} style={{color:'#404040', textAlign:'center'}}>Arreglo Multicolor</Typography>
                                    <Typography variant="h6" color="initial" fontFamily={'Archivo Black, sans-serif'} fontSize={16} textAlign={'start'} style={{color:'#404040', textAlign:'center' }}>$100.00</Typography>
                                </Box>
                                <Box >
                                    <Button style={{border:'2px solid #b42981', backgroundImage:'linear-gradient(to right, #FF6464 0%, #FF6464  51%, #FF81CE  100%)', textTransform: 'uppercase', transition: '0.5s', color: 'white', borderStyle:'none', borderRadius:'50px', fontFamily:'Archivo Black, sans-serif', padding:'10px', width:'200px' }}>
                                        Ver
                                    </Button>
                            </Box>
                        </Grid>
                        <Grid item sm={12}  md={4} lg={3} sx={stylesComponents.contenedorProducto}>
                            <Box display={'flex'} style={{justifyContent:'center'}}>
                                <Grid style={{width:'235px', height:'300px'}}>
                                    <img src={product3} alt="" width={'100%'} height={'100%'} style={{ objectFit: 'cover'}}/>
                                </Grid>
                            </Box>
                            <Box p={1}>
                                <Typography variant="h6" color="initial" fontFamily={'Montserrat, sans-serif'} fontSize={16} textAlign={'start'} style={{color:'#404040', textAlign:'center'}}>Arreglo Multicolor</Typography>
                                <Typography variant="h6" color="initial" fontFamily={'Archivo Black, sans-serif'} fontSize={16} textAlign={'start'} style={{color:'#404040', textAlign:'center' }}>$100.00</Typography>
                            </Box>
                            <Box >
                                <Button style={{border:'2px solid #b42981', backgroundImage:'linear-gradient(to right, #FF6464 0%, #FF6464  51%, #FF81CE  100%)', textTransform: 'uppercase', transition: '0.5s', color: 'white', borderStyle:'none', borderRadius:'50px', fontFamily:'Archivo Black, sans-serif', padding:'10px', width:'200px' }}>
                                    Ver
                                </Button>
                        </Box>
                        </Grid>
                        <Grid item sm={12}  md={4} lg={3} sx={stylesComponents.contenedorProducto}>
                            <Box display={'flex'} style={{justifyContent:'center'}}>
                                <Grid style={{width:'235px', height:'300px'}}>
                                    <img src={product4} alt="" width={'100%'} height={'100%'} style={{ objectFit: 'cover'}}/>
                                </Grid>
                            </Box>
                            <Box p={1}>
                                <Typography variant="h6" color="initial" fontFamily={'Montserrat, sans-serif'} fontSize={16} textAlign={'start'} style={{color:'#404040', textAlign:'center'}}>Arreglo Multicolor</Typography>
                            </Box>
                            <Box display={'flex'}>
                                <Typography variant="h6" color="initial" fontFamily={'Archivo Black, sans-serif'} fontSize={16} textAlign={'start'} style={{color:'red', textAlign:'center', width:'50%',  textDecorationLine: 'line-through' }}>$100.00</Typography>
                                <Typography variant="h6" color="initial" fontFamily={'Archivo Black, sans-serif'} fontSize={16} textAlign={'start'} style={{color:'blue', textAlign:'center', width:'50%' }}>$83.00</Typography>
                            </Box>
                            <Box >
                                <Button style={{border:'2px solid #b42981', backgroundImage:'linear-gradient(to right, #FF6464 0%, #FF6464  51%, #FF81CE  100%)', textTransform: 'uppercase', transition: '0.5s', color: 'white', borderStyle:'none', borderRadius:'50px', fontFamily:'Archivo Black, sans-serif', padding:'10px', width:'200px' }}>
                                    Ver
                                </Button>
                        </Box>
                        </Grid>
                        <Grid item sm={12}  md={4} lg={3} sx={stylesComponents.contenedorProducto}>
                            <Box display={'flex'} style={{justifyContent:'center'}}>
                                <Grid style={{width:'235px', height:'300px'}}>
                                    <img src={product5} alt="" width={'100%'} height={'100%'} style={{ objectFit: 'cover'}}/>
                                </Grid>
                            </Box>
                            <Box p={1}>
                                <Typography variant="h6" color="initial" fontFamily={'Montserrat, sans-serif'} fontSize={16} textAlign={'start'} style={{color:'#404040', textAlign:'center'}}>Arreglo Multicolor</Typography>
                                <Typography variant="h6" color="initial" fontFamily={'Archivo Black, sans-serif'} fontSize={16} textAlign={'start'} style={{color:'#404040', textAlign:'center' }}>$100.00</Typography>
                            </Box>
                            <Box >
                                <Button style={{border:'2px solid #b42981', backgroundImage:'linear-gradient(to right, #FF6464 0%, #FF6464  51%, #FF81CE  100%)', textTransform: 'uppercase', transition: '0.5s', color: 'white', borderStyle:'none', borderRadius:'50px', fontFamily:'Archivo Black, sans-serif', padding:'10px', width:'200px' }}>
                                    Ver
                                </Button>
                            </Box>
                        </Grid>
                        <Grid item sm={12}  md={4} lg={3} sx={stylesComponents.contenedorProducto}>
                            <Box display={'flex'} style={{justifyContent:'center'}}>
                                <Grid style={{width:'235px', height:'300px'}}>
                                    <img src={product6} alt="" width={'100%'} height={'100%'} style={{ objectFit: 'cover'}}/>
                                </Grid>
                            </Box>
                            <Box p={1}>
                                <Typography variant="h6" color="initial" fontFamily={'Montserrat, sans-serif'} fontSize={16} textAlign={'start'} style={{color:'#404040', textAlign:'center'}}>Arreglo Multicolor</Typography>
                                <Typography variant="h6" color="initial" fontFamily={'Archivo Black, sans-serif'} fontSize={16} textAlign={'start'} style={{color:'#404040', textAlign:'center' }}>$100.00</Typography>
                            </Box>
                            <Box >
                                <Button style={{border:'2px solid #b42981', backgroundImage:'linear-gradient(to right, #FF6464 0%, #FF6464  51%, #FF81CE  100%)', textTransform: 'uppercase', transition: '0.5s', color: 'white', borderStyle:'none', borderRadius:'50px', fontFamily:'Archivo Black, sans-serif', padding:'10px', width:'200px' }}>
                                    Ver
                                </Button>
                        </Box>
                        </Grid>
                        <Grid item sm={12}  md={4} lg={3} sx={stylesComponents.contenedorProducto}>
                            <Box display={'flex'} style={{justifyContent:'center'}}>
                                <Grid style={{width:'235px', height:'300px'}}>
                                    <img src={product7} alt="" width={'100%'} height={'100%'} style={{ objectFit: 'cover'}}/>
                                </Grid>
                            </Box>
                            <Box p={1}>
                                <Typography variant="h6" color="initial" fontFamily={'Montserrat, sans-serif'} fontSize={16} textAlign={'start'} style={{color:'#404040', textAlign:'center'}}>Arreglo Multicolor</Typography>
                                <Typography variant="h6" color="initial" fontFamily={'Archivo Black, sans-serif'} fontSize={16} textAlign={'start'} style={{color:'#404040', textAlign:'center' }}>$100.00</Typography>
                            </Box>
                            <Box >
                                <Button style={{border:'2px solid #b42981', backgroundImage:'linear-gradient(to right, #FF6464 0%, #FF6464  51%, #FF81CE  100%)', textTransform: 'uppercase', transition: '0.5s', color: 'white', borderStyle:'none', borderRadius:'50px', fontFamily:'Archivo Black, sans-serif', padding:'10px', width:'200px' }}>
                                    Ver
                                </Button>
                        </Box>
                        </Grid>
                        <Grid item sm={12}  md={4} lg={3} sx={stylesComponents.contenedorProducto}>
                            <Box display={'flex'} style={{justifyContent:'center'}}>
                                <Grid style={{width:'235px', height:'300px'}}>
                                    <img src={product8} alt="" width={'100%'} height={'100%'} style={{ objectFit: 'cover'}}/>
                                </Grid>
                            </Box>
                            <Box p={1}>
                                <Typography variant="h6" color="initial" fontFamily={'Montserrat, sans-serif'} fontSize={16} textAlign={'start'} style={{color:'#404040', textAlign:'center'}}>Arreglo Multicolor</Typography>
                            </Box>
                            <Box display={'flex'}>
                                <Typography variant="h6" color="initial" fontFamily={'Archivo Black, sans-serif'} fontSize={16} textAlign={'start'} style={{color:'red', textAlign:'center', width:'50%',  textDecorationLine: 'line-through' }}>$100.00</Typography>
                                <Typography variant="h6" color="initial" fontFamily={'Archivo Black, sans-serif'} fontSize={16} textAlign={'start'} style={{color:'blue', textAlign:'center', width:'50%' }}>$83.00</Typography>
                            </Box>
                            <Box >
                                <Button style={{border:'2px solid #b42981', backgroundImage:'linear-gradient(to right, #FF6464 0%, #FF6464  51%, #FF81CE  100%)', textTransform: 'uppercase', transition: '0.5s', color: 'white', borderStyle:'none', borderRadius:'50px', fontFamily:'Archivo Black, sans-serif', padding:'10px', width:'200px' }}>
                                    Ver
                                </Button>
                        </Box>
                        </Grid>
                        <Grid item sm={12}  md={4} lg={3} sx={stylesComponents.contenedorProducto}>
                            <Box display={'flex'} style={{justifyContent:'center'}}>
                                <Grid style={{width:'235px', height:'300px'}}>
                                    <img src={product9} alt="" width={'100%'} height={'100%'} style={{ objectFit: 'cover'}}/>
                                </Grid>
                            </Box>
                            <Box p={1}>
                                <Typography variant="h6" color="initial" fontFamily={'Montserrat, sans-serif'} fontSize={16} textAlign={'start'} style={{color:'#404040', textAlign:'center'}}>Arreglo Multicolor</Typography>
                                <Typography variant="h6" color="initial" fontFamily={'Archivo Black, sans-serif'} fontSize={16} textAlign={'start'} style={{color:'#404040', textAlign:'center' }}>$100.00</Typography>
                            </Box>
                            <Box >
                                <Button style={{border:'2px solid #b42981', backgroundImage:'linear-gradient(to right, #FF6464 0%, #FF6464  51%, #FF81CE  100%)', textTransform: 'uppercase', transition: '0.5s', color: 'white', borderStyle:'none', borderRadius:'50px', fontFamily:'Archivo Black, sans-serif', padding:'10px', width:'200px' }}>
                                    Ver
                                </Button>
                            </Box>
                        </Grid>
                        <Grid item sm={12}  md={4} lg={3} sx={stylesComponents.contenedorProducto}>
                            <Box display={'flex'} style={{justifyContent:'center'}}>
                                <Grid style={{width:'235px', height:'300px'}}>
                                    <img src={product10} alt="" width={'100%'} height={'100%'} style={{ objectFit: 'cover'}}/>
                                </Grid>
                            </Box>
                            <Box p={1}>
                                <Typography variant="h6" color="initial" fontFamily={'Montserrat, sans-serif'} fontSize={16} textAlign={'start'} style={{color:'#404040', textAlign:'center'}}>Arreglo Multicolor</Typography>
                                <Typography variant="h6" color="initial" fontFamily={'Archivo Black, sans-serif'} fontSize={16} textAlign={'start'} style={{color:'#404040', textAlign:'center' }}>$100.00</Typography>
                            </Box>
                            <Box >
                                <Button style={{border:'2px solid #b42981', backgroundImage:'linear-gradient(to right, #FF6464 0%, #FF6464  51%, #FF81CE  100%)', textTransform: 'uppercase', transition: '0.5s', color: 'white', borderStyle:'none', borderRadius:'50px', fontFamily:'Archivo Black, sans-serif', padding:'10px', width:'200px' }}>
                                    Ver
                                </Button>
                        </Box>
                        </Grid>
                        <Grid item sm={12}  md={4} lg={3} sx={stylesComponents.contenedorProducto}>
                            <Box display={'flex'} style={{justifyContent:'center'}}>
                                <Grid style={{width:'235px', height:'300px'}}>
                                    <img src={product11} alt="" width={'100%'} height={'100%'} style={{ objectFit: 'cover'}}/>
                                </Grid>
                            </Box>
                            <Box p={1}>
                                <Typography variant="h6" color="initial" fontFamily={'Montserrat, sans-serif'} fontSize={16} textAlign={'start'} style={{color:'#404040', textAlign:'center'}}>Arreglo Multicolor</Typography>
                                <Typography variant="h6" color="initial" fontFamily={'Archivo Black, sans-serif'} fontSize={16} textAlign={'start'} style={{color:'#404040', textAlign:'center' }}>$100.00</Typography>
                            </Box>
                            <Box >
                                <Button style={{border:'2px solid #b42981', backgroundImage:'linear-gradient(to right, #FF6464 0%, #FF6464  51%, #FF81CE  100%)', textTransform: 'uppercase', transition: '0.5s', color: 'white', borderStyle:'none', borderRadius:'50px', fontFamily:'Archivo Black, sans-serif', padding:'10px', width:'200px' }}>
                                    Ver
                                </Button>
                        </Box>
                        </Grid>


                        <Grid item sm={12}  md={4} lg={3} sx={stylesComponents.contenedorProducto}>
                            <Box display={'flex'} style={{justifyContent:'center'}}>
                                <Grid style={{width:'235px', height:'300px'}}>
                                    <img src={product1} alt="" width={'100%'} height={'100%'} style={{ objectFit: 'cover'}}/>
                                </Grid>
                            </Box>
                            <Box p={1}>
                                <Typography variant="h6" color="initial" fontFamily={'Montserrat, sans-serif'} fontSize={16} textAlign={'start'} style={{color:'#404040', textAlign:'center'}}>Arreglo Multicolor</Typography>
                                <Typography variant="h6" color="initial" fontFamily={'Archivo Black, sans-serif'} fontSize={16} textAlign={'start'} style={{color:'#404040', textAlign:'center' }}>$100.00</Typography>
                            </Box>
                            <Box >
                                <Button style={{border:'2px solid #b42981', backgroundImage:'linear-gradient(to right, #FF6464 0%, #FF6464  51%, #FF81CE  100%)', textTransform: 'uppercase', transition: '0.5s', color: 'white', borderStyle:'none', borderRadius:'50px', fontFamily:'Archivo Black, sans-serif', padding:'10px', width:'200px' }}>
                                    Ver
                                </Button>
                            </Box>
                        </Grid>
                        <Grid item sm={12}  md={4} lg={3} sx={stylesComponents.contenedorProducto}>
                                <Box display={'flex'} style={{justifyContent:'center'}}>
                                    <Grid style={{width:'235px', height:'300px'}}>
                                        <img src={product2} alt="" width={'100%'} height={'100%'} style={{ objectFit: 'cover'}}/>
                                    </Grid>
                                </Box>
                                <Box p={1}>
                                    <Typography variant="h6" color="initial" fontFamily={'Montserrat, sans-serif'} fontSize={16} textAlign={'start'} style={{color:'#404040', textAlign:'center'}}>Arreglo Multicolor</Typography>
                                    <Typography variant="h6" color="initial" fontFamily={'Archivo Black, sans-serif'} fontSize={16} textAlign={'start'} style={{color:'#404040', textAlign:'center' }}>$100.00</Typography>
                                </Box>
                                <Box >
                                    <Button style={{border:'2px solid #b42981', backgroundImage:'linear-gradient(to right, #FF6464 0%, #FF6464  51%, #FF81CE  100%)', textTransform: 'uppercase', transition: '0.5s', color: 'white', borderStyle:'none', borderRadius:'50px', fontFamily:'Archivo Black, sans-serif', padding:'10px', width:'200px' }}>
                                        Ver
                                    </Button>
                            </Box>
                        </Grid>
                        <Grid item sm={12}  md={4} lg={3} sx={stylesComponents.contenedorProducto}>
                            <Box display={'flex'} style={{justifyContent:'center'}}>
                                <Grid style={{width:'235px', height:'300px'}}>
                                    <img src={product3} alt="" width={'100%'} height={'100%'} style={{ objectFit: 'cover'}}/>
                                </Grid>
                            </Box>
                            <Box p={1}>
                                <Typography variant="h6" color="initial" fontFamily={'Montserrat, sans-serif'} fontSize={16} textAlign={'start'} style={{color:'#404040', textAlign:'center'}}>Arreglo Multicolor</Typography>
                                <Typography variant="h6" color="initial" fontFamily={'Archivo Black, sans-serif'} fontSize={16} textAlign={'start'} style={{color:'#404040', textAlign:'center' }}>$100.00</Typography>
                            </Box>
                            <Box >
                                <Button style={{border:'2px solid #b42981', backgroundImage:'linear-gradient(to right, #FF6464 0%, #FF6464  51%, #FF81CE  100%)', textTransform: 'uppercase', transition: '0.5s', color: 'white', borderStyle:'none', borderRadius:'50px', fontFamily:'Archivo Black, sans-serif', padding:'10px', width:'200px' }}>
                                    Ver
                                </Button>
                        </Box>
                        </Grid>
                        <Grid item sm={12}  md={4} lg={3} sx={stylesComponents.contenedorProducto}>
                            <Box display={'flex'} style={{justifyContent:'center'}}>
                                <Grid style={{width:'235px', height:'300px'}}>
                                    <img src={product4} alt="" width={'100%'} height={'100%'} style={{ objectFit: 'cover'}}/>
                                </Grid>
                            </Box>
                            <Box p={1}>
                                <Typography variant="h6" color="initial" fontFamily={'Montserrat, sans-serif'} fontSize={16} textAlign={'start'} style={{color:'#404040', textAlign:'center'}}>Arreglo Multicolor</Typography>
                            </Box>
                            <Box display={'flex'}>
                                <Typography variant="h6" color="initial" fontFamily={'Archivo Black, sans-serif'} fontSize={16} textAlign={'start'} style={{color:'red', textAlign:'center', width:'50%',  textDecorationLine: 'line-through' }}>$100.00</Typography>
                                <Typography variant="h6" color="initial" fontFamily={'Archivo Black, sans-serif'} fontSize={16} textAlign={'start'} style={{color:'blue', textAlign:'center', width:'50%' }}>$83.00</Typography>
                            </Box>
                            <Box >
                                <Button style={{border:'2px solid #b42981', backgroundImage:'linear-gradient(to right, #FF6464 0%, #FF6464  51%, #FF81CE  100%)', textTransform: 'uppercase', transition: '0.5s', color: 'white', borderStyle:'none', borderRadius:'50px', fontFamily:'Archivo Black, sans-serif', padding:'10px', width:'200px' }}>
                                    Ver
                                </Button>
                        </Box>
                        </Grid>
                        <Grid item sm={12}  md={4} lg={3} sx={stylesComponents.contenedorProducto}>
                            <Box display={'flex'} style={{justifyContent:'center'}}>
                                <Grid style={{width:'235px', height:'300px'}}>
                                    <img src={product5} alt="" width={'100%'} height={'100%'} style={{ objectFit: 'cover'}}/>
                                </Grid>
                            </Box>
                            <Box p={1}>
                                <Typography variant="h6" color="initial" fontFamily={'Montserrat, sans-serif'} fontSize={16} textAlign={'start'} style={{color:'#404040', textAlign:'center'}}>Arreglo Multicolor</Typography>
                                <Typography variant="h6" color="initial" fontFamily={'Archivo Black, sans-serif'} fontSize={16} textAlign={'start'} style={{color:'#404040', textAlign:'center' }}>$100.00</Typography>
                            </Box>
                            <Box >
                                <Button style={{border:'2px solid #b42981', backgroundImage:'linear-gradient(to right, #FF6464 0%, #FF6464  51%, #FF81CE  100%)', textTransform: 'uppercase', transition: '0.5s', color: 'white', borderStyle:'none', borderRadius:'50px', fontFamily:'Archivo Black, sans-serif', padding:'10px', width:'200px' }}>
                                    Ver
                                </Button>
                            </Box>
                        </Grid>
                        <Grid item sm={12}  md={4} lg={3} sx={stylesComponents.contenedorProducto}>
                            <Box display={'flex'} style={{justifyContent:'center'}}>
                                <Grid style={{width:'235px', height:'300px'}}>
                                    <img src={product6} alt="" width={'100%'} height={'100%'} style={{ objectFit: 'cover'}}/>
                                </Grid>
                            </Box>
                            <Box p={1}>
                                <Typography variant="h6" color="initial" fontFamily={'Montserrat, sans-serif'} fontSize={16} textAlign={'start'} style={{color:'#404040', textAlign:'center'}}>Arreglo Multicolor</Typography>
                                <Typography variant="h6" color="initial" fontFamily={'Archivo Black, sans-serif'} fontSize={16} textAlign={'start'} style={{color:'#404040', textAlign:'center' }}>$100.00</Typography>
                            </Box>
                            <Box >
                                <Button style={{border:'2px solid #b42981', backgroundImage:'linear-gradient(to right, #FF6464 0%, #FF6464  51%, #FF81CE  100%)', textTransform: 'uppercase', transition: '0.5s', color: 'white', borderStyle:'none', borderRadius:'50px', fontFamily:'Archivo Black, sans-serif', padding:'10px', width:'200px' }}>
                                    Ver
                                </Button>
                        </Box>
                        </Grid>
                        <Grid item sm={12}  md={4} lg={3} sx={stylesComponents.contenedorProducto}>
                            <Box display={'flex'} style={{justifyContent:'center'}}>
                                <Grid style={{width:'235px', height:'300px'}}>
                                    <img src={product7} alt="" width={'100%'} height={'100%'} style={{ objectFit: 'cover'}}/>
                                </Grid>
                            </Box>
                            <Box p={1}>
                                <Typography variant="h6" color="initial" fontFamily={'Montserrat, sans-serif'} fontSize={16} textAlign={'start'} style={{color:'#404040', textAlign:'center'}}>Arreglo Multicolor</Typography>
                                <Typography variant="h6" color="initial" fontFamily={'Archivo Black, sans-serif'} fontSize={16} textAlign={'start'} style={{color:'#404040', textAlign:'center' }}>$100.00</Typography>
                            </Box>
                            <Box >
                                <Button style={{border:'2px solid #b42981', backgroundImage:'linear-gradient(to right, #FF6464 0%, #FF6464  51%, #FF81CE  100%)', textTransform: 'uppercase', transition: '0.5s', color: 'white', borderStyle:'none', borderRadius:'50px', fontFamily:'Archivo Black, sans-serif', padding:'10px', width:'200px' }}>
                                    Ver
                                </Button>
                        </Box>
                        </Grid>
                        <Grid item sm={12}  md={4} lg={3} sx={stylesComponents.contenedorProducto}>
                            <Box display={'flex'} style={{justifyContent:'center'}}>
                                <Grid style={{width:'235px', height:'300px'}}>
                                    <img src={product8} alt="" width={'100%'} height={'100%'} style={{ objectFit: 'cover'}}/>
                                </Grid>
                            </Box>
                            <Box p={1}>
                                <Typography variant="h6" color="initial" fontFamily={'Montserrat, sans-serif'} fontSize={16} textAlign={'start'} style={{color:'#404040', textAlign:'center'}}>Arreglo Multicolor</Typography>
                            </Box>
                            <Box display={'flex'}>
                                <Typography variant="h6" color="initial" fontFamily={'Archivo Black, sans-serif'} fontSize={16} textAlign={'start'} style={{color:'red', textAlign:'center', width:'50%',  textDecorationLine: 'line-through' }}>$100.00</Typography>
                                <Typography variant="h6" color="initial" fontFamily={'Archivo Black, sans-serif'} fontSize={16} textAlign={'start'} style={{color:'blue', textAlign:'center', width:'50%' }}>$83.00</Typography>
                            </Box>
                            <Box >
                                <Button style={{border:'2px solid #b42981', backgroundImage:'linear-gradient(to right, #FF6464 0%, #FF6464  51%, #FF81CE  100%)', textTransform: 'uppercase', transition: '0.5s', color: 'white', borderStyle:'none', borderRadius:'50px', fontFamily:'Archivo Black, sans-serif', padding:'10px', width:'200px' }}>
                                    Ver
                                </Button>
                        </Box>
                        </Grid>
                        <Grid item sm={12}  md={4} lg={3} sx={stylesComponents.contenedorProducto}>
                            <Box display={'flex'} style={{justifyContent:'center'}}>
                                <Grid style={{width:'235px', height:'300px'}}>
                                    <img src={product9} alt="" width={'100%'} height={'100%'} style={{ objectFit: 'cover'}}/>
                                </Grid>
                            </Box>
                            <Box p={1}>
                                <Typography variant="h6" color="initial" fontFamily={'Montserrat, sans-serif'} fontSize={16} textAlign={'start'} style={{color:'#404040', textAlign:'center'}}>Arreglo Multicolor</Typography>
                                <Typography variant="h6" color="initial" fontFamily={'Archivo Black, sans-serif'} fontSize={16} textAlign={'start'} style={{color:'#404040', textAlign:'center' }}>$100.00</Typography>
                            </Box>
                            <Box >
                                <Button style={{border:'2px solid #b42981', backgroundImage:'linear-gradient(to right, #FF6464 0%, #FF6464  51%, #FF81CE  100%)', textTransform: 'uppercase', transition: '0.5s', color: 'white', borderStyle:'none', borderRadius:'50px', fontFamily:'Archivo Black, sans-serif', padding:'10px', width:'200px' }}>
                                    Ver
                                </Button>
                            </Box>
                        </Grid>
                        <Grid item sm={12}  md={4} lg={3} sx={stylesComponents.contenedorProducto}>
                            <Box display={'flex'} style={{justifyContent:'center'}}>
                                <Grid style={{width:'235px', height:'300px'}}>
                                    <img src={product10} alt="" width={'100%'} height={'100%'} style={{ objectFit: 'cover'}}/>
                                </Grid>
                            </Box>
                            <Box p={1}>
                                <Typography variant="h6" color="initial" fontFamily={'Montserrat, sans-serif'} fontSize={16} textAlign={'start'} style={{color:'#404040', textAlign:'center'}}>Arreglo Multicolor</Typography>
                                <Typography variant="h6" color="initial" fontFamily={'Archivo Black, sans-serif'} fontSize={16} textAlign={'start'} style={{color:'#404040', textAlign:'center' }}>$100.00</Typography>
                            </Box>
                            <Box >
                                <Button style={{border:'2px solid #b42981', backgroundImage:'linear-gradient(to right, #FF6464 0%, #FF6464  51%, #FF81CE  100%)', textTransform: 'uppercase', transition: '0.5s', color: 'white', borderStyle:'none', borderRadius:'50px', fontFamily:'Archivo Black, sans-serif', padding:'10px', width:'200px' }}>
                                    Ver
                                </Button>
                        </Box>
                        </Grid>
                        <Grid item sm={12}  md={4} lg={3} sx={stylesComponents.contenedorProducto}>
                            <Box display={'flex'} style={{justifyContent:'center'}}>
                                <Grid style={{width:'235px', height:'300px'}}>
                                    <img src={product11} alt="" width={'100%'} height={'100%'} style={{ objectFit: 'cover'}}/>
                                </Grid>
                            </Box>
                            <Box p={1}>
                                <Typography variant="h6" color="initial" fontFamily={'Montserrat, sans-serif'} fontSize={16} textAlign={'start'} style={{color:'#404040', textAlign:'center'}}>Arreglo Multicolor</Typography>
                                <Typography variant="h6" color="initial" fontFamily={'Archivo Black, sans-serif'} fontSize={16} textAlign={'start'} style={{color:'#404040', textAlign:'center' }}>$100.00</Typography>
                            </Box>
                            <Box >
                                <Button style={{border:'2px solid #b42981', backgroundImage:'linear-gradient(to right, #FF6464 0%, #FF6464  51%, #FF81CE  100%)', textTransform: 'uppercase', transition: '0.5s', color: 'white', borderStyle:'none', borderRadius:'50px', fontFamily:'Archivo Black, sans-serif', padding:'10px', width:'200px' }}>
                                    Ver
                                </Button>
                        </Box>
                        </Grid>



                        <Grid item sm={12}  md={4} lg={3} sx={stylesComponents.contenedorProducto}>
                            <Box display={'flex'} style={{justifyContent:'center'}}>
                                <Grid style={{width:'235px', height:'300px'}}>
                                    <img src={product1} alt="" width={'100%'} height={'100%'} style={{ objectFit: 'cover'}}/>
                                </Grid>
                            </Box>
                            <Box p={1}>
                                <Typography variant="h6" color="initial" fontFamily={'Montserrat, sans-serif'} fontSize={16} textAlign={'start'} style={{color:'#404040', textAlign:'center'}}>Arreglo Multicolor</Typography>
                                <Typography variant="h6" color="initial" fontFamily={'Archivo Black, sans-serif'} fontSize={16} textAlign={'start'} style={{color:'#404040', textAlign:'center' }}>$100.00</Typography>
                            </Box>
                            <Box >
                                <Button style={{border:'2px solid #b42981', backgroundImage:'linear-gradient(to right, #FF6464 0%, #FF6464  51%, #FF81CE  100%)', textTransform: 'uppercase', transition: '0.5s', color: 'white', borderStyle:'none', borderRadius:'50px', fontFamily:'Archivo Black, sans-serif', padding:'10px', width:'200px' }}>
                                    Ver
                                </Button>
                            </Box>
                        </Grid>
                        <Grid item sm={12}  md={4} lg={3} sx={stylesComponents.contenedorProducto}>
                                <Box display={'flex'} style={{justifyContent:'center'}}>
                                    <Grid style={{width:'235px', height:'300px'}}>
                                        <img src={product2} alt="" width={'100%'} height={'100%'} style={{ objectFit: 'cover'}}/>
                                    </Grid>
                                </Box>
                                <Box p={1}>
                                    <Typography variant="h6" color="initial" fontFamily={'Montserrat, sans-serif'} fontSize={16} textAlign={'start'} style={{color:'#404040', textAlign:'center'}}>Arreglo Multicolor</Typography>
                                    <Typography variant="h6" color="initial" fontFamily={'Archivo Black, sans-serif'} fontSize={16} textAlign={'start'} style={{color:'#404040', textAlign:'center' }}>$100.00</Typography>
                                </Box>
                                <Box >
                                    <Button style={{border:'2px solid #b42981', backgroundImage:'linear-gradient(to right, #FF6464 0%, #FF6464  51%, #FF81CE  100%)', textTransform: 'uppercase', transition: '0.5s', color: 'white', borderStyle:'none', borderRadius:'50px', fontFamily:'Archivo Black, sans-serif', padding:'10px', width:'200px' }}>
                                        Ver
                                    </Button>
                            </Box>
                        </Grid>
                        <Grid item sm={12}  md={4} lg={3} sx={stylesComponents.contenedorProducto}>
                            <Box display={'flex'} style={{justifyContent:'center'}}>
                                <Grid style={{width:'235px', height:'300px'}}>
                                    <img src={product3} alt="" width={'100%'} height={'100%'} style={{ objectFit: 'cover'}}/>
                                </Grid>
                            </Box>
                            <Box p={1}>
                                <Typography variant="h6" color="initial" fontFamily={'Montserrat, sans-serif'} fontSize={16} textAlign={'start'} style={{color:'#404040', textAlign:'center'}}>Arreglo Multicolor</Typography>
                                <Typography variant="h6" color="initial" fontFamily={'Archivo Black, sans-serif'} fontSize={16} textAlign={'start'} style={{color:'#404040', textAlign:'center' }}>$100.00</Typography>
                            </Box>
                            <Box >
                                <Button style={{border:'2px solid #b42981', backgroundImage:'linear-gradient(to right, #FF6464 0%, #FF6464  51%, #FF81CE  100%)', textTransform: 'uppercase', transition: '0.5s', color: 'white', borderStyle:'none', borderRadius:'50px', fontFamily:'Archivo Black, sans-serif', padding:'10px', width:'200px' }}>
                                    Ver
                                </Button>
                        </Box>
                        </Grid>
                        <Grid item sm={12}  md={4} lg={3} sx={stylesComponents.contenedorProducto}>
                            <Box display={'flex'} style={{justifyContent:'center'}}>
                                <Grid style={{width:'235px', height:'300px'}}>
                                    <img src={product4} alt="" width={'100%'} height={'100%'} style={{ objectFit: 'cover'}}/>
                                </Grid>
                            </Box>
                            <Box p={1}>
                                <Typography variant="h6" color="initial" fontFamily={'Montserrat, sans-serif'} fontSize={16} textAlign={'start'} style={{color:'#404040', textAlign:'center'}}>Arreglo Multicolor</Typography>
                            </Box>
                            <Box display={'flex'}>
                                <Typography variant="h6" color="initial" fontFamily={'Archivo Black, sans-serif'} fontSize={16} textAlign={'start'} style={{color:'red', textAlign:'center', width:'50%',  textDecorationLine: 'line-through' }}>$100.00</Typography>
                                <Typography variant="h6" color="initial" fontFamily={'Archivo Black, sans-serif'} fontSize={16} textAlign={'start'} style={{color:'blue', textAlign:'center', width:'50%' }}>$83.00</Typography>
                            </Box>
                            <Box >
                                <Button style={{border:'2px solid #b42981', backgroundImage:'linear-gradient(to right, #FF6464 0%, #FF6464  51%, #FF81CE  100%)', textTransform: 'uppercase', transition: '0.5s', color: 'white', borderStyle:'none', borderRadius:'50px', fontFamily:'Archivo Black, sans-serif', padding:'10px', width:'200px' }}>
                                    Ver
                                </Button>
                        </Box>
                        </Grid>
                        <Grid item sm={12}  md={4} lg={3} sx={stylesComponents.contenedorProducto}>
                            <Box display={'flex'} style={{justifyContent:'center'}}>
                                <Grid style={{width:'235px', height:'300px'}}>
                                    <img src={product5} alt="" width={'100%'} height={'100%'} style={{ objectFit: 'cover'}}/>
                                </Grid>
                            </Box>
                            <Box p={1}>
                                <Typography variant="h6" color="initial" fontFamily={'Montserrat, sans-serif'} fontSize={16} textAlign={'start'} style={{color:'#404040', textAlign:'center'}}>Arreglo Multicolor</Typography>
                                <Typography variant="h6" color="initial" fontFamily={'Archivo Black, sans-serif'} fontSize={16} textAlign={'start'} style={{color:'#404040', textAlign:'center' }}>$100.00</Typography>
                            </Box>
                            <Box >
                                <Button style={{border:'2px solid #b42981', backgroundImage:'linear-gradient(to right, #FF6464 0%, #FF6464  51%, #FF81CE  100%)', textTransform: 'uppercase', transition: '0.5s', color: 'white', borderStyle:'none', borderRadius:'50px', fontFamily:'Archivo Black, sans-serif', padding:'10px', width:'200px' }}>
                                    Ver
                                </Button>
                            </Box>
                        </Grid>
                        <Grid item sm={12}  md={4} lg={3} sx={stylesComponents.contenedorProducto}>
                            <Box display={'flex'} style={{justifyContent:'center'}}>
                                <Grid style={{width:'235px', height:'300px'}}>
                                    <img src={product6} alt="" width={'100%'} height={'100%'} style={{ objectFit: 'cover'}}/>
                                </Grid>
                            </Box>
                            <Box p={1}>
                                <Typography variant="h6" color="initial" fontFamily={'Montserrat, sans-serif'} fontSize={16} textAlign={'start'} style={{color:'#404040', textAlign:'center'}}>Arreglo Multicolor</Typography>
                                <Typography variant="h6" color="initial" fontFamily={'Archivo Black, sans-serif'} fontSize={16} textAlign={'start'} style={{color:'#404040', textAlign:'center' }}>$100.00</Typography>
                            </Box>
                            <Box >
                                <Button style={{border:'2px solid #b42981', backgroundImage:'linear-gradient(to right, #FF6464 0%, #FF6464  51%, #FF81CE  100%)', textTransform: 'uppercase', transition: '0.5s', color: 'white', borderStyle:'none', borderRadius:'50px', fontFamily:'Archivo Black, sans-serif', padding:'10px', width:'200px' }}>
                                    Ver
                                </Button>
                        </Box>
                        </Grid>
                        <Grid item sm={12}  md={4} lg={3} sx={stylesComponents.contenedorProducto}>
                            <Box display={'flex'} style={{justifyContent:'center'}}>
                                <Grid style={{width:'235px', height:'300px'}}>
                                    <img src={product7} alt="" width={'100%'} height={'100%'} style={{ objectFit: 'cover'}}/>
                                </Grid>
                            </Box>
                            <Box p={1}>
                                <Typography variant="h6" color="initial" fontFamily={'Montserrat, sans-serif'} fontSize={16} textAlign={'start'} style={{color:'#404040', textAlign:'center'}}>Arreglo Multicolor</Typography>
                                <Typography variant="h6" color="initial" fontFamily={'Archivo Black, sans-serif'} fontSize={16} textAlign={'start'} style={{color:'#404040', textAlign:'center' }}>$100.00</Typography>
                            </Box>
                            <Box >
                                <Button style={{border:'2px solid #b42981', backgroundImage:'linear-gradient(to right, #FF6464 0%, #FF6464  51%, #FF81CE  100%)', textTransform: 'uppercase', transition: '0.5s', color: 'white', borderStyle:'none', borderRadius:'50px', fontFamily:'Archivo Black, sans-serif', padding:'10px', width:'200px' }}>
                                    Ver
                                </Button>
                        </Box>
                        </Grid>
                        <Grid item sm={12}  md={4} lg={3} sx={stylesComponents.contenedorProducto}>
                            <Box display={'flex'} style={{justifyContent:'center'}}>
                                <Grid style={{width:'235px', height:'300px'}}>
                                    <img src={product8} alt="" width={'100%'} height={'100%'} style={{ objectFit: 'cover'}}/>
                                </Grid>
                            </Box>
                            <Box p={1}>
                                <Typography variant="h6" color="initial" fontFamily={'Montserrat, sans-serif'} fontSize={16} textAlign={'start'} style={{color:'#404040', textAlign:'center'}}>Arreglo Multicolor</Typography>
                            </Box>
                            <Box display={'flex'}>
                                <Typography variant="h6" color="initial" fontFamily={'Archivo Black, sans-serif'} fontSize={16} textAlign={'start'} style={{color:'red', textAlign:'center', width:'50%',  textDecorationLine: 'line-through' }}>$100.00</Typography>
                                <Typography variant="h6" color="initial" fontFamily={'Archivo Black, sans-serif'} fontSize={16} textAlign={'start'} style={{color:'blue', textAlign:'center', width:'50%' }}>$83.00</Typography>
                            </Box>
                            <Box >
                                <Button style={{border:'2px solid #b42981', backgroundImage:'linear-gradient(to right, #FF6464 0%, #FF6464  51%, #FF81CE  100%)', textTransform: 'uppercase', transition: '0.5s', color: 'white', borderStyle:'none', borderRadius:'50px', fontFamily:'Archivo Black, sans-serif', padding:'10px', width:'200px' }}>
                                    Ver
                                </Button>
                        </Box>
                        </Grid>
                        <Grid item sm={12}  md={4} lg={3} sx={stylesComponents.contenedorProducto}>
                            <Box display={'flex'} style={{justifyContent:'center'}}>
                                <Grid style={{width:'235px', height:'300px'}}>
                                    <img src={product9} alt="" width={'100%'} height={'100%'} style={{ objectFit: 'cover'}}/>
                                </Grid>
                            </Box>
                            <Box p={1}>
                                <Typography variant="h6" color="initial" fontFamily={'Montserrat, sans-serif'} fontSize={16} textAlign={'start'} style={{color:'#404040', textAlign:'center'}}>Arreglo Multicolor</Typography>
                                <Typography variant="h6" color="initial" fontFamily={'Archivo Black, sans-serif'} fontSize={16} textAlign={'start'} style={{color:'#404040', textAlign:'center' }}>$100.00</Typography>
                            </Box>
                            <Box >
                                <Button style={{border:'2px solid #b42981', backgroundImage:'linear-gradient(to right, #FF6464 0%, #FF6464  51%, #FF81CE  100%)', textTransform: 'uppercase', transition: '0.5s', color: 'white', borderStyle:'none', borderRadius:'50px', fontFamily:'Archivo Black, sans-serif', padding:'10px', width:'200px' }}>
                                    Ver
                                </Button>
                            </Box>
                        </Grid>
                        <Grid item sm={12}  md={4} lg={3} sx={stylesComponents.contenedorProducto}>
                            <Box display={'flex'} style={{justifyContent:'center'}}>
                                <Grid style={{width:'235px', height:'300px'}}>
                                    <img src={product10} alt="" width={'100%'} height={'100%'} style={{ objectFit: 'cover'}}/>
                                </Grid>
                            </Box>
                            <Box p={1}>
                                <Typography variant="h6" color="initial" fontFamily={'Montserrat, sans-serif'} fontSize={16} textAlign={'start'} style={{color:'#404040', textAlign:'center'}}>Arreglo Multicolor</Typography>
                                <Typography variant="h6" color="initial" fontFamily={'Archivo Black, sans-serif'} fontSize={16} textAlign={'start'} style={{color:'#404040', textAlign:'center' }}>$100.00</Typography>
                            </Box>
                            <Box >
                                <Button style={{border:'2px solid #b42981', backgroundImage:'linear-gradient(to right, #FF6464 0%, #FF6464  51%, #FF81CE  100%)', textTransform: 'uppercase', transition: '0.5s', color: 'white', borderStyle:'none', borderRadius:'50px', fontFamily:'Archivo Black, sans-serif', padding:'10px', width:'200px' }}>
                                    Ver
                                </Button>
                        </Box>
                        </Grid>
                        <Grid item sm={12} md={4} lg={3}
                        sx={stylesComponents.contenedorProducto}
                        >
                            <Box display={'flex'} style={{justifyContent:'center'}}>
                                <Grid style={{width:'235px', height:'300px'}}>
                                    <img src={product11} alt="" width={'100%'} height={'100%'} style={{ objectFit: 'cover'}}/>
                                </Grid>
                            </Box>
                            <Box p={1}>
                                <Typography variant="h6" color="initial" fontFamily={'Montserrat, sans-serif'} fontSize={16} textAlign={'start'} style={{color:'#404040', textAlign:'center'}}>Arreglo Multicolor</Typography>
                                <Typography variant="h6" color="initial" fontFamily={'Archivo Black, sans-serif'} fontSize={16} textAlign={'start'} style={{color:'#404040', textAlign:'center' }}>$100.00</Typography>
                            </Box>
                            <Box >
                                <Button style={{border:'2px solid #b42981', backgroundImage:'linear-gradient(to right, #FF6464 0%, #FF6464  51%, #FF81CE  100%)', textTransform: 'uppercase', transition: '0.5s', color: 'white', borderStyle:'none', borderRadius:'50px', fontFamily:'Archivo Black, sans-serif', padding:'10px', width:'200px' }}>
                                    Ver
                                </Button>
                        </Box>
                        </Grid>



                    </Grid>
                </Grid>

            </Grid>

        </>
    )
}


export default Home