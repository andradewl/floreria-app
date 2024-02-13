import * as React from 'react';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import IconButton from '@mui/material/IconButton';
import Typography from '@mui/material/Typography';
import Menu from '@mui/material/Menu';
import MenuIcon from '@mui/icons-material/Menu';
import Container from '@mui/material/Container';
import Button from '@mui/material/Button';
import MenuItem from '@mui/material/MenuItem';
import Logo from '../assets/LOGO.webp'
import SearchIcon from '@mui/icons-material/Search';
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';
import Person2Icon from '@mui/icons-material/Person2';
import '../styles/estilosCss.css'


const settings = ['Profile', 'Account', 'Dashboard', 'Logout'];

import { Link  } from 'react-router-dom';

function ResponsiveAppBar() {
  const [anchorElNav, setAnchorElNav] = React.useState<null | HTMLElement>(null);
  const [anchorElUser, setAnchorElUser] = React.useState<null | HTMLElement>(null);

  const handleOpenNavMenu = (event: React.MouseEvent<HTMLElement>) => {
    setAnchorElNav(event.currentTarget);
  };


  const handleCloseNavMenu = () => {
    setAnchorElNav(null);
  };

  const handleCloseUserMenu = () => {
    setAnchorElUser(null);
  };

  return (
    <AppBar position="sticky" sx={{ backgroundColor: '#ffff', boxShadow:'none', padding:'15px 30px 15px 30px' }}>
      <Container maxWidth="xl">
        <Toolbar disableGutters>
          <img
            src={Logo}
            alt="Logo"
            className='logo'
          />

          <Box sx={{ flexGrow: 1, display: { xs: 'flex', md: 'none' } }}>
            <IconButton
              size="large"
              aria-label="account of current user"
              aria-controls="menu-appbar"
              aria-haspopup="true"
              onClick={handleOpenNavMenu}
              color="inherit"
            >
              <MenuIcon color="disabled" style={{ fontSize: 30}}/>
            </IconButton>
            <Menu
              id="menu-appbar"
              anchorEl={anchorElNav}
              anchorOrigin={{
                vertical: 'bottom',
                horizontal: 'left',
              }}
              keepMounted
              transformOrigin={{
                vertical: 'top',
                horizontal: 'left',
              }}
              open={Boolean(anchorElNav)}
              onClose={handleCloseNavMenu}
              sx={{
                display: { xs: 'block', md: 'none' },
              }}
            >
              <MenuItem
                component={Link}
                to="/"
                key="/" onClick={handleCloseNavMenu}>
                  <Typography textAlign="center">Inicio</Typography>
              </MenuItem>
              <MenuItem
                component={Link}
                to="/Productos"
                key="/Productos" onClick={handleCloseNavMenu}>
                  <Typography textAlign="center">Productos</Typography>
              </MenuItem>
              <MenuItem
                component={Link}
                to="/Nosotros"
                key="/Nosotros" onClick={handleCloseNavMenu}>
                  <Typography textAlign="center">Nosotros</Typography>
              </MenuItem>
              <MenuItem
                component={Link}
                to="/Contacto"
                key="/Contacto" onClick={handleCloseNavMenu}>
                  <Typography textAlign="center">Contacto</Typography>
              </MenuItem>
            </Menu>
          </Box>


          <Box sx={{ flexGrow: 1, display: { xs: 'none', md: 'flex', justifyContent: 'center' } }}>
            <Button
                component={Link}
                to="/"
                variant="text"
                onClick={handleCloseNavMenu}
                sx={{  my: 2, color: '#B42981', display: 'block', background:'#ffff', fontSize:'15px' }}
              >
                Inicio
            </Button>
            <Button
                component={Link}
                to="/Productos"
                variant="text"
                onClick={handleCloseNavMenu}
                sx={{ my: 2, color: '#B42981', display: 'block', fontSize:'15px'}}
              >
                Productos
            </Button>
            <Button
                component={Link}
                to="/Nosotros"
                variant="text"
                onClick={handleCloseNavMenu}
                sx={{ my: 2, color: '#B42981', display: 'block', fontSize:'15px'}}
              >
                Nosotros
            </Button>
            <Button
                component={Link}
                to="/Contacto"
                variant="text"
                onClick={handleCloseNavMenu}
                sx={{ my: 2, color: '#B42981', display: 'block', fontSize:'15px'}}
              >
                Contacto
            </Button>
          </Box>

          <img
            src={Logo}
            alt="logoResponsive"
            className='logoResponsive'
          />

          <Box sx={{ flexGrow: 0 }}>
                <SearchIcon color="disabled" sx={{padding:'3px', fontSize: 30}}/>
                <ShoppingCartIcon color="disabled" sx={{padding:'3px', fontSize: 30}}/>
                <Person2Icon color="disabled" sx={{padding:'3px', fontSize: 30}}/>
            <Menu
              sx={{ mt: '45px'}}
              id="menu-appbar"
              anchorEl={anchorElUser}
              anchorOrigin={{
                vertical: 'top',
                horizontal: 'right',
              }}
              keepMounted
              transformOrigin={{
                vertical: 'top',
                horizontal: 'right',
              }}
              open={Boolean(anchorElUser)}
              onClose={handleCloseUserMenu}
            >
              {settings.map((setting) => (
                <MenuItem key={setting} onClick={handleCloseUserMenu}>
                  <Typography textAlign="center">{setting}</Typography>
                </MenuItem>
              ))}
            </Menu>
          </Box>
        </Toolbar>
      </Container>
    </AppBar>
  );
}
export default ResponsiveAppBar;