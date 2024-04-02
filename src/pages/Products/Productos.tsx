
import React from 'react'
import { Box, Grid, Typography, MenuItem, FormControl, FormGroup, FormControlLabel, Checkbox } from '@mui/material'
import { stylesComponents } from '../../styles/stylesComponentes'
import Select, { SelectChangeEvent } from '@mui/material/Select';
import { useNavigate } from 'react-router-dom';
import FavoriteBorderIcon from '@mui/icons-material/FavoriteBorder';
import RemoveRedEyeIcon from '@mui/icons-material/RemoveRedEye';
import { Flower } from '../../interfaces/interfaces'
import { getProducts } from '../../config/apiFirebase'

function Productos(){

    const navigate = useNavigate()


    const [precio, setPrecio] = React.useState('')
    const [calificacion, setCalificacion] = React.useState('')
    const [flores, setFlores] = React.useState<Flower[]>([]);

    React.useEffect(()=>{
        fetchFlores()
    },[])

    const fetchFlores = async () => {
        try {
            const flowersData = await getProducts();
            console.log(flowersData)
            setFlores(flowersData);
        } catch (error) {
            console.error('Error fetching flowers:', error);
        }
    };

    const handleChangePrecio = (event: SelectChangeEvent) => {
        setPrecio(event.target.value);
    };
    const handleChangeCalificacion = (event: SelectChangeEvent) => {
        setCalificacion(event.target.value);
    };

    const handleRedirectToProductId = (id:string) => {
        navigate('/Producto/'+id);
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
                                {flores && flores.map((item) => (
                                    <Grid item sm={12} md={6} lg={3} sx={stylesComponents.contenedorProducto}>
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
                </Grid>
            </Grid>

        </>
    )
}


export default Productos