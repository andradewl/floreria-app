import { Button, Container, Grid, Stack, TextField, Typography} from "@mui/material";
import SmartphoneIcon from '@mui/icons-material/Smartphone';
import MailOutlineIcon from '@mui/icons-material/MailOutline';
import LocationOnIcon from '@mui/icons-material/LocationOn';
import AccessTimeIcon from '@mui/icons-material/AccessTime';

function Contacto(){
    return(
        <Container>
            <Grid container spacing={5}>
                <Grid item xs={12}>
                    <Stack spacing={3}>
                        <Typography variant="h2"textAlign="center"sx={{ fontStyle: 'italic' }}>
                            Contacto y Oficinas
                        </Typography>
                        <Typography variant="h5">
                            En Daisy’s Garden nos complace tener una comunicación abierta con nuestros clientes. Si deseas hacernos alguna pregunta o sugerirnos alguna idea hazlo a través de nuestro formulario de contacto, y nos pondremos en contacto contigo.
                        </Typography>
                        <Typography variant="h4" textAlign="center"sx={{ fontVariantCaps: 'normal' }}>
                            Daisy's Garden
                        </Typography>
                    </Stack>
                </Grid>
                <Grid item xl={6} lg={6} md={6} sm={12} xs={12}>
                    <Stack spacing={3}>
                        <Typography><SmartphoneIcon fontSize="medium" sx={{ color:['#C81987'] }}/>
                            81 12 25 78 42
                        </Typography>
                        <Typography><MailOutlineIcon fontSize="medium" sx={{ color:['#C81987'] }}/>
                            flores@daisysgarden.com.mx
                        </Typography>
                        <Typography><LocationOnIcon fontSize="medium" sx={{ color:['#C81987'] }}/>
                            Av. Venustiano Carranza 222, Centro de Monterrey, CP. 64040, Monterrey, Nuevo León.
                        </Typography>
                        <Typography variant="h5"sx={{ fontWeight: 'bold' }}>
                            Horario:
                        </Typography>
                        <Typography><AccessTimeIcon fontSize="medium" sx={{ color:['#C81987'] }}/>
                            Lunes a Domingo 8:00 a.m. a 20:00 p.m.
                        </Typography>
                    </Stack>
                </Grid>
                <Grid item spacing={10} xl={6} lg={6} md={6} sm={12} xs={12} >
                    <Stack spacing={2}>
                        <Stack direction="row" spacing={3}>
                            <TextField id="outlined-basic" label="Nombre" variant="outlined" />
                            <TextField id="outlined-basic" label="Apellido" variant="outlined" />
                        </Stack>
                    </Stack>
                    <Stack direction="row" spacing={3}>
                        <TextField id="outlined-basic" label="Correo Electronico" variant="outlined"/>
                        <TextField id="outlined-basic" label="Teléfono" variant="outlined" />
                    </Stack>
                    <Stack spacing={3}>
                        <TextField id="outlined-basic" label="Asunto" variant="outlined"/>
                        <TextField id="outlined-basic" label="Mensaje" variant="outlined" rows={4} multiline/>
                    </Stack>
                    <Stack spacing={3} sx={{ justifyContent: 'flex-end', alignItems: 'flex-end' }}>
                        <Button variant="outlined" sx={{ width: 'fit-content',color: '#B42981', borderColor: '#B42981', borderWidth: '3px' }}>Enviar</Button>
                    </Stack>
                </Grid>
                <Grid item xs={12}>
                    
                </Grid>
            </Grid>
        </Container>
    )
}


export default Contacto