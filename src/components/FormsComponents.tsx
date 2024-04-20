/* eslint-disable react-hooks/rules-of-hooks */
/* eslint-disable @typescript-eslint/no-unused-vars */

import React from 'react'
import {TextField, Grid,Typography, Button, FormControlLabel, Checkbox } from '@mui/material'
import { CarritoDeCompra, NuevoPedido } from '../interfaces/interfaces';
import { PayPalButtons, FUNDING   } from '@paypal/react-paypal-js'
import { CreateOrderData } from '@paypal/paypal-js';

import { CardElement, useElements, useStripe } from "@stripe/react-stripe-js"
import { PaymentMethod } from '@stripe/stripe-js';
import { WidthFull } from '@mui/icons-material';
import { addPedido } from '../config/apiFirebase';
import { useNavigate } from "react-router-dom";


function shopProducts() {
    const navigate = useNavigate();

    const servelUrl = "https://serve-paypal.vercel.app";
    const elements = useElements()
    const stripe = useStripe()

    const [item, setItems] = React.useState<CarritoDeCompra[]>([]);
    const [totalNumerico, setTotalNumerico] = React.useState<number>(0);

    const [totalEnvio, settotalEnvio] =  React.useState<number>(0);
    const [isChecked, setIsChecked] = React.useState(false);
    const [isUidUserLogin, setisUidUserLogin] = React.useState(null);

    const [formDataFacturacion, setFormDataFacturacion] =React.useState({
        nombre: '',
        apellido: '',
        direccion: '',
        colonia: '',
        ciudad: '',
        estado: '',
        cp: '',
        email: '',
        telefono: '',
    });

    const isFormValid = formDataFacturacion.nombre !=''
                        && formDataFacturacion.apellido !=''
                        && formDataFacturacion.direccion !=''
                        && formDataFacturacion.colonia !=''
                        && formDataFacturacion.ciudad !=''
                        && formDataFacturacion.estado !=''
                        && formDataFacturacion.cp !=''
                        && formDataFacturacion.email !=''
                        && formDataFacturacion.telefono !='';


    const [formDataEnvio, setFormDataEnvio] =React.useState({
        nombre: '',
        apellido: '',
        direccion: '',
        colonia: '',
        ciudad: '',
        estado: '',
        cp: '',
        email: '',
        telefono: '',
    });

    const isFormValidEnvio = formDataEnvio.nombre !=''
                        && formDataEnvio.apellido !=''
                        && formDataEnvio.direccion !=''
                        && formDataEnvio.colonia !=''
                        && formDataEnvio.ciudad !=''
                        && formDataEnvio.estado !=''
                        && formDataEnvio.cp !=''
                        && formDataEnvio.email !=''
                        && formDataEnvio.telefono !=''



    React.useEffect(() => {
        const storedItems = localStorage.getItem('Productos');
        const storedItemsEnvio = localStorage.getItem('envio');
        const storedUserName = sessionStorage.getItem('credentials');

        if(!storedItems){

            return navigate("/");
        }

        if(storedUserName){
            const userCredential = JSON.parse(storedUserName);
            setisUidUserLogin(userCredential.uid)
        }

        const dinero = precioApAGAR()

        if (storedItems && dinero && storedItemsEnvio) {
            const parsedItems: CarritoDeCompra[] = JSON.parse(storedItems);
            console.log(parsedItems)
            const ItemsEnvio = parseFloat(storedItemsEnvio);
            setTotalNumerico(dinero+ItemsEnvio)
            setItems(parsedItems)
            settotalEnvio(ItemsEnvio)
        }


    }, [])

    const precioApAGAR = () =>{
        const precioPagar = localStorage.getItem('PrecioApagar');
        if(!precioPagar){
            return 0
        }
        return parseInt(precioPagar)

    }

    const handleChangeFacturacion = (e: { target: { name: string; value: unknown; }; }) => {
        const { name, value } = e.target;
        setFormDataFacturacion({
            ...formDataFacturacion,
            [name]: value
        });
    };

    const handleChangeEnvio = (e: { target: { name: string; value: unknown; }; }) => {
        const { name, value } = e.target;
        setFormDataEnvio({
            ...formDataEnvio,
            [name]: value
        });
    }


    const handleRedirect = () =>{

        const storedUserName = sessionStorage.getItem("credentials");
        if (storedUserName) {
            const userInfo = JSON.parse(storedUserName);
            navigate("/Usuario/"+userInfo.uid);
        }else{
            navigate("/");

        }
    }


    const facturacionYEnvioTrue=(total:number)=>{
        let entrega="";
        let newItem;

        totalEnvio == 0 ? entrega="Recoge en tienda" : entrega="Entregar a cliente";

        if(isUidUserLogin != null){
            newItem={
                facturacion:formDataFacturacion,
                datosEnvio:formDataEnvio,
                carritoCompra:item,
                idEstado:"lihdGU56KMY6sblyD9xb",
                uidUserLogin:isUidUserLogin,
                entrega:entrega,
                total:total
            }
        }else{
            newItem={
                facturacion:formDataFacturacion,
                datosEnvio:formDataEnvio,
                carritoCompra:item,
                idEstado:"lihdGU56KMY6sblyD9xb",
                uidUserLogin:"no user",
                entrega:entrega,
                total:total
            }
        }
        return newItem
    }


    const facturacionYEnviofalse=(total:number)=>{
        let entrega="";
        totalEnvio == 0 ? entrega="Recoge en tienda" : entrega="Entregar a cliente";

        let newItem;
        if(isUidUserLogin != null){
            newItem={
                facturacion:formDataFacturacion,
                datosEnvio:formDataFacturacion,
                carritoCompra:item,
                idEstado:"lihdGU56KMY6sblyD9xb",
                uidUserLogin:isUidUserLogin,
                entrega:entrega,
                total:total
            }
        }else{
            newItem={
                facturacion:formDataFacturacion,
                datosEnvio:formDataFacturacion,
                carritoCompra:item,
                idEstado:"lihdGU56KMY6sblyD9xb",
                uidUserLogin:"no user",
                entrega:entrega,
                total:total
            }
        }
        return newItem
    }


    const deleteCarrito=()=>{
        localStorage.removeItem('Productos');
        localStorage.removeItem('PrecioApagar');
        localStorage.removeItem('envio');
    }


    const onApprove = async (data: { orderID: string }) => {

        const dinero = precioApAGAR();
        return fetch(`${servelUrl}/api/orders/${data.orderID}/capture`, {
            method: "POST",
            headers: {
            "Content-Type": "application/json",
            },
        })
        .then((response) => {
            if (!response.ok) {
                throw new Error("Error al capturar el pago.");
            }
            return response.json();
        })
        .then((result) => {
            console.log("Pago exitoso", result);
            if (result.error) {
                console.error("error pago",result.error.message);
            } else {
                console.log("resuñtado pago",result.paymentIntent);

                if( true== isFormValid && isFormValidEnvio == true){

                    const datosPedidos = facturacionYEnvioTrue(dinero)
                    const newItem: NuevoPedido = datosPedidos

                    addPedido(newItem)
                    .then((pedidoId) => {
                        deleteCarrito()
                        alert('Pedido añadido exitosamente con id de seguimiento: '+pedidoId)
                        handleRedirect()
                    })
                    .catch((_error) => {
                        alert('Error al crear el método de pago intentelo mas tarde')
                    });
                    console.log(newItem)

                }else{
                    const datosPedidos = facturacionYEnviofalse(dinero)
                    const newItem: NuevoPedido = datosPedidos

                    addPedido(newItem)
                    .then((pedidoId) => {
                        deleteCarrito()
                        alert('Pedido añadido exitosamente con id de seguimiento: '+pedidoId)
                        handleRedirect()

                        // sendMessage()
                    })
                    .catch((_error) => {
                        alert('Error al crear el método de pago intentelo mas tarde')
                    });
                    console.log(newItem)
                }
            }
            // Aquí puedes realizar acciones adicionales después de un pago exitoso
        })
        .catch((_error) => {
            alert('Error al crear el método de pago intentelo mas tarde')
        });
    };




    const createOrder = async (_data: CreateOrderData) => {
        const dinero = precioApAGAR();

        return fetch(`${servelUrl}/api/orders`, {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
            },
            body: JSON.stringify({
            purchase_units: [
                {
                    amount: {
                        value: dinero,
                        currency_code: 'MXN'
                    },

                }
            ],
            cart: {
                id: "YOUR_PRODUCT_ID",
                descripcion: "Productos Floreria Rickys",
                quantity: dinero
            },
            })

        }).then((response) => {
            if (!response.ok) {
            throw new Error("Error al crear la orden.");
            }
            return response.json();
        }).then((order) => {
            console.log("Orden creada:", order);
            return order.id;
        }).catch((error) => {
            console.error("Error al crear la orden:", error.message);
        });
    };

    const handleSubmit2 = async (e: React.FormEvent) => {
        e.preventDefault();
        const dinero = precioApAGAR();

        // console.log(isFormValid, isChecked, isFormValidEnvio)
        if(true== isChecked != isFormValidEnvio == true){
            return alert("Debe llenar todos los datos de envio")
        }

        if (!stripe || !elements) {
            return;
        }
        try {
            const { error, paymentMethod } = await stripe.createPaymentMethod({
                type: 'card',
                card: elements.getElement(CardElement)!,
            });
            console.log(paymentMethod)

            if (error) {
                return alert(error.message)
            }

            if (paymentMethod) {
                const { id } = paymentMethod as PaymentMethod;
                console.log(id)

                const response = await fetch('https://stripe-server-blue.vercel.app/payment', {
                    method: 'POST',
                    headers: {
                        'Content-Type': 'application/json'
                    },
                    body: JSON.stringify({
                        amount: dinero, // Monto en centavos (por ejemplo, $10.00)
                        id,
                    }),
                });

                if (!response.ok) {
                    throw new Error('Error al procesar la solicitud');
                }

                const responseData = await response.json();
                console.log(responseData.paymentIntent)

                if(responseData){

                    const result = await stripe.confirmCardPayment(responseData.paymentIntent, {payment_method: id});

                    if (result.error) {
                        console.error("error pago",result.error.message);
                    } else {
                        console.log("resuñtado pago",result.paymentIntent);
                        if( true== isFormValid && isFormValidEnvio == true){

                            const datosPedidos = facturacionYEnvioTrue(dinero)
                            const newItem: NuevoPedido = datosPedidos

                            addPedido(newItem)
                            .then((pedidoId) => {
                                // console.log("Pedido añadido exitosamente con ID: ", pedidoId);
                                // sendMessage()
                                deleteCarrito()
                                alert('Pedido añadido exitosamente con id de seguimiento: '+pedidoId)
                                handleRedirect()

                            })
                            .catch((_error) => {
                                // console.error("Error al añadir pedido: ", error);
                                alert('Error al añadir pedido intentelo mas tarde')
                            });
                            console.log(newItem)

                        }else{
                            const datosPedidos = facturacionYEnviofalse(dinero)
                            const newItem: NuevoPedido = datosPedidos
                            addPedido(newItem)
                            .then((pedidoId) => {
                                // console.log("Pedido añadido exitosamente con ID: ", pedidoId);
                                // sendMessage()
                                deleteCarrito()
                                alert('Pedido añadido exitosamente con id de seguimiento: '+pedidoId)
                                handleRedirect()

                            })
                            .catch((_error) => {
                                // console.error("Error al añadir pedido: ", error);
                                alert('Error al añadir pedido intentelo mas tarde')
                            });

                            console.log(newItem)
                        }
                    }
                }else{
                    alert('Error al crear el método de pago intentelo mas tarde')
                    // console.log("error xd")
                }

            }
        } catch (error) {
            alert('Error al crear el método de pago intentelo mas tarde')
            // console.error('Error al crear el método de pago:', error);
        }
    };


    // const datosDeEnvio=(e: { target: { value: boolean | ((prevState: boolean /* eslint-disable @typescript-eslint/no-unused-vars */) => boolean); }; })=>{
    //     setEntregaDeFlores(e.target.value)
    // }

    const isChecketEnvios=(e: boolean)=>{
        // setEntregaDeFlores(e.target.value)

        if(e == false){
            setFormDataEnvio(
                {
                    nombre: '',
                    apellido: '',
                    direccion:'',
                    colonia: '',
                    ciudad: '',
                    estado: '',
                    cp: '',
                    email: '',
                    telefono: ''
                }
            )
        }
        setIsChecked(e)
    }


    const cardElementOptions = {
        style: {
            base: {
                fontSize: '20px',
                color: '#424770',
                '::placeholder': {
                color: '#aab7c4',
                },
                WidthFull
            },
            invalid: {
                color: '#9e2146',
            },
        },
    };



    return (
        <>
            <Grid pt={10} sx={{paddingLeft:{xl:'10%', md:'7%',xs:'5%'}, paddingRight:{xl:'10%',md:'7%', xs:'5%'} }}>

                <Grid  >
                    <Grid container>
                        <Grid item xs={12} md={6} p={4}>
                            <Grid>
                                <Typography variant="h4" gutterBottom>
                                    Datos de Facturacion
                                </Typography>
                                <form>
                                    <Grid container spacing={2}>
                                            <Grid item xs={12}>
                                                <TextField
                                                fullWidth
                                                label="Nombre"
                                                name="nombre"
                                                value={formDataFacturacion.nombre}
                                                onChange={handleChangeFacturacion}
                                                required
                                                />
                                            </Grid>
                                            <Grid item xs={12}>
                                                <TextField
                                                fullWidth
                                                label="Apellido"
                                                name="apellido"
                                                value={formDataFacturacion.apellido}
                                                onChange={handleChangeFacturacion}
                                                required
                                                />
                                            </Grid>
                                            <Grid item xs={12}>
                                                <TextField
                                                fullWidth
                                                label="Direccion"
                                                name="direccion"
                                                value={formDataFacturacion.direccion}
                                                onChange={handleChangeFacturacion}
                                                required
                                                />
                                            </Grid>
                                            <Grid item xs={12}>
                                                <TextField
                                                fullWidth
                                                label="Colonia"
                                                name="colonia"
                                                value={formDataFacturacion.colonia}
                                                onChange={handleChangeFacturacion}
                                                required
                                                />
                                            </Grid>
                                            <Grid item xs={12}>
                                                <TextField
                                                fullWidth
                                                label="Cuidad"
                                                name="ciudad"
                                                value={formDataFacturacion.ciudad}
                                                onChange={handleChangeFacturacion}
                                                required
                                                />
                                            </Grid>
                                            <Grid item xs={12}>
                                                <TextField
                                                fullWidth
                                                label="Estado"
                                                name="estado"
                                                value={formDataFacturacion.estado}
                                                onChange={handleChangeFacturacion}
                                                required
                                                />
                                            </Grid>
                                            <Grid item xs={12}>
                                                <TextField
                                                fullWidth
                                                label="Codigo Postal"
                                                name="cp"
                                                value={formDataFacturacion.cp}
                                                onChange={handleChangeFacturacion}
                                                required
                                                />
                                            </Grid>
                                            <Grid item xs={12}>
                                                <TextField
                                                fullWidth
                                                type="email"
                                                label="Email"
                                                name="email"
                                                value={formDataFacturacion.email}
                                                onChange={handleChangeFacturacion}
                                                required
                                                />
                                            </Grid>
                                            <Grid item xs={12}>
                                                <TextField
                                                fullWidth
                                                type="tel"
                                                label="Teléfono"
                                                name="telefono"
                                                value={formDataFacturacion.telefono}
                                                onChange={handleChangeFacturacion}
                                                required
                                                />
                                            </Grid>
                                    </Grid>
                                </form>
                            </Grid>

                            <Grid>
                                <Grid>
                                    <Grid>
                                        <Typography variant="h4" gutterBottom>
                                            Entrega
                                        </Typography>
                                    </Grid>
                                    <Grid>
                                        <FormControlLabel
                                            label="¿Mismo que la facturacion?"
                                            control={
                                                <Checkbox
                                                value=""
                                                //   checked={}
                                                checked={!isChecked}
                                                onChange={() => isChecketEnvios(!isChecked)}
                                                color="primary"
                                                />
                                            }
                                        />
                                        {/* <Typography variant="h4" gutterBottom>
                                            Mismo que la facturacion?
                                        </Typommgraphy> */}
                                    </Grid>
                                </Grid>
                                {
                                    isChecked &&
                                    <form>
                                        <Grid container spacing={2}>
                                                <Grid item xs={12}>
                                                    <TextField
                                                    fullWidth
                                                    label="Nombre"
                                                    name="nombre"
                                                    value={formDataEnvio.nombre}
                                                    onChange={handleChangeEnvio}
                                                    required
                                                    />
                                                </Grid>
                                                <Grid item xs={12}>
                                                    <TextField
                                                    fullWidth
                                                    label="Apellido"
                                                    name="apellido"
                                                    value={formDataEnvio.apellido}
                                                    onChange={handleChangeEnvio}
                                                    required
                                                    />
                                                </Grid>
                                                <Grid item xs={12}>
                                                    <TextField
                                                    fullWidth
                                                    label="Direccion"
                                                    name="direccion"
                                                    value={formDataEnvio.direccion}
                                                    onChange={handleChangeEnvio}
                                                    required
                                                    />
                                                </Grid>
                                                <Grid item xs={12}>
                                                    <TextField
                                                    fullWidth
                                                    label="Colonia"
                                                    name="colonia"
                                                    value={formDataEnvio.colonia}
                                                    onChange={handleChangeEnvio}
                                                    required
                                                    />
                                                </Grid>
                                                <Grid item xs={12}>
                                                    <TextField
                                                    fullWidth
                                                    label="Cuidad"
                                                    name="ciudad"
                                                    value={formDataEnvio.ciudad}
                                                    onChange={handleChangeEnvio}
                                                    required
                                                    />
                                                </Grid>
                                                <Grid item xs={12}>
                                                    <TextField
                                                    fullWidth
                                                    label="Estado"
                                                    name="estado"
                                                    value={formDataEnvio.estado}
                                                    onChange={handleChangeEnvio}
                                                    required
                                                    />
                                                </Grid>
                                                <Grid item xs={12}>
                                                    <TextField
                                                    fullWidth
                                                    label="Codigo Postal"
                                                    name="cp"
                                                    value={formDataEnvio.cp}
                                                    onChange={handleChangeEnvio}
                                                    required
                                                    />
                                                </Grid>
                                                <Grid item xs={12}>
                                                    <TextField
                                                    fullWidth
                                                    type="email"
                                                    label="Email"
                                                    name="email"
                                                    value={formDataEnvio.email}
                                                    onChange={handleChangeEnvio}
                                                    required
                                                    />
                                                </Grid>
                                                <Grid item xs={12}>
                                                    <TextField
                                                    fullWidth
                                                    type="phone"
                                                    label="Teléfono"
                                                    name="telefono"
                                                    value={formDataEnvio.telefono}
                                                    onChange={handleChangeEnvio}
                                                    required
                                                    />
                                                </Grid>
                                        </Grid>
                                    </form>
                                }
                            </Grid>


                        </Grid>
                        <Grid item xs={12} md={6}  p={4}>
                            <Grid sx={{ border: '1px solid #afafaf'}} >
                                <Grid sx={{ borderBottom:'1px solid #afafaf', background:'#ececec' }} p={3}>
                                    <Typography variant="h6" color="initial">Resumen de compra</Typography>
                                </Grid>
                                <Grid m={1} ml={3} mr={3} pb={1} sx={{ borderBottom:'1px solid #afafaf'}}>
                                    <Typography variant="h6" color="initial">Productos: ${totalNumerico}</Typography>
                                </Grid>
                                <Grid m={1} ml={3} mr={3} pb={1} sx={{ borderBottom:'1px solid #afafaf'}}>
                                    <Typography variant="h6" color="initial">Envio: ${totalEnvio}</Typography>
                                </Grid>
                                <Grid m={1} ml={3} mr={3} pb={1} sx={{ borderBottom:'1px solid #afafaf'}}>
                                    <Typography variant="h6" color="initial">Total: ${totalNumerico + totalEnvio}</Typography>
                                </Grid>

                                {/* <Button
                                    disabled={!isFormValid}
                                    onClick={handleSubmit}
                                >
                                    Pagar
                                </Button> */}

                                <Grid m={1} ml={3} mr={3} pb={1} sx={{ borderBottom:'1px solid #afafaf', textAlign:'center' }}>

                                    <Typography variant="h5" color="initial" m={1}>Pago con tarjeta</Typography>


                                    <CardElement options={cardElementOptions}/>
                                    <Grid m={1}>
                                        <Button
                                            disabled={!isFormValid}
                                            onClick={handleSubmit2}
                                        >
                                            Pagar
                                        </Button>
                                    </Grid>
                                </Grid>
                                <Grid m={1} ml={3} mr={3} pb={1} sx={{ textAlign:'center' }}>
                                    <Typography variant="h5" color="initial" m={1}>o pago con paypal</Typography>
                                    <PayPalButtons
                                        createOrder={(data) => createOrder(data)}
                                        onApprove={(data) => onApprove(data)}
                                        fundingSource={FUNDING.PAYPAL}
                                        disabled={!isFormValid}
                                    />
                                </Grid>

                            </Grid>
                        </Grid>
                    </Grid>

                </Grid>
            </Grid>
        </>
    );

}

export default shopProducts


