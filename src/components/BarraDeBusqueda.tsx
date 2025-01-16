/* eslint-disable react-hooks/exhaustive-deps */
import { Box, Container, Grid, TextField, Typography } from "@mui/material";
import React from "react";
import { Flower, Ocasionest } from "../interfaces/interfaces";
import { getOcasiones, getProducts } from "../config/apiFirebase";
import { stylesComponents } from "../styles/stylesComponentes";
// import { useNavigate } from 'react-router-dom';




function BarraDeBusqueda(){
    // const navigate = useNavigate()


    const [searchTerm, setSearchTerm] = React.useState('');
    const [searchResults, setSearchResults] = React.useState<Flower[]>([]);
    const [flores, setFlores] = React.useState<Flower[]>([]);
    const [isSearch, setIsSearch] = React.useState(false);
    const [ocasinesDataId, setOcasinesDataId] = React.useState<Ocasionest[]>([]);



    React.useEffect(()=>{
        fetchFlores()
    },[])

    const fetchFlores = async () => {
        try {
            const flowersData = await getProducts();
            console.log(flowersData)
            const ocasionesDataid = await getOcasiones()
            setOcasinesDataId(ocasionesDataid)
            setFlores(flowersData);
        } catch (error) {
            console.error('Error fetching flowers:', error);
        }
    };

    React.useEffect(() => {
        const results = flores.filter(product =>
            product.nombre.toLowerCase().includes(searchTerm.toLowerCase())
        );
        setSearchResults(results);
    }, []);

    React.useEffect(() => {
        const results = flores.filter(product =>
            product.nombre.toLowerCase().includes(searchTerm.toLowerCase())
        );
        setSearchResults(results);
    }, [searchTerm, flores]);

    const handleSearch = (e: React.ChangeEvent<HTMLInputElement>) => {

        if(e.target.value){
            setSearchTerm(e.target.value);
            setIsSearch(true)
        }else{
            setSearchTerm('');

            setIsSearch(false)
        }
    };

    const handleRedirectToProductId = (id:string) => {
        const redireccion = "/Producto/"+id
        window.location.href = redireccion
        // navigate('/Producto/'+id);
    };

    return(
        <>
            

            <Grid sx={{...stylesComponents.contenedorPadre, background:'#ffb3e2b3'}}>
                <Grid container sx={stylesComponents.contenedorHijo}>
                    <Grid item md={6} xs={12} sx={{color:'white'}}>
                        <Typography variant="h2" sx={{
                            color:'black',
                            fontFamily: "Cormorant",
                            fontOpticalSizing: "auto",
                            fontWeight: "bold",
                            fontStyle: "normal",
                            fontSize:{md:'30px', xs:'23px'}}} >Encuentra las flores de la mejor calidad que estabas buscando</Typography>
                    </Grid>
                    <Grid item md={6}  xs={12} sx={{textAlign:'center', marginTop:{xs:'40px', md:'0px'}}}>
                        <TextField
                            label="buscar"
                            variant="outlined"
                            type="search"
                            value={searchTerm}
                            onChange={handleSearch}
                            placeholder="Buscar productos..."
                            sx={{color:'grey', width:{md:'90%',xs:'100%', borderRadius:'20px'}}}
                        />
                    </Grid>
                </Grid>

            </Grid>

            <Grid sx={stylesComponents.contenedorPadre}>
                <Grid sx={stylesComponents.contenedorHijo}>
                    {
                        isSearch &&
                        <Grid>
                            <Grid container sx={stylesComponents.ContenedorProductos} >
                                {searchResults.map((item) => (
                                    <Grid item xs={12} md={3}  sx={stylesComponents.contenedorProducto}>
                                        <Box display={'flex'} style={{justifyContent:'center'}}>
                                            <Grid sx={stylesComponents.contenerdorImagenProducto} onClick={()=>handleRedirectToProductId(item.id)}>
                                                <img src={item.imagen} alt="" width={'100%'} height={'100%'} style={{ objectFit: 'cover', position:'relative', borderRadius:'7px'}} />
                                                {item.descuento &&
                                                    <Grid width={'100%'} height={'100%'} sx={{position: 'absolute', textAling:'left' }}>
                                                        <Box sx={{ backgroundColor:'#ef8f61', width:'50%', color:'white', borderRadius:'5px', fontSize:'20px', margin:'5px' }}>
                                                            !Oferta¡
                                                        </Box>
                                                    </Grid>
                                                }
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
                                                            <Box>
                                                                
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
                    }
                </Grid>
            </Grid>

        </>
        

    )
}

export default BarraDeBusqueda