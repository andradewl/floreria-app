import {
  Button,
  Container,
  Grid,
  Stack,
  TextField,
  Typography,
} from "@mui/material";
import SmartphoneIcon from "@mui/icons-material/Smartphone";
import MailOutlineIcon from "@mui/icons-material/MailOutline";
import LocationOnIcon from "@mui/icons-material/LocationOn";
import AccessTimeIcon from "@mui/icons-material/AccessTime";

function Contacto() {
  return (
    <Container>
      <Grid container spacing={5}>
        <Grid item xs={12}>
          <Stack spacing={3}>
            <Typography
              variant="h2"
              textAlign="center"
              sx={{ fontStyle: "italic" }}
            >
              Contacto y Oficinas
            </Typography>
            <Typography variant="h5">
              En Daisy’s Garden nos complace tener una comunicación abierta con
              nuestros clientes. Si deseas hacernos alguna pregunta o sugerirnos
              alguna idea hazlo a través de nuestro formulario de contacto, y
              nos pondremos en contacto contigo.
            </Typography>
            <Typography
              variant="h4"
              textAlign="center"
              sx={{ fontVariantCaps: "normal" }}
            >
              Daisy's Garden
            </Typography>
          </Stack>
        </Grid>
        <Grid item container xl={6} lg={6} md={6} sm={12} xs={12}>
          <Stack direction="column" spacing={3}>
            <Stack direction="row" spacing={1} alignItems="center">
              <SmartphoneIcon fontSize="medium" sx={{ color: ["#C81987"] }} />
              <Typography>81 12 25 78 42</Typography>
            </Stack>
            <Stack direction="row" spacing={1} alignItems="center">
              <MailOutlineIcon fontSize="medium" sx={{ color: ["#C81987"] }} />
              <Typography>flores@daisysgarden.com.mx</Typography>
            </Stack>
            <Stack direction="row" spacing={1} alignItems="center">
              <LocationOnIcon fontSize="medium" sx={{ color: ["#C81987"] }} />
              <Typography>
                Av. Venustiano Carranza 222, Centro de Monterrey, CP. 64040,
                Monterrey, Nuevo León.
              </Typography>
            </Stack>
          </Stack>
          <Grid item xs={12}>
            <Typography variant="h5" sx={{ fontWeight: "bold" }} gutterBottom>
              Horario:
            </Typography>
            <Stack direction="row" spacing={1} alignItems="center">
              <AccessTimeIcon fontSize="medium" sx={{ color: ["#C81987"] }} />
              <Typography>Lunes a Domingo 8:00 a.m. a 20:00 p.m.</Typography>
            </Stack>
          </Grid>
        </Grid>

        <Grid item container spacing={1} xl={6} lg={6} md={6} sm={12} xs={12}>
          <Grid item xs={6}>
            <TextField
              id="outlined-basic"
              label="Nombre"
              variant="outlined"
              fullWidth
            />
          </Grid>
          <Grid item xs={6}>
            <TextField
              id="outlined-basic"
              label="Apellido"
              variant="outlined"
              fullWidth
            />
          </Grid>
          <Grid item xs={6}>
            <TextField
              id="outlined-basic"
              label="Correo Electronico"
              variant="outlined"
              fullWidth
            />
          </Grid>
          <Grid item xs={6}>
            <TextField
              id="outlined-basic"
              label="Teléfono"
              variant="outlined"
              fullWidth
            />
          </Grid>
          <Grid item xs={12}>
            <TextField
              id="outlined-basic"
              label="Asunto"
              variant="outlined"
              fullWidth
            />
          </Grid>
          <Grid item xs={12}>
            <TextField
              id="outlined-basic"
              label="Mensaje"
              variant="outlined"
              rows={4}
              multiline
              fullWidth
            />
          </Grid>
          <Grid item xs={12}>
            <Button
              fullWidth
              variant="outlined"
              sx={{
                width: "fit-content",
                color: "#B42981",
                borderColor: "#B42981",
                borderWidth: "3px",
              }}
            >
              Enviar
            </Button>
          </Grid>
        </Grid>
      </Grid>
    </Container>
  );
}

export default Contacto;