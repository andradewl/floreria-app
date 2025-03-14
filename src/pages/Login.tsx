/* eslint-disable react-hooks/exhaustive-deps */
import React, { useState } from "react";
import { Button, Grid, Stack, TextField, Typography, Container, Box,IconButton, InputAdornment, Divider } from "@mui/material";
import { Visibility, VisibilityOff } from "@mui/icons-material";
import { Link } from "react-router-dom";
import { login, loginWithGoogle } from "../config/apiFirebase";
import GoogleIcon from "../assets/icon/iconGoogleV2.svg";
import logoFR from "../assets/logo.png"
import { handleClickNotificacion } from "../components/Alert";
import { BadRequest, CalledBD } from "../config/errors";


export default function Login() {
  const [showPassword, setShowPassword] = useState(false);
  const [emailUser, setEmailUser] = useState(String);
  const [passwordUser, setPasswordUser] = useState(String);

  const validateEmail = (email:string) => {
    const regex = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
    return !regex.test(email)
  };

  const handleClickShowPassword = () => setShowPassword((show) => !show);

  const handleMouseDownPassword = (
    event: React.MouseEvent<HTMLButtonElement>
  ) => {
    event.preventDefault();
  };

  /*const newUserEmail = (e: React.ChangeEvent<HTMLInputElement>) => {
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
  };*/

  const loginGooogle = () =>{
    try{
      loginWithGoogle()
    }catch(e){
      if (e instanceof CalledBD) {
        handleClickNotificacion(e.message, 'error');
      }
      if (e instanceof BadRequest) {
        handleClickNotificacion(e.message, 'error');
      } 
    }
  }
1
  const addNewUser = async (e: { preventDefault: () => void; }) => {
    e.preventDefault()
    
    if(emailUser && passwordUser){

      if(validateEmail(emailUser)){
        return handleClickNotificacion("Correo invalido vuelva a intentarlo...:", 'error')
      }
      
      try {
        const isLogin = await login(emailUser, passwordUser);
      
        if (isLogin) {
          handleClickNotificacion('Login exitoso, redireccionando...', 'success');
          setTimeout(() => {
            window.location.href = '/';
          }, 3000);
        }
        
      } catch (error) {
        if (error instanceof CalledBD) {
          handleClickNotificacion(error.message, 'error');
        }           
        if (error instanceof BadRequest) {
          handleClickNotificacion(error.message, 'error');
        } 
      }

    }else{
      handleClickNotificacion("Llene Todos los campos...:", 'error')
    }
    
  };

  return (
    <>
      <Container
        maxWidth="sm"
        sx={{ backgroundColor: "#f8f9fa", py: 3, paddingTop:{xs:'40%', md:'20%', lg:'15%'}}}
      >
        <Grid container spacing={2} >
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
              value={emailUser}
              onChange={(e)=>setEmailUser(e.target.value)}
            />
          </Grid>
          <Grid item xs={12}>
            <TextField
              label="Contraseña"
              variant="outlined"
              type={showPassword ? "text" : "password"}
              fullWidth
              value={passwordUser}
              onChange={(e)=>setPasswordUser(e.target.value)}
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
