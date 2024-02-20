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
// Importa los estilos CSS de AOS
import '../styles/fuentes.css'

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

        <Grid container spacing={2}  sx={
            {
                marginRight:{
                    xl:3,
                    sm:0
                }
            }
        }>
            <Grid  item xs={12} md={6} container
                justifyContent="center" // Centra horizontalmente
                alignItems="center">
                <Grid pb={3} style={{backgroundColor:'#F898D8'}} >
                    <Grid textAlign="start" sx={{
                        padding:{
                            xl:2,
                            sm:0

                        },
                        marginLeft:{
                            xl:4,
                            sm:1
                        }
                    }}>
                        <Typography variant="h1" color="initial" fontSize='74px'  style={{color:'#ffff'}} >
                            Flores para toda ocasión
                        </Typography>
                    </Grid>
                    <Grid  p={2} textAlign="start" ml={4}>
                        <Typography variant="h3" fontSize='29px' color="initial" fontFamily={'Archivo Black, sans-serif'} style={{color:'#ffff'}}>
                            Aqui lo encuentras
                        </Typography>
                    </Grid>
                    <Grid  p={2} textAlign="start" ml={4}>
                        <Button
                            style={{border:'2px solid #b42981', backgroundImage:'linear-gradient(to right, #FF6464 0%, #FF6464  51%, #FF81CE  100%)', margin: '10px', textTransform: 'uppercase', transition: '0.5s', color: 'white', borderStyle:'none', borderRadius:'50px', fontFamily:'Archivo Black, sans-serif', padding:'10px'                         }}
                        >
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

            <Grid>
                <Grid container display={'flex'} style={{textAlign:'center'}} pl={8} pr={8} pb={4} pt={4}>
                    <Grid item xs={12} sm={6}  md={4} lg={3}
                    sx={{
                        padding:{
                            xs:5,
                            xl:0
                        }
                    }}
                    >                        <Box display={'flex'} style={{justifyContent:'center'}}>
                            <Grid style={{backgroundImage:`url(${imageArregloMesa})`, backgroundSize:'cover', width:'205px', height:'205px', borderRadius:'50%'}}>
                            </Grid>
                        </Box>
                        <Box p={1}>
                            <Button style={{border:'2px solid #b42981', backgroundImage:'linear-gradient(to right, #FF6464 0%, #FF6464  51%, #FF81CE  100%)', textTransform: 'uppercase', transition: '0.5s', color: 'white', borderStyle:'none', borderRadius:'50px', fontFamily:'Archivo Black, sans-serif', padding:'10px', width:'200px' }}>
                                Arreglo de Mesa
                            </Button>
                        </Box>
                    </Grid>
                    <Grid item xs={12} sm={6}  md={4} lg={3}
                    sx={{
                        padding:{
                            xs:5,
                            xl:0
                        }
                    }}
                    >
                        <Box display={'flex'} style={{justifyContent:'center'}}>

                            <Grid style={{backgroundImage:`url(${imageBoda})`, backgroundSize:'cover', width:'200px', height:'200px', borderRadius:'50%'}}>

                            </Grid>
                        </Box>
                        <Box p={1}>
                            <Button style={{border:'2px solid #b42981', backgroundImage:'linear-gradient(to right, #FF6464 0%, #FF6464  51%, #FF81CE  100%)', textTransform: 'uppercase', transition: '0.5s', color: 'white', borderStyle:'none', borderRadius:'50px', fontFamily:'Archivo Black, sans-serif', padding:'10px', width:'200px' }}>
                                Para Bodas
                            </Button>
                        </Box>
                    </Grid>
                    <Grid item xs={12} sm={6}  md={4} lg={3}
                        sx={{
                            padding:{
                                xs:5,
                                xl:0
                            }
                        }}
                        >
                        <Box display={'flex'} style={{justifyContent:'center'}}>

                            <Grid style={{backgroundImage:`url(${imageParaElla})`, backgroundSize:'cover', width:'200px', height:'200px', borderRadius:'50%'}}>

                            </Grid>
                        </Box>
                        <Box p={1}>
                            <Button style={{border:'2px solid #b42981', backgroundImage:'linear-gradient(to right, #FF6464 0%, #FF6464  51%, #FF81CE  100%)', textTransform: 'uppercase', transition: '0.5s', color: 'white', borderStyle:'none', borderRadius:'50px', fontFamily:'Archivo Black, sans-serif', padding:'10px', width:'200px' }}>
                                Para Ella
                            </Button>
                        </Box>

                    </Grid>
                    <Grid item xs={12} sm={6}  md={4} lg={3}
                        sx={{
                            padding:{
                                xs:5,
                                xl:0
                            }
                        }}
                        >
                        <Box display={'flex'} style={{justifyContent:'center'}}>
                            <Grid style={{backgroundImage:`url(${imagerParaEl})`, backgroundSize:'cover', width:'200px', height:'200px', borderRadius:'50%'}}>

                            </Grid>
                        </Box>
                        <Box p={1}>
                            <Button style={{border:'2px solid #b42981', backgroundImage:'linear-gradient(to right, #FF6464 0%, #FF6464  51%, #FF81CE  100%)', textTransform: 'uppercase', transition: '0.5s', color: 'white', borderStyle:'none', borderRadius:'50px', fontFamily:'Archivo Black, sans-serif', padding:'10px', width:'200px' }}>
                                Para El
                            </Button>
                        </Box>
                    </Grid>

                    <Grid item xs={12} sm={6}  md={4} lg={3}
                        sx={{
                            padding:{
                                xs:5,
                                xl:0
                            }
                        }}
                        >
                        <Box display={'flex'} style={{justifyContent:'center'}}>
                            <Grid style={{backgroundImage:`url(${imageArregloMesa})`, backgroundSize:'cover', width:'200px', height:'200px', borderRadius:'5%'}}>
                            </Grid>
                        </Box>
                        <Box p={1}  borderRadius={'15px'} justifyContent={'center'}>
                            <Button style={{border:'2px solid #b42981', backgroundImage:'linear-gradient(to right, #FF6464 0%, #FF6464  51%, #FF81CE  100%)', textTransform: 'uppercase', transition: '0.5s', color: 'white', borderStyle:'none', borderRadius:'50px', fontFamily:'Archivo Black, sans-serif', padding:'10px', width:'200px' }}>
                                Para El
                            </Button>
                        </Box>
                    </Grid>
                    <Grid item xs={12} sm={6}  md={4} lg={3}
                        sx={{
                            padding:{
                                xs:5,
                                xl:0
                            }
                        }}
                        >                        <Box display={'flex'} style={{justifyContent:'center'}}>

                            <Grid style={{backgroundImage:`url(${imageBoda})`, backgroundSize:'cover', width:'200px', height:'200px', borderRadius:'50%'}}>

                            </Grid>
                        </Box>
                        <Box p={1} borderRadius={'15px'}>
                            <Button style={{border:'2px solid #b42981', backgroundImage:'linear-gradient(to right, #FF6464 0%, #FF6464  51%, #FF81CE  100%)', textTransform: 'uppercase', transition: '0.5s', color: 'white', borderStyle:'none', borderRadius:'50px', fontFamily:'Archivo Black, sans-serif', padding:'10px', width:'200px' }}>
                                Para Bodas
                            </Button>
                        </Box>
                    </Grid>
                    <Grid item xs={12} sm={6}  md={4} lg={3}
                        sx={{
                            padding:{
                                xs:5,
                                xl:0
                            }
                        }}
                        >                        <Box display={'flex'} style={{justifyContent:'center'}}>

                            <Grid style={{backgroundImage:`url(${imageParaElla})`, backgroundSize:'cover', width:'200px', height:'200px'}}>

                            </Grid>
                        </Box>
                        <Box p={1} borderRadius={'15px'}>
                            <Button style={{border:'2px solid #b42981', backgroundImage:'linear-gradient(to right, #FF6464 0%, #FF6464  51%, #FF81CE  100%)', textTransform: 'uppercase', transition: '0.5s', color: 'white', borderStyle:'none', borderRadius:'50px', fontFamily:'Archivo Black, sans-serif', padding:'10px', width:'200px' }}>
                                Para Ella
                            </Button>
                        </Box>
                    </Grid>
                    <Grid item xs={12} sm={6}  md={4} lg={3}
                        sx={{
                            padding:{
                                xs:5,
                                xl:0
                            }
                        }}
                        >                        <Box display={'flex'} style={{justifyContent:'center'}}>
                            <Grid style={{backgroundImage:`url(${imagerParaEl})`, backgroundSize:'cover', width:'200px', height:'200px', borderRadius:'50%'}}>

                            </Grid>
                        </Box>
                        <Box p={1}>
                            <Button style={{border:'2px solid #b42981', backgroundImage:'linear-gradient(to right, #FF6464 0%, #FF6464  51%, #FF81CE  100%)', textTransform: 'uppercase', transition: '0.5s', color: 'white', borderStyle:'none', borderRadius:'50px', fontFamily:'Archivo Black, sans-serif', padding:'10px', width:'200px' }}>
                                Para El
                            </Button>
                        </Box>
                    </Grid>
                </Grid>
                <Grid>
                </Grid>
            </Grid>


            <Grid sx={{
                paddingLeft:{
                    xs:'10px',
                    md:'50px'
                },
                paddingRight:{
                    xs:'10px',
                    md:'50px'

                }
            }}>
                <Grid container display={'flex'} >
                    <Grid item xs={12} sm={6} lg={4} xl={3} style={{textAlign:'center', justifyContent:'center', alignContent:'center'}}>
                        <Box
                            sx={{
                                justifyContent:'center',
                                maxWidth:'100%',
                                display:'flex',
                                position: 'relative',

                            }}>
                            <Grid sx={{
                                backgroundImage:`url(${imageArregloMesa})`,
                                backgroundSize:'cover',
                                width:'100%',
                                height:{
                                    xs:'319px'
                                }
                            }}>
                            </Grid>
                            <Paper
                                sx={{
                                    position: 'absolute',
                                    top: 0,
                                    left: 0,
                                    width: '100%',
                                    height: '100%',
                                    background: 'linear-gradient(to right, rgba(255, 100, 100, 0.7) 0%, rgba(255, 100, 100, 0.7) 51%, rgba(255, 129, 206, 0.7) 100%)',
                                    display: 'flex',
                                    justifyContent: 'center',
                                    alignItems: 'center',
                                    opacity: 0,
                                    transition: 'opacity 0.3s ease',
                                    '&:hover': {
                                        opacity: 1,
                                    },
                                }}
                            >
                                <Typography variant="h4" color="initial" sx={{color:'white', fontFamily:'Archivo Black, sans-serif'}}>Arreglos</Typography>
                            </Paper>
                        </Box>
                    </Grid>


                    <Grid item xs={12} sm={6} lg={4} xl={3} style={{textAlign:'center', justifyContent:'center', alignContent:'center'}}>
                        <Box
                            sx={{
                                justifyContent:'center',
                                maxWidth:'100%',
                                display:'flex',
                                position: 'relative',

                            }}>
                            <Grid sx={{
                                backgroundImage:`url(${one})`,
                                backgroundSize:'cover',
                                width:'100%',
                                height:{
                                    xs:'319px'
                                }
                            }}>
                            </Grid>
                           
                        </Box>
                    </Grid>


                    <Grid item xs={12} sm={6} lg={4} xl={3} style={{textAlign:'center', justifyContent:'center', alignContent:'center'}}>
                        <Box
                            sx={{
                                justifyContent:'center',
                                maxWidth:'100%',
                                display:'flex',
                                position: 'relative',

                            }}>
                            <Grid sx={{
                                backgroundImage:`url(${imageBoda})`,
                                backgroundSize:'cover',
                                width:'100%',
                                height:{
                                    xs:'319px'
                                }
                            }}>
                            </Grid>
                            <Paper
                                sx={{
                                    position: 'absolute',
                                    top: 0,
                                    left: 0,
                                    width: '100%',
                                    height: '100%',
                                    background: 'linear-gradient(to right, rgba(255, 100, 100, 0.7) 0%, rgba(255, 100, 100, 0.7) 51%, rgba(255, 129, 206, 0.7) 100%)',
                                    display: 'flex',
                                    justifyContent: 'center',
                                    alignItems: 'center',
                                    opacity: 0,
                                    transition: 'opacity 0.3s ease',
                                    '&:hover': {
                                        opacity: 1,
                                    },
                                }}
                            >
                                <Typography variant="h4" color="initial" sx={{color:'white', fontFamily:'Archivo Black, sans-serif'}}>Bodas</Typography>
                            </Paper>
                        </Box>
                    </Grid>
                    <Grid item xs={12} sm={6} lg={4} xl={3} style={{textAlign:'center', justifyContent:'center', alignContent:'center'}}>
                        <Box
                            sx={{
                                justifyContent:'center',
                                maxWidth:'100%',
                                display:'flex',
                                position: 'relative',

                            }}>
                            <Grid sx={{
                                backgroundImage:`url(${imageParaElla})`,
                                backgroundSize:'cover',
                                width:'100%',
                                height:{
                                    xs:'319px'
                                }
                            }}>
                            </Grid>
                            <Paper
                                sx={{
                                    position: 'absolute',
                                    top: 0,
                                    left: 0,
                                    width: '100%',
                                    height: '100%',
                                    background: 'linear-gradient(to right, rgba(255, 100, 100, 0.7) 0%, rgba(255, 100, 100, 0.7) 51%, rgba(255, 129, 206, 0.7) 100%)',
                                    display: 'flex',
                                    justifyContent: 'center',
                                    alignItems: 'center',
                                    opacity: 0,
                                    transition: 'opacity 0.3s ease',
                                    '&:hover': {
                                        opacity: 1,
                                    },
                                }}
                            >
                                <Typography variant="h4" color="initial" sx={{color:'white', fontFamily:'Archivo Black, sans-serif'}}>Para ella</Typography>
                            </Paper>
                        </Box>
                    </Grid>
                    <Grid item xs={12} sm={6} lg={4} xl={3} style={{textAlign:'center', justifyContent:'center', alignContent:'center'}}>
                        <Box
                            sx={{
                                justifyContent:'center',
                                maxWidth:'100%',
                                display:'flex',
                                position: 'relative',

                            }}>
                            <Grid sx={{
                                backgroundImage:`url(${imagerParaEl})`,
                                backgroundSize:'cover',
                                width:'100%',
                                height:{
                                    xs:'319px'
                                }
                            }}>
                            </Grid>
                            <Paper
                                sx={{
                                    position: 'absolute',
                                    top: 0,
                                    left: 0,
                                    width: '100%',
                                    height: '100%',
                                    background: 'linear-gradient(to right, rgba(255, 100, 100, 0.7) 0%, rgba(255, 100, 100, 0.7) 51%, rgba(255, 129, 206, 0.7) 100%)',
                                    display: 'flex',
                                    justifyContent: 'center',
                                    alignItems: 'center',
                                    opacity: 0,
                                    transition: 'opacity 0.3s ease',
                                    '&:hover': {
                                        opacity: 1,
                                    },
                                }}
                            >
                                <Typography variant="h4" color="initial" sx={{color:'white', fontFamily:'Archivo Black, sans-serif'}}>Para él</Typography>
                            </Paper>
                        </Box>
                    </Grid>



                    <Grid item xs={12} sm={6} lg={4} xl={3} style={{textAlign:'center', justifyContent:'center', alignContent:'center'}}>
                        <Box
                            sx={{
                                justifyContent:'center',
                                maxWidth:'100%',
                                display:'flex',
                                position: 'relative',

                            }}>
                            <Grid sx={{
                                backgroundImage:`url(${two})`,
                                backgroundSize:'cover',
                                width:'100%',
                                height:{
                                    xs:'319px'
                                }
                            }}>
                            </Grid>
                        </Box>
                    </Grid>

                    <Grid item xs={12} sm={6} lg={4} xl={3} style={{textAlign:'center', justifyContent:'center', alignContent:'center'}}>
                        <Box
                            sx={{
                                justifyContent:'center',
                                maxWidth:'100%',
                                display:'flex',
                                position: 'relative',

                            }}>
                            <Grid sx={{
                                backgroundImage:`url(${condolencias})`,
                                backgroundSize:'cover',
                                width:'100%',
                                height:{
                                    xs:'319px'
                                }
                            }}>
                            </Grid>
                            <Paper
                                sx={{
                                    position: 'absolute',
                                    top: 0,
                                    left: 0,
                                    width: '100%',
                                    height: '100%',
                                    background: 'linear-gradient(to right, rgba(255, 100, 100, 0.7) 0%, rgba(255, 100, 100, 0.7) 51%, rgba(255, 129, 206, 0.7) 100%)',
                                    display: 'flex',
                                    justifyContent: 'center',
                                    alignItems: 'center',
                                    opacity: 0,
                                    transition: 'opacity 0.3s ease',
                                    '&:hover': {
                                        opacity: 1,
                                    },
                                }}
                            >
                                <Typography variant="h4" color="initial" sx={{color:'white', fontFamily:'Archivo Black, sans-serif'}}>Condolencias</Typography>
                            </Paper>
                        </Box>
                    </Grid>


                    <Grid item xs={12} sm={6} lg={4} xl={3} style={{textAlign:'center', justifyContent:'center', alignContent:'center'}}>
                        <Box
                            sx={{
                                justifyContent:'center',
                                maxWidth:'100%',
                                display:'flex',
                                position: 'relative',

                            }}>
                            <Grid sx={{
                                backgroundImage:`url(${three})`,
                                backgroundSize:'cover',
                                width:'100%',
                                height:{
                                    xs:'319px'
                                }
                            }}>
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
                <Grid container display={'flex'} style={{textAlign:'center'}}
                    sx={{
                        paddingLeft:{
                            xs:0,
                            sm:2,
                            xl:15
                        },
                        paddingRight:{
                            xs:0,
                            sm:0,
                            xl:15
                        },
                        paddingBottom:{
                            xs:4,
                            xl:15
                        },
                        paddingTop:{
                            xs:4,
                            xl:15
                        }
                    }} >
                    <Grid item xs={12} sm={6}  md={4} lg={3}
                    sx={{
                        padding:{
                            xs:5,
                            xl:1
                        }
                    }}
                    >
                        <Box display={'flex'} style={{justifyContent:'center'}}>
                            <Grid style={{width:'215px', height:'235px'}}>
                                <img src={imageArregloMesa} alt="" width={'100%'} height={'100%'} style={{ objectFit: 'cover'}}/>
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
                    <Grid item xs={12} sm={6} md={4} lg={3}
                    sx={{
                        padding:{
                            xs:5,
                            xl:1
                        }
                    }}
                    >
                        <Box display={'flex'} style={{justifyContent:'center'}}>
                            <Grid style={{width:'215px', height:'235px'}}>
                                <img src={imageArregloMesa} alt="" width={'100%'} height={'100%'} style={{ objectFit: 'cover'}}/>
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
                    <Grid item xs={12} sm={6} md={4} lg={3}
                    sx={{
                        padding:{
                            xs:5,
                            xl:1
                        }
                    }}
                    >
                        <Box display={'flex'} style={{justifyContent:'center'}}>
                            <Grid style={{width:'215px', height:'235px'}}>
                                <img src={imageArregloMesa} alt="" width={'100%'} height={'100%'} style={{ objectFit: 'cover'}}/>
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
                    <Grid item xs={12} sm={6} md={4} lg={3}
                    sx={{
                        padding:{
                            xs:5,
                            xl:1
                        }
                    }}
                    >
                        <Box display={'flex'} style={{justifyContent:'center'}}>
                            <Grid style={{width:'215px', height:'235px'}}>
                                <img src={imageArregloMesa} alt="" width={'100%'} height={'100%'} style={{ objectFit: 'cover'}}/>
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

                    <Grid item xs={12} sm={6}  md={4} lg={3}
                    sx={{
                        padding:{
                            xs:5,
                            xl:1
                        }
                    }}
                    >
                        <Box display={'flex'} style={{justifyContent:'center'}}>
                            <Grid style={{width:'215px', height:'235px'}}>
                                <img src={imageArregloMesa} alt="" width={'100%'} height={'100%'} style={{ objectFit: 'cover'}}/>
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
                    <Grid item xs={12} sm={6} md={4} lg={3}
                    sx={{
                        padding:{
                            xs:5,
                            xl:1
                        }
                    }}
                    >
                        <Box display={'flex'} style={{justifyContent:'center'}}>
                            <Grid style={{width:'215px', height:'235px'}}>
                                <img src={imageArregloMesa} alt="" width={'100%'} height={'100%'} style={{ objectFit: 'cover'}}/>
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
                    <Grid item xs={12} sm={6} md={4} lg={3}
                    sx={{
                        padding:{
                            xs:5,
                            xl:1
                        }
                    }}
                    >
                        <Box display={'flex'} style={{justifyContent:'center'}}>
                            <Grid style={{width:'215px', height:'235px'}}>
                                <img src={imageArregloMesa} alt="" width={'100%'} height={'100%'} style={{ objectFit: 'cover'}}/>
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
                    <Grid item xs={12} sm={6} md={4} lg={3}
                    sx={{
                        padding:{
                            xs:5,
                            xl:1
                        }
                    }}
                    >
                        <Box display={'flex'} style={{justifyContent:'center'}}>
                            <Grid style={{width:'215px', height:'235px'}}>
                                <img src={imageArregloMesa} alt="" width={'100%'} height={'100%'} style={{ objectFit: 'cover'}}/>
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


                    <Grid item xs={12} sm={6}  md={4} lg={3}
                    sx={{
                        padding:{
                            xs:5,
                            xl:1
                        }
                    }}
                    >
                        <Box display={'flex'} style={{justifyContent:'center'}}>
                            <Grid style={{width:'215px', height:'235px'}}>
                                <img src={imageArregloMesa} alt="" width={'100%'} height={'100%'} style={{ objectFit: 'cover'}}/>
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
                    <Grid item xs={12} sm={6} md={4} lg={3}
                    sx={{
                        padding:{
                            xs:5,
                            xl:1
                        }
                    }}
                    >
                        <Box display={'flex'} style={{justifyContent:'center'}}>
                            <Grid style={{width:'215px', height:'235px'}}>
                                <img src={imageArregloMesa} alt="" width={'100%'} height={'100%'} style={{ objectFit: 'cover'}}/>
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
                    <Grid item xs={12} sm={6} md={4} lg={3}
                    sx={{
                        padding:{
                            xs:5,
                            xl:1
                        }
                    }}
                    >
                        <Box display={'flex'} style={{justifyContent:'center'}}>
                            <Grid style={{width:'215px', height:'235px'}}>
                                <img src={imageArregloMesa} alt="" width={'100%'} height={'100%'} style={{ objectFit: 'cover'}}/>
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
                    <Grid item xs={12} sm={6} md={4} lg={3}
                    sx={{
                        padding:{
                            xs:5,
                            xl:1
                        }
                    }}
                    >
                        <Box display={'flex'} style={{justifyContent:'center'}}>
                            <Grid style={{width:'215px', height:'235px'}}>
                                <img src={imageArregloMesa} alt="" width={'100%'} height={'100%'} style={{ objectFit: 'cover'}}/>
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


                    <Grid item xs={12} sm={6}  md={4} lg={3}
                    sx={{
                        padding:{
                            xs:5,
                            xl:1
                        }
                    }}
                    >
                        <Box display={'flex'} style={{justifyContent:'center'}}>
                            <Grid style={{width:'215px', height:'235px'}}>
                                <img src={imageArregloMesa} alt="" width={'100%'} height={'100%'} style={{ objectFit: 'cover'}}/>
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
                    <Grid item xs={12} sm={6} md={4} lg={3}
                    sx={{
                        padding:{
                            xs:5,
                            xl:1
                        }
                    }}
                    >
                        <Box display={'flex'} style={{justifyContent:'center'}}>
                            <Grid style={{width:'215px', height:'235px'}}>
                                <img src={imageArregloMesa} alt="" width={'100%'} height={'100%'} style={{ objectFit: 'cover'}}/>
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
                    <Grid item xs={12} sm={6} md={4} lg={3}
                    sx={{
                        padding:{
                            xs:5,
                            xl:1
                        }
                    }}
                    >
                        <Box display={'flex'} style={{justifyContent:'center'}}>
                            <Grid style={{width:'215px', height:'235px'}}>
                                <img src={imageArregloMesa} alt="" width={'100%'} height={'100%'} style={{ objectFit: 'cover'}}/>
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
                    <Grid item xs={12} sm={6} md={4} lg={3}
                    sx={{
                        padding:{
                            xs:5,
                            xl:1
                        }
                    }}
                    >
                        <Box display={'flex'} style={{justifyContent:'center'}}>
                            <Grid style={{width:'215px', height:'235px'}}>
                                <img src={imageArregloMesa} alt="" width={'100%'} height={'100%'} style={{ objectFit: 'cover'}}/>
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


                    <Grid item xs={12} sm={6}  md={4} lg={3}
                    sx={{
                        padding:{
                            xs:5,
                            xl:1
                        }
                    }}
                    >
                        <Box display={'flex'} style={{justifyContent:'center'}}>
                            <Grid style={{width:'215px', height:'235px'}}>
                                <img src={imageArregloMesa} alt="" width={'100%'} height={'100%'} style={{ objectFit: 'cover'}}/>
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
                    <Grid item xs={12} sm={6} md={4} lg={3}
                    sx={{
                        padding:{
                            xs:5,
                            xl:1
                        }
                    }}
                    >
                        <Box display={'flex'} style={{justifyContent:'center'}}>
                            <Grid style={{width:'215px', height:'235px'}}>
                                <img src={imageArregloMesa} alt="" width={'100%'} height={'100%'} style={{ objectFit: 'cover'}}/>
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
                    <Grid item xs={12} sm={6} md={4} lg={3}
                    sx={{
                        padding:{
                            xs:5,
                            xl:1
                        }
                    }}
                    >
                        <Box display={'flex'} style={{justifyContent:'center'}}>
                            <Grid style={{width:'215px', height:'235px'}}>
                                <img src={imageArregloMesa} alt="" width={'100%'} height={'100%'} style={{ objectFit: 'cover'}}/>
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
                    <Grid item xs={12} sm={6} md={4} lg={3}
                    sx={{
                        padding:{
                            xs:5,
                            xl:1
                        }
                    }}
                    >
                        <Box display={'flex'} style={{justifyContent:'center'}}>
                            <Grid style={{width:'215px', height:'235px'}}>
                                <img src={imageArregloMesa} alt="" width={'100%'} height={'100%'} style={{ objectFit: 'cover'}}/>
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

                    
                    
                </Grid>
            </Grid>

        </Grid>

    </>
    )
}


export default Home