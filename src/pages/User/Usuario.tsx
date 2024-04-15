import React, { useState } from 'react';
import { Typography, Grid, Tabs, Tab } from '@mui/material';
import LocalFloristIcon from '@mui/icons-material/LocalFlorist';
import LoyaltyIcon from '@mui/icons-material/Loyalty';
import MapsHomeWorkIcon from '@mui/icons-material/MapsHomeWork';
import DescriptionIcon from '@mui/icons-material/Description';
import HistPedidos from './HistPedidos';
import EstatusEnvio from './EstatusEnvio';
import Ubicaciones from './Ubicaciones';
import FormDetaFac from './FormDetaFac';

const Usuario = () => {
  const [tabValue, setTabValue] = useState<number>(0);

  const handleChange = (_: React.ChangeEvent<object>, newValue: number) => {
    setTabValue(newValue);
  };

  const renderContent = () => {
    switch (tabValue) {
      case 0:
        return <HistPedidos />;
      case 1:
        return <EstatusEnvio />;
      case 2:
        return <Ubicaciones />;
      case 3:
        return <FormDetaFac />;
      default:
        return null;
    }
  };

  return (
    <Grid container spacing={4} justifyContent="center" sx={{ py: 12 }}>
      <Grid item xs={12} sm={12} md={12} lg={3} xl={2}>
        <Typography variant="h5" sx={{ fontWeight: 'bold', color: '#B95389' }}>Opciones</Typography>
        <Tabs value={tabValue} onChange={handleChange} orientation="vertical">
          <Tab
            icon={<LocalFloristIcon fontSize="medium" sx={{ color: '#C81987' }} />}
            iconPosition="start"
            label="Historial de pedidos"
            sx={{ alignSelf: 'start' }}
          />
          <Tab
            icon={<LoyaltyIcon fontSize="medium" sx={{ color: '#C81987' }} />}
            iconPosition="start"
            label="Estatus de envío"
            sx={{ alignSelf: 'start' }}
          />
          <Tab
            icon={<MapsHomeWorkIcon fontSize="medium" sx={{ color: '#C81987' }} />}
            iconPosition="start"
            label="Ubicaciones de entrega"
            sx={{ alignSelf: 'start' }}
          />
          <Tab
            icon={<DescriptionIcon fontSize="medium" sx={{ color: '#C81987' }} />}
            iconPosition="start"
            label="Datos de facturación"
            sx={{ alignSelf: 'start' }}
          />
        </Tabs>
      </Grid>
      <Grid item xs={12} sm={12} md={12} lg={9} xl={10}>
        {renderContent()}
      </Grid>
    </Grid>
  );
};

export default Usuario;
