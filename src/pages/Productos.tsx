
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
import { Box, Button, Grid, Typography, InputLabel, MenuItem } from '@mui/material'
import { stylesComponents } from '../styles/stylesComponentes'
import Select from '@mui/material/Select';


function Productos(){
    return(
        <>
            <Grid container>
                <Grid item xs={12} sx={{
                    display:'flex',
                    height:'40px',
                    justifyContent:'end',
                    paddingRight:'150px',
                    fontFamily:'Archivo Black, sans-serif'
                }}>
                    <Box sx={stylesComponents.espaciadoOrdenFiltro}>Ordenar por</Box>
                    <Box sx={stylesComponents.espaciadoOrdenFiltro}>
                        <InputLabel id="demo-simple-select-label">Age</InputLabel>
                        <Select
                        labelId="demo-simple-select-label"
                        id="demo-simple-select"
                        label="Age"
                        sx={stylesComponents.botonFiltro}
                        >
                        <MenuItem value="">
                            <em>None</em>
                        </MenuItem>
                        <MenuItem value={10}>Ten</MenuItem>
                        <MenuItem value={20}>Twenty</MenuItem>
                        <MenuItem value={30}>Thirty</MenuItem>
                        </Select>
                        {/* <Button  sx={stylesComponents.botonFiltro}>
                            Precio
                        </Button> */}
                    </Box>
                    <Box sx={stylesComponents.espaciadoOrdenFiltro}>
                        <Button  sx={stylesComponents.botonFiltro}>
                            Calificacion
                        </Button>
                    </Box>

                </Grid>
                <Grid item xs={12}>
                    <Grid container>
                        <Grid item md={3} xs={12}>
                            <Grid sx={{paddingLeft:'40px', paddingTop:'40px'}} >
                                <Typography variant="h1" color="initial" sx={{fontSize:'30px', fontFamily:'Archivo Black, sans-serif', color:'#B42981'}}>Filtros</Typography>
                                <Grid>

                                </Grid>
                            </Grid>
                            <Grid>

                            </Grid>
                        </Grid>
                        <Grid item md={8}>

                            <Grid container sx={stylesComponents.ContenedorProductos}>

                                <Grid item sm={12} md={6} lg={4} sx={stylesComponents.contenedorProducto}>
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
                                        <Button  sx={stylesComponents.button}>
                                            Ver
                                        </Button>
                                    </Box>
                                </Grid>
                                <Grid item sm={12} md={6} lg={4} sx={stylesComponents.contenedorProducto}>
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
                                <Grid item sm={12} md={6} lg={4} sx={stylesComponents.contenedorProducto}>
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
                                <Grid item sm={12} md={6} lg={4} sx={stylesComponents.contenedorProducto}>
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

                                <Grid item sm={12} md={6} lg={4} sx={stylesComponents.contenedorProducto}>
                                    <Box display={'flex'} style={{justifyContent:'center'}}>
                                        <Grid style={{width:'235px', height:'300px'}}>
                                            <img src={product5} alt="" width={'100%'} height={'100%'} style={{ objectFit: 'cover'}}/>
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
                                <Grid item sm={12} md={6} lg={4} sx={stylesComponents.contenedorProducto}>
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
                                <Grid item sm={12} md={6} lg={4} sx={stylesComponents.contenedorProducto}>
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
                                <Grid item sm={12} md={6} lg={4} sx={stylesComponents.contenedorProducto}>
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

                                <Grid item sm={12} md={6} lg={4} sx={stylesComponents.contenedorProducto}>
                                    <Box display={'flex'} style={{justifyContent:'center'}}>
                                        <Grid style={{width:'235px', height:'300px'}}>
                                            <img src={product9} alt="" width={'100%'} height={'100%'} style={{ objectFit: 'cover'}}/>
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
                                <Grid item sm={12} md={6} lg={4} sx={stylesComponents.contenedorProducto}>
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
                                <Grid item sm={12} md={6} lg={4} sx={stylesComponents.contenedorProducto}>
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
                </Grid>
            </Grid>

        </>
    )
}


export default Productos