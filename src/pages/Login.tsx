import React, { useState } from "react";
import {
  Button,
  Grid,
  Stack,
  TextField,
  Typography,
  Container,
  Box,
  IconButton,
  InputAdornment,
} from "@mui/material";
import { Visibility, VisibilityOff } from "@mui/icons-material";
import { Link } from "react-router-dom";

export default function Login() {
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
            Inicio de sesión
          </Typography>
        </Grid>
        <Grid item xs={12}>
          <TextField
            label="Correo electrónico"
            variant="outlined"
            fullWidth
          />
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
          <Typography variant="body2" sx={{ mb: 2 }} gutterBottom>
            ¿Olvidaste tu contraseña?
          </Typography>
        </Grid>
        <Grid item xs={12}>
          <Stack
            direction="column"
            spacing={2}
            width="100%"
            alignItems="center"
          >
            <Box>
              <Button variant="contained" color="primary">
                Iniciar sesión
              </Button>
            </Box>
            <Link to="/SigIn">
              Crear cuenta
            </Link>
          </Stack>
        </Grid>
      </Grid>
    </Container>
  );
}
