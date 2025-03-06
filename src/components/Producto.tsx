
import { Flower, Ocasionest } from '../interfaces/interfaces';
import { Box, Grid, Typography } from '@mui/material';
import { stylesComponents } from '../styles/stylesComponentes';

export const Producto = ({ flower, ocasinesDataId }: { flower: Flower; ocasinesDataId: Ocasionest[] }) => {

    const handleRedirectToProductId = (id:string) => {
        const redireccion = "/Producto/"+id
        window.location.href = redireccion
        // navigate('/Producto/'+redireccion);
    };


    return (
        <Grid item xs={12} sm={6} md={3} sx={stylesComponents.contenedorProducto}>
            <Box display={'flex'} style={{ justifyContent: 'center' }}>
                <Grid sx={stylesComponents.contenerdorImagenProducto} onClick={() => handleRedirectToProductId(flower.id)}>
                    <img src={flower.imagen} alt="" width={'100%'} height={'100%'} style={{ objectFit: 'cover', position: 'relative', borderRadius: '7px' }} />
                    {flower.descuento &&
                        <Grid width={'100%'} height={'100%'} sx={{ position: 'absolute', textAling: 'left' }}>
                            <Box sx={{ backgroundColor: '#ef8f61', width: '50%', color: 'white', borderRadius: '5px', fontSize: '20px', margin: '5px' }}>
                                !Oferta¡
                            </Box>
                        </Grid>
                    }
                </Grid>
            </Box>
            {
                flower.descuento ?
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
                                    <Box sx={{ paddingTop: '2px' }}>
                                        <Box sx={{ padding: '2px' }} onClick={() => handleRedirectToProductId(flower.id)}>
                                            <Typography variant="body1" color="initial" style={{
                                                color: '#404040',
                                                fontFamily: "Cormorant",
                                                fontOpticalSizing: "auto",
                                                fontWeight: "bold",
                                                fontStyle: "normal",
                                                textAlign: 'left',
                                                fontSize: '17px',
                                                whiteSpace: 'nowrap', overflow: 'hidden'
                                            }}>{flower.nombre}</Typography>
                                            <Typography variant="body1" color="initial" style={{
                                                color: '#404040',
                                                fontFamily: "Cormorant",
                                                fontOpticalSizing: "auto",
                                                fontWeight: "bold",
                                                fontStyle: "normal",
                                                textAlign: 'left',
                                                fontSize: '12px'
                                            }}>
                                                {ocasinesDataId && ocasinesDataId.map((item2) => (
                                                    item2.id === flower.ocasion ? item2.nombre : null
                                                ))}
                                            </Typography>
                                        </Box>
                                        <Box sx={{ display: 'flex', padding: '2px', width: '100%', }}>
                                            <Typography variant="body2" color="initial" style={{ color: '#404040', textAlign: 'left', width: '50%', textDecorationLine: 'line-through', fontWeight: 'bold', fontSize: '12px' }}>${flower.precio}</Typography>
                                            <Typography variant="body2" color="initial" style={{ color: '#9c0ba8', textAlign: 'right', width: '50%', fontWeight: 'bold', fontSize: '12px' }}>${flower.descuento}</Typography>
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
                                <Box sx={{ padding: { xs: '10px', lg: '2px' } }}>
                                    <Box sx={{ padding: '2px' }}>
                                        <Typography variant="body1" color="initial" style={{
                                            color: '#404040',
                                            fontFamily: "Cormorant",
                                            fontOpticalSizing: "auto",
                                            fontWeight: "bold",
                                            fontStyle: "normal",
                                            textAlign: 'left',
                                            fontSize: '17px',
                                            whiteSpace: 'nowrap', overflow: 'hidden'
                                        }}>{flower.nombre}</Typography>
                                        <Typography variant="body1" color="initial" style={{
                                            color: '#404040',
                                            fontFamily: "Cormorant",
                                            fontOpticalSizing: "auto",
                                            fontWeight: "bold",
                                            fontStyle: "normal",
                                            textAlign: 'left',
                                            fontSize: '12px'
                                        }}>
                                            {ocasinesDataId && ocasinesDataId.map((item2) => (
                                                item2.id === flower.ocasion ? item2.nombre : null
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
                                        <Typography variant="body2" color="initial" style={{ color: '#9c0ba8', textAlign: 'left', fontWeight: 'bold', fontSize: '12px' }}>${flower.precio}</Typography>
                                    </Box>
                                </Box>
                            </Grid>
                        </Grid>

                    )

            }

        </Grid>
    )
}