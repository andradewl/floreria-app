import { Button, Container, Grid, Stack, TextField, Typography } from "@mui/material";
import SmartphoneIcon from "@mui/icons-material/Smartphone";
import MailOutlineIcon from "@mui/icons-material/MailOutline";
import LocationOnIcon from "@mui/icons-material/LocationOn";
import AccessTimeIcon from "@mui/icons-material/AccessTime";
import { Icon } from "@mui/material";
import { useState } from "react";
import { agregarRegistroContacto } from "../config/backEndUsuarios/backContacto";

// Definir un tipo para el icono
type IconType = React.ReactElement<typeof Icon>;

function Contacto() {
  const [formData, setFormData] = useState({
    nombre: "",
    apellido: "",
    correoElectronico: "",
    telefono: "",
    asunto: "",
    mensaje: "",
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({ ...formData, [e.target.id]: e.target.value });
  };

  const handleSubmit = async () => {
    try {
      await agregarRegistroContacto(formData);
      alert("Mensaje enviado correctamente");
      setFormData({
        nombre: "",
        apellido: "",
        correoElectronico: "",
        telefono: "",
        asunto: "",
        mensaje: "",
      });
    } catch (error) {
      console.error("Error al enviar el mensaje:", error);
      alert("Ocurrió un error al enviar el mensaje. Por favor, inténtalo de nuevo más tarde.");
    }
  };

  return (
    <Container sx={{ backgroundColor: "#f8f9fa", py: 10 }}>
      <Grid container spacing={5}>
        <Grid item xs={12}>
          <Stack spacing={3} alignItems="center">
            <Typography variant="h3" textAlign="center" sx={{ fontStyle: "italic" }}>
              Contacto.
            </Typography>
            <Typography variant="body1">
              En Florería Ricky nos complace tener una comunicación abierta con nuestros clientes. Si deseas hacernos alguna pregunta o sugerirnos alguna idea hazlo a través de nuestro formulario de contacto, y nos pondremos en contacto contigo.
            </Typography>
            <Typography variant="h4" textAlign="center" sx={{ fontVariantCaps: "normal" }}>
              Florería Ricky.
            </Typography>
          </Stack>
        </Grid>
        <Grid item container xl={6} lg={6} md={6} sm={12} xs={12}>
          <Stack direction="column" spacing={3}>
            <ContactInfo icon={<SmartphoneIcon fontSize="medium" sx={{ color: "#C81987" }} />} text="(81) 34-11-32-74" />
            <ContactInfo icon={<MailOutlineIcon fontSize="medium" sx={{ color: "#C81987" }} />} text="Flores@floresricky.com" />
            <ContactInfo icon={<LocationOnIcon fontSize="medium" sx={{ color: "#C81987" }} />} text="C. Padre Mier 1355, Maria Luisa, Centro, 64000 Monterrey, N.L." />
            <Typography variant="h5" sx={{ fontWeight: "bold" }} gutterBottom>
              Horario:
            </Typography>
            <ContactInfo icon={<AccessTimeIcon fontSize="medium" sx={{ color: "#C81987" }} />} text="Lunes a Domingo 8:00 a.m. a 20:00 p.m." />
          </Stack>
        </Grid>

        <Grid item container spacing={1} xl={6} lg={6} md={6} sm={12} xs={12}>
          <Grid item xs={6}>
            <TextField id="nombre" label="Nombre" variant="outlined" fullWidth value={formData.nombre} onChange={handleChange} />
          </Grid>
          <Grid item xs={6}>
            <TextField id="apellido" label="Apellido" variant="outlined" fullWidth value={formData.apellido} onChange={handleChange} />
          </Grid>
          <Grid item xs={6}>
            <TextField id="correoElectronico" label="Correo Electrónico" variant="outlined" fullWidth value={formData.correoElectronico} onChange={handleChange} />
          </Grid>
          <Grid item xs={6}>
            <TextField id="telefono" label="Teléfono" variant="outlined" fullWidth value={formData.telefono} onChange={handleChange} />
          </Grid>
          <Grid item xs={12}>
            <TextField id="asunto" label="Asunto" variant="outlined" fullWidth value={formData.asunto} onChange={handleChange} />
          </Grid>
          <Grid item xs={12}>
            <TextField id="mensaje" label="Mensaje" variant="outlined" rows={4} multiline fullWidth value={formData.mensaje} onChange={handleChange} />
          </Grid>
          <Grid item xs={12}>
            <Button fullWidth variant="outlined" sx={{ color: "#B42981", borderColor: "#B42981", borderWidth: "3px" }} onClick={handleSubmit}>
              Enviar
            </Button>
          </Grid>
        </Grid>
      </Grid>
    </Container>
  );
}

const ContactInfo = ({ icon, text }: { icon: IconType, text: string }) => (
  <Stack direction="row" spacing={1} alignItems="center">
    {icon}
    <Typography>{text}</Typography>
  </Stack>
);

export default Contacto;
