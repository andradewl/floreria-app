import {  Box, Button, Grid, Typography } from "@mui/material";
import banerIndex from '../assets/banerIndex.png'
import imageArregloMesa from'../assets/secciones/imageArregloMesa.png'
import imageBoda from'../assets/secciones/imageBoda.png'
import imageParaElla from'../assets/secciones/imageParaElla.png'
import imagerParaEl from'../assets/secciones/imagerParaEl.png'

import '../styles/fuentes.css'

function Home(){
    return(
        <>

        <Grid container spacing={2}  mr={3}>
            <Grid  item xs={12} md={6} container
             justifyContent="center" // Centra horizontalmente
             alignItems="center" // Centra verticalmente
            >
                <Grid pb={3} style={{backgroundColor:'#F898D8'}} >
                    <Box p={2} textAlign="start" ml={4}>
                        <Typography variant="h1" color="initial" fontSize='74px' fontFamily={'Archivo Black, sans-serif'} style={{color:'#ffff'}} >
                            Flores para toda ocasión
                        </Typography>
                    </Box>
                    <Box  p={2} textAlign="start" ml={4}>
                        <Typography variant="h3" fontSize='29px' color="initial" fontFamily={'Archivo Black, sans-serif'} style={{color:'#ffff'}}>
                            Aqui lo encuentras
                        </Typography>
                    </Box>
                        <Box  p={2} textAlign="start" ml={4}>
                            <Button
                                style={{border:'2px solid #b42981', backgroundImage:'linear-gradient(to right, #FF6464 0%, #FF6464  51%, #FF81CE  100%)', margin: '10px', textTransform: 'uppercase', transition: '0.5s', color: 'white', borderStyle:'none', borderRadius:'50px', fontFamily:'Archivo Black, sans-serif', padding:'10px'                         }}
                            >
                                Registrate Ahora
                            </Button>
                        </Box>
                </Grid>
            </Grid>


            <Grid  item xs={12} md={6}>
                <Box p={2} textAlign="start">
                    <img src={banerIndex} style={{width:'100%', borderRadius:'100%'}} alt="" />
                </Box>
            </Grid>
        </Grid>

        <Grid p={5}>
            <Grid style={{textAlign:'center', padding:'8px'}} >
                <Typography variant="h3" color="initial" fontSize='34px' fontFamily={'Archivo Black, sans-serif'} style={{color:'#B29426'}} >
                    ¡Pequeños detalles marcando diferencia!
                </Typography>
                <Typography variant="h4" color="initial" fontSize='17px' fontFamily={'Archivo Black, sans-serif'} style={{color:'#000000'}} >
                    En Flores Daysis encontrarás lo que necesitas para cada ocasión.
                </Typography>
            </Grid>

            <Grid>
                <Grid container display={'flex'} style={{textAlign:'center'}} pl={8} pr={8} pb={4} pt={4}>
                    <Grid item xs={12} sm={6} md={3} p={5}>
                        <Box display={'flex'} style={{justifyContent:'center'}}>
                            <Grid style={{backgroundImage:`url(${imageArregloMesa})`, backgroundSize:'cover', width:'205px', height:'205px', borderRadius:'50%'}}>
                            </Grid>
                        </Box>
                        <Box p={1}>
                            <Typography variant="h6" color="initial" fontFamily={'Archivo Black, sans-serif'} style={{color:'#404040'}}>Arreglo de Mesa</Typography>

                        </Box>
                    </Grid>
                    <Grid item xs={12} sm={6} md={3} p={5}>
                        <Box display={'flex'} style={{justifyContent:'center'}}>

                            <Grid style={{backgroundImage:`url(${imageBoda})`, backgroundSize:'cover', width:'200px', height:'200px', borderRadius:'50%'}}>

                            </Grid>
                        </Box>
                        <Box p={1}>
                            <Typography variant="h6" color="initial" fontFamily={'Archivo Black, sans-serif'} style={{color:'#404040'}}>Para Bodas</Typography>
                        </Box>
                    </Grid>
                    <Grid item xs={12} sm={6} md={3} p={5}>
                        <Box display={'flex'} style={{justifyContent:'center'}}>

                            <Grid style={{backgroundImage:`url(${imageParaElla})`, backgroundSize:'cover', width:'200px', height:'200px', borderRadius:'50%'}}>

                            </Grid>
                        </Box>
                        <Box p={1}>
                            <Typography variant="h6" color="initial" fontFamily={'Archivo Black, sans-serif'} style={{color:'#404040'}}>Para Ella</Typography>
                        </Box>

                    </Grid>
                    <Grid item xs={12} sm={6} md={3} p={5}>
                        <Box display={'flex'} style={{justifyContent:'center'}}>
                            <Grid style={{backgroundImage:`url(${imagerParaEl})`, backgroundSize:'cover', width:'200px', height:'200px', borderRadius:'50%'}}>

                            </Grid>
                        </Box>
                        <Box p={1}>
                            <Typography variant="h6" color="initial" fontFamily={'Archivo Black, sans-serif'} style={{color:'#404040'}}>Para El</Typography>
                        </Box>
                    </Grid>
                    <Grid item xs={12} sm={6} md={3} p={5}>
                        <Box display={'flex'} style={{justifyContent:'center'}}>
                            <Grid style={{backgroundImage:`url(${imageArregloMesa})`, backgroundSize:'cover', width:'200px', height:'200px', borderRadius:'50%'}}>
                            </Grid>
                        </Box>
                        <Box p={1}>
                            <Typography variant="h6" color="initial" fontFamily={'Archivo Black, sans-serif'} style={{color:'#404040'}}>Para El</Typography>
                        </Box>
                    </Grid>
                    <Grid item xs={12} sm={6} md={3} p={5}>
                        <Box display={'flex'} style={{justifyContent:'center'}}>

                            <Grid style={{backgroundImage:`url(${imageBoda})`, backgroundSize:'cover', width:'200px', height:'200px', borderRadius:'50%'}}>

                            </Grid>
                        </Box>
                        <Box p={1}>
                            <Typography variant="h6" color="initial" fontFamily={'Archivo Black, sans-serif'} style={{color:'#404040'}}>Para Bodas</Typography>
                        </Box>
                    </Grid>
                    <Grid item xs={12} sm={6} md={3} p={5}>
                        <Box display={'flex'} style={{justifyContent:'center'}}>

                            <Grid style={{backgroundImage:`url(${imageParaElla})`, backgroundSize:'cover', width:'200px', height:'200px', borderRadius:'50%'}}>

                            </Grid>
                        </Box>
                        <Box p={1}>
                            <Typography variant="h6" color="initial" fontFamily={'Archivo Black, sans-serif'} style={{color:'#404040'}}>Para Ella</Typography>
                        </Box>
                    </Grid>
                    <Grid item xs={12} sm={6} md={3} p={5}>
                        <Box display={'flex'} style={{justifyContent:'center'}}>
                            <Grid style={{backgroundImage:`url(${imagerParaEl})`, backgroundSize:'cover', width:'200px', height:'200px', borderRadius:'50%'}}>

                            </Grid>
                        </Box>
                        <Box p={1}>
                            <Typography variant="h6" color="initial" fontFamily={'Archivo Black, sans-serif'} style={{color:'#404040'}}>Para El</Typography>
                        </Box>
                    </Grid>
                </Grid>
                <Grid>
                </Grid>
            </Grid>

        </Grid>

        <Grid container>
            <Grid item xs={12} style={{ position: 'relative', width: '100%', height: '400px' }}>
                {/* Contenedor del banner */}
                <img src={banerIndex} alt="" style={{ width: '100%', height: '100%', objectFit: 'cover' }} />
                {/* Texto superpuesto */}
                <Grid container style={{ position: 'absolute', top: '50%', left: '50%', transform: 'translate(-50%, -50%)', backgroundColor: 'rgba(224, 43, 86, 0.55)', padding: '50px', borderRadius: '5px', width: '100%', height: '100%' }}>
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
        </Grid>

        </>
    )
}


export default Home