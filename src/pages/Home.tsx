import {  Box, Button, Grid, Typography } from "@mui/material";
import banerIndex from '../assets/banerIndex.png'


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

        <Grid>
            <Grid style={{textAlign:'center', padding:'8px'}}>
                <Typography variant="h3" color="initial" fontSize='34px' fontFamily={'Archivo Black, sans-serif'} style={{color:'#B29426'}} >
                    ¡Pequeños detalles marcando diferencia!
                </Typography>
                <Typography variant="h4" color="initial" fontSize='17px' fontFamily={'Archivo Black, sans-serif'} style={{color:'#000000'}} >
                    En Flores Daysis encontrarás lo que necesitas para cada ocasión.
                </Typography>
            </Grid>

            <Grid>
                <Grid container display={'flex'}>
                    <Grid item xs={12} sm={6} md={3}  >
                        imagen 1
                    </Grid>
                    <Grid item xs={12} sm={6} md={3}  >
                        imagen 2

                    </Grid>
                    <Grid item xs={12} sm={6} md={3}  >
                        imagen 3

                    </Grid>
                    <Grid item xs={12} sm={6} md={3}  >
                        imagen 3

                    </Grid>
                    <Grid item xs={12} sm={6} md={3}  >
                        imagen 4

                    </Grid>
                    <Grid item xs={12} sm={6} md={3}  >
                        imagen 5

                    </Grid>
                    <Grid item xs={12} sm={6} md={3}  >
                        imagen 6
                    </Grid>
                    <Grid item xs={12} sm={6} md={3}  >
                        imagen 7
                    </Grid>
                </Grid>
                <Grid>
                
                </Grid>
            </Grid>
           

        </Grid>

        <Box sx={{ flexGrow: 1 }}>
            <Grid container spacing={{ xs: 2, md: 3 }} columns={{ xs: 4, sm: 8, md: 12 }}>
                {Array.from(Array(6)).map((_, index) => (
                <Grid item xs={2} sm={4} md={4} key={index}>
                    <text>xs=2</text>
                </Grid>
                ))}
            </Grid>
        </Box>

        </>
    )
}


export default Home