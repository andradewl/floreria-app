import React, { useState } from "react";
import {
  Button,
  Grid,
  Stack,
  Typography,
  Container,
  Box,
  TextField,
  IconButton,
  InputAdornment,
} from "@mui/material";
import { Visibility, VisibilityOff } from "@mui/icons-material";

export default function SignIn() {
  const [showPassword, setShowPassword] = useState(false);

  const handleClickShowPassword = () => setShowPassword((show) => !show);

  const handleMouseDownPassword = (
    event: React.MouseEvent<HTMLButtonElement>
  ) => {
    event.preventDefault();
  };

  return (
    <Container maxWidth="sm">
      <Grid container spacing={2}>
        <Grid item xs={12}>
          <Typography
            variant="h4"
            textAlign="center"
            fontWeight={500}
            sx={{ fontFamily: "Times New Roman", mb: 3 }}
            gutterBottom
          >
            Crear Cuenta
          </Typography>
        </Grid>
        <Grid item xs={12}>
          <TextField label="Nombre" variant="outlined" fullWidth />
        </Grid>
        <Grid item xs={12}>
          <TextField label="Apellidos" variant="outlined" fullWidth />
        </Grid>
        <Grid item xs={12}>
          <TextField label="Correo Electrónico" variant="outlined" fullWidth />
        </Grid>
        <Grid item xs={12}>
          <TextField
            label="Contraseña"
            variant="outlined"
            type={showPassword ? "text" : "password"}
            fullWidth
            InputProps={{
              endAdornment: (
                <InputAdornment position="end">
                  <IconButton
                    aria-label="toggle password visibility"
                    onClick={handleClickShowPassword}
                    onMouseDown={handleMouseDownPassword}
                    edge="end"
                  >
                    {showPassword ? <VisibilityOff /> : <Visibility />}
                  </IconButton>
                </InputAdornment>
              ),
            }}
          />
        </Grid>
        <Grid item xs={12}>
          <TextField
            label="Confirmar Contraseña"
            variant="outlined"
            type={showPassword ? "text" : "password"}
            fullWidth
            InputProps={{
              endAdornment: (
                <InputAdornment position="end">
                  <IconButton
                    aria-label="toggle password visibility"
                    onClick={handleClickShowPassword}
                    onMouseDown={handleMouseDownPassword}
                    edge="end"
                    style={{ visibility: "hidden" }}
                  >
                    <VisibilityOff />
                  </IconButton>
                </InputAdornment>
              ),
            }}
          />
        </Grid>
        <Grid item xs={12}>
          <Stack
            direction="column"
            spacing={2}
            alignItems="center"
            width="100%"
          >
            <Box>
              <Button variant="contained" color="primary">
                Crear Cuenta
              </Button>
            </Box>
          </Stack>
        </Grid>
      </Grid>
    </Container>
  );
}
