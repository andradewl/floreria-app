import React, { useState } from "react";
import {Button, Grid, Stack, Typography, Container, Box, TextField, IconButton, InputAdornment } from "@mui/material";
import { Visibility, VisibilityOff } from "@mui/icons-material";
import { useNavigate } from "react-router-dom";
import ArrowBackIcon from "@mui/icons-material/ArrowBack";

import { handleClickNotificacion } from "../components/Alert";
import { addUser } from "../config/apiFirebase";
import { BadRequest, CalledBD } from "../config/errors";

function SignIn() {
  const navigate = useNavigate();
  const [nombreUser, setNombreUser] = useState(String);
  const [apellidoUser, setApellidoUser] = useState(String);
  const [emailUser, setEmailUser] = useState(String);
  const [phoneUser, setPhoneUser] = useState(String);
  const [passwordUser, setPasswordUser] = useState(String);
  const [comparePassword, setComparePassword] = useState(String);
  const [showPassword, setShowPassword] = useState(false);

  const delay = (ms: number) => new Promise(resolve => setTimeout(resolve, ms));



  const validateName_lastName= (name:string) => {
    const regex = /^[a-zA-ZáéíóúÁÉÍÓÚñÑ\s ]+$/; 
    return !regex.test(name)
  };

  const validateEmail = (email:string) => {
    const regex = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
    return !regex.test(email)
  };

  const validatePhone = (phone:string) => {
    const regex = /^\+52\d{10}$/; 
    return !regex.test(phone)
  };

  const validatePassword = (pass: string): string[] => {   
    const errors: string[] = [];
    if (!/(?=.*[A-Za-z])/.test(pass)) errors.push("La Contraseña debe contener al menos una letra.");
    if (!/(?=.*\d)/.test(pass)) errors.push("La Contraseña debe contener al menos un número.");
    if (!/(?=.*[$@$!%*?&-_])/.test(pass)) errors.push("La Contraseña debe contener al menos un carácter especial.");
    if (pass.length < 8) errors.push("La Contraseña debe tener al menos 8 caracteres.");
    return errors;
  };

  const handleClickShowPassword = () => setShowPassword((show) => !show);

  const handleMouseDownPassword = (event: React.MouseEvent<HTMLButtonElement>) => {
    event.preventDefault();
  };

  const validateComparePasword = (pass:string, comparePass:string) => {
    return pass === comparePass;
  }

  const addNewUser = async (e: { preventDefault: () => void; }) => {
    e.preventDefault()

    if(nombreUser && apellidoUser && emailUser && passwordUser){
      
      if(validateName_lastName(nombreUser)) {
        return handleClickNotificacion("No se permiten caracteres especiales/Numeros en Nombre...:", 'error');
      } 

      if(validateName_lastName(apellidoUser)){
        return handleClickNotificacion("No se permiten caracteres especiales/Numeros en Apellido...:", 'error')
      }

      if(validateEmail(emailUser)){
        return handleClickNotificacion("Correo Invalido reviselo de nuevo...:", 'error')
      }

      if(validatePhone(phoneUser)){
        return handleClickNotificacion("Solo Telefonos de Mexico, ingrese prefigo +52", 'error')
      }
  
      const errors = validatePassword(passwordUser);
      if (errors.length > 0) {
        return handleClickNotificacion(`Error: ${errors.join(" ")}`, "error");
      } 

      if(!validateComparePasword(passwordUser, comparePassword)){
        return handleClickNotificacion("Las contraseñas no coinciden...:", 'error')
      }

      handleClickNotificacion("Validando datos, por favor espere...", 'info');
      console.log(nombreUser, apellidoUser, emailUser, phoneUser, passwordUser);
      
      await delay(1500);
      
      try {
          const result = await addUser(nombreUser, apellidoUser, emailUser, phoneUser, passwordUser);
          
          if (result) {
              handleClickNotificacion('Usuario registrado con éxito, redireccionando...', 'success');
              setTimeout(() => {
                  window.location.href = '/';
              }, 2000);
          }
      } catch (e) {
          if (e instanceof CalledBD || e instanceof BadRequest) {
              handleClickNotificacion(e.message, 'error');
          } else {
              handleClickNotificacion('Error desconocido, inténtelo de nuevo', 'error');
          }
      } finally {
          console.log("Finalizando registro...");
      }
      
    }else{
      handleClickNotificacion("Llene Todos los campos...:", 'error')
    }

    
  };

  const handleRegresar = () => {
    navigate("/login");
  };

  return (
    <>
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
              onChange={(e)=>setNombreUser(e.target.value)}
            />
          </Grid>
          <Grid item xs={12}>
            <TextField
              label="Apellidos"
              variant="outlined"
              fullWidth
              required
              value={apellidoUser}
              onChange={(e)=>setApellidoUser(e.target.value)}
            />
          </Grid>
          <Grid item xs={12}>
            <TextField
              label="Correo Electrónico"
              variant="outlined"
              fullWidth
              required
              value={emailUser}
              onChange={(e)=>setEmailUser(e.target.value)}
              
            />
          </Grid>
          <Grid item xs={12}>
            <TextField
              label="Telefono"
              variant="outlined"
              placeholder="+52"
              fullWidth
              required
              value={phoneUser}
              onChange={(e)=>setPhoneUser(e.target.value)}              
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
              onChange={(e)=>setPasswordUser(e.target.value)}
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
              value={comparePassword}
              onChange={(e)=>setComparePassword(e.target.value)}
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
      
    </>
  );
}

export default SignIn;