import React, { useState } from "react";
import {Button, Grid, Stack, Typography, Container, Box, TextField, IconButton, InputAdornment,
} from "@mui/material";

import { Visibility, VisibilityOff } from "@mui/icons-material";
import { useNavigate } from "react-router-dom";
import ArrowBackIcon from "@mui/icons-material/ArrowBack";
import { useSnackbar } from "notistack";

function SignIn() {
  const navigate = useNavigate();
  const [nombreUser, setNombreUser] = useState("");
  const [apellidoUser, setApellidoUser] = useState("");
  const [emailUser, setEmailUser] = useState("");
  const [passwordUser, setPasswordUser] = useState("");
  const [comparePassword, setComparePassword] = useState("");

  const [isNombreUser, setIsNombreUser] = useState(false);
  const [isApellidoUser, setIsApellidoUser] = useState(false);
  const [isEmailUser, setIsEmailUser] = useState(false);
  const [isPasswordUser, setIsPasswordUser] = useState(false);
  const [isComparePassword, setIsComparePassword] = useState(false);

  const [showPassword, setShowPassword] = useState(false);
  const {enqueueSnackbar} = useSnackbar()
  

  const handleClick = (Mensaje:string, tipoMensje: 'error' | 'warning' | 'info' | 'success')=>{
    enqueueSnackbar(Mensaje,{
      variant:tipoMensje
    })
  }

  const validateName_lastName= (name:string) => {
    const regex = /^[a-zA-ZáéíóúÁÉÍÓÚñÑ\s ]+$/; // Permitir letras, acentos y espacios
    return !regex.test(name)
  };

  const validateEmail = (email:string) => {
    const regex = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
    return !regex.test(email)
  };

  const validatePassword = (pass: string): string[] => {
    const errors: string[] = [];
    if (!/(?=.*[A-Za-z])/.test(pass)) errors.push("Debe contener al menos una letra.");
    if (!/(?=.*\d)/.test(pass)) errors.push("Debe contener al menos un número.");
    if (!/(?=.*[$@$!%*?&])/.test(pass)) errors.push("Debe contener al menos un carácter especial.");
    if (pass.length < 8) errors.push("Debe tener al menos 8 caracteres.");
    return errors;
  };

  const handleClickShowPassword = () => setShowPassword((show) => !show);

  const handleMouseDownPassword = (
    event: React.MouseEvent<HTMLButtonElement>
  ) => {
    event.preventDefault();
  };

  const validateComparePasword = (pass:string, comparePass:string) => {
    return pass === comparePass;
  }


  const addNewUser = (e: { preventDefault: () => void; }) => {
    e.preventDefault()

    if(validateName_lastName(nombreUser)) {
      handleClick("No se permiten caracteres especiales/Numeros en Nombre...:", 'error');
    } else {
      setIsNombreUser(true);
    }

    if(validateName_lastName(apellidoUser)){
      handleClick("No se permiten caracteres especiales/Numeros en Apellido...:", 'error')
    }else{
      setIsApellidoUser(true);
    }

    if(validateEmail(emailUser)){
      handleClick("Correo Invalido reviselo de nuevo...:", 'error')
    }else{
      setIsEmailUser(true);
    }

    const errors = validatePassword(passwordUser);
    if (errors.length > 0) {
      handleClick(`Errores: ${errors.join(" ")}`, "error");
    } else {
      if(!validateComparePasword(passwordUser, comparePassword)){
        handleClick("Las contraseñas no coinciden...:", 'error')
      }else{
        setIsPasswordUser(true);
      }
    }

    if(isNombreUser && isApellidoUser && isEmailUser && isPasswordUser){
      handleClick("Valido datos espere", 'info')
      setTimeout(() => {
        handleClick("Usuario Registrado con éxito, redireccionando a login...", 'success')
        setTimeout(() => {
          navigate("/Login"); 
        }, 3000);
      }, 3000);
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