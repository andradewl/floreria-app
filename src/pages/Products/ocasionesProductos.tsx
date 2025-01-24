/* eslint-disable react-hooks/exhaustive-deps */
/* eslint-disable react-hooks/rules-of-hooks */
import { Box, Grid, MenuItem, Select, SelectChangeEvent } from "@mui/material"
import Typography from '@mui/material/Typography'
import React from "react";
import { stylesComponents } from "../../styles/stylesComponentes";
import { getOcasiones, productoOcasionId } from "../../config/apiFirebase";
import { useNavigate, useParams } from "react-router-dom";
import { Flower, Ocasionest } from "../../interfaces/interfaces";

function ocasionesProductos(){
    const { nombreOcasion, id} = useParams();

    const [, setAge] = React.useState('')
    const navigate = useNavigate()
    // const [, setFlores] = React.useState<Flower[]>([]);
    const [filtradoForesOcasion, setfiltradoForesOcasion] = React.useState<Flower[]>([]);
    const [countflores, setCountflores] = React.useState(0);
    const [changevalueCombo, setChangevalueCombo] = React.useState("1");
    const [ocasinesDataId, setOcasinesDataId] = React.useState<Ocasionest[]>([]);
    const [OcasionDataFlor, setOcasionDataFlor ] = React.useState<Flower[]>([]);

    React.useEffect(()=>{
        fetchFlores()
    },[])

    React.useEffect(()=>{
        fetchFlores()
    },[nombreOcasion, id])


    const fetchFlores = async () => {
        try {
            const ocasionesDataid = await getOcasiones()
            if(id){
                const idocasionDataFlores = await productoOcasionId(id.toString())
                const flowercount = idocasionDataFlores.length

                setOcasionDataFlor(idocasionDataFlores)
                
                setCountflores(flowercount)
            }
            setOcasinesDataId(ocasionesDataid)
            
        } catch (error) {
            console.error('Error fetching flowers:', error);
        }
    };

    const handleChange = (event: SelectChangeEvent) => {
        setAge(event.target.value as string);
        if (event.target.value == "mayor"){
            const filtroFlores = filtradoForesOcasion.slice().sort((a, b) => b.precio - a.precio)
            setChangevalueCombo("mayor")
            setfiltradoForesOcasion(filtroFlores)
        }
        if(event.target.value == "menor"){
            setChangevalueCombo("menor")
            const filtroFlores = filtradoForesOcasion.slice().sort((a, b) => a.precio - b.precio)
            setfiltradoForesOcasion(filtroFlores)
        }
        console.log(event.target.value)
    };

    const handleRedirectToProductId = (id:string) => {
        navigate('/Producto/'+id);
    };

    return(
        <>
            <Grid sx={{...stylesComponents.contenedorPadre, background:'#fbf8f4'}}>
                <Grid  sx={stylesComponents.contenedorHijo}>
                    <Grid sx={{placeItems:'center'}}>
                        <Typography variant="h1" color="initial" sx={{
                                color:'black',
                                fontFamily: "Cormorant",
                                fontOpticalSizing: "auto",
                                fontWeight: "<weight>",
                                fontStyle: "normal",
                                fontSize:{md:'45px', xs:'35px'},
                                marginTop:'40px'
                                }} pt={4}
                            >
                            {nombreOcasion}
                        </Typography>
                    </Grid>
                    <Grid sx={{placeItems:'center'}}>
                        <Typography variant="body1" color="initial" sx={{
                                color:'black',
                                fontFamily: "Cormorant",
                                fontOpticalSizing: "auto",
                                fontWeight: "<weight>",
                                fontStyle: "normal",
                                fontSize:{md:'25px', xs:'15px'}
                                }}>
                            {countflores} articulos
                        </Typography>
                    </Grid>
                    <Grid sx={{marginTop:'40px', textAlign:'right', paddingRight:'2%'}}>
                        <Select
                            labelId="demo-simple-select-label"
                            id="demo-simple-select"
                            value={changevalueCombo}
                            label="Age"
                            onChange={handleChange}
                        >
                            <MenuItem value="1">
                                <em>Ordenar de</em>
                            </MenuItem>
                            <MenuItem value={'mayor'}>Precio Mayor</MenuItem>
                            <MenuItem value={'menor'}>Precio Menor</MenuItem>
                        </Select>
                    </Grid>
                </Grid>
            </Grid>

            <Grid sx={stylesComponents.contenedorPadre}>
                <Grid sx={stylesComponents.contenedorHijo}>
                    <Grid container sx={stylesComponents.ContenedorProductos} >
                        {OcasionDataFlor && OcasionDataFlor.map((item) => (
                            <Grid item xs={12} sm={6} md={3}  sx={stylesComponents.contenedorProducto}>
                                <Box display={'flex'} style={{justifyContent:'center'}}>
                                    <Grid sx={stylesComponents.contenerdorImagenProducto} onClick={()=>handleRedirectToProductId(item.id)}>
                                        <img src={item.imagen} alt="" width={'100%'} height={'100%'} style={{ objectFit: 'cover', position:'relative', borderRadius:'7px'}} />
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
                                                                fontWeight: "bold",
                                                                fontStyle: "normal",
                                                                textAlign:'left',
                                                                fontSize:'17px',
                                                                whiteSpace:'nowrap', overflow:'hidden'
                                                            }}>{item.nombre}</Typography>
                                                            <Typography variant="body1" color="initial"  style={{color:'#404040',
                                                                fontFamily: "Cormorant",
                                                                fontOpticalSizing: "auto",
                                                                fontWeight: "blod",
                                                                fontStyle: "normal",
                                                                textAlign:'left',
                                                                fontSize:'12px'
                                                            }}>{ocasinesDataId && ocasinesDataId.map((item2) => (
                                                                item2.id === item.ocasion ? item2.nombre : null
                                                            ))}</Typography>
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
                                                            fontWeight: "bold",
                                                            fontStyle: "normal",
                                                            textAlign:'left',
                                                            fontSize:'17px',
                                                            whiteSpace:'nowrap', overflow:'hidden'
                                                        }}>{item.nombre}</Typography>
                                                        <Typography variant="body1" color="initial"  style={{color:'#404040',
                                                            fontFamily: "Cormorant",
                                                            fontOpticalSizing: "auto",
                                                            fontWeight: "bold",
                                                            fontStyle: "normal",
                                                            textAlign:'left',
                                                            fontSize:'12px'
                                                        }}>
                                                            {ocasinesDataId && ocasinesDataId.map((item2) => (
                                                                item2.id === item.ocasion ? item2.nombre : null
                                                            ))}
                                                        </Typography>
                                                        
                                                    </Box>
                                                    <Box
                                                    >
                                                        <Typography variant="body2" color="initial"  style={{color:'#9c0ba8', textAlign:'left', fontWeight: 'bold',fontSize:'12px' }}>${item.precio }</Typography>
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
            
           

        </>
    )
}


export default ocasionesProductos