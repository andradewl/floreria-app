import { Button, Grid, TextField, Typography } from "@mui/material";

import { addDirFact } from "../../config/backEndUsuarios/backFacturacion";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import ArrowBackIcon from "@mui/icons-material/ArrowBack";


export default function FormDetaFac() {
  const navigate = useNavigate();
  const [nombre, setNombre] = useState<string>("");
  const [apellido, setApellido] = useState<string>("");
  const [empresaDirFact, setEmpresaDirFact] = useState<string>("");
  const [paisDirFact, setPaisDirFact] = useState<string>("");
  const [codigoPostal, setCodigoPostal] = useState<string>("");
  const [nEstado, setEstado] = useState<string>("");
  const [nMunicipio, setMunicipio] = useState<string>("");
  const [nColonia, setColonia] = useState<string>("");
  const [nCalle, setCalle] = useState<string>("");
  const [numExt, setNumExt] = useState<string>("");
  const [numInt, setNumInt] = useState<string>("");
  const [calleRef1, setCalleRef1] = useState<string>("");
  const [calleRef2, setCalleRef2] = useState<string>("");
  const [telefonoDirFact, setTelefonoDirFact] = useState<string>("");
  const [emailDirFact, setEmailDirFact] = useState<string>("");
  const [nIdUserRef, setIdUserRef] = useState<string>(
    "w2INimKno1fwEXvAJatj3nsWRqJ2"
  );

  const addNewDireccionFacturacion = () => {
    addDirFact(
      nombre,
      apellido,
      empresaDirFact,
      paisDirFact,
      codigoPostal,
      nEstado,
      nMunicipio,
      nColonia,
      nCalle,
      numExt,
      numInt,
      calleRef1,
      calleRef2,
      telefonoDirFact,
      emailDirFact,
      nIdUserRef
    );
    alert("Dirección de facturación guardada correctamente");
    navigate("/Usuario/:id");
  };
  const handleRegresar = () => {
    navigate("/Usuario/:id");
  };
  return (
    <Grid container spacing={4} justifyContent="center" sx={{py:12}}>
      <Grid item container spacing={2} xl={6} lg={6} md={6} sm={12} xs={12}>
        <Grid item xs={12}>
        <Button startIcon={<ArrowBackIcon />} onClick={handleRegresar}>
            Regresar
          </Button>
          <Typography variant="h3"sx={{ textAlign: "center" }}>Direccion de Facturación.</Typography>
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
            value={nombre}
            onChange={(e)=> setNombre(e.target.value)}
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
            value={apellido}
            onChange={(e)=> setApellido(e.target.value)}
          />
        </Grid>
        <Grid item xs={12}>
          <TextField
            id="outlined-basic"
            label="Empresa (Opcional)"
            variant="outlined"
            fullWidth
            value={empresaDirFact}
            onChange={(e)=> setEmpresaDirFact(e.target.value)}
          />
        </Grid>
        <Grid item xs={12}>
          <Typography variant="h5">Dirección.</Typography>
        </Grid>
        <Grid item xs={3}>
          <TextField
            id="outlined-basic"
            label="País"
            variant="outlined"
            fullWidth
            value={paisDirFact}
            onChange={(e)=> setPaisDirFact(e.target.value)}
          />
        </Grid>
        <Grid item xs={3}>
          <TextField
            id="outlined-basic"
            label="Codigo Postal"
            variant="outlined"
            fullWidth
            value={codigoPostal}
            onChange={(e)=> setCodigoPostal(e.target.value)}
          />
        </Grid>
        <Grid item xs={6}>
          <TextField
            id="outlined-disabled"
            label="Estado"
            variant="outlined"
            fullWidth
            value={nEstado}
            onChange={(e)=> setEstado(e.target.value)}
          />
        </Grid>
        <Grid item xs={6}>
          <TextField
            id="outlined-basic"
            label="Municipio o Alcaldía"
            variant="outlined"
            fullWidth
            value={nMunicipio}
            onChange={(e)=> setMunicipio(e.target.value)}
          />
        </Grid>
        <Grid item xs={6}>
          <TextField
            id="outlined-select-currency"
            label="Colonia"
            defaultValue="Centro"
            fullWidth
            value={nColonia}
            onChange={(e)=> setColonia(e.target.value)}
          ></TextField>
        </Grid>
        <Grid item xs={6}>
          <TextField
            id="outlined-basic"
            required
            label="Calle"
            variant="outlined"
            fullWidth
            value={nCalle}
            onChange={(e)=> setCalle(e.target.value)}
          />
        </Grid>
        <Grid item xs={3}>
          <TextField
            id="outlined-basic"
            label="Número Exterior"
            variant="outlined"
            fullWidth
            value={numExt}
            onChange={(e)=> setNumExt(e.target.value)}
          />
        </Grid>
        <Grid item xs={3}>
          <TextField
            id="outlined-basic"
            label="Número Interior"
            variant="outlined"
            fullWidth
            value={numInt}
            onChange={(e)=> setNumInt(e.target.value)}
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
            value={calleRef1}
            onChange={(e)=> setCalleRef1(e.target.value)}
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
            value={calleRef2}
            onChange={(e)=> setCalleRef2(e.target.value)}
          />
        </Grid>
        <Grid item xs={4}>
          <TextField
            id="outlined-basic"
            label="Teléfono"
            variant="outlined"
            required
            fullWidth
            value={telefonoDirFact}
            onChange={(e)=> setTelefonoDirFact(e.target.value)}
          />
        </Grid>
        <Grid item xs={8}>
          <TextField
            id="outlined-basic"
            label="Correo Electronico"
            required
            variant="outlined"
            fullWidth
            value={emailDirFact}
            onChange={(e)=> setEmailDirFact(e.target.value)}
          />
        </Grid>

        <Grid item xs={12}>
          <Button
            fullWidth
            variant="outlined"
            onClick={addNewDireccionFacturacion}
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
