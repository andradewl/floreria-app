import React, { useEffect, useState } from "react";
import { Grid, TextField, Typography } from "@mui/material";
import { getDireccionById } from "../../config/backEndUsuarios/backUbicaciones";
import { useParams } from "react-router-dom";

export default function editDirecciones() {
// Obtener la ID de la dirección de los parámetros de la URL
const { id } = useParams<{ id: string }>();

// Estado para almacenar los datos de la dirección
const [direccion, setDireccion] = useState<any>(null);

useEffect(() => {
  const fetchDireccion = async () => {
    try {
      if (id) { // Verificar si id tiene un valor asignado
        const direccionData = await getDireccionById(id); // Obtener datos reales de la dirección
        setDireccion(direccionData);
      } else {
        console.error("La ID de la dirección es indefinida.");
      }
    } catch (error) {
      console.error("Error al obtener dirección:", error);
    }
  };

  fetchDireccion();
}, [id]); // Asegúrate de incluir id en la lista de dependencias del efecto

  return (
    <Grid container spacing={4} justifyContent="center" sx={{ py: 12 }}>
      <Grid item container spacing={2} xl={6} lg={6} md={6} sm={12} xs={12}>
        <Grid item xs={12}>
          <Typography variant="h3">
            Editar dirección de entrega.
          </Typography>
        </Grid>
        <Grid item xs={6}>
          <TextField
            id="nombreDestino"
            margin="dense"
            required
            label="Nombre"
            variant="outlined"
            fullWidth
            value={direccion?.nombre || ""}
            disabled
          />
        </Grid>
        <Grid item xs={6}>
          <TextField
            id="apellidoDestino"
            margin="dense"
            required
            label="Apellido"
            variant="outlined"
            fullWidth
            value={direccion?.apellido || ""}
            disabled
          />
        </Grid>
        <Grid item xs={6}>
          <TextField
            id="codigoPostal"
            margin="dense"
            required
            label="Código Postal"
            variant="outlined"
            fullWidth
            value={direccion?.zip || ""}
            disabled
          />
        </Grid>
        <Grid item xs={6}>
          <TextField
            id="estado"
            margin="dense"
            required
            label="Estado"
            variant="outlined"
            fullWidth
            value={direccion?.estado || ""}
            disabled
          />
        </Grid>
        <Grid item xs={6}>
          <TextField
            id="municipio"
            margin="dense"
            required
            label="Municipio o Alcaldía"
            variant="outlined"
            fullWidth
            value={direccion?.municipio || ""}
            disabled
          />
        </Grid>
        <Grid item xs={6}>
          <TextField
            id="colonia"
            margin="dense"
            required
            label="Colonia"
            variant="outlined"
            fullWidth
            value={direccion?.colonia || ""}
            disabled
          />
        </Grid>
        <Grid item xs={6}>
          <TextField
            id="calle"
            margin="dense"
            required
            label="Calle"
            variant="outlined"
            fullWidth
            value={direccion?.calle || ""}
            disabled
          />
        </Grid>
        <Grid item xs={6}>
          <TextField
            id="numExt"
            margin="dense"
            required
            label="Número Exterior"
            variant="outlined"
            fullWidth
            value={direccion?.NumE || ""}
            disabled
          />
        </Grid>
        <Grid item xs={6}>
          <TextField
            id="numInt"
            margin="dense"
            label="Número Interior"
            variant="outlined"
            fullWidth
            value={direccion?.NumI || ""}
            disabled
          />
        </Grid>
        <Grid item xs={6}>
          <TextField
            id="calleRef1"
            margin="dense"
            label="Calle de Referencia 1"
            variant="outlined"
            fullWidth
            value={direccion?.refCalle1 || ""}
            disabled
          />
        </Grid>
        <Grid item xs={6}>
          <TextField
            id="calleRef2"
            margin="dense"
            label="Calle de Referencia 2"
            variant="outlined"
            fullWidth
            value={direccion?.refCalle2 || ""}
            disabled
          />
        </Grid>
        <Grid item xs={6}>
          <TextField
            id="tipo"
            margin="dense"
            required
            label="Tipo (Residencia o Trabajo)"
            variant="outlined"
            fullWidth
            value={direccion?.tipo || ""}
            disabled
          />
        </Grid>
        <Grid item xs={6}>
          <TextField
            id="telRemitente"
            margin="dense"
            required
            label="Teléfono de Remitente"
            variant="outlined"
            fullWidth
            value={direccion?.telRemitente || ""}
            disabled
          />
        </Grid>
        <Grid item xs={6}>
          <TextField
            id="telDestinatario"
            margin="dense"
            label="Teléfono de Destinatario"
            variant="outlined"
            fullWidth
            value={direccion?.telDestinatario || ""}
            disabled
          />
        </Grid>
        <Grid item xs={12}>
          <TextField
            id="referencias"
            margin="dense"
            label="Referencias Adicionales"
            variant="outlined"
            fullWidth
            multiline
            rows={4}
            value={direccion?.referencias || ""}
            disabled
          />
        </Grid>
      </Grid>
    </Grid>
  );
}
