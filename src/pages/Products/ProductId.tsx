/* eslint-disable react-hooks/exhaustive-deps */

import * as React from 'react';

import { Box, Grid, Rating, Typography, Button, TextField, FormControl, InputLabel, Select, MenuItem } from '@mui/material';
import { useParams } from 'react-router-dom';
import { stylesComponents } from '../../styles/stylesComponentes';
import { DemoContainer } from '@mui/x-date-pickers/internals/demo';
import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs';
import { DatePicker } from '@mui/x-date-pickers/DatePicker';
import { LocalizationProvider } from '@mui/x-date-pickers';

import { useTheme } from '@mui/material/styles';
import MobileStepper from '@mui/material/MobileStepper';
import KeyboardArrowLeft from '@mui/icons-material/KeyboardArrowLeft';
import KeyboardArrowRight from '@mui/icons-material/KeyboardArrowRight';
import dayjs, { Dayjs } from 'dayjs'; // Asegúrate de importar Dayjs desde 'dayjs'
import { getProductById, getProductsExtraByIds } from '../../config/apiFirebase';
import { Flower, CarritoDeCompra, ProductoExtra } from '../../interfaces/interfaces'

import { setLocalStorage, getLocalStorage } from '../../config/LocalStorage'

function ProductId(){
    const { id } = useParams();
    const theme = useTheme();

    const [product, setProduct] = React.useState<Flower | null>(null);
    const [activeStep, setActiveStep] = React.useState(0);
    const [carritoDeCompra, setCarritoDeCompra] = React.useState<CarritoDeCompra[]>([]);

    const [visibleHora1, setVisibleHora1] = React.useState(true)
    const [visibleHora2, setVisibleHora2] = React.useState(true)
    const [visibleHora3, setVisibleHora3] = React.useState(true)
    const [visibleHorarios, setVisibleHorarios] = React.useState(false)
    const [date, setDate] = React.useState(dayjs());
    const [hora, sethora] = React.useState('');
    const [productoExtra, setproductoExtra] = React.useState({nombreProductoExtra: 'Sin producto extra',precioProductoExtra: 0});
    const [dedicatoria, setDedicatoria] = React.useState('sin dedicatorias');
    const [visibleProductoExtra, setvisibleProductoExtra] = React.useState(false) //muestra los productos extras
    const [isProductoExtraEmpty, setisProductoExtraEmpty] = React.useState(true) //comprueba si hay producto extra ya seleccionado
    const [changeProductExtra, setChangeProductExtra] = React.useState(true) //comprueba si hay producto extra ya seleccionado
    const [habilitarDesabilitarBottonCompra, setHabilitarDesabilitarBottonCompra] = React.useState(false)
    const [productosExtra, setProductosExtras] = React.useState<ProductoExtra[]>([]);
    const [cantidadProducto, setcantidadProducto] = React.useState(0);
    // const [cantidadProductoExtra, setcantidadProductoExtra] = React.useState(0);


    let maxSteps = productosExtra.length

    React.useEffect(() => {
        getDataCarShopping()
        fetchProduct()
    }, []);


    React.useEffect(() => {
        maxSteps = productosExtra.length;
        console.log(maxSteps)
    }, [productosExtra]);

    React.useEffect(() => {
        // const algunDatoPresente = !!productoExtra && dedicatoria != '' && !!hora && productoExtra.nombreProductoExtra !='Sin producto extra' && productoExtra.precioProductoExtra != 0;
        const algunDatoPresente = !!hora && cantidadProducto!=0;

        if (algunDatoPresente) {
            setHabilitarDesabilitarBottonCompra(true)
        } else {
            setHabilitarDesabilitarBottonCompra(false)
        }
    }, [productoExtra, dedicatoria, hora]);

    React.useEffect(() => {
        setDedicatoria(dedicatoria)
        console.log(dedicatoria)
    }, [dedicatoria]);

    const fetchProducExtra = async (dataProductsExtra:[]) =>{
        const data= await getProductsExtraByIds(dataProductsExtra)
        console.log(data)
        setProductosExtras(data);
    }


    const getDataCarShopping=()=>{
        const localstoorageArray = getLocalStorage('Productos')
        setCarritoDeCompra(localstoorageArray)
    }

    const fetchProduct = async () => {
        try {
            const idProducto=String(id)
            const productData = await getProductById(idProducto);
            console.log(productData?.productosExtra)
            if(productData?.productosExtra){
                fetchProducExtra(productData.productosExtra)
            }
            setProduct(productData);
        } catch (error) {
            console.error('Error fetching flowers:', error);
        }
    };

    const handleChangeDedicatoria = (event: { target: { value: React.SetStateAction<string>; }; }) => {
        if(event.target.value == ''){
            setDedicatoria('sin dedicatorias');
        }else{
            setDedicatoria(event.target.value);
        }
    };

    const handleChangehour = (event: { target: { value: React.SetStateAction<string>; }; }) => {
        sethora(event.target.value);
    };

    const HandlecantidadProducto = (event: React.ChangeEvent<HTMLInputElement>) => {
        const newValue = parseInt(event.target.value, 10); // Parseamos el valor a un número entero
        console.log("FLOR",newValue)
        setcantidadProducto(newValue);
    }

    // const HandlecantidadProductoExtra = (event: React.ChangeEvent<HTMLInputElement>) => {
    //     const newValue = parseInt(event.target.value, 10); // Parseamos el valor a un número entero
    //     console.log("Producto extra", newValue)
    //     setcantidadProductoExtra(newValue);
    // }

    const handleNext = () => {
        setActiveStep((prevActiveStep) => prevActiveStep + 1);
    };

    const handleBack = () => {
        setActiveStep((prevActiveStep) => prevActiveStep - 1);
    };

    const handleDateValidation = (newDate: Dayjs | null) => {
        if (newDate) {
            const formattedNewDate = newDate.format('DD-MM-YYYY');
            const today = dayjs().format('DD-MM-YYYY');
            console.log(formattedNewDate === today )

            if (formattedNewDate === today) {
                const horaEstablecida1 = dayjs('10:00:00', 'HH:mm:ss');
                const horaEstablecida2 = dayjs('12:00:00', 'HH:mm:ss');
                const horaEstablecida3 = dayjs('18:00:00', 'HH:mm:ss');
                const horaActual = dayjs();
                console.log(horaActual.isBefore(horaEstablecida1), horaActual.isBefore(horaEstablecida2),horaActual.isBefore(horaEstablecida3))

                setVisibleHora1(horaActual.isBefore(horaEstablecida1));
                setVisibleHora2(horaActual.isBefore(horaEstablecida2));
                setVisibleHora3(horaActual.isBefore(horaEstablecida3));
            } else {
                setVisibleHora1(true);
                setVisibleHora2(true);
                setVisibleHora3(true);
            }

            setDate(newDate);
            setVisibleHorarios(true);


        }

    };

    const handleVisibleProductoExtra = () =>{
        setvisibleProductoExtra(true)
    }

    const handleVisibleProductoExtra2 = () =>{
        if(!isProductoExtraEmpty){
            setChangeProductExtra(false)
            setvisibleProductoExtra(true)
        }else{
            setChangeProductExtra(true)
            setvisibleProductoExtra(false)
        }
    }


    const guardarProductoExtra = (nombre: string, precio: number)=>{

        setproductoExtra({
            nombreProductoExtra: nombre,
            precioProductoExtra: precio,
        });
        setvisibleProductoExtra(false)
        setisProductoExtraEmpty(false)
        setChangeProductExtra(false)
    }


    const guardarDatosConDescuento =(id:string,nombre: string, precio: number, descuento: number, imagen:string)=>{
        const newItem: CarritoDeCompra = {
            id:id,
            nombre: nombre,
            precio: precio,
            descuento:descuento,
            imagen:imagen,
            fecha: date.format('DD-MM-YYYY'),
            hora: hora,
            cantidad:cantidadProducto,
            productoExtra: productoExtra ? {
                nombreProductoExtra: productoExtra.nombreProductoExtra,
                precioProductoExtra: productoExtra.precioProductoExtra,

            } : {
                nombreProductoExtra: 'Sin producto Extra',
                precioProductoExtra: 0,
            },
            dedicatoria:dedicatoria
        };

        console.log('Agregando producto al carrito...');
        // Si el producto no está en el carrito, lo agregamos
        const updatedCarritoDeCompra = [...carritoDeCompra, newItem];
        setCarritoDeCompra(updatedCarritoDeCompra);
        setLocalStorage('Productos', updatedCarritoDeCompra);

        // const existingProductIndex = carritoDeCompra.findIndex(item => item.id === newItem.id);
        // if (existingProductIndex !== -1) {
        //     console.log('El producto ya está en el carrito.');

        //     // Reemplazar el objeto existente con el nuevo objeto completo
        //     const updatedCarritoDeCompra = [...carritoDeCompra];
        //     updatedCarritoDeCompra[existingProductIndex] = newItem;

        //     setCarritoDeCompra(updatedCarritoDeCompra);
        //     setLocalStorage('Productos', updatedCarritoDeCompra);
        // } else {
        //     console.log('Agregando producto al carrito...');
        //     // Si el producto no está en el carrito, lo agregamos
        //     const updatedCarritoDeCompra = [...carritoDeCompra, newItem];
        //     setCarritoDeCompra(updatedCarritoDeCompra);
        //     setLocalStorage('Productos', updatedCarritoDeCompra);
        // }
    }

    const guardarDatos =(id:string,nombre: string, precio: number, imagen:string)=>{
        const newItem: CarritoDeCompra = {
            id:id,
            nombre: nombre,
            precio: precio,
            descuento:0,
            imagen:imagen,
            fecha: date.format('DD-MM-YYYY'),
            hora: hora,
            cantidad:cantidadProducto,
            productoExtra: productoExtra ? {
                nombreProductoExtra: productoExtra.nombreProductoExtra,
                precioProductoExtra: productoExtra.precioProductoExtra,
            } : {
                nombreProductoExtra: 'Sin producto Extra',
                precioProductoExtra: 0,
            },
            dedicatoria: dedicatoria,
        };

        console.log('Agregando producto al carrito...');
        // Si el producto no está en el carrito, lo agregamos
        const updatedCarritoDeCompra = [...carritoDeCompra, newItem];
        setCarritoDeCompra(updatedCarritoDeCompra);
        setLocalStorage('Productos', updatedCarritoDeCompra);

        // const existingProductIndex = carritoDeCompra.findIndex(item => item.id === newItem.id);

        // if (existingProductIndex !== -1) {
        //     console.log('El producto ya está en el carrito.');

        //     // Reemplazar el objeto existente con el nuevo objeto completo
        //     const updatedCarritoDeCompra = [...carritoDeCompra];
        //     updatedCarritoDeCompra[existingProductIndex] = newItem;

        //     setCarritoDeCompra(updatedCarritoDeCompra);
        //     setLocalStorage('Productos', updatedCarritoDeCompra);
        // } else {
        //     console.log('Agregando producto al carrito...');
        //     // Si el producto no está en el carrito, lo agregamos
        //     const updatedCarritoDeCompra = [...carritoDeCompra, newItem];
        //     setCarritoDeCompra(updatedCarritoDeCompra);
        //     setLocalStorage('Productos', updatedCarritoDeCompra);
        // }
    }


    const canbiarProductoExtra= () =>{
        setChangeProductExtra(true)
        setvisibleProductoExtra(true)
    }

    const eliminarProducto = () =>{
        setproductoExtra({nombreProductoExtra:'Sin producto extra', precioProductoExtra:0})
        setvisibleProductoExtra(false)
        setisProductoExtraEmpty(true)
        setChangeProductExtra(true)
    }

    if (!product) {
        return <div>Loading...</div>;
    }

    return(
        <>
            <Grid sx={{ paddingTop:10, paddingLeft:{xs:5, md:8, lg:15, xl:25}, paddingRight:{xs:5, md:8, lg:15, xl:25}}}>
                <Grid container>
                    <Grid item md={6} xs={12} sx={{justifyContent:'center'}}>
                        {/* <Grid sx={{width:{xs:'270px', md:'350px'}, height:{xs:'390px', md:'450px'}}}> */}
                            <img src={product.imagen} alt="" style={{ width:'100%', height:'auto' }}/>
                        {/* </Grid> */}
                    </Grid>
                    <Grid item md={6} xs={12} sx={{ paddingLeft:{lg: 5, md:2, xs:0}, paddingRight:{md:5, xs:0} }}>
                        <Grid>
                            <Typography variant="h4" color="initial" sx={{ color:'#B42981'}} p={1}>{product.nombre}</Typography>
                        </Grid>
                        {
                            product.descuento ?
                            (
                                <Grid>
                                    <Typography variant="subtitle1" color="initial" p={1}>
                                        <Box display={'flex'}>
                                            <Typography variant="h6" color="initial"  fontSize={16} style={{color:'red', textAlign:'start', width:'50%',  textDecorationLine: 'line-through' }}>${product.precio}</Typography>
                                            <Typography variant="h6" color="initial"  fontSize={16} style={{color:'blue', textAlign:'end', width:'50%' }}>${product.descuento}</Typography>
                                        </Box>
                                    </Typography>
                                </Grid>
                            )
                            :
                            (
                                <Grid>
                                    <Typography variant="subtitle1" color="initial" p={1}>
                                        <Box display={'flex'}>
                                            <Typography variant="h6" color="initial"  fontSize={16} style={{color:'red', textAlign:'start', width:'50%',  textDecorationLine: 'line-through' }}>${product.precio}</Typography>
                                        </Box>
                                    </Typography>
                                </Grid>
                            )
                        }

                        <Grid>
                            <Rating name="read-only" value={4} readOnly />
                        </Grid>
                        <Grid>
                            <Typography variant="subtitle1" color="initial" p={1}>{product.descripcion}</Typography>
                        </Grid>

                        <Grid sx={{paddingTop:{  md:2, xs:1}}}>
                            <Grid m={2}>
                                <Typography variant="h6" color="#B42981" fontSize={'16px'}>Cantidad</Typography>
                                <TextField
                                    label="Cantidad"
                                    type="number"
                                    fullWidth
                                    onChange={HandlecantidadProducto}

                                />
                            </Grid>

                            <Grid m={2}>
                                <Typography variant="h6" color="#B42981" fontSize={'16px'}>Elije una Fecha y hora de entrega</Typography>
                                <LocalizationProvider dateAdapter={AdapterDayjs}>
                                    <DemoContainer components={['DatePicker']} sx={{justifyContent:'center', width:'100%'}}>
                                        <DatePicker sx={{justifyContent:'center', width:'100%'}}
                                            value={date}
                                            onChange={(newDate)=>handleDateValidation(newDate)}
                                            disablePast
                                        />
                                    </DemoContainer >
                                </LocalizationProvider>
                            </Grid>
                            <Grid  m={2}>
                                {visibleHorarios &&
                                    <FormControl sx={{width:'100%', textalign:'center'}} >
                                        <InputLabel id="demo-simple-select-label">Hora de entrega</InputLabel>
                                        <Select
                                            required
                                            labelId="demo-simple-select-label"
                                            id="demo-simple-select"
                                            label="Age"
                                            onChange={handleChangehour}

                                        >
                                            {visibleHora1 && <MenuItem value={'8:00 AM - 12:00 PM'}>8:00 AM - 12:00 PM</MenuItem>}
                                            {visibleHora2 && <MenuItem value={'12:00 PM - 4:00 PM'}>12:00 PM - 4:00 PM</MenuItem>}
                                            {visibleHora3 && <MenuItem value={'4:00 PM - 8:00 PM'}>4:00 PM - 8:00 PM</MenuItem>}
                                        </Select>
                                    </FormControl>
                                }
                            </Grid>

                            {
                                productosExtra.length > 0 &&
                                <>
                                    {changeProductExtra ?
                                        (
                                            <>
                                                <Grid  m={2}>
                                                    { visibleProductoExtra ?
                                                        (
                                                            <Typography component={Button} variant="h6" color="#B42981" fontSize={'16px'} onClick={handleVisibleProductoExtra2}>Cancelar</Typography>
                                                        ):(
                                                            <Typography component={Button} variant="h6" color="#B42981" fontSize={'16px'} onClick={handleVisibleProductoExtra}>Añadir Producto Extra</Typography>
                                                        )
                                                    }
                                                </Grid>
                                                {visibleProductoExtra &&
                                                    <Grid m={2} sx={{textAlign:'-webkit-center'}}>
                                                        <Grid sx={{ Width: '100%', flexGrow: 1 }}>
                                                            <Grid  xs={12}>
                                                                <Box sx={{ maxWidth: 390, flexGrow: 1 }}>
                                                                    <Box
                                                                        sx={{
                                                                        display: 'flex',
                                                                        }}
                                                                    >
                                                                        <Typography variant="h6" color="initial"  fontSize={16} style={{textAlign:'center', width:'50%'}}>{productosExtra[activeStep].nombre}</Typography>
                                                                        <Typography variant="h6" color="initial"  fontSize={16} style={{color:'red', textAlign:'center', width:'50%' }}>${productosExtra[activeStep].precio}</Typography>

                                                                    </Box>
                                                                    <Box sx={{ height: {md:300, xs:250}, maxWidth: {md:300, xs:250}, width: '100%', pr: 3, pb: 3, m:3 }}>
                                                                        <img src={`${productosExtra[activeStep].imagen}`} alt=""  width={'100%'} height={'100%'} style={{ objectFit: 'cover'}}/>
                                                                        <Button sx={stylesComponents.button} onClick={() =>  guardarProductoExtra(productosExtra[activeStep].nombre, productosExtra[activeStep].precio ) }>
                                                                            Añadir
                                                                        </Button>

                                                                    </Box>
                                                                    <MobileStepper
                                                                        variant="text"
                                                                        steps={maxSteps}
                                                                        position="static"
                                                                        activeStep={activeStep}
                                                                        nextButton={
                                                                        <Button
                                                                            size="small"
                                                                            onClick={handleNext}
                                                                            disabled={activeStep == maxSteps - 1}
                                                                        >
                                                                            Next
                                                                            {theme.direction === 'rtl' ? (
                                                                            <KeyboardArrowLeft />
                                                                            ) : (
                                                                            <KeyboardArrowRight />
                                                                            )}
                                                                        </Button>
                                                                        }
                                                                        backButton={
                                                                        <Button size="small" onClick={handleBack} disabled={activeStep == 0}>
                                                                            {theme.direction === 'rtl' ? (
                                                                            <KeyboardArrowRight />
                                                                            ) : (
                                                                            <KeyboardArrowLeft />
                                                                            )}
                                                                            Back
                                                                        </Button>
                                                                        }
                                                                    />
                                                                </Box>


                                                            </Grid>

                                                        </Grid>
                                                    </Grid>
                                                }
                                            </>
                                        ):(
                                            <>
                                                <Grid  m={2}>
                                                    <Typography variant="h6" component={Button} color="#B42981" fontSize={'16px'} onClick={canbiarProductoExtra}>Cambiar producto extra</Typography>
                                                    <Typography variant="h6" component={Button} color="#B42981" fontSize={'16px'} onClick={eliminarProducto}>Eliminar producto extra</Typography>

                                                    <Typography variant="h6" color="initial">
                                                        {productoExtra.nombreProductoExtra}
                                                    </Typography>

                                                    <Typography variant="h6" color="initial">
                                                        {productoExtra.precioProductoExtra}
                                                    </Typography>
                                                </Grid>
                                            </>
                                        )
                                    }
                                </>
                            }



                            <Grid m={2}>
                                <Typography variant="h6" color="#B42981" fontSize={'16px'}>Dedicatoria</Typography>
                                <TextField
                                    id="outlined-basic"
                                    label="Mensaje"
                                    variant="outlined"
                                    rows={4}
                                    multiline
                                    fullWidth
                                    value={dedicatoria} // Muestra el valor actual de dedicatoria en el TextField
                                    onChange={handleChangeDedicatoria} //
                                />
                            </Grid>
                            <Grid>

                                {habilitarDesabilitarBottonCompra ? (
                                        product.descuento ? (
                                            <Button sx={stylesComponents.button} onClick={()=>guardarDatosConDescuento(product.id,product.nombre, product.precio, product.descuento, product.imagen)} >
                                                Añadir al carrito
                                            </Button>
                                        )
                                        :
                                        (
                                            <Button sx={stylesComponents.button} onClick={()=>guardarDatos(product.id,product.nombre, product.precio, product.imagen)} >
                                                Añadir al carrito
                                            </Button>
                                        )


                                ):(
                                    <Button sx={stylesComponents.button} disabled >
                                        Añadir al carrito
                                    </Button>
                                )


                                }
                            </Grid>
                        </Grid>
                    </Grid>
                </Grid>
            </Grid>
            <Grid p={5}>
                <Grid style={{textAlign:'center', padding:'8px'}} >
                    <Typography variant="h3" color="initial" fontSize='34px'  style={{color:'#B29426'}} >
                        Productos Relacionados
                    </Typography>
                </Grid>

                <Grid>
                    <Grid container sx={stylesComponents.ContenedorProductos} >

                        <Grid item sm={12}  md={4} lg={3} sx={stylesComponents.contenedorProducto}>
                            <Box display={'flex'} style={{justifyContent:'center'}}>
                                <Grid sx={stylesComponents.contenerdorImagenProducto}>
                                    <img src={product.imagen} alt="" width={'100%'} height={'100%'} style={{ objectFit: 'cover'}}/>
                                </Grid>
                            </Box>
                            <Box p={1}>
                                <Typography variant="h6" color="initial" fontFamily={'Montserrat, sans-serif'} fontSize={16} textAlign={'start'} style={{color:'#404040', textAlign:'center'}} >Arreglo Multicolor</Typography>
                                <Typography variant="h6" color="initial"  fontSize={16} textAlign={'start'} style={{color:'#404040', textAlign:'center' }}>$100.00</Typography>
                            </Box>
                            <Box >
                                <Button style={{border:'2px solid #b42981', backgroundImage:'linear-gradient(to right, #FF6464 0%, #FF6464  51%, #FF81CE  100%)', textTransform: 'uppercase', transition: '0.5s', color: 'white', borderStyle:'none', borderRadius:'50px',  padding:'10px', width:'200px' }}>
                                    Ver
                                </Button>
                            </Box>
                        </Grid>
                        <Grid item sm={12}  md={4} lg={3} sx={stylesComponents.contenedorProducto}>
                                <Box display={'flex'} style={{justifyContent:'center'}}>
                                    <Grid sx={stylesComponents.contenerdorImagenProducto}>
                                        <img src={product.imagen} alt="" width={'100%'} height={'100%'} style={{ objectFit: 'cover'}}/>
                                    </Grid>
                                </Box>
                                <Box p={1}>
                                    <Typography variant="h6" color="initial" fontFamily={'Montserrat, sans-serif'} fontSize={16} textAlign={'start'} style={{color:'#404040', textAlign:'center'}}>Arreglo Multicolor</Typography>
                                    <Typography variant="h6" color="initial"  fontSize={16} textAlign={'start'} style={{color:'#404040', textAlign:'center' }}>$100.00</Typography>
                                </Box>
                                <Box >
                                    <Button style={{border:'2px solid #b42981', backgroundImage:'linear-gradient(to right, #FF6464 0%, #FF6464  51%, #FF81CE  100%)', textTransform: 'uppercase', transition: '0.5s', color: 'white', borderStyle:'none', borderRadius:'50px',  padding:'10px', width:'200px' }}>
                                        Ver
                                    </Button>
                            </Box>
                        </Grid>
                        <Grid item sm={12}  md={4} lg={3} sx={stylesComponents.contenedorProducto}>
                            <Box display={'flex'} style={{justifyContent:'center'}}>
                                <Grid sx={stylesComponents.contenerdorImagenProducto}>
                                    <img src={product.imagen} alt="" width={'100%'} height={'100%'} style={{ objectFit: 'cover'}}/>
                                </Grid>
                            </Box>
                            <Box p={1}>
                                <Typography variant="h6" color="initial" fontFamily={'Montserrat, sans-serif'} fontSize={16} textAlign={'start'} style={{color:'#404040', textAlign:'center'}}>Arreglo Multicolor</Typography>
                                <Typography variant="h6" color="initial"  fontSize={16} textAlign={'start'} style={{color:'#404040', textAlign:'center' }}>$100.00</Typography>
                            </Box>
                            <Box >
                                <Button style={{border:'2px solid #b42981', backgroundImage:'linear-gradient(to right, #FF6464 0%, #FF6464  51%, #FF81CE  100%)', textTransform: 'uppercase', transition: '0.5s', color: 'white', borderStyle:'none', borderRadius:'50px',  padding:'10px', width:'200px' }}>
                                    Ver
                                </Button>
                        </Box>
                        </Grid>
                        <Grid item sm={12}  md={4} lg={3} sx={stylesComponents.contenedorProducto}>
                            <Box display={'flex'} style={{justifyContent:'center'}}>
                                <Grid sx={stylesComponents.contenerdorImagenProducto}>
                                    <img src={product.imagen} alt="" width={'100%'} height={'100%'} style={{ objectFit: 'cover'}}/>
                                </Grid>
                            </Box>
                            <Box p={1}>
                                <Typography variant="h6" color="initial" fontFamily={'Montserrat, sans-serif'} fontSize={16} textAlign={'start'} style={{color:'#404040', textAlign:'center'}}>Arreglo Multicolor</Typography>
                            </Box>
                            <Box display={'flex'}>
                                <Typography variant="h6" color="initial"  fontSize={16} textAlign={'start'} style={{color:'red', textAlign:'center', width:'50%',  textDecorationLine: 'line-through' }}>$100.00</Typography>
                                <Typography variant="h6" color="initial"  fontSize={16} textAlign={'start'} style={{color:'blue', textAlign:'center', width:'50%' }}>$83.00</Typography>
                            </Box>
                            <Box >
                                <Button style={{border:'2px solid #b42981', backgroundImage:'linear-gradient(to right, #FF6464 0%, #FF6464  51%, #FF81CE  100%)', textTransform: 'uppercase', transition: '0.5s', color: 'white', borderStyle:'none', borderRadius:'50px',  padding:'10px', width:'200px' }}>
                                    Ver
                                </Button>
                        </Box>
                        </Grid>

                    </Grid>
                </Grid>

            </Grid>


        </>
    )
}


export default ProductId