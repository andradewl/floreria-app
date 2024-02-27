import {
  Button,
  FormControl,
  FormControlLabel,
  Grid,
  Radio,
  RadioGroup,
  TextField,
  Typography,
} from "@mui/material";
import MenuItem from "@mui/material/MenuItem";

const currencies = [
  {
    value: "Centro",
    label: "Centro",
  },
  {
    value: "Centro",
    label: "Centro",
  },
  {
    value: "Centro",
    label: "Centro",
  },
  {
    value: "Centro",
    label: "Centro",
  },
];

export default function FormDetaFac() {
  return (
    <Grid container spacing={4} justifyContent="center">
      <Grid item container spacing={2} xl={6} lg={6} md={6} sm={12} xs={12}>
        <Grid item xs={12}>
          <Typography variant="h3">Direccion de Facturación.</Typography>
        </Grid>
        <Grid item xs={12}>
          <Typography variant="h5">Datos Personales.</Typography>
        </Grid>
        <Grid item xs={6}>
          <TextField
            id="outlined-basic"
            margin="dense"
            required
            label="Nombre"
            variant="outlined"
            fullWidth
          />
        </Grid>
        <Grid item xs={6}>
          <TextField
            id="outlined-basic"
            margin="dense"
            required
            label="Apellido"
            variant="outlined"
            fullWidth
          />
        </Grid>
        <Grid item xs={12}>
          <TextField
            id="outlined-basic"
            label="Empresa (Opcional)"
            variant="outlined"
            fullWidth
          />
        </Grid>
        <Grid item xs={12}>
          <Typography variant="h5">Dirección.</Typography>
        </Grid>
        <Grid item xs={2}>
          <TextField
            id="outlined-basic"
            label="País"
            variant="outlined"
            fullWidth
          />
        </Grid>
        <Grid item xs={2}>
          <TextField
            id="outlined-basic"
            label="Codigo Postal"
            variant="outlined"
            fullWidth
          />
        </Grid>
        <Grid item xs={4}>
          <TextField
            id="outlined-disabled"
            label="Estado"
            variant="outlined"
            fullWidth
          />
        </Grid>
        <Grid item xs={4}>
          <TextField
            id="outlined-basic"
            disabled
            label="Municipio o Alcaldía"
            variant="outlined"
            fullWidth
          />
        </Grid>
        <Grid item xs={12}>
          <TextField
            id="outlined-select-currency"
            select
            label="Colonia"
            defaultValue="Centro"
            helperText="Selecciona la colonia, por favor"
            fullWidth
          >
            {currencies.map((option) => (
              <MenuItem key={option.value} value={option.value}>
                {option.label}
              </MenuItem>
            ))}
          </TextField>
        </Grid>
        <Grid item xs={8}>
          <TextField
            id="outlined-basic"
            required
            label="Calle"
            variant="outlined"
            fullWidth
          />
        </Grid>
        <Grid item xs={2}>
          <TextField
            id="outlined-basic"
            label="Número Exterior"
            variant="outlined"
            fullWidth
          />
        </Grid>
        <Grid item xs={2}>
          <TextField
            id="outlined-basic"
            label="Número Interior"
            variant="outlined"
            fullWidth
          />
        </Grid>
        <Grid item xs={6}>
          <Typography variant="body2" color="textSecondary" gutterBottom>
            ¿Entre qué calles está? (Opcional)
          </Typography>
          <TextField
            id="outlined-basic"
            label="Calle 1"
            variant="outlined"
            fullWidth
          />
        </Grid>
        <Grid item xs={6}>
          <Typography variant="body2" color="textSecondary" gutterBottom>
            .
          </Typography>
          <TextField
            id="outlined-basic"
            label="Calle 2"
            variant="outlined"
            fullWidth
          />
        </Grid>
        <Grid item xs={4}>
          <TextField
            id="outlined-basic"
            label="Teléfono de remitente"
            variant="outlined"
            required
            fullWidth
          />
        </Grid>
        <Grid item xs={8}>
          <TextField
            id="outlined-basic"
            label="Correo Electronico"
            required
            variant="outlined"
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
            Guardar Dirección
          </Button>
        </Grid>
      </Grid>
    </Grid>
  );
}
