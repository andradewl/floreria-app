import React, { useState } from 'react';
import { Typography, Grid, Tabs, Tab, Paper } from '@mui/material';
import LocalFloristIcon from '@mui/icons-material/LocalFlorist';
import LoyaltyIcon from '@mui/icons-material/Loyalty';
import HistPedidosAdmin from './HistPedidosAdmin';
import EstatusEnvioAdministrador from './EstatusEnvioAdmin';
import ProductosAdmin from './ProductosAdmin';
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
      default:
        return null;
    }
  };

  return (
    <Grid container spacing={4} justifyContent="center" sx={{ py: 12 }}>
      <Grid item xs={12} md={3}>
        <Paper elevation={3} sx={{ p: 2, backgroundColor: '#F3F3F3', borderRadius: 2 }}>
          <Typography variant="h5" sx={{ fontWeight: 'bold', color: '#B95389', mb: 2, textAlign: 'center' }}>
            Opciones Administrador
          </Typography>
          <Tabs
            value={tabValue}
            onChange={handleChange}
            orientation="vertical"
            variant="scrollable"
            scrollButtons="auto"
            sx={{ '& .MuiTabs-indicator': { backgroundColor: '#C81987' } }}
          >
            <Tab
              icon={<LocalFloristIcon fontSize="medium" sx={{ color: '#C81987' }} />}
              iconPosition="start"
              label="Historial de pedidos"
              sx={{ alignSelf: 'start', textAlign: 'left' }}
            />
            <Tab
              icon={<LoyaltyIcon fontSize="medium" sx={{ color: '#C81987' }} />}
              iconPosition="start"
              label="Estatus de envío"
              sx={{ alignSelf: 'start', textAlign: 'left' }}
            />
            <Tab
              label="Productos" // Agrega la pestaña para Productos
              sx={{ alignSelf: 'start', textAlign: 'left' }}
            />
          </Tabs>
        </Paper>
      </Grid>
      <Grid item xs={12} md={9}>
        <Paper
          elevation={3}
          sx={{
            p: 3,
            backgroundColor: '#FFFFFF',
            borderRadius: 2,
            border: '1px solid #ccc',
            boxShadow: '0 3px 5px rgba(0, 0, 0, 0.1)',
            margin: '0 10px', // Agrega margen alrededor del Paper
          }}
        >
          {renderContent()}
        </Paper>
      </Grid>
    </Grid>
  );
};

export default UsuarioAdmin;
