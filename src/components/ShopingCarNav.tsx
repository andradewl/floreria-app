/* eslint-disable no-constant-condition */
// import { Anchor } from "@mui/icons-material";
import { Button, Grid, Toolbar, Typography } from "@mui/material"
import React from "react";
import { useNavigate } from "react-router-dom";
import { CarritoDeCompra } from "../interfaces/interfaces";

type Anchor = 'top' | 'left' | 'bottom' | 'right';

function ShopingCarNav() {
    const anchor='right'

    const [state, setState] = React.useState({
        top: false,
        left: false,
        bottom: false,
        right: false,
    });
    const navigate = useNavigate()


    const [items, setItems] = React.useState<CarritoDeCompra[]>([]);
    const [isSetItems, setIsSetItems] = React.useState(false);
    const [totalNumerico, setTotalNumerico] = React.useState<number>(0);
    // const [totalEnvio, settotalEnvio] = React.useState<number>(500);

    React.useEffect(() => {
        let sumaTotal = 0;
            items.forEach((item) => {
                sumaTotal += (item.precio * item.cantidad)+( item.productoExtra.precioProductoExtra);
            })
            setTotalNumerico(sumaTotal);
    }, [items]);


    React.useEffect(() => {
        localStorage.setItem('envio',JSON.stringify(500));

        const storedItems = localStorage.getItem('Productos');
        if (storedItems) {
            const parsedItems: CarritoDeCompra[] = JSON.parse(storedItems);
            console.log(parsedItems)
            setItems(parsedItems);
            setIsSetItems(true)
        }else{
            console.log('No hay producto en el carrito');
        }
    }, []);


    React.useEffect(() => {
        let sumaTotal = 0;
            items.forEach((item) => {
                sumaTotal += (item.precio * item.cantidad)+( item.productoExtra.precioProductoExtra);
            })
            setTotalNumerico(sumaTotal);
    }, [items]);


    const eliminarItem = (index: number) => {
        const updatedItems = [...items.slice(0, index), ...items.slice(index + 1)];
        if (updatedItems.length === 0) {
            localStorage.removeItem('Productos');
            localStorage.removeItem('envio');
            localStorage.removeItem('PrecioApagar');
            setItems([]);
            setIsSetItems(false)
        } else {
            localStorage.setItem('Productos', JSON.stringify(updatedItems));
            setItems(updatedItems);
        }
    };


    

    const handleRedirectToShopingProducts = (total:number) => {
        localStorage.setItem('PrecioApagar', JSON.stringify(total));
        navigate('/shopProducts');
    };


    const toggleDrawer = (anchor: Anchor, open: boolean) =>(event: React.KeyboardEvent | React.MouseEvent) => {
        if (
            event.type === 'keydown' &&
            ((event as React.KeyboardEvent).key === 'Tab' ||
            (event as React.KeyboardEvent).key === 'Shift')
        ) {
            return;
        }
        setState({ ...state, [anchor]: open });
    };

    return(
        <Grid
            // sx={{ width: anchor == 'top' || anchor == 'bottom' ? 'auto' : {xs:350, md:450} }}
            sx={{ width: {xs:'350px', md:'450px'}, height:'100vh' }}
            role="presentation"
            // onClick={toggleDrawer(anchor, false)}
            onKeyDown={toggleDrawer(anchor, false)}
        >
            <Grid sx={{width:'100%', height:'100%'}}>
                <Grid sx={{width:'100%',  paddingBottom:'200px'}} >
                    <Typography variant="h1" color="initial"
                    sx={{
                        fontFamily: "Cormorant",
                        fontOpticalSizing: "auto",
                        fontWeight: "<weight>",
                        fontStyle: "normal",
                        fontSize:'30px'
                    }} pl={'5%'} pt={'2%'} pb={'2%'}
                    >Carrito</Typography>

                    <Toolbar sx={{display:'block'}}>
                        {items && items.map((item, index) => (
                            <Grid container pt={1}>
                                <Grid item xs={3} >
                                    <img src={item.imagen} alt="" style={{width:'100%', borderRadius:'10px'}}/>
                                </Grid>
                                <Grid item xs={9} p={1}>
                                    <Grid container >
                                        <Grid item xs={8}>
                                            <Typography variant="body1" color="initial"
                                            sx={{
                                            fontFamily: "Cormorant",
                                            fontOpticalSizing: "auto",
                                            fontWeight: "<weight>",
                                            fontStyle: "normal",
                                            fontSize:'15px'
                                            }}
                                            >{item.nombre }</Typography>
                                        </Grid>
                                        <Grid item xs={4}>
                                            <Typography variant="body2" color="initial"
                                            sx={{
                                            
                                            fontSize:'15px',
                                            textAlign:'end'
                                            }}
                                            >x{item.cantidad } {item.precio}</Typography>
                                        </Grid>
                                    </Grid>
                                    <Grid container>
                                        <Grid item xs={4}>
                                            <Typography variant="body1" color="initial"
                                            sx={{
                                            fontFamily: "Cormorant",
                                            fontOpticalSizing: "auto",
                                            fontWeight: "bold",
                                            fontStyle: "normal",
                                            fontSize:'15px'
                                            }}
                                            >Entrega</Typography>
                                        </Grid>
                                        <Grid item xs={8}>
                                            <Typography variant="body2" color="initial"
                                            sx={{
                                                fontFamily: "Cormorant",
                                                fontOpticalSizing: "auto",
                                                fontWeight: "<weight>",
                                                fontStyle: "normal",
                                                fontSize:'15px',
                                                textAlign:'end'
                                            }}
                                            >En tienda</Typography>
                                        </Grid>
                                    </Grid>
                                    <Grid container>
                                        <Grid item xs={4}>
                                            <Typography variant="body1" color="initial"
                                            sx={{
                                            fontFamily: "Cormorant",
                                            fontOpticalSizing: "auto",
                                            fontWeight: "bold",
                                            fontStyle: "normal",
                                            fontSize:'15px'
                                            }}
                                            >Fecha</Typography>
                                        </Grid>
                                        <Grid item xs={8}>
                                        <Typography variant="body2" color="initial"
                                        sx={{
                                            fontFamily: "Cormorant",
                                            fontOpticalSizing: "auto",
                                            fontWeight: "<weight>",
                                            fontStyle: "normal",
                                            fontSize:'15px',
                                            textAlign:'end'
                                        }}
                                        >
                                            {item.fecha } - {item.hora }
                                        </Typography>
                                        </Grid>
                                    </Grid>
                                    <Grid container>
                                        <Grid item xs={4}>
                                            <Typography variant="body1" color="initial"
                                            sx={{
                                            fontFamily: "Cormorant",
                                            fontOpticalSizing: "auto",
                                            fontWeight: "bold",
                                            fontStyle: "normal",
                                            fontSize:'15px'
                                            }}
                                            >Dedicatoria</Typography>
                                        </Grid>
                                        <Grid item xs={8}>
                                        <Typography variant="body2" color="initial"
                                        sx={{
                                            fontFamily: "Cormorant",
                                            fontOpticalSizing: "auto",
                                            fontWeight: "<weight>",
                                            fontStyle: "normal",
                                            fontSize:'15px',
                                            textAlign:'end'
                                        }}
                                        >
                                            {item.dedicatoria }
                                        </Typography>
                                        </Grid>
                                    </Grid>

                                </Grid>

                                <Grid item xs={12} sx={{
                                        borderBlockWidth: '1px',
                                        borderBottomColor: '#dadada',
                                        borderBottomStyle: 'double'
                                }}>
                                    <Grid container>
                                    <Grid item xs={6} >
                                        <Grid sx={{display:'flex'}}>
                                        <Button>
                                            +
                                        </Button>
                                            <Typography variant="subtitle1" color="initial">{item.cantidad }</Typography>
                                        <Button>
                                            -
                                        </Button>

                                        </Grid>
                                        {/* <TextField
                                        id="outlined-number"
                                        type="number"
                                        variant="standard"
                                        InputLabelProps={{
                                            shrink: true,
                                        }}
                                        /> */}
                                        
                                    </Grid>
                                    <Grid item xs={6} sx={{textAlign:'end'}}>
                                        <Button variant="text" onClick={() => eliminarItem(index)}>
                                            Eliminar
                                        </Button>
                                    </Grid>
                                    </Grid>
                                </Grid>
                            </Grid>

                        ))}

                    </Toolbar>
                </Grid>
                <Grid sx={{width:{xs:'350px', md:'450px'}, backgroundColor:'#fee7ea', alignContent:'center', padding:'2%', position: 'fixed', bottom: '0px'}} >
                {/* <Typography variant="h1" color="initial">adios</Typography> */}
                    <Grid container mt={3} mb={3} sx={{maxWidth:'100%'}}>
                        <Grid item xs={8}>
                            <Typography variant="body1" color="initial" sx={{fontWeight: "bold",}}>Subtotal</Typography>
                            <Typography variant="body2" color="initial">Precios sujetos a cambios sin previo aviso.</Typography>
                        </Grid>
                        <Grid item xs={4}>
                            <Typography variant="body1" color="initial"  sx={{textAlign:'end'}}>
                            ${totalNumerico}
                            </Typography>
                        </Grid>
                    </Grid>
                    <Button sx={{ width:"100%", backgroundColor:'black', color:'white'}} onClick={()=>handleRedirectToShopingProducts(totalNumerico)} disabled={!isSetItems}>
                        Completar pedido
                    </Button>
                </Grid>
            </Grid>
        </Grid>
    )
} 

export default ShopingCarNav