
import * as React from 'react';

import { Box, Grid, Rating, Typography, Button, TextField, FormControl, InputLabel, Select, MenuItem } from '@mui/material';
import { useParams } from 'react-router-dom';
import product1 from '../../assets/productos/productTen.jpg'
import product2 from '../../assets/productos/productTwo.webp'
import product3 from '../../assets/productos/productThree.jpg'
import product4 from '../../assets/productos/productFor.webp'
import { stylesComponents } from '../../styles/stylesComponentes';
import { DemoContainer } from '@mui/x-date-pickers/internals/demo';
import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs';
import { DatePicker } from '@mui/x-date-pickers/DatePicker';
import { LocalizationProvider } from '@mui/x-date-pickers';

import { useTheme } from '@mui/material/styles';
import MobileStepper from '@mui/material/MobileStepper';
import KeyboardArrowLeft from '@mui/icons-material/KeyboardArrowLeft';
import KeyboardArrowRight from '@mui/icons-material/KeyboardArrowRight';
import dayjs, { Dayjs } from 'dayjs';


const steps = [
    {
        id:1,
        label: 'Pastel chocolate',
        description: `For each ad campaign that you create, you can control how much
                you're willing to spend on clicks and conversions, which networks
                and geographical locations you want your ads to show on, and more.`,
            imgPath: 'https://imgs.search.brave.com/Tcr_CWql6Gru8J0EcIRLwXES2FmoWUBvh71Wr1b0TTo/rs:fit:860:0:0/g:ce/aHR0cHM6Ly93d3cu/ZG9sY2kuY29tLm14/L2Nkbi9zaG9wL2Zp/bGVzL1BBU1RFTC1D/SE9DTy1CSVRFUy1E/b2xjaV84Ny5qcGc_/dj0xNjk1ODY1MDQz/JndpZHRoPTUzMw',
            price: 130.10
    },
    {
        id:2,
        label: 'Pastel Fresa',
        description:'An ad group contains one or more ads which target a shared set of keywords.',
        imgPath:
        'https://imgs.search.brave.com/O-kIzeI6I7VGbu_7UYFFgKi6GITG8zaQ652lLwRRrng/rs:fit:860:0:0/g:ce/aHR0cHM6Ly9hcmFu/emF6dS5jb20vd3At/Y29udGVudC91cGxv/YWRzLzIwMjAvMDQv/UGFzdGVsLXZhaW5p/bGxhLWZyZXNhLTEu/d2VicA',
        price: 110.10

    },
    {
        id:3,
        label: 'Chocoflan',
        description: `Try out different ad text to see what brings in the most customers,
                and learn how to enhance your ads using features like ad extensions.
                If you run into any problems with your ads, find out how to tell if
                they're running and how to resolve approval issues.`,
        imgPath:'https://imgs.search.brave.com/N93yJaAo1bJbtlGn3OJB90ZiKSQ5xVl0ejn1o92ouz4/rs:fit:860:0:0/g:ce/aHR0cHM6Ly93d3cu/ZG9sY2kuY29tLm14/L2Nkbi9zaG9wL2Zp/bGVzL1BBU1RFTC1J/TVBPU0lCTEUtRG9s/Y2lfOTMuanBnP3Y9/MTY5NTg2NTE3NCZ3/aWR0aD0xNDQ1',
        price: 90.10,
    },
];




