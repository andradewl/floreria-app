import { Button, Divider, Grid, Typography } from '@mui/material';
import { useNavigate } from 'react-router-dom'; // Utiliza useNavigate en lugar de useHistory

export default function Ubicaciones() {
  const navigate = useNavigate(); // Cambia a useNavigate

  const handleNuevoClick = () => {
    // Redirige a la página 'FormUbicaciones' al hacer clic en "Nueva"
    navigate('/FormUbicaciones');
  };

  return (
    <Grid container>
      <Grid item xs={12}>
        <Typography variant='h5' component='h5' sx={{ fontWeight: 'bold' }}>
          Calle San Martín, 471, Colonia Centro, Huejutla Hidalgo
        </Typography>
        <Button variant="outlined">Editar</Button>
        <Divider sx={{ marginTop: '1.5%', marginBottom: '1.5%' }} />
        <Button variant="outlined" onClick={handleNuevoClick}>
          Nueva
        </Button>
      </Grid>
    </Grid>
  );
}
