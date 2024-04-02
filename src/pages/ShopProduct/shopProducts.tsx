/* eslint-disable @typescript-eslint/no-unused-vars */

import React from 'react'
import {TextField,FormControl,InputLabel, Select,MenuItem,Grid,Typography,FormControlLabel, Checkbox } from '@mui/material'
import { CarritoDeCompra } from "../../interfaces/interfaces"
import { PayPalButtons  } from '@paypal/react-paypal-js'
import { CreateOrderData } from '@paypal/paypal-js';


function shopProducts() {

    const servelUrl = "http://localhost:8888";
    // eslint-disable-next-line react-hooks/rules-of-hooks
    const [formData, setFormData] =React.useState({
        nombre: '',
        genero: '',
        edad: '',
        email: '',
        telefono: ''
    });
    // eslint-disable-next-line react-hooks/rules-of-hooks
    const [, setItems] = React.useState<CarritoDeCompra[]>([]);
    // eslint-disable-next-line react-hooks/rules-of-hooks
    const [totalNumerico, setTotalNumerico] = React.useState<number>(0);
    // eslint-disable-next-line react-hooks/rules-of-hooks
    const [totalEnvio, settotalEnvio] = React.useState<number>(500);



    // eslint-disable-next-line react-hooks/rules-of-hooks
    React.useEffect(() => {
        const storedItems = localStorage.getItem('Productos');
        const dinero = precioApAGAR()


        if (storedItems && dinero) {
            const parsedItems: CarritoDeCompra[] = JSON.parse(storedItems);
            console.log(parsedItems)
            // totalConSinDescuent(parsedItems)
            setTotalNumerico(dinero)
            setItems(parsedItems)
        }
    }, [])

    const precioApAGAR = () =>{
        const precioPagar = localStorage.getItem('PrecioApagar');
        if(!precioPagar){
            return 0
        }
        return parseFloat(precioPagar)

    }


    const handleCheckboxChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        event.target.checked ? settotalEnvio(totalNumerico+ 0): settotalEnvio(totalNumerico+500);
    };

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
        const dinero = precioApAGAR()
        return fetch(`${servelUrl}/api/orders`, {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
            },

            body: JSON.stringify({
                cart: {
                    id: "YOUR_PRODUCT_ID",
                    descripcion:"Productos Floreria Rickys",
                    quantity:dinero
                },
                application_context: {
                    shipping_preference: 'NO_SHIPPING',
                    user_action: 'PAY_NOW',
                }
            }),

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
                            <FormControlLabel control={<Checkbox onChange={handleCheckboxChange}/>} label="Recoge en tienda" />
                            <Typography variant="h6" color="initial">Total: ${totalNumerico + totalEnvio}</Typography>
                            <Grid sx={{textAlign:'center'}}>
                                <PayPalButtons
                                    createOrder={(data) => createOrder(data)}
                                    onApprove={(data) => onApprove(data)}
                                />
                            </Grid>


                        </Grid>
                    </Grid>
                </form>
            </Grid>
        </>
    );

}

export default shopProducts