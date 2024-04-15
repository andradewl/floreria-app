
import React from 'react'
import { Box, Grid, Typography, MenuItem } from '@mui/material'
import { stylesComponents } from '../../styles/stylesComponentes'
import Select, { SelectChangeEvent } from '@mui/material/Select';
import { useNavigate } from 'react-router-dom';
import { Flower } from '../../interfaces/interfaces'
import { getProducts } from '../../config/apiFirebase'

function Productos(){

    const navigate = useNavigate()


    const [precio, setPrecio] = React.useState('')
    const [ocasion, setOcasion] = React.useState('')
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
    const handleChangeOcasion = (event: SelectChangeEvent) => {
        setOcasion(event.target.value);
    }
    const handleChangeCalificacion = (event: SelectChangeEvent) => {
        setCalificacion(event.target.value);
    };

    const handleRedirectToProductId = (id:string) => {
        navigate('/Producto/'+id);
    };


    return(
        <>
        <Grid sx={{width:'100%', height:'560px', backgroundColor:'#fdcfd5', position: 'relative'}}>
            {/* <img src="https://firebasestorage.googleapis.com/v0/b/prowlflores.appspot.com/o/multimedia%2Fimagenes%2FFondos%2Fmariposa-en-flor_3840x2400_xtrafondos.com.jpg?alt=media&token=a7a9c3ef-e968-4ab7-9308-56042bf4dbbf" alt="" width={'100%'} height={'100%'} style={{ objectFit: 'cover', position:'relative'}}/> */}
            <Grid width={'100%'} height={'100%'} sx={{display: 'flex', justifyContent: 'center', alignItems: 'center'}}>
                <Typography variant="h2" color="white">Productos</Typography>
            </Grid>
        </Grid>
            <Grid container sx={{paddingLeft:'5%', paddingRight:'5%'}} >
                <Grid item xs={12} sx={stylesComponents.positionOfFilter}>
                    <Box sx={stylesComponents.espaciadoOrdenFiltro}>
                        <Select
                            value={precio}
                            onChange={handleChangePrecio}
                            displayEmpty
                            inputProps={{ 'aria-label': 'Without label' }}
                            >
                                <MenuItem value="">
                                    <em>Ordenar por Precio</em>
                                </MenuItem>
                                <MenuItem value={'mayor'} sx={{ fontize:'20px'}}>Mayor</MenuItem>
                                <MenuItem value={'menor'}>Menor</MenuItem>
                            </Select>

                    </Box>
                    <Box sx={stylesComponents.espaciadoOrdenFiltro}>
                    <Select
                            value={calificacion}
                            onChange={handleChangeCalificacion}
                            displayEmpty
                            inputProps={{ 'aria-label': 'Without label' }}
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
                    </Box>
                </Grid>
                <Grid item xs={12} paddingTop={'30px'} >
                    <Grid container>
                        <Grid item md={2} sx={{display:{ xs:'none', md:'block'}}}>
                            <Grid >
                                <Typography variant="h1" color="initial" sx={{fontSize:'30px', fontFamily:'Archivo Black, sans-serif', color:'#B42981'}}>Filtros</Typography>
                                <Grid >

                                    <Grid>
                                        <Select
                                            value={ocasion}
                                            onChange={handleChangeOcasion}
                                            displayEmpty
                                            inputProps={{ 'aria-label': 'Without label' }}
                                        >
                                            <MenuItem value="">
                                                <em>Por Ocasion</em>
                                            </MenuItem>
                                            <MenuItem value={'mayor'} sx={{ fontize:'20px'}}>boda</MenuItem>
                                            <MenuItem value={'menor'}>Para ella</MenuItem>
                                            <MenuItem value={'menor'}>Para el</MenuItem>
                                            <MenuItem value={'menor'}>Bautisos</MenuItem>
                                            <MenuItem value={'menor'}>Velorios</MenuItem>
                                            <MenuItem value={'menor'}>XV Años</MenuItem>
                                        </Select>
                                    </Grid>

                                    <Grid>
                                        <Grid>
                                            <Select
                                                value={ocasion}
                                                onChange={handleChangeOcasion}
                                                displayEmpty
                                                inputProps={{ 'aria-label': 'Without label' }}
                                            >
                                                <MenuItem value="">
                                                    <em>Tipo de flor</em>
                                                </MenuItem>
                                                <MenuItem value={'mayor'} sx={{ fontize:'20px'}}>Rosas</MenuItem>
                                                <MenuItem value={'menor'}>Claveles</MenuItem>
                                                <MenuItem value={'menor'}>Girasoles</MenuItem>
                                                <MenuItem value={'menor'}>Bautisos</MenuItem>
                                                <MenuItem value={'menor'}>Velorios</MenuItem>
                                                <MenuItem value={'menor'}>XV Años</MenuItem>
                                            </Select>
                                        </Grid>
                                    </Grid>

                                </Grid>
                            </Grid>
                            <Grid>
                            </Grid>
                        </Grid>
                        <Grid item md={10} xs={12}>
                            <Grid container sx={stylesComponents.ContenedorProductos}>
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
                                                        justifyContent: 'center',
                                                        textAlign: 'center',
                                                        padding: '2px'
                                                    }}
                                                >
                                                    <Grid sx={{width:{xs:'300px', md:'400px', lg:'200px'}}}>
                                                        <Box sx={{ padding: {xs:'10px', lg:'2px'} }}>
                                                            {/* <Box sx={{justifyContent:'center', textAlign:'center', padding:'2px'}} >
                                                                <FavoriteBorderIcon sx={{width:'50%', justifyContent:'center', textAlign:'center'}}/>
                                                                <RemoveRedEyeIcon sx={{width:'50%', justifyContent:'center', textAlign:'center'}}/>
                                                            </Box> */}
                                                            <Box sx={{ justifyContent:'center', textAlign:'center', padding:'2px'}} onClick={()=>handleRedirectToProductId(item.id)}>
                                                                <Typography variant="h6" color="initial"  fontSize={16} textAlign={'center'} style={{color:'#404040', textAlign:'center'}}>{item.nombre}</Typography>
                                                            </Box>
                                                            <Box sx={{display:'flex',justifyContent:'center', textAlign:'center', padding:'2px'}}>
                                                                <Typography variant="h6" color="initial"  fontSize={16} textAlign={'center'} style={{color:'#404040', textAlign:'center', width:'50%',  textDecorationLine: 'line-through', fontWeight: 'bold' }}>${item.precio}</Typography>
                                                                <Typography variant="h6" color="initial"  fontSize={16} textAlign={'center'} style={{color:'#9c0ba8', textAlign:'center', width:'50%', fontWeight: 'bold' }}>${item.descuento}</Typography>
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
                                                        {/* <Box sx={{ justifyContent: 'center', textAlign: 'center' }}>
                                                            <FavoriteBorderIcon sx={{ width: '50%' }} />
                                                            <RemoveRedEyeIcon sx={{ width: '50%' }} />
                                                        </Box> */}
                                                        <Box
                                                            sx={{
                                                                justifyContent: 'center',
                                                                textAlign: 'center',
                                                            }}
                                                        >
                                                            <Typography
                                                                variant="h6"
                                                                color="initial"
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
                </Grid>
            </Grid>

        </>
    )
}


export default Productos