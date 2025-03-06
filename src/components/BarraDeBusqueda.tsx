/* eslint-disable react-hooks/exhaustive-deps */
import { Box, Grid, TextField, Typography } from "@mui/material";
import React from "react";
import { Flower, Ocasionest } from "../interfaces/interfaces";
import { getOcasiones, getProducts } from "../config/apiFirebase";
import { stylesComponents } from "../styles/stylesComponentes";
import { Producto } from "./Producto";
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

    return(
        <>
            <Grid sx={{...stylesComponents.contenedorPadre, background:'#ffb3e2b3', paddingBottom:{xs:'3%', md:'1%'}, paddingTop:{xs:'3%', md:'1%'}}}>
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
                    <Grid item md={6}  xs={12} sx={{textAlign:'center', marginTop:{xs:'3%', md:'0%'}}}>
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
                                    <Producto key={item.id} flower={item} ocasinesDataId={ocasinesDataId}/>
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