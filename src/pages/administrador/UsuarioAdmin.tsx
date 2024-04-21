import React, { useState } from 'react';
import { Typography, Grid, Tabs, Tab } from '@mui/material';
import LocalFloristIcon from '@mui/icons-material/LocalFlorist';
import LoyaltyIcon from '@mui/icons-material/Loyalty';
import HistPedidosAdmin from './HistPedidosAdmin';
import EstatusEnvioAdministrador from './EstatusEnvioAdmin';

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
      default:
        return null;
    }
  };

  return (
    <Grid container spacing={4} justifyContent="center" sx={{ py: 12 }}>
      <Grid item xs={12} sm={12} md={12} lg={3} xl={2}>
        <Typography variant="h5" sx={{ fontWeight: 'bold', color: '#B95389', mb: 2 }}>Opciones Administrador</Typography>
        <Tabs value={tabValue} onChange={handleChange} orientation="vertical" sx={{ borderRight: 1, borderColor: 'divider' }}>
          <Tab
            icon={<LocalFloristIcon sx={{ color: '#C81987' }} />}
            label="Historial de pedidos"
            sx={{ mb: 2 }}
          />
          <Tab
            icon={<LoyaltyIcon sx={{ color: '#C81987' }} />}
            label="Estatus de envío"
            sx={{ mb: 2 }}
          />
        </Tabs>
      </Grid>
      <Grid item xs={12} sm={12} md={12} lg={9} xl={10} sx={{ borderLeft: 1, borderColor: 'divider', pl: 4 }}>
        {renderContent()}
      </Grid>
    </Grid>
  );
};

export default UsuarioAdmin;
