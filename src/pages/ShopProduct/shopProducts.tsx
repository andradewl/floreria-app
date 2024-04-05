/* eslint-disable react-hooks/rules-of-hooks */
/* eslint-disable @typescript-eslint/no-unused-vars */

import React from 'react'
import {TextField,FormControl,InputLabel, Select,MenuItem,Grid,Typography } from '@mui/material'
import { CarritoDeCompra } from "../../interfaces/interfaces"
import { PayPalButtons, FUNDING   } from '@paypal/react-paypal-js'
import { CreateOrderData } from '@paypal/paypal-js';
import { useState, useEffect } from 'react';
import { Elements } from '@stripe/react-stripe-js';
import { loadStripe, Stripe } from '@stripe/stripe-js';
import CheckoutForm from '../../components/CheckoutForm';

function shopProducts() {

    const servelUrl = "https://serve-paypal.vercel.app/";

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
    const [stripePromise, setStripePromise] = useState<Promise<Stripe | null> | null>(null);
    const [clientSecret, setClientSecret] = useState<string | null>(null);

    useEffect(() => {
        fetch("https://server-stripe-chi.vercel.app/config").then(async (r) => {
            const { publishableKey } = await r.json();
            if (publishableKey) {
                setStripePromise(loadStripe(publishableKey) as Promise<Stripe | null>);
            } else {
                setStripePromise(null);
            }
        });
    }, []);

    useEffect(() => {
        fetch("https://server-stripe-chi.vercel.app/create-payment-intent", {
            method: "POST",
            body: JSON.stringify({
                payment_method_config_id: "pmc_1P1hdNJA4oGedNG85UP0Ar7G",
            }),
        }).then(async (result) => {
            const { clientSecret } = await result.json();
            setClientSecret(clientSecret);
        });
    }, []);

    // eslint-disable-next-line react-hooks/rules-of-hooks
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



    return (
        <>
            <Grid p={10}>

                <form onSubmit={handleSubmit} >
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


                            <h1>React Stripe and the Payment Element</h1>
                            {clientSecret && stripePromise && (
                                <Elements stripe={stripePromise} options={{ clientSecret }}>
                                    <CheckoutForm />
                                </Elements>
                            )}


                            <PayPalButtons
                                createOrder={(data) => createOrder(data)}
                                onApprove={(data) => onApprove(data)}
                                fundingSource={FUNDING.PAYPAL}
                            />

                        </Grid>
                    </Grid>
                </form>
            </Grid>
        </>
    );

}

export default shopProducts