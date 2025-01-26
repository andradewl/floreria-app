/* eslint-disable react-hooks/exhaustive-deps */
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
  Divider,
} from "@mui/material";
import { Visibility, VisibilityOff } from "@mui/icons-material";
import { Link } from "react-router-dom";
import { login, loginWithLogin } from "../config/apiFirebase";
import GoogleIcon from "../assets/icon/iconGoogleV2.svg";
import logoFR from "../assets/logo.png"

import { useSnackbar } from "notistack";



export default function Login() {
  const [showPassword, setShowPassword] = useState(false);
  const [emailUser, ] = useState<string>("");
  const [passwordUser, setPasswordUser] = useState<string>("");

  const {enqueueSnackbar} = useSnackbar()

  const handleClick = (Mensaje:string, tipoMensje: 'error' | 'warning' | 'info' | 'success')=>{
    enqueueSnackbar(Mensaje,{
      variant:tipoMensje
    })
  }

  const handleClickShowPassword = () => setShowPassword((show) => !show);

  const handleMouseDownPassword = (
    event: React.MouseEvent<HTMLButtonElement>
  ) => {
    event.preventDefault();
  };

  const newUserEmail = (e: React.ChangeEvent<HTMLInputElement>) => {
    const regex = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
    const email = e.target.value;

    if (regex.test(email)) {
      handleClick("Correo Valido", 'success')
    }else{
      handleClick("Correo invalido...:", 'error')
    }
  };

  const newUserPassword = (e: React.ChangeEvent<HTMLInputElement>) => {
    setPasswordUser(e.target.value);
  };

  const loginGooogle = () =>{
    loginWithLogin()
  }

  const addNewUser = () => {

    handleClick("Valido datos espere", 'info')
    setTimeout(() => {
      login(emailUser, passwordUser)
      .then((result) => {
        result
        handleClick("Login exitoso redireccionando...", 'success')
        setTimeout(() => {
          window.location.href = '/';
        }, 5000);
        // console.log(result);
      })
      .catch((error) => {
        console.log(error)
        handleClick("Ha ocurrio un error con su acceso, intente de nuevo", 'error')

      });
    }, 3000);
  };

  return (
    <>
      <Container
        maxWidth="sm"
        sx={{ backgroundColor: "#f8f9fa", py: 3, marginTop: "4%" }}
      >
        <Grid container spacing={2} pt={2} pb={8}>
          <Grid item xs={12} sx={{ textAlign: "center" }}>
            <img src={logoFR} alt="Logo" height="100" />
          </Grid>
          <Grid item xs={12}>
            <Typography
              variant="h4"
              textAlign="center"
              fontWeight={500}
              sx={{ fontFamily: "Times New Roman", mb: 3 }}
              gutterBottom
            >
              Bienvenido.
            </Typography>
          </Grid>
          <Grid item xs={12}>
            <Box sx={{ width: "100%" }}>
              <Button
                type="button"
                fullWidth
                variant="outlined"
                aria-label="iniciar sesión con google"
                startIcon={
                  <img height="30rem" alt="googleIcon" src={GoogleIcon} />
                }
                sx={{
                  backgroundColor: "#efeaed",
                  textTransform: "none",
                }}
                onClick={loginGooogle}
              >
                Iniciar sesión con Google
              </Button>
            </Box>
          </Grid>
          <Box sx={{ width: "100%", mt: 2, mb:0, ml:2, mr:0 }}>
            <Divider>O</Divider>
          </Box>
          <Grid item xs={12}>
            <TextField
              label="Correo electrónico"
              variant="outlined"
              fullWidth
              onChange={newUserEmail}
            />
          </Grid>
          <Grid item xs={12}>
            <TextField
              label="Contraseña"
              variant="outlined"
              type={showPassword ? "text" : "password"}
              fullWidth
              onChange={newUserPassword}
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
            <Box sx={{ width: "100%", mb: 0.1 }}>
              <Button
                variant="contained"
                color="primary"
                onClick={addNewUser}
                fullWidth
              >
                Iniciar sesión
              </Button>
            </Box>
          </Grid>

          <Grid item xs={12}>
            <Stack direction="column" spacing={2} alignItems="center">
              <Link to="/SignIn">Crear cuenta</Link>
            </Stack>
          </Grid>
        </Grid>
        
      </Container>
    </>
  );
}
