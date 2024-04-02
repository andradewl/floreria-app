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
import { login } from "../config/apiFirebase";
import { useNavigate } from 'react-router-dom';



export default function Login() {

  const navigate = useNavigate()

  const [showPassword, setShowPassword] = useState(false);
  const [emailUser, setEmailUser] = useState<string>("");
  const [passwordUser, setPasswordUser] = useState<string>("");

  React.useEffect(()=>{
    const storedUserName = sessionStorage.getItem('credentials');

    if(storedUserName){
      navigate('/');
    }
},[])
  const handleClickShowPassword = () => setShowPassword((show) => !show);

  const handleMouseDownPassword = (
    event: React.MouseEvent<HTMLButtonElement>
  ) => {
    event.preventDefault();
  };

  const newUserEmail = (e: React.ChangeEvent<HTMLInputElement>) => {
    setEmailUser(e.target.value);
  };

  const newUserPassword = (e: React.ChangeEvent<HTMLInputElement>) => {
    setPasswordUser(e.target.value);
  };

  const addNewUser = () => {
    login(emailUser, passwordUser)
    .then((result) => {
        alert("Inicio de sesion exitoso" );
        console.log(result);
        window.location.reload();

    })
    .catch((error) => {
        console.error("Failed to LOGIN user:", error);
        alert("Ha ocurrido un error, intentelo de nuevo");
    });
};

  return (
    <Container maxWidth="sm">
      <Grid container spacing={2} pt={15} pb={7}>
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
          <Stack
            direction="column"
            spacing={2}
            width="100%"
            alignItems="center"
          >
            <Box>
              <Button variant="contained" color="primary" onClick={addNewUser}>
                Iniciar sesión
              </Button>
            </Box>
            <Link to="/SignIn">
              Crear cuenta
            </Link>
          </Stack>
        </Grid>
      </Grid>
    </Container>
  );
}
