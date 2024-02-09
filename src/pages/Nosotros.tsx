import { Container, Grid, Stack, Typography } from "@mui/material";
import CheckIcon from '@mui/icons-material/Check';

function Nosotros() {
  return (
    <Container>
      <Grid container spacing={2}>
        <Grid item xs={12}>
          <Stack spacing={3}>
            <Typography variant="h1" textAlign="center"sx={{ fontStyle: 'italic' }}>
              Conócenos
            </Typography>
            <Typography variant="h5">
              En Daisy's Garden, pensamos en todo para convertir cualquier momento en algo mágico, por ello te ayudamos a expresar esas emociones y sentimientos a través de una gran variedad de hermosos arreglos florales, arreglos frutales y más obsequios de excelente calidad para toda ocasión a un precio justo; queremos que nuestras flores te ayuden a crear más y mejores experiencias memorables a lo largo de tu vida, así como estar para ti en esos momentos difíciles de despedir a un ser amado y honrarlo adecuadamente.
            </Typography>
            <Typography variant="h5" fontWeight="bold">
              Misión
            </Typography>
            <Typography variant="h5">
              Brindar las mejores flores y 100% frescas para que tu arreglo luzca en perfectas condiciones de acuerdo a la ocasión.
            </Typography>
            <Typography variant="h5" fontWeight="bold">
              Valores
            </Typography>
          </Stack>
        </Grid>
        <Grid item xl={6} lg={6} md={6} sm={12} xs={12}>
          <Stack spacing={2}>
            <Typography variant="h5">
                <CheckIcon fontSize="medium" sx={{ color:['#C81987'] }}/> Excelencia. Tendrás flores frescas y de máxima calidad en cada uno de los arreglos que ofrecemos en Daisy’s Garden.
            </Typography>
            <Typography variant="h5">
                <CheckIcon fontSize="medium" sx={{ color:['#C81987'] }}/> Confiabilidad. Ten la certeza de que tu arreglo floral a domicilio, llegará en perfectas condiciones.
            </Typography>
          </Stack>
        </Grid>
        <Grid item xl={6} lg={6} md={6} sm={12} xs={12}>
          <Stack spacing={2}>
            <Typography variant="h5">
                <CheckIcon fontSize="medium" sx={{ color:['#C81987'] }} /> Puntualidad. Ten por seguro que ese arreglo tan especial que creamos para ti, llegará en el horario acordado.
            </Typography>
            <Typography variant="h5">
                <CheckIcon fontSize="medium" sx={{ color:['#C81987'] }} /> Compromiso. Mantener la calidad de nuestras flores en cada uno de nuestros arreglos.
            </Typography>
          </Stack>
        </Grid>
      </Grid>
    </Container>
  );
}

export default Nosotros;
