/* eslint-disable react-refresh/only-export-components */
import {  Box, Button, Grid, Pagination, Typography } from "@mui/material";
import { stylesComponents } from "../styles/stylesComponentes"
import '../styles/fuentes.css'
import { fetchProducts, getOcasiones, getProducts } from "../config/apiFirebase";
import React from "react";
import { Flower, Ocasionest } from "../interfaces/interfaces"
import BarraDeBusqueda from "../components/BarraDeBusqueda";
import { Producto } from "../components/Producto";



function Home(){

    // const navigate = useNavigate()
    const [flores, setFlores] = React.useState<Flower[]>([]);
    const [ocasinesDataId, setOcasinesDataId] = React.useState<Ocasionest[]>([]);
    // const history = useHistory();


    const [products, setProducts] = React.useState<Flower[]>([]); // Tipar el estado

    const [page, setPage] = React.useState(1);
    const [lastVisible, setLastVisible] = React.useState<any>(null);
    const [totalProducts, setTotalProducts] = React.useState(0);
    const productsPerPage = 12;


    React.useEffect(()=>{
        fetchFlores()
    },[])


    React.useEffect(() => {
        const loadProducts = async () => {
          const { products, newLastVisible, totalProducts } = await fetchProducts(page, productsPerPage, lastVisible);
          console.log(products, newLastVisible, totalProducts)
          setProducts(products);
          setLastVisible(newLastVisible);
          setTotalProducts(totalProducts);
        };
    
        loadProducts();
      }, [page]);
    
      const handlePageChange = (_event: React.ChangeEvent<unknown>, value: number) => {
        setPage(value);
      };



    //const redireccionConRefresh = (nombre:string, id:string)=>{
        //const redireccion = "ocasion/"+nombre+"/"+id
        // history.push(redireccion);

        // this.props.history.push(redireccion)
       // window.location.href= redireccion
    //}


    const fetchFlores = async () => {
        try {
            const flowersData = await getProducts();
            const ocasionesDataid = await getOcasiones()
            setOcasinesDataId(ocasionesDataid)
            setFlores(flowersData);
        } catch (error) {
            console.error('Error fetching flowers:', error);
        }
    };

    const handleRedirectToProductId = (id:string) => {
        const redireccion = "Producto/"+id
        window.location.href = redireccion
        // navigate('/Producto/'+redireccion);
    };

    return(
        <>
           

            <Grid sx={{height:'100%', backgroundSize:'cover', backgroundImage:"url('https://firebasestorage.googleapis.com/v0/b/prowlflores.appspot.com/o/multimedia%2Fimagenes%2FFondos%2FCaptura%20de%20pantalla%202024-05-09%20121118.png?alt=media&token=5b4c51d7-b60f-4f9a-9504-31cb33650362')"}}>
                <Grid sx={{...stylesComponents.contenedorPadre, background:'#ffb3e2b3', paddingBottom:'1%', paddingTop:'1%', backgroundColor:"#37373747"}}>
                    <Grid sx={{...stylesComponents.contenedorHijo, paddingBottom:'5%', paddingTop:{xs:'40%', md:'20%', lg:'15%'}}}>
                        <Typography variant="h1" color="initial" sx={{
                            color:'white',
                            fontFamily: "Cormorant",
                            fontOpticalSizing: "auto",
                            fontWeight: "bold",
                            fontStyle: "normal",
                            fontSize:{xs: "40px",md:"60px"}
                        }}>Sorprende a mamá</Typography>
                        <Typography variant="body1" color="initial" sx={{
                            color:'white',
                            fontFamily: "Cormorant",
                            fontOpticalSizing: "auto",
                            fontWeight: "<weight>",
                            fontStyle: "normal",
                            fontSize:{xs: "15px",md:'20px'}
                        }}>Porque mama tambien merece ser consentida</Typography>
                        <Button
                        sx={{
                            background:'white',
                            color:'black',
                            fontSize:{xs: '8px', md:'17px'},
                            padding:'17px',
                            paddingLeft:'40px',
                            paddingRight:'40px',
                            marginTop:{xs:'50px',sm:'30px',md:'60px',lg:'100px'}
                        }}
                        >
                            Productos Disponibles para mama
                        </Button>
                    </Grid>
                </Grid>
            </Grid>
            
            <Grid>
                <BarraDeBusqueda/>
            </Grid>

            <Grid sx={{...stylesComponents.contenedorPadre, background:'#fbf8f4'}}>
                <Grid sx={{...stylesComponents.contenedorHijo, paddingTop:'30px', paddingBottom:'30px'} }>
                    <Typography variant="h1" color="initial"
                        sx={{
                            color:'#fb7185',
                            fontFamily: "Cormorant",
                            fontOpticalSizing: "auto",
                            fontWeight: "bold",
                            fontStyle: "normal",
                            fontSize:{md:'45px', xs:'25px'}
                            }}>
                        ¡Pequeños detalles marcando diferencia!
                    </Typography>
                    <Typography variant="subtitle1" color="initial" fontSize='17px'
                        sx={{color:'black',
                            fontFamily: "Cormorant",
                            fontOpticalSizing: "auto",
                            fontWeight: "<weight>",
                            fontStyle: "normal",
                            fontSize:{md:'25px'}}} >
                        En Flores Rickys encontrarás lo que necesitas para cada ocasión.
                    </Typography>
                </Grid>
            </Grid>

            <Grid sx={{...stylesComponents.contenedorPadre, background:'#fbf8f4'}}>
                <Grid sx={{...stylesComponents.contenedorHijo, paddingTop:'30px', paddingBottom:'30px'}}>
                    <Grid style={{textAlign:'center', padding:'8px'}} >
                        <Typography variant="h1" color="initial" fontSize='34px'  sx={{
                                color:'#fb7185',
                                fontFamily: "Cormorant",
                                fontOpticalSizing: "auto",
                                fontWeight: "bold",
                                fontStyle: "normal",
                                fontSize:{md:'45px', xs:'25px'}
                                }} pb={4}>
                            Mas Vendidos
                        </Typography>
                        <Typography variant="subtitle1" color="initial" fontSize='17px'
                            sx={{color:'black',
                                fontFamily: "Cormorant",
                                fontOpticalSizing: "auto",
                                fontWeight: "<weight>",
                                fontStyle: "normal",
                                fontSize:{md:'20px'}}} pb={8}>
                            Ver Todo →
                        </Typography>
                    </Grid>

                    
                    <Grid container sx={stylesComponents.ContenedorProductos} >
                        {products && products.map((item) => (
                            <Producto key={item.id} flower={item} ocasinesDataId={ocasinesDataId}/>
                        ))}
                        
                    </Grid>
                    <Grid sx={{placeItem:'center', placeSelf:'center', paddingTop:'3%', paddingBottom:'3%'}}>
                        <Pagination
                            count={Math.ceil(totalProducts / productsPerPage)}
                            page={page}
                            onChange={handlePageChange}
                            color="primary"
                        />
                    </Grid>

                    
                </Grid>
            </Grid>            
        </>
    )
}


export default Home