function ProductId(){
    const { id } = useParams();

    id
    const theme = useTheme();
    const [activeStep, setActiveStep] = React.useState(0);
    const [items, setItems] = React.useState([]);
    const [visibleHora1, setVisibleHora1] = React.useState(true)
    const [visibleHora2, setVisibleHora2] = React.useState(true)
    const [visibleHora3, setVisibleHora3] = React.useState(true)
    const [visibleHorarios, setVisibleHorarios] = React.useState(false)

    const [date, setDate] = React.useState<Dayjs | null>(dayjs());
    const [hora, sethora] = React.useState('');
    const [productoExtra, setproductoExtra] = React.useState(null);
    const [dedicatoria, setDedicatoria] = React.useState(null);

    const [visibleProductoExtra, setvisibleProductoExtra] = React.useState(false) //muestra los productos extras
    const [isProductoExtraEmpty, setisProductoExtraEmpty] = React.useState(true) //comprueba si hay producto extra ya seleccionado
    const [changeProductExtra, setChangeProductExtra] = React.useState(true) //comprueba si hay producto extra ya seleccionado
    const [habilitarDesabilitarBottonCompra, setHabilitarDesabilitarBottonCompra] = React.useState(false)

    const maxSteps = steps.length;



    React.useEffect(() => {
        const algunDatoPresente = !!productoExtra && !!dedicatoria && !!hora;

        if (algunDatoPresente) {
            setHabilitarDesabilitarBottonCompra(true)
        } else {
            setHabilitarDesabilitarBottonCompra(false)
        }
    }, [productoExtra, dedicatoria, hora]);

    React.useEffect(() => {
        const algunDatoPresente = !!items

        if (algunDatoPresente) {
            localStorage.setItem('Productos', JSON.stringify(items));

        } else {
            console.log('error en prodcuto')
        }
    }, [items]);




    const handleChangeDedicatoria = (event) => {
        setDedicatoria(event.target.value);
    };

    const handleChangehour = (event) => {
        sethora(event.target.value);
    };

    const handleNext = () => {
        setActiveStep((prevActiveStep) => prevActiveStep + 1);
    };

    const handleBack = () => {
        setActiveStep((prevActiveStep) => prevActiveStep - 1);
    };

    const handleDateValidation = (newDate: React.SetStateAction<dayjs.Dayjs | null>) => {
        setDate(newDate);
        setVisibleHorarios(true)
        const formattedNewDate = newDate.format('DD-MM-YYYY');
        const today = dayjs().format('DD-MM-YYYY');

        if(formattedNewDate === today){

            const horaEstablecida1 = dayjs('10:00:00', 'HH:mm:ss');
            const horaEstablecida2 = dayjs('12:00:00', 'HH:mm:ss');
            const horaEstablecida3 = dayjs('18:00:00', 'HH:mm:ss');
            const horaActual = dayjs();

            horaActual.isBefore(horaEstablecida1) ? setVisibleHora1(true) : setVisibleHora1(false)
            horaActual.isBefore(horaEstablecida2) ? setVisibleHora2(true) : setVisibleHora2(false)
            horaActual.isBefore(horaEstablecida3) ? setVisibleHora3(true) : setVisibleHora3(false)

        }else{
            setVisibleHora1(true)
            setVisibleHora2(true)
            setVisibleHora3(true)
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

        const newProductoExtra = {
            nombreProductoExtra: nombre,
            precioProductoExtra: precio
        };

        setproductoExtra(newProductoExtra);
        setvisibleProductoExtra(false)
        setisProductoExtraEmpty(false)
        setChangeProductExtra(false)
    }


    const guardarDatos =(nombre: string, precio: number)=>{
        const newItem = {
            nombre: nombre,
            precio:precio,
            fecha:date.format('DD-MM-YYYY'),
            hora: hora,
            productoExtra:productoExtra ? {
                nombreProductoExtra: productoExtra.nombreProductoExtra,
                precioProductoExtra: productoExtra.precioProductoExtra
            } : {
                nombreProductoExtra: 'Sin producto Extra',
                precioProductoExtra: 'Sin producto Extra'
            },
            dedicatoria: dedicatoria,
        };

        console.log(newItem)
        setItems([...items, newItem])
    }


    const canbiarProductoExtra= () =>{
        setChangeProductExtra(true)
        setvisibleProductoExtra(true)
    }

    const eliminarProducto = () =>{
        setproductoExtra(undefined)
        setvisibleProductoExtra(false)
        setisProductoExtraEmpty(true)
        setChangeProductExtra(true)
    }

    return(
        <>
            <Grid p={5}>
                <Grid container>
                    <Grid item md={6} xs={12} sx={{justifyContent:'center', textAlign:'-webkit-center'}}>
                        <Grid sx={{width:{xs:'270px', md:'350px'}, height:{xs:'390px', md:'450px'}}}>
                            <img src={product1} alt="" width={'100%'} height={'100%'} style={{ objectFit: 'cover'}}/>
                        </Grid>
                        <Grid display={'flex'}  sx={{justifyContent:'center'}}>
                            <Grid sx={{width:{xs:'70px', md:'120px'}, height:{xs:'70px', md:'120px'}}} p={1}>
                                <img src={product1} alt="" width={'100%'} height={'100%'} style={{ objectFit: 'cover'}}/>
                            </Grid>
                            <Grid sx={{width:{xs:'70px', md:'120px'}, height:{xs:'70px', md:'120px'}}} p={1}>
                                <img src={product1} alt="" width={'100%'} height={'100%'} style={{ objectFit: 'cover'}}/>
                            </Grid>
                            <Grid sx={{width:{xs:'70px', md:'120px'}, height:{xs:'70px', md:'120px'}}} p={1}>
                                <img src={product1} alt="" width={'100%'} height={'100%'} style={{ objectFit: 'cover'}}/>
                            </Grid>
                            <Grid sx={{width:{xs:'70px', md:'120px'}, height:{xs:'70px', md:'120px'}}} p={1}>
                                <img src={product1} alt="" width={'100%'} height={'100%'} style={{ objectFit: 'cover'}}/>
                            </Grid>
                            <Grid sx={{width:{xs:'70px', md:'120px'}, height:{xs:'70px', md:'120px'}}} p={1}>
                                <img src={product1} alt="" width={'100%'} height={'100%'} style={{ objectFit: 'cover'}}/>
                            </Grid>
                        </Grid>
                    </Grid>
                    <Grid item md={6} xs={12} sx={{ paddingLeft:{md:10, xs:0}, paddingRight:{md:10, xs:0} }}>
                        <Grid>
                            <Typography variant="h4" color="initial" sx={{fontFamily:'Archivo Black, sans-serif', color:'#B42981'}} p={1}>Nombre flor/Arreglo</Typography>
                        </Grid>
                        <Grid>
                            <Typography variant="h6" color="initial"
                                p={1}>17% - off</Typography>
                        </Grid>
                        <Grid>
                            <Typography variant="subtitle1" color="initial" p={1}>
                                <Box display={'flex'}>
                                    <Typography variant="h6" color="initial" fontFamily={'Archivo Black, sans-serif'} fontSize={16} style={{color:'red', textAlign:'start', width:'50%',  textDecorationLine: 'line-through' }}>$100.00</Typography>
                                    <Typography variant="h6" color="initial" fontFamily={'Archivo Black, sans-serif'} fontSize={16} style={{color:'blue', textAlign:'end', width:'50%' }}>$83.00</Typography>
                                </Box>
                            </Typography>
                        </Grid>
                        <Grid>
                            <Rating name="read-only" value={4} readOnly />
                        </Grid>
                        <Grid>
                            <Typography variant="subtitle1" color="initial" p={1}>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Fugiat, reiciendis deserunt recusandae nulla nisi qui veniam minima amet maxime repudiandae, quasi, sint aut nemo quibusdam vel fuga hic! Dicta, eligendi!</Typography>
                        </Grid>

                        <Grid sx={{paddingTop:{  md:2, xs:1}}}>

                            <Grid m={2}>
                                <Typography variant="h6" color="#B42981" fontSize={'16px'}>Elije una Fecha y hora de entrega</Typography>
                                <LocalizationProvider dateAdapter={AdapterDayjs}>
                                    <DemoContainer components={['DatePicker']} sx={{justifyContent:'center', width:'100%'}}>
                                        <DatePicker sx={{justifyContent:'center', width:'100%'}}
                                            value={date}
                                            onChange={handleDateValidation}
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
                                                                <Typography variant="h6" color="initial" fontFamily={'Archivo Black, sans-serif'} fontSize={16} style={{textAlign:'center', width:'50%'}}>{steps[activeStep].label}</Typography>
                                                                <Typography variant="h6" color="initial" fontFamily={'Archivo Black, sans-serif'} fontSize={16} style={{color:'red', textAlign:'center', width:'50%' }}>${steps[activeStep].price}</Typography>

                                                            </Box>
                                                            <Box sx={{ height: {md:300, xs:250}, maxWidth: {md:300, xs:250}, width: '100%', pr: 3, pb: 3, m:3 }}>
                                                                <img src={`${steps[activeStep].imgPath}`} alt=""  width={'100%'} height={'100%'} style={{ objectFit: 'cover'}}/>

                                                                <Button sx={stylesComponents.button} onClick={() =>  guardarProductoExtra(steps[activeStep].label, steps[activeStep].price) }>
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
                                                                    disabled={activeStep === maxSteps - 1}
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
                                                                <Button size="small" onClick={handleBack} disabled={activeStep === 0}>
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


                            <Grid m={2}>
                                <Typography variant="h6" color="#B42981" fontSize={'16px'}>Dedicatoria</Typography>
                                <TextField
                                    id="outlined-basic"
                                    label="Mensaje"
                                    variant="outlined"
                                    rows={4}

                                    multiline
                                    fullWidth
                                    onChange={handleChangeDedicatoria}
                                />
                            </Grid>
                            <Grid>

                                {habilitarDesabilitarBottonCompra ? (
                                    <Button sx={stylesComponents.button} onClick={()=>guardarDatos("nombre flor", 83.00)} >
                                        Añadir al carrito
                                    </Button>
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
                    <Typography variant="h3" color="initial" fontSize='34px' fontFamily={'Archivo Black, sans-serif'} style={{color:'#B29426'}} >
                        Productos Relacionados
                    </Typography>
                </Grid>

                <Grid>
                    <Grid container sx={stylesComponents.ContenedorProductos} >

                        <Grid item sm={12}  md={4} lg={3} sx={stylesComponents.contenedorProducto}>
                            <Box display={'flex'} style={{justifyContent:'center'}}>
                                <Grid sx={stylesComponents.contenerdorImagenProducto}>
                                    <img src={product1} alt="" width={'100%'} height={'100%'} style={{ objectFit: 'cover'}}/>
                                </Grid>
                            </Box>
                            <Box p={1}>
                                <Typography variant="h6" color="initial" fontFamily={'Montserrat, sans-serif'} fontSize={16} textAlign={'start'} style={{color:'#404040', textAlign:'center'}} >Arreglo Multicolor</Typography>
                                <Typography variant="h6" color="initial" fontFamily={'Archivo Black, sans-serif'} fontSize={16} textAlign={'start'} style={{color:'#404040', textAlign:'center' }}>$100.00</Typography>
                            </Box>
                            <Box >
                                <Button style={{border:'2px solid #b42981', backgroundImage:'linear-gradient(to right, #FF6464 0%, #FF6464  51%, #FF81CE  100%)', textTransform: 'uppercase', transition: '0.5s', color: 'white', borderStyle:'none', borderRadius:'50px', fontFamily:'Archivo Black, sans-serif', padding:'10px', width:'200px' }}>
                                    Ver
                                </Button>
                            </Box>
                        </Grid>
                        <Grid item sm={12}  md={4} lg={3} sx={stylesComponents.contenedorProducto}>
                                <Box display={'flex'} style={{justifyContent:'center'}}>
                                    <Grid sx={stylesComponents.contenerdorImagenProducto}>
                                        <img src={product2} alt="" width={'100%'} height={'100%'} style={{ objectFit: 'cover'}}/>
                                    </Grid>
                                </Box>
                                <Box p={1}>
                                    <Typography variant="h6" color="initial" fontFamily={'Montserrat, sans-serif'} fontSize={16} textAlign={'start'} style={{color:'#404040', textAlign:'center'}}>Arreglo Multicolor</Typography>
                                    <Typography variant="h6" color="initial" fontFamily={'Archivo Black, sans-serif'} fontSize={16} textAlign={'start'} style={{color:'#404040', textAlign:'center' }}>$100.00</Typography>
                                </Box>
                                <Box >
                                    <Button style={{border:'2px solid #b42981', backgroundImage:'linear-gradient(to right, #FF6464 0%, #FF6464  51%, #FF81CE  100%)', textTransform: 'uppercase', transition: '0.5s', color: 'white', borderStyle:'none', borderRadius:'50px', fontFamily:'Archivo Black, sans-serif', padding:'10px', width:'200px' }}>
                                        Ver
                                    </Button>
                            </Box>
                        </Grid>
                        <Grid item sm={12}  md={4} lg={3} sx={stylesComponents.contenedorProducto}>
                            <Box display={'flex'} style={{justifyContent:'center'}}>
                                <Grid sx={stylesComponents.contenerdorImagenProducto}>
                                    <img src={product3} alt="" width={'100%'} height={'100%'} style={{ objectFit: 'cover'}}/>
                                </Grid>
                            </Box>
                            <Box p={1}>
                                <Typography variant="h6" color="initial" fontFamily={'Montserrat, sans-serif'} fontSize={16} textAlign={'start'} style={{color:'#404040', textAlign:'center'}}>Arreglo Multicolor</Typography>
                                <Typography variant="h6" color="initial" fontFamily={'Archivo Black, sans-serif'} fontSize={16} textAlign={'start'} style={{color:'#404040', textAlign:'center' }}>$100.00</Typography>
                            </Box>
                            <Box >
                                <Button style={{border:'2px solid #b42981', backgroundImage:'linear-gradient(to right, #FF6464 0%, #FF6464  51%, #FF81CE  100%)', textTransform: 'uppercase', transition: '0.5s', color: 'white', borderStyle:'none', borderRadius:'50px', fontFamily:'Archivo Black, sans-serif', padding:'10px', width:'200px' }}>
                                    Ver
                                </Button>
                        </Box>
                        </Grid>
                        <Grid item sm={12}  md={4} lg={3} sx={stylesComponents.contenedorProducto}>
                            <Box display={'flex'} style={{justifyContent:'center'}}>
                                <Grid sx={stylesComponents.contenerdorImagenProducto}>
                                    <img src={product4} alt="" width={'100%'} height={'100%'} style={{ objectFit: 'cover'}}/>
                                </Grid>
                            </Box>
                            <Box p={1}>
                                <Typography variant="h6" color="initial" fontFamily={'Montserrat, sans-serif'} fontSize={16} textAlign={'start'} style={{color:'#404040', textAlign:'center'}}>Arreglo Multicolor</Typography>
                            </Box>
                            <Box display={'flex'}>
                                <Typography variant="h6" color="initial" fontFamily={'Archivo Black, sans-serif'} fontSize={16} textAlign={'start'} style={{color:'red', textAlign:'center', width:'50%',  textDecorationLine: 'line-through' }}>$100.00</Typography>
                                <Typography variant="h6" color="initial" fontFamily={'Archivo Black, sans-serif'} fontSize={16} textAlign={'start'} style={{color:'blue', textAlign:'center', width:'50%' }}>$83.00</Typography>
                            </Box>
                            <Box >
                                <Button style={{border:'2px solid #b42981', backgroundImage:'linear-gradient(to right, #FF6464 0%, #FF6464  51%, #FF81CE  100%)', textTransform: 'uppercase', transition: '0.5s', color: 'white', borderStyle:'none', borderRadius:'50px', fontFamily:'Archivo Black, sans-serif', padding:'10px', width:'200px' }}>
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