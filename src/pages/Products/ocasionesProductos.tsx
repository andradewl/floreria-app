/* eslint-disable react-hooks/exhaustive-deps */
/* eslint-disable react-hooks/rules-of-hooks */
import { Box, Grid, MenuItem, Select, SelectChangeEvent } from "@mui/material"
import Typography from '@mui/material/Typography'
import React from "react";
import { stylesComponents } from "../../styles/stylesComponentes";
import { getOcasiones, productoOcasionId } from "../../config/apiFirebase";
import { useNavigate, useParams } from "react-router-dom";
import { Flower, Ocasionest } from "../../interfaces/interfaces";
import { Producto } from "../../components/Producto";

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


    return(
        <Grid sx={{paddingBottom:{xs:'40%', md:'20%', lg:'15%'}}}>
            <Grid sx={{...stylesComponents.contenedorPadre, background:'#fbf8f4', paddingTop:{xs:'40%', md:'20%', lg:'15%'}}}>
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
                            <Producto key={item.id} flower={item} ocasinesDataId={ocasinesDataId}/>
                            
                        ))}
                    </Grid>
                </Grid>
            </Grid>
            
           

        </Grid>
    )
}


export default ocasionesProductos