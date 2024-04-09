/* eslint-disable react-hooks/rules-of-hooks */
/* eslint-disable @typescript-eslint/no-unused-vars */

import React from 'react'
import {TextField,FormControl,InputLabel, Select,MenuItem,Grid,Typography, Button } from '@mui/material'
import { CarritoDeCompra } from '../interfaces/interfaces';
import { PayPalButtons, FUNDING   } from '@paypal/react-paypal-js'
import { CreateOrderData } from '@paypal/paypal-js';

import { CardElement, useElements, useStripe } from "@stripe/react-stripe-js"
import { PaymentMethod } from '@stripe/stripe-js';
import axios from 'axios'
import { WidthFull } from '@mui/icons-material';


function shopProducts() {

    const servelUrl = "https://serve-paypal.vercel.app";
    const elements = useElements()
    const stripe = useStripe()




    const [, setItems] = React.useState<CarritoDeCompra[]>([]);
    const [totalNumerico, setTotalNumerico] = React.useState<number>(0);
    const [totalEnvio, settotalEnvio] =  React.useState<number>(0);

    const [formData, setFormData] =React.useState({
        nombre: '',
        genero: '',
        edad: '',
        email: '',
        telefono: ''
    });

    React.useEffect(() => {
        const storedItems = localStorage.getItem('Productos');
        const storedItemsEnvio = localStorage.getItem('envio');

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
        return parseFloat(precioPagar)

    }

    const handleChange = (e: { target: { name: string; value: unknown; }; }) => {
        const { name, value } = e.target;
        setFormData({
            ...formData,
            [name]: value
        });
    };

    const handleSubmit = (e: { preventDefault: () => void; }) => {
        e.preventDefault();
        console.log(formData); // Aquí puedes enviar los datos a tu backend, por ejemplo
    };

    const onApprove = async (data: { orderID: string }) => {
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
            // Aquí puedes realizar acciones adicionales después de un pago exitoso
        })
        .catch((error) => {
            console.error("Error al capturar el pago:", error.message);
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
                console.error(error.message);
                return;
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
                        amount: 1000, // Monto en centavos (por ejemplo, $10.00)
                        id,
                    }),
                });

                if (!response.ok) {
                    throw new Error('Error al procesar la solicitud');
                }

                const responseData = await response.json();
                console.log(responseData)

                if(responseData){

                    const result = await stripe.confirmCardPayment(responseData.data.paymentIntent, {payment_method: id});

                    if (result.error) {
                        console.error("error pago",result.error.message);
                    } else {
                        console.log("resuñtado pago",result.paymentIntent);
                      // Payment succeeded, handle success here
                    }
                }else{
                    console.log("error xd")
                }

            }
        } catch (error) {
            console.error('Error al crear el método de pago:', error);
        }
    };


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
            <Grid p={10}>

                <Grid onSubmit={handleSubmit} >
                    <Grid container>
                        <Grid item xs={12} md={6} p={4}>
                            <Grid>
                                <Typography variant="h4" gutterBottom>
                                    Datos de Facturacion
                                </Typography>
                                <Grid >
                                    <Grid container spacing={2}>
                                        <Grid item xs={12}>
                                            <TextField
                                            fullWidth
                                            label="Nombre"
                                            name="nombre"
                                            value={formData.nombre}
                                            onChange={handleChange}
                                            required
                                            />
                                        </Grid>
                                        <Grid item xs={12}>
                                            <FormControl fullWidth>
                                            <InputLabel id="genero-label">Género</InputLabel>
                                            <Select
                                                labelId="genero-label"
                                                id="genero"
                                                name="genero"
                                                value={formData.genero}
                                                onChange={handleChange}
                                                required
                                            >
                                                <MenuItem value="masculino">Masculino</MenuItem>
                                                <MenuItem value="femenino">Femenino</MenuItem>
                                                <MenuItem value="otro">Otro</MenuItem>
                                            </Select>
                                            </FormControl>
                                        </Grid>
                                        <Grid item xs={12}>
                                            <TextField
                                            fullWidth
                                            type="number"
                                            label="Edad"
                                            name="edad"
                                            value={formData.edad}
                                            onChange={handleChange}
                                            required
                                            />
                                        </Grid>
                                        <Grid item xs={12}>
                                            <TextField
                                            fullWidth
                                            type="email"
                                            label="Email"
                                            name="email"
                                            value={formData.email}
                                            onChange={handleChange}
                                            required
                                            />
                                        </Grid>
                                        <Grid item xs={12}>
                                            <TextField
                                            fullWidth
                                            type="tel"
                                            label="Teléfono"
                                            name="telefono"
                                            value={formData.telefono}
                                            onChange={handleChange}
                                            required
                                            />
                                        </Grid>
                                        {/* <Grid item xs={12}>
                                            <Box textAlign="center">
                                            <Button variant="contained" color="primary" type="submit">
                                                Enviar
                                            </Button>
                                            </Box>
                                        </Grid> */}
                                    </Grid>
                                </Grid>
                            </Grid>


                        </Grid>
                        <Grid item xs={12} md={6}  p={4}>
                            <Grid>
                                <Typography variant="h4" gutterBottom>
                                Entrega
                                </Typography>
                                <form onSubmit={handleSubmit}>
                                    <Grid container spacing={2}>
                                        <Grid item xs={12}>
                                            <TextField
                                            fullWidth
                                            label="Nombre"
                                            name="nombre"
                                            value={formData.nombre}
                                            onChange={handleChange}
                                            required
                                            />
                                        </Grid>
                                        <Grid item xs={12}>
                                            <FormControl fullWidth>
                                            <InputLabel id="genero-label">Género</InputLabel>
                                            <Select
                                                labelId="genero-label"
                                                id="genero"
                                                name="genero"
                                                value={formData.genero}
                                                onChange={handleChange}
                                                required
                                            >
                                                <MenuItem value="masculino">Masculino</MenuItem>
                                                <MenuItem value="femenino">Femenino</MenuItem>
                                                <MenuItem value="otro">Otro</MenuItem>
                                            </Select>
                                            </FormControl>
                                        </Grid>
                                        <Grid item xs={12}>
                                            <TextField
                                            fullWidth
                                            type="number"
                                            label="Edad"
                                            name="edad"
                                            value={formData.edad}
                                            onChange={handleChange}
                                            required
                                            />
                                        </Grid>
                                        <Grid item xs={12}>
                                            <TextField
                                            fullWidth
                                            type="email"
                                            label="Email"
                                            name="email"
                                            value={formData.email}
                                            onChange={handleChange}
                                            required
                                            />
                                        </Grid>
                                        <Grid item xs={12}>
                                            <TextField
                                            fullWidth
                                            type="tel"
                                            label="Teléfono"
                                            name="telefono"
                                            value={formData.telefono}
                                            onChange={handleChange}
                                            required
                                            />
                                        </Grid>
                                        {/* <Grid item xs={12}>
                                            <Box textAlign="center">
                                            <Button variant="contained" color="primary" type="submit">
                                                Enviar
                                            </Button>
                                            </Box>
                                        </Grid> */}
                                    </Grid>
                                </form>
                            </Grid>
                        </Grid>
                    </Grid>


                    <Grid item xs={12}>
                        <Grid sx={{backgroundColor:'#eaeaea', borderRadius:'5px'}} p={3}>
                            <Typography variant="h6" color="initial">Resumen de compra</Typography>
                            <Typography variant="h6" color="initial">Productos: ${totalNumerico}</Typography>
                            <Typography variant="h6" color="initial">Envio: ${totalEnvio}</Typography>
                            <Typography variant="h6" color="initial">Total: ${totalNumerico + totalEnvio}</Typography>

                                    <CardElement options={cardElementOptions}/>
                                        <Button
                                        onClick={handleSubmit2}
                                        >Hola</Button>



                            <PayPalButtons
                                createOrder={(data) => createOrder(data)}
                                onApprove={(data) => onApprove(data)}
                                fundingSource={FUNDING.PAYPAL}
                            />

                        </Grid>
                    </Grid>
                </Grid>
            </Grid>
        </>
    );

}

export default shopProducts


