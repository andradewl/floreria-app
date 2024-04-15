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
import { addUser } from "../config/apiFirebase";
import { useNavigate } from "react-router-dom";
import ArrowBackIcon from "@mui/icons-material/ArrowBack";

function SignIn() {
  const navigate = useNavigate();
  const [nombreUser, setNombreUser] = useState<string>("");
  const [apellidoUser, setApellidoUser] = useState<string>("");
  const [emailUser, setEmailUser] = useState<string>("");
  const [passwordUser, setPasswordUser] = useState<string>("");
  const [showPassword, setShowPassword] = useState(false);

  const newUserName = (e: React.ChangeEvent<HTMLInputElement>) => {
    setNombreUser(e.target.value);
  };

  const newUserApellido = (e: React.ChangeEvent<HTMLInputElement>) => {
    setApellidoUser(e.target.value);
  };

  const newUserEmail = (e: React.ChangeEvent<HTMLInputElement>) => {
    setEmailUser(e.target.value);
  };

  const newUserPassword = (e: React.ChangeEvent<HTMLInputElement>) => {
    setPasswordUser(e.target.value);
  };

  const handleClickShowPassword = () => setShowPassword((show) => !show);

  const handleMouseDownPassword = (
    event: React.MouseEvent<HTMLButtonElement>
  ) => {
    event.preventDefault();
  };

  const addNewUser = () => {
    addUser(nombreUser, apellidoUser, emailUser, passwordUser)
      .then((result) => {
        alert("Usuario Registrado con éxito, ya puede iniciar sesión");
        console.log(result);
        navigate("/Login"); // Assuming navigate is defined and used for routing
      })
      .catch((error) => {
        console.error("Failed to add user:", error);
        alert("Ha ocurrido un error, intente de nuevo");
      });
  };
  const handleRegresar = () => {
    navigate("/login");
  };
  return (
    <Container
      maxWidth="sm"
      sx={{ backgroundColor: "#f8f9fa", py: 3, marginTop: "4%" }}
    >
      <Grid container spacing={2} pt={4} pb={5}>
      <Button startIcon={<ArrowBackIcon />} onClick={handleRegresar}>
            Iniciar Sesión.
          </Button>
        <Grid item xs={12}>
          <Typography
            variant="h4"
            textAlign="center"
            fontWeight={500}
            sx={{ fontFamily: "Times New Roman", mb: 3 }}
            gutterBottom
          >
            Crear Cuenta.
          </Typography>
        </Grid>
        <Grid item xs={12}>
          <TextField
            label="Nombre"
            variant="outlined"
            fullWidth
            required
            value={nombreUser}
            onChange={newUserName}
          />
        </Grid>
        <Grid item xs={12}>
          <TextField
            label="Apellidos"
            variant="outlined"
            fullWidth
            required
            value={apellidoUser}
            onChange={newUserApellido}
          />
        </Grid>
        <Grid item xs={12}>
          <TextField
            label="Correo Electrónico"
            variant="outlined"
            fullWidth
            required
            value={emailUser}
            onChange={newUserEmail}
          />
        </Grid>
        <Grid item xs={12}>
          <TextField
            label="Contraseña"
            variant="outlined"
            type={showPassword ? "text" : "password"}
            fullWidth
            required
            value={passwordUser}
            onChange={newUserPassword}
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
          <Stack direction="column" spacing={2} alignItems="center">
            <Box sx={{ width: "100%" }}>
              <Button
                variant="contained"
                color="primary"
                onClick={addNewUser}
                fullWidth
              >
                Crear Cuenta
              </Button>
            </Box>
          </Stack>
        </Grid>
      </Grid>
    </Container>
  );
}

export default SignIn;
