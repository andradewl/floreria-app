
import product1 from '../../assets/productos/productOne.jpg'
import product2 from '../../assets/productos/productTwo.webp'
import product3 from '../../assets/productos/productThree.jpg'
import product4 from '../../assets/productos/productFor.webp'
import product5 from '../../assets/productos/productFive.jpg'
import product6 from '../../assets/productos/productSix.jpg'
import product7 from '../../assets/productos/productsEVEN.jpg'
import product8 from '../../assets/productos/productEight.webp'
import product9 from '../../assets/productos/productnNain.webp'
import product10 from '../../assets/productos/productTen.jpg'
import product11 from '../../assets/productos/productEleven.webp'
import { Box, Button, Grid, Typography, MenuItem, FormControl, FormGroup, FormControlLabel, Checkbox } from '@mui/material'
import { stylesComponents } from '../../styles/stylesComponentes'
import Select, { SelectChangeEvent } from '@mui/material/Select';
import React from 'react'
import { Link } from 'react-router-dom'


function Productos(){

    const [precio, setPrecio] = React.useState('')
    const [calificacion, setCalificacion] = React.useState('')

    const handleChangePrecio = (event: SelectChangeEvent) => {
        setPrecio(event.target.value);
    };
    const handleChangeCalificacion = (event: SelectChangeEvent) => {
        setCalificacion(event.target.value);
    };


    return(
        <>
            <Grid container>
                <Grid item xs={12} sx={stylesComponents.positionOfFilter}>
                    <Box sx={stylesComponents.espaciadoOrdenFiltro}>
                        <FormControl sx={{ minWidth: 'auto' }}>
                            <Select
                            value={precio}
                            onChange={handleChangePrecio}
                            displayEmpty
                            inputProps={{ 'aria-label': 'Without label' }}
                            sx={stylesComponents.botonFiltro}>
                                <MenuItem value="">
                                    <em>Ordenar por Precio</em>
                                </MenuItem>
                                <MenuItem value={'mayor'} sx={{ fontize:'20px'}}>Mayor</MenuItem>
                                <MenuItem value={'menor'}>Menor</MenuItem>
                            </Select>
                        </FormControl>

                    </Box>
                    <Box sx={stylesComponents.espaciadoOrdenFiltro}>
                        <FormControl sx={{ minWidth: 'auto' }}>
                            <Select
                            value={calificacion}
                            onChange={handleChangeCalificacion}
                            displayEmpty
                            inputProps={{ 'aria-label': 'Without label' }}
                            sx={stylesComponents.botonFiltro}
                            >
                                <MenuItem value="">
                                    <em>Ordenar por calificacion</em>
                                </MenuItem>
                                <MenuItem value={5}>5 estrellas</MenuItem>
                                <MenuItem value={4}>4 estrellas</MenuItem>
                                <MenuItem value={3}>3 estrellas</MenuItem>
                                <MenuItem value={2}>2 estrellas</MenuItem>
                                <MenuItem value={1}>1 estrellas</MenuItem>
                            </Select>
                        </FormControl>
                    </Box>
                </Grid>
                <Grid item xs={12}>
                    <Grid container>
                        <Grid item md={2} xs={4}>
                            <Grid sx={{paddingLeft:{sm:'20px', md:'40px'}, paddingTop:'40px'}} >
                                <Typography variant="h1" color="initial" sx={{fontSize:'30px', fontFamily:'Archivo Black, sans-serif', color:'#B42981'}}>Filtros</Typography>
                                <Grid sx={{paddingLeft:'20px'}}>
                                    <Grid>
                                        <Typography variant="h6" color="initial">Tipo</Typography>
                                        <FormGroup sx={{paddingLeft:'20px'}}>
                                            <FormControlLabel control={<Checkbox defaultChecked />} label="Label" />
                                            <FormControlLabel control={<Checkbox />} label="Rosas" />
                                            <FormControlLabel control={<Checkbox />} label="Clavel" />
                                            <FormControlLabel control={<Checkbox />} label="Tulipanes" />
                                            <FormControlLabel control={<Checkbox />} label="Orquideas" />
                                        </FormGroup>
                                    </Grid>
                                    <Grid>
                                        <Typography variant="h6" color="initial">Promocion</Typography>

                                    </Grid>
                                    <Grid>
                                        <Typography variant="h6" color="initial">Color</Typography>
                                        <FormGroup sx={{paddingLeft:'20px'}}>
                                            <FormControlLabel control={<Checkbox defaultChecked />} label="Rojo" />
                                            <FormControlLabel control={<Checkbox />} label="Morado" />
                                            <FormControlLabel control={<Checkbox />} label="Blanco" />
                                            <FormControlLabel control={<Checkbox />} label="Azul" />
                                            <FormControlLabel control={<Checkbox />} label="Rosa" />
                                        </FormGroup>
                                    </Grid>
                                    <Grid>
                                        <Typography variant="h6" color="initial">Mas Vendidos</Typography>

                                    </Grid>
                                    <Grid>
                                        <Typography variant="h6" color="initial">Ocasion</Typography>
                                        <FormGroup sx={{paddingLeft:'20px'}}>
                                            <FormControlLabel control={<Checkbox defaultChecked />} label="Bodas" />
                                            <FormControlLabel control={<Checkbox />} label="Para Ella" />
                                            <FormControlLabel control={<Checkbox />} label="Para El" />
                                            <FormControlLabel control={<Checkbox />} label="Bautisos" />
                                            <FormControlLabel control={<Checkbox />} label="Velorios" />
                                        </FormGroup>
                                    </Grid>
                                </Grid>
                            </Grid>
                            <Grid>
                            </Grid>
                        </Grid>
                        <Grid item md={10} xs={8}>
                            <Grid container sx={stylesComponents.ContenedorProductos}>
                                <Grid item sm={12} md={6} lg={3} sx={stylesComponents.contenedorProducto}>
                                    <Box display={'flex'} style={{justifyContent:'center'}}>
                                        <Grid style={{width:'200px', height:'275px'}}>
                                            <img src={product1} alt="" width={'100%'} height={'100%'} style={{ objectFit: 'cover'}}/>
                                        </Grid>
                                    </Box>
                                    <Box p={1}>
                                        <Typography variant="h6" color="initial" fontFamily={'Montserrat, sans-serif'} fontSize={16} textAlign={'start'} style={{color:'#404040', textAlign:'center'}} >Arreglo Multicolor</Typography>
                                        <Typography variant="h6" color="initial" fontFamily={'Archivo Black, sans-serif'} fontSize={16} textAlign={'start'} style={{color:'#404040', textAlign:'center' }}>$100.00</Typography>
                                    </Box>
                                    <Box >
                                        <Button sx={stylesComponents.button} component={Link}
                                            to="/Producto/1"
                                        >
                                            Ver
                                        </Button>
                                    </Box>
                                </Grid>
                                <Grid item sm={12} md={6} lg={3} sx={stylesComponents.contenedorProducto}>
                                        <Box display={'flex'} style={{justifyContent:'center'}}>
                                            <Grid style={{width:'200px', height:'275px'}}>
                                                <img src={product2} alt="" width={'100%'} height={'100%'} style={{ objectFit: 'cover'}}/>
                                            </Grid>
                                        </Box>
                                        <Box p={1}>
                                            <Typography variant="h6" color="initial" fontFamily={'Montserrat, sans-serif'} fontSize={16} textAlign={'start'} style={{color:'#404040', textAlign:'center'}}>Arreglo Multicolor</Typography>
                                            <Typography variant="h6" color="initial" fontFamily={'Archivo Black, sans-serif'} fontSize={16} textAlign={'start'} style={{color:'#404040', textAlign:'center' }}>$100.00</Typography>
                                        </Box>
                                        <Box >
                                        <Button sx={stylesComponents.button}
                                            component={Link}
                                            to="/Producto/2"
                                        >
                                            Ver
                                        </Button>
                                    </Box>
                                </Grid>
                                <Grid item sm={12} md={6} lg={3} sx={stylesComponents.contenedorProducto}>
                                    <Box display={'flex'} style={{justifyContent:'center'}}>
                                        <Grid style={{width:'200px', height:'275px'}}>
                                            <img src={product3} alt="" width={'100%'} height={'100%'} style={{ objectFit: 'cover'}}/>
                                        </Grid>
                                    </Box>
                                    <Box p={1}>
                                        <Typography variant="h6" color="initial" fontFamily={'Montserrat, sans-serif'} fontSize={16} textAlign={'start'} style={{color:'#404040', textAlign:'center'}}>Arreglo Multicolor</Typography>
                                        <Typography variant="h6" color="initial" fontFamily={'Archivo Black, sans-serif'} fontSize={16} textAlign={'start'} style={{color:'#404040', textAlign:'center' }}>$100.00</Typography>
                                    </Box>
                                    <Box >
                                        <Button sx={stylesComponents.button}>
                                            Ver
                                        </Button>
                                </Box>
                                </Grid>
                                <Grid item sm={12} md={6} lg={3} sx={stylesComponents.contenedorProducto}>
                                    <Box display={'flex'} style={{justifyContent:'center'}}>
                                        <Grid style={{width:'200px', height:'275px'}}>
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
                                        <Button sx={stylesComponents.button}>
                                            Ver
                                        </Button>
                                </Box>
                                </Grid>

                                <Grid item sm={12} md={6} lg={3} sx={stylesComponents.contenedorProducto}>
                                    <Box display={'flex'} style={{justifyContent:'center'}}>
                                        <Grid style={{width:'200px', height:'275px'}}>
                                            <img src={product5} alt="" width={'100%'} height={'100%'} style={{ objectFit: 'cover'}}/>
                                        </Grid>
                                    </Box>
                                    <Box p={1}>
                                        <Typography variant="h6" color="initial" fontFamily={'Montserrat, sans-serif'} fontSize={16} textAlign={'start'} style={{color:'#404040', textAlign:'center'}} >Arreglo Multicolor</Typography>
                                        <Typography variant="h6" color="initial" fontFamily={'Archivo Black, sans-serif'} fontSize={16} textAlign={'start'} style={{color:'#404040', textAlign:'center' }}>$100.00</Typography>
                                    </Box>
                                    <Box >
                                        <Button sx={stylesComponents.button}>
                                            Ver
                                        </Button>
                                    </Box>
                                </Grid>
                                <Grid item sm={12} md={6} lg={3} sx={stylesComponents.contenedorProducto}>
                                        <Box display={'flex'} style={{justifyContent:'center'}}>
                                           <Grid style={{width:'200px', height:'275px'}}>
                                                <img src={product6} alt="" width={'100%'} height={'100%'} style={{ objectFit: 'cover'}}/>
                                            </Grid>
                                        </Box>
                                        <Box p={1}>
                                            <Typography variant="h6" color="initial" fontFamily={'Montserrat, sans-serif'} fontSize={16} textAlign={'start'} style={{color:'#404040', textAlign:'center'}}>Arreglo Multicolor</Typography>
                                            <Typography variant="h6" color="initial" fontFamily={'Archivo Black, sans-serif'} fontSize={16} textAlign={'start'} style={{color:'#404040', textAlign:'center' }}>$100.00</Typography>
                                        </Box>
                                        <Box >
                                            <Button sx={stylesComponents.button}>
                                                Ver
                                            </Button>
                                    </Box>
                                </Grid>
                                <Grid item sm={12} md={6} lg={3} sx={stylesComponents.contenedorProducto}>
                                    <Box display={'flex'} style={{justifyContent:'center'}}>
                                        <Grid style={{width:'200px', height:'275px'}}>
                                            <img src={product7} alt="" width={'100%'} height={'100%'} style={{ objectFit: 'cover'}}/>
                                        </Grid>
                                    </Box>
                                    <Box p={1}>
                                        <Typography variant="h6" color="initial" fontFamily={'Montserrat, sans-serif'} fontSize={16} textAlign={'start'} style={{color:'#404040', textAlign:'center'}}>Arreglo Multicolor</Typography>
                                        <Typography variant="h6" color="initial" fontFamily={'Archivo Black, sans-serif'} fontSize={16} textAlign={'start'} style={{color:'#404040', textAlign:'center' }}>$100.00</Typography>
                                    </Box>
                                    <Box >
                                        <Button sx={stylesComponents.button}>
                                            Ver
                                        </Button>
                                </Box>
                                </Grid>
                                <Grid item sm={12} md={6} lg={3} sx={stylesComponents.contenedorProducto}>
                                    <Box display={'flex'} style={{justifyContent:'center'}}>
                                        <Grid style={{width:'200px', height:'275px'}}>
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
                                        <Button sx={stylesComponents.button}>
                                            Ver
                                        </Button>
                                </Box>
                                </Grid>

                                <Grid item sm={12} md={6} lg={3} sx={stylesComponents.contenedorProducto}>
                                    <Box display={'flex'} style={{justifyContent:'center'}}>
                                       <Grid style={{width:'200px', height:'275px'}}>
                                            <img src={product9} alt="" width={'100%'} height={'100%'} style={{ objectFit: 'cover'}}/>
                                        </Grid>
                                    </Box>
                                    <Box p={1}>
                                        <Typography variant="h6" color="initial" fontFamily={'Montserrat, sans-serif'} fontSize={16} textAlign={'start'} style={{color:'#404040', textAlign:'center'}} >Arreglo Multicolor</Typography>
                                        <Typography variant="h6" color="initial" fontFamily={'Archivo Black, sans-serif'} fontSize={16} textAlign={'start'} style={{color:'#404040', textAlign:'center' }}>$100.00</Typography>
                                    </Box>
                                    <Box >
                                        <Button sx={stylesComponents.button}>
                                            Ver
                                        </Button>
                                    </Box>
                                </Grid>
                                <Grid item sm={12} md={6} lg={3} sx={stylesComponents.contenedorProducto}>
                                        <Box display={'flex'} style={{justifyContent:'center'}}>
                                           <Grid style={{width:'200px', height:'275px'}}>
                                                <img src={product10} alt="" width={'100%'} height={'100%'} style={{ objectFit: 'cover'}}/>
                                            </Grid>
                                        </Box>
                                        <Box p={1}>
                                            <Typography variant="h6" color="initial" fontFamily={'Montserrat, sans-serif'} fontSize={16} textAlign={'start'} style={{color:'#404040', textAlign:'center'}}>Arreglo Multicolor</Typography>
                                            <Typography variant="h6" color="initial" fontFamily={'Archivo Black, sans-serif'} fontSize={16} textAlign={'start'} style={{color:'#404040', textAlign:'center' }}>$100.00</Typography>
                                        </Box>
                                        <Box >
                                            <Button sx={stylesComponents.button}>
                                                Ver
                                            </Button>
                                    </Box>
                                </Grid>
                                <Grid item sm={12} md={6} lg={3} sx={stylesComponents.contenedorProducto}>
                                    <Box display={'flex'} style={{justifyContent:'center'}}>
                                        <Grid style={{width:'200px', height:'275px'}}>
                                            <img src={product11} alt="" width={'100%'} height={'100%'} style={{ objectFit: 'cover'}}/>
                                        </Grid>
                                    </Box>
                                    <Box p={1}>
                                        <Typography variant="h6" color="initial" fontFamily={'Montserrat, sans-serif'} fontSize={16} textAlign={'start'} style={{color:'#404040', textAlign:'center'}}>Arreglo Multicolor</Typography>
                                        <Typography variant="h6" color="initial" fontFamily={'Archivo Black, sans-serif'} fontSize={16} textAlign={'start'} style={{color:'#404040', textAlign:'center' }}>$100.00</Typography>
                                    </Box>
                                    <Box >
                                        <Button sx={stylesComponents.button}>
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