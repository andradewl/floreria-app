import React, { useEffect, useState } from "react";
import { Button, Divider, Grid, Typography, IconButton } from "@mui/material";
import { Link, useNavigate } from "react-router-dom";
import { getDirecciones, deleteDireccion } from "../../config/backEndUsuarios/backUbicaciones";
import { DocumentData } from "@firebase/firestore-types";
import Paper from "@mui/material/Paper";
import { styled } from "@mui/material/styles";
import EditIcon from "@mui/icons-material/Edit";
import DeleteIcon from "@mui/icons-material/Delete";
import HomeIcon from '@mui/icons-material/Home';
import WorkIcon from '@mui/icons-material/Work';

export default function Ubicaciones() {
  const navigate = useNavigate();
  const [direcciones, setDirecciones] = useState<DocumentData[]>([]);

  const DemoPaper = styled(Paper)(({ theme }) => ({
    position: "relative",
    width: "65%", // Ajustar el ancho del DemoPaper según sea necesario
    padding: theme.spacing(2),
    textAlign: "left",
    margin: "auto",
  }));

  useEffect(() => {
    getDireccionesData();
  }, []);

  const getDireccionesData = async () => {
    try {
      const direccionesData = await getDirecciones("w2INimKno1fwEXvAJatj3nsWRqJ2");
      setDirecciones(direccionesData);
    } catch (error) {
      console.error("Error al obtener direcciones:", error);
    }
  };

  const handleNuevoClick = () => {
    navigate("/FormUbicaciones");
  };

  const borrarDireccion = async (id: string) => {
    await deleteDireccion(id);
    console.log("Dirección eliminada con éxito:", id);
    getDireccionesData();
  };

  return (
    <Grid container spacing={2} justifyContent="center">
      <Grid item xs={12}>
        <DemoPaper variant="outlined">
          {direcciones.map((direccion, index) => (
            <div
              key={index}
              style={{ position: "relative", marginBottom: "1rem" }}
            >
              <div style={{ display: "flex", alignItems: "center" }}>
                {direccion.tipo === "residencia" ? (
                  <HomeIcon sx={{ marginRight: '0.5rem' }} />
                ) : (
                  <WorkIcon sx={{ marginRight: '0.5rem' }} />
                )}
                <Typography
                  variant="body1"
                  sx={{ fontSize: "1.2rem", flex: 1 }}
                >
                  {direccion.calle}, {direccion.NumE} - {direccion.NumI}
                </Typography>
                <Link to={`/vwUpdateDireccion/${direccion.id}`}>
                    <IconButton><EditIcon/></IconButton>
                </Link>
                <IconButton
                  onClick={() => borrarDireccion(direccion.id)}
                  aria-label="eliminar"
                >
                  <DeleteIcon />
                </IconButton>
              </div>
              <Typography variant="body1">
                {direccion.zip} - {direccion.estado} -{" "}
                {direccion.municipio}
              </Typography>
              <Typography variant="body1">
                {direccion.nombre} {direccion.apellido} -{" "}
                {direccion.telDestinatario}
              </Typography>
              <Divider sx={{ marginTop: "1.5%", marginBottom: "1.5%" }} />
            </div>
          ))}
          <Button variant="text" onClick={handleNuevoClick} fullWidth>
            Agregar nueva dirección.
          </Button>
        </DemoPaper>
      </Grid>
    </Grid>
  );
}
