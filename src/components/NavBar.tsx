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
import Logo from '../assets/logo/LOGO.png'
import SearchIcon from '@mui/icons-material/Search';
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';
import Person2Icon from '@mui/icons-material/Person2';
import '../styles/estilosCss.css'
import { Link  } from 'react-router-dom';
import { Grid } from '@mui/material';
import { stylesComponents } from '../styles/stylesComponentes';


const settings = ['Profile', 'Account', 'Dashboard', 'Logout'];


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
    <AppBar  sx={stylesComponents.appBar}>
      <Container maxWidth="xl">
        <Toolbar disableGutters sx={stylesComponents.toolbar}>
          {/* Logo para escritorio */}
          <Grid
            sx={{
              width: '150px',
              display: { xs: 'none', md: 'flex' },
            }}
          >
            <img
            src={Logo}
            alt="Logo"
            style={{ width: '100%' }}
          />
          </Grid>
          {/* Mennu movil */}
          <Box  sx={stylesComponents.boxMenuResponsive}>
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
              sx={stylesComponents.MenuResponsive}
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
          <Box sx={stylesComponents.boxMenuDesk}>
            <Button
                component={Link}
                to="/"
                variant="text"
                onClick={handleCloseNavMenu}
                sx={stylesComponents.navigationButton}
              >
                Inicio
            </Button>
            <Button
                component={Link}
                to="/Productos"
                variant="text"
                onClick={handleCloseNavMenu}
                sx={stylesComponents.navigationButton}
              >
                Productos
            </Button>
            <Button
                component={Link}
                to="/Nosotros"
                variant="text"
                onClick={handleCloseNavMenu}
                sx={stylesComponents.navigationButton}
              >
                Nosotros
            </Button>
            <Button
                component={Link}
                to="/Contacto"
                variant="text"
                onClick={handleCloseNavMenu}
                sx={stylesComponents.navigationButton}
              >
                Contacto
            </Button>
          </Box>

          {/* Logo para movil */}
          <Grid sx={stylesComponents.logoResponsive} >
            <img
              src={Logo}
              alt="Logo"
              style={{ width: '100%' }}
            />
          </Grid>

          <Box sx={{ flexGrow: 0 }}>
                <SearchIcon color="disabled" sx={stylesComponents.iconsMovile}/>
                <ShoppingCartIcon color="disabled" sx={stylesComponents.iconsMovile}/>
                <Person2Icon color="disabled" sx={stylesComponents.iconsMovile}/>
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