import React, { useState } from "react";
import { Typography, Grid, Tabs, Tab, Paper } from "@mui/material";
import LocalFloristIcon from "@mui/icons-material/LocalFlorist";
import LoyaltyIcon from "@mui/icons-material/Loyalty";
import DescriptionIcon from "@mui/icons-material/Description";
import HistPedidosAdmin from "./HistPedidosAdmin";
import EstatusEnvioAdministrador from "./EstatusEnvioAdmin";
import ProductosExtra from "./ProductosExtra";
import Ocasiones from "./Ocasiones";
import CodigosPostales from "./CodigosPostales";
import ProductosAdmin from "./ProductosAdmin";
import MensajeContacto from "./MensajesContacto";
import { stylesComponents } from "../../styles/stylesComponentes";
const UsuarioAdmin = () => {
  const [tabValue, setTabValue] = useState<number>(0);

  const handleChange = (_: React.ChangeEvent<object>, newValue: number) => {
    setTabValue(newValue);
  };

  const renderContent = () => {
    switch (tabValue) {
      case 0:
        return <HistPedidosAdmin />;
      case 1:
        return <EstatusEnvioAdministrador />;
      case 2:
        return <ProductosAdmin />; // Renderiza el componente de Productos para el caso 2
      case 3:
        return <ProductosExtra />;
      case 4:
        return <Ocasiones />;
      case 5:
        return <CodigosPostales />;
      case 6:
        return <MensajeContacto />;
      default:
        return null;
    }
  };

  return (
    <>
      <Grid sx={{ ...stylesComponents.contenedorPadre, background: '#fbf8f4', paddingTop:'10%' }}>
        <Grid sx={{ ...stylesComponents.contenedorHijo, paddingTop: '30px', paddingBottom: '30px' }}>
          <Grid container>
            <Grid item xs={12} md={3}>
              <Paper
                elevation={3}
                sx={{ p: 2, backgroundColor: "#F3F3F3", borderRadius: 2 }}
              >
                <Typography
                  variant="h5"
                  align="center"
                  gutterBottom
                  sx={{
                    fontWeight: "600",
                    paddingBottom: "1%",
                    fontFamily: "Cormorant",
                  }}
                >
                  Opciones Administrador
                </Typography>
                <Tabs
                  value={tabValue}
                  onChange={handleChange}
                  orientation="vertical"
                  variant="scrollable"
                  scrollButtons="auto"
                  sx={{ "& .MuiTabs-indicator": { backgroundColor: "#C81987" } }}
                >
                  <Tab
                    icon={
                      <LocalFloristIcon fontSize="medium" sx={{ color: "#C81987" }} />
                    }
                    iconPosition="start"
                    label="Historial de pedidos"
                    sx={{
                      alignSelf: "start",
                      textAlign: "left",
                      fontWeight: "600",
                      paddingBottom: "2%",
                      fontFamily: "Cormorant",
                    }}
                  />
                  <Tab
                    icon={<LoyaltyIcon fontSize="medium" sx={{ color: "#C81987" }} />}
                    iconPosition="start"
                    label="Estatus de envío"
                    sx={{
                      alignSelf: "start",
                      textAlign: "left",
                      fontWeight: "600",
                      paddingBottom: "2%",
                      fontFamily: "Cormorant",
                    }}
                  />
                  <Tab
                    icon={
                      <DescriptionIcon fontSize="medium" sx={{ color: "#C81987" }} />
                    }
                    label="Productos"
                    iconPosition="start"
                    sx={{
                      alignSelf: "start",
                      textAlign: "left",
                      fontWeight: "600",
                      paddingBottom: "2%",
                      fontFamily: "Cormorant",
                    }}
                  />
                  <Tab
                    icon={<LoyaltyIcon fontSize="medium" sx={{ color: "#C81987" }} />}
                    iconPosition="start"
                    label="Productos Extras"
                    sx={{
                      alignSelf: "start",
                      textAlign: "left",
                      fontWeight: "600",
                      paddingBottom: "2%",
                      fontFamily: "Cormorant",
                    }}
                  />
                  <Tab
                    icon={
                      <DescriptionIcon fontSize="medium" sx={{ color: "#C81987" }} />
                    }
                    label="Ocasiones"
                    iconPosition="start"
                    sx={{
                      alignSelf: "start",
                      textAlign: "left",
                      fontWeight: "600",
                      paddingBottom: "2%",
                      fontFamily: "Cormorant",
                    }}
                  />
                  <Tab
                    icon={
                      <DescriptionIcon fontSize="medium" sx={{ color: "#C81987" }} />
                    }
                    label="Códigos Postales"
                    iconPosition="start"
                    sx={{
                      alignSelf: "start",
                      textAlign: "left",
                      fontWeight: "600",
                      paddingBottom: "2%",
                      fontFamily: "Cormorant",
                    }}
                  />
                  <Tab
                    icon={
                      <DescriptionIcon fontSize="medium" sx={{ color: "#C81987" }} />
                    }
                    label="Mensajes de contacto"
                    iconPosition="start"
                    sx={{
                      alignSelf: "start",
                      textAlign: "left",
                      fontWeight: "600",
                      paddingBottom: "2%",
                      fontFamily: "Cormorant",
                    }}
                  />
                </Tabs>
              </Paper>
            </Grid>
            <Grid item xs={12} md={9}>
              {renderContent()}
            </Grid>
          </Grid>

        </Grid>
      </Grid>
      
    </>
  );
};

export default UsuarioAdmin;
