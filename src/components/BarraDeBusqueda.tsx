/* eslint-disable react-hooks/exhaustive-deps */
import { Box, Grid, TextField, Typography } from "@mui/material";
import React from "react";
import { Flower } from "../interfaces/interfaces";
import { getProducts } from "../config/apiFirebase";
import { stylesComponents } from "../styles/stylesComponentes";
import { useNavigate } from 'react-router-dom';




function BarraDeBusqueda(){
    const navigate = useNavigate()


    const [searchTerm, setSearchTerm] = React.useState('');
    const [searchResults, setSearchResults] = React.useState<Flower[]>([]);
    const [flores, setFlores] = React.useState<Flower[]>([]);
    const [isSearch, setIsSearch] = React.useState(false);



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
        navigate('/Producto/'+id);
    };

    return(
        <>

            <Grid sx={{ background:'#ffb3e2b3', padding:'30px' }}>
                <Grid container sx={{paddingLeft:{xl:'10%', md:'2%',xs:'2%'}, paddingRight:{xl:'10%',md:'7%', xs:'5%'} }}>
                    <Grid item md={6} xs={12} sx={{color:'white'}}>
                        <Typography variant="h1" sx={{
                            color:'black',
                            fontFamily: "Cormorant",
                            fontOpticalSizing: "auto",
                            fontWeight: "<weight>",
                            fontStyle: "normal",
                            fontSize:{md:'30px', xs:'25px'}}} >Encuentra las flores de la mejor calidad que estabas buscando</Typography>
                    </Grid>
                    <Grid item md={6}  xs={12} sx={{textAlign:'center'}}>
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
            <Grid sx={{paddingLeft:{xl:'10%', md:'7%',xs:'5%'}, paddingRight:{xl:'10%',md:'7%', xs:'5%'} }}>
                {
                    isSearch &&
                    <Grid>
                        <Grid container sx={stylesComponents.ContenedorProductos} >
                            {searchResults.map(product => (
                                <Grid item xs={12} md={6} lg={3} sx={stylesComponents.contenedorProducto}>
                                    <Box display={'flex'} style={{justifyContent:'center'}}>
                                        <Grid sx={stylesComponents.contenerdorImagenProducto} onClick={()=>handleRedirectToProductId(product.id)}>
                                            <img src={product.imagen} alt="" width={'100%'} height={'100%'} style={{ objectFit: 'cover', position:'relative'}} />
                                            <Grid width={'100%'} height={'100%'} sx={{position: 'absolute', textAling:'left' }}>
                                                <Box sx={{ backgroundColor:'#ef8f61', width:'50%', color:'white', borderRadius:'5px', fontSize:'20px', margin:'5px' }}>
                                                    !Oferta¡
                                                </Box>
                                            </Grid>
                                        </Grid>
                                    </Box>

                                    {
                                        product.descuento ?
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
                                                        <Box sx={{ padding: {xs:'10px', lg:'2px'} }}>
                                                            {/* <Box sx={{justifyContent:'center', textAlign:'center', padding:'2px'}} >
                                                                <FavoriteBorderIcon sx={{width:'50%', justifyContent:'center', textAlign:'center'}}/>
                                                                <RemoveRedEyeIcon sx={{width:'50%', justifyContent:'center', textAlign:'center'}}/>
                                                            </Box> */}
                                                            <Box sx={{padding:'2px'}} onClick={()=>handleRedirectToProductId(product.id)}>
                                                                <Typography variant="h6" color="initial"  fontSize={16}  style={{color:'#404040'}}>{product.nombre}</Typography>
                                                            </Box>
                                                            <Box sx={{display:'flex',padding:'2px',width: '100%',}}>
                                                                <Typography variant="h6" color="initial"  fontSize={16}  style={{color:'#404040', width:'50%',  textDecorationLine: 'line-through', fontWeight: 'bold' }}>${product.precio}</Typography>
                                                                <Typography variant="h6" color="initial"  fontSize={16}  style={{color:'#9c0ba8', width:'50%', fontWeight: 'bold' }}>${product.descuento}</Typography>
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
                                                    // padding: '2px'
                                                }}
                                            >
                                                <Grid
                                                    sx={{
                                                        width: '100%',
                                                    }}
                                                >
                                                    <Box sx={{ padding: {xs:'10px', lg:'2px'} }}>
                                                        {/* <Box sx={{ justifyContent: 'center', textAlign: 'center' }}>
                                                            <FavoriteBorderIcon sx={{ width: '50%' }} />
                                                            <RemoveRedEyeIcon sx={{ width: '50%' }} />
                                                        </Box> */}
                                                        <Box
                                                        >
                                                            <Typography
                                                                variant="h6"
                                                                color="initial"
                                                                fontSize={16}
                                                                style={{ color: '#404040' }}
                                                            >
                                                            {product.nombre}
                                                            </Typography>
                                                        </Box>
                                                        <Box sx={{ padding: '2px' }}>
                                                            <Typography
                                                                variant="h6"
                                                                color="initial"
                                                                fontSize={16}
                                                                textAlign="center"
                                                                style={{ color: '#9c0ba8' }}
                                                            >
                                                            ${product.precio}
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
                }

            </Grid>

        </>

    )
}

export default BarraDeBusqueda