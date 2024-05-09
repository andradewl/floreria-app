import * as React from 'react';
import AppBar from '@mui/material/AppBar';
import Typography from '@mui/material/Typography';
import Container from '@mui/material/Container';
import Button from '@mui/material/Button';
import Logo from '../assets/logo.png'
import '../styles/estilosCss.css'
import { Box, Collapse, Drawer, Grid, Link, List, ListItem, ListItemButton, ListItemIcon, ListItemText, Menu, MenuItem } from '@mui/material';
import { stylesComponents } from '../styles/stylesComponentes';
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';
import { useNavigate } from 'react-router-dom';
import MenuIcon from '@mui/icons-material/Menu';
import { Ocasionest } from '../interfaces/interfaces';
import { getOcasiones } from '../config/apiFirebase';
import HomeIcon from '@mui/icons-material/Home';
import CardGiftcardIcon from '@mui/icons-material/CardGiftcard';
import MailIcon from '@mui/icons-material/Mail';
import LoginIcon from '@mui/icons-material/Login';
import { ExpandLess, ExpandMore } from '@mui/icons-material';
import LocalFloristIcon from '@mui/icons-material/LocalFlorist';

type Anchor = 'top' | 'left' | 'bottom' | 'right';

function ResponsiveAppBar() {
  const navigate = useNavigate()
  const [isScrolled, setIsScrolled] = React.useState(false);
  const [ocasiones, setOcasiones] = React.useState<Ocasionest[]>([]);
  const [openOcasiones, setOpenOcasiones] = React.useState(true);
  const [currentView, setCurrentView] = React.useState('inicio');

  const changeView = (viewName: React.SetStateAction<string>) => {
    setCurrentView(viewName);
  }
  React.useEffect(() => {
    const fetchData = async () => {
        try {
            fetchOcasiones();
        } catch (error) {
            console.error('Error fetching flowers:', error);
        }
    };
    fetchData();
  }, []);

  const fetchOcasiones = async () => {
    try {
        const OcasionesData = await getOcasiones();
        console.log(OcasionesData)
        setOcasiones(OcasionesData);
    } catch (error) {
        console.error('Error fetching ocasiones:', error);
    }
  };

  const [state, setState] = React.useState({
    top: false,
    left: false,
    bottom: false,
    right: false,
  });

  const handleClickOcasiones = () => {
    setOpenOcasiones(!openOcasiones);
  };


  const toggleDrawer = (anchor: Anchor, open: boolean) =>(event: React.KeyboardEvent | React.MouseEvent) => {
    if (
      event.type === 'keydown' &&
      ((event as React.KeyboardEvent).key === 'Tab' ||
        (event as React.KeyboardEvent).key === 'Shift')
    ) {
      return;
    }
    setState({ ...state, [anchor]: open });
  };


  const list = (anchor: Anchor) => (
    <Box
      sx={{ width: anchor === 'top' || anchor === 'bottom' ? 'auto' : 250 }}
      role="presentation"
      onClick={toggleDrawer(anchor, false)}
      onKeyDown={toggleDrawer(anchor, false)}
    >
      <List>
        <ListItem key={"Inicio"}  onClick={()=>{changeView("inicio"),navigate('/')}} disablePadding>
          <ListItemButton>
            <ListItemIcon>
              <HomeIcon />
            </ListItemIcon>
            <ListItemText primary={"Inicio"} />
          </ListItemButton>
        </ListItem>


        <ListItem onClick={handleClickOcasiones}>
          <ListItemIcon>
            <LocalFloristIcon />
          </ListItemIcon>
          <ListItemText primary="Ocasiones" />
          {openOcasiones ? <ExpandLess /> : <ExpandMore />}
        </ListItem>
        <Collapse in={openOcasiones} timeout="auto" unmountOnExit>
          <List component="div" disablePadding>
            {/* <ListItemButton sx={{ pl: 4 }}>
              <ListItemIcon>
              </ListItemIcon>
              <ListItemText primary="Starred" />
            </ListItemButton> */}
            {ocasiones && ocasiones.map((item) => (
              // <MenuItem onClick={()=>navigate("ocasion/"+item.nombre+"/"+item.id)}>{item.nombre}</MenuItem>

              <ListItemButton sx={{ pl: 4 }} onClick={()=>{changeView("ocasion"), navigate("ocasion/"+item.nombre+"/"+item.id)}}>
                <ListItemIcon>
                </ListItemIcon>
                <ListItemText primary={item.nombre} />
              </ListItemButton>
            ))}
          </List>
        </Collapse>

        {/* <ListItem key={"Ocasiones"} disablePadding >
          <ListItemButton component={Link}>
            <ListItemIcon>
              <CardGiftcardIcon />
            </ListItemIcon>
            <ListItemText primary={"Ocasiones"} />
          </ListItemButton>
        </ListItem> */}

        <ListItem key={"Contacto"} disablePadding onClick={()=>{changeView("contacto"), navigate('/FormDetaFac')}}>
          <ListItemButton>
            <ListItemIcon>
              <MailIcon />
            </ListItemIcon>
            <ListItemText primary={"Contacto"} />
          </ListItemButton>
        </ListItem>

        <ListItem key={"Login"} disablePadding onClick={()=>{changeView("login"), navigate('/Login')}}>
          <ListItemButton>
            <ListItemIcon>
              <LoginIcon />
            </ListItemIcon>
            <ListItemText primary={"Login"} />
          </ListItemButton>
        </ListItem>
      </List>

      {/* <Divider />
      <List>
        {['All mail', 'Trash', 'Spam'].map((text, index) => (
          <ListItem key={text} disablePadding>
            <ListItemButton>
              <ListItemIcon>
                {index % 2 === 0 ? <InboxIcon /> : <MailIcon />}
              </ListItemIcon>
              <ListItemText primary={text} />
            </ListItemButton>
          </ListItem>
        ))}
      </List> */}
    </Box>
  );


  const shopCar = (anchor: Anchor) => (
    <Box
      sx={{ width: anchor === 'top' || anchor === 'bottom' ? 'auto' : {xs:350, md:450} }}
      role="presentation"
      onClick={toggleDrawer(anchor, false)}
      onKeyDown={toggleDrawer(anchor, false)}
    >
      <List>
        <ListItem key={"Inicio"}  onClick={()=>navigate('/')} disablePadding>
          <ListItemButton>
            <ListItemIcon>
              <HomeIcon />
            </ListItemIcon>
            <ListItemText primary={"Inicio"} />
          </ListItemButton>
        </ListItem>

        <ListItem key={"Ocasiones"} disablePadding >
          <ListItemButton component={Link}>
            <ListItemIcon>
              <CardGiftcardIcon />
            </ListItemIcon>
            <ListItemText primary={"Ocasiones"} />
          </ListItemButton>
        </ListItem>

        <ListItem key={"Contacto"} disablePadding onClick={()=>navigate('/FormDetaFac')}>
          <ListItemButton>
            <ListItemIcon>
              <MailIcon />
            </ListItemIcon>
            <ListItemText primary={"Contacto"} />
          </ListItemButton>
        </ListItem>

        <ListItem key={"Login"} disablePadding onClick={()=>navigate('/Login')}>
          <ListItemButton>
            <ListItemIcon>
              <LoginIcon />
            </ListItemIcon>
            <ListItemText primary={"Login"} />
          </ListItemButton>
        </ListItem>
      </List>

      {/* <Divider />
      <List>
        {['All mail', 'Trash', 'Spam'].map((text, index) => (
          <ListItem key={text} disablePadding>
            <ListItemButton>
              <ListItemIcon>
                {index % 2 === 0 ? <InboxIcon /> : <MailIcon />}
              </ListItemIcon>
              <ListItemText primary={text} />
            </ListItemButton>
          </ListItem>
        ))}
      </List> */}
    </Box>
  );

  React.useEffect(()=>{
    const storedUserCredentials = sessionStorage.getItem('credentials');
    const storedUserName = sessionStorage.getItem('userlogIn');

    if (storedUserCredentials && storedUserName) {
      const userCredential = JSON.parse(storedUserCredentials);
      const userInfo = JSON.parse(storedUserName);
      console.log(userCredential.email, userInfo.email);
    }
  },[])


  const [anchorEl, setAnchorEl] = React.useState<null | HTMLElement>(null);
  const open = Boolean(anchorEl);

  const handleClick = (event: React.MouseEvent<HTMLButtonElement>) => {
    setAnchorEl(event.currentTarget);
  };
  const handleClose = () => {
    setAnchorEl(null);
  };


  const handleScroll = () => {
    const scrollTop = window.scrollY;

    console.log(scrollTop)
    if (scrollTop == 0) {
      setIsScrolled(false);
    } else {
      setIsScrolled(true);
    }
  };
  window.addEventListener('scroll', handleScroll);

  return (
    <>


      <Grid sx={isScrolled ? {display:'none'} : stylesComponents.appSubBar} >
        <Grid sx={{width:'50%', alignSelf:'center', display:'flex'}}>
          <Typography variant="body2" color="initial" sx={{fontSize:'13px'}}>Flores Rickys Envíos a Monterrey y área metropolitana</Typography>
        </Grid>
        <Grid sx={{width:'50%', textAlign:'end' }}>
          <Button sx={{borderRadius:'30px', backgroundColor:'black', color:'white', paddingLeft:'20px', paddingRight:'20px', fontSize:'10px'}}>WhatsApp →</Button>
        </Grid>
      </Grid>

      <AppBar sx={isScrolled ? stylesComponents.appBarScrolled : stylesComponents.appBar}>
        <Grid sx={isScrolled ? stylesComponents.appSubBar : {display:'none'}}>
          <Grid sx={{width:'50%', alignSelf:'center', display:'flex'}}>
            <Typography variant="body2" color="initial" sx={{fontSize:'13px'}}>Flores Rickys Envíos a Monterrey y área metropolitana</Typography>
          </Grid>
          <Grid sx={{width:'50%', textAlign:'end' }}>
            <Button sx={{borderRadius:'30px', backgroundColor:'black', color:'white', paddingLeft:'20px', paddingRight:'20px', fontSize:'10px'}}>WhatsApp →</Button>
          </Grid>
        </Grid>

        <Container maxWidth="xl" >
          <Grid sx={ isScrolled ? {display:'flex', marginTop:'10px', paddingLeft:'5%', paddingRight:'5%'} : {display:'flex', marginTop:'10px', paddingLeft:'5%', paddingRight:'5%', borderBottomStyle:'grove'}  }  >


            {/* logo */}
            <Grid
              sx={{
                width:'30%',
                // display: { xs: 'none', md: 'flex' },
              }}
            >
              <img
              src={Logo}
              alt="Logo"
              style={{ width: '90px' }}
            />
            </Grid>

            {/* Menu escritorio */}
            <Grid
              sx={{width:'70%', display:{xs:'none', md:'flex'}, justifyContent:'end'}}
            >
              <Button
                sx={isScrolled ? stylesComponents.butonMenuScroll : currentView=="inicio"?stylesComponents.butonMenu:stylesComponents.butonMenu2}
                onClick={()=>{changeView("inicio"), navigate('/')}}
              >Inicio</Button>
              <Button
                sx={isScrolled ? stylesComponents.butonMenuScroll : currentView=="inicio"?stylesComponents.butonMenu:stylesComponents.butonMenu2}
                id="basic-button"
                aria-controls={open ? 'basic-menu' : undefined}
                aria-haspopup="true"
                aria-expanded={open ? 'true' : undefined}
                onClick={handleClick}
              >
                Ocasiones
              </Button>
              <Menu
                id="basic-menu"
                anchorEl={anchorEl}
                open={open}
                onClose={handleClose}
                MenuListProps={{
                  'aria-labelledby': 'basic-button',
                }}
              >
                {ocasiones && ocasiones.map((item) => (
                    <MenuItem onClick={()=>{changeView("ocasion"), navigate("ocasion/"+item.nombre+"/"+item.id)}}>{item.nombre}</MenuItem>
                  ))}
              </Menu>
              {/* <Button
                sx={isScrolled ? stylesComponents.butonMenuScroll : stylesComponents.butonMenu}
              >Ocasiones</Button> */}
              <Button
                sx={isScrolled ? stylesComponents.butonMenuScroll : currentView=="inicio"?stylesComponents.butonMenu:stylesComponents.butonMenu2}
                onClick={()=>{changeView("contacto"), navigate('/FormDetaFac')}}
              >Contacto</Button>
              <Button
                sx={isScrolled ? stylesComponents.butonMenuScroll : currentView=="inicio"?stylesComponents.butonMenu:stylesComponents.butonMenu2}
                onClick={()=>{changeView("login"), navigate('/Login')}}
              >Login</Button>
            </Grid>

            {/* Boton carrito */}
            <Grid sx={{
              width:{
                md:'auto',
                xs:'70%'
              },
              textAlign:'end'
            }}>
              <Button
                sx={isScrolled ? stylesComponents.butonMenuCarritoScroll : currentView=="inicio" ? stylesComponents.butonMenuCarrito:stylesComponents.butonMenuCarrito2}
                onClick={toggleDrawer("right", true)}
              ><ShoppingCartIcon sx={{fontSize:'15px'}}/> Total ($0)</Button>
            </Grid>

            {/* Menu movil */}
            <Grid sx={currentView=="inicio"?stylesComponents.menuResponsivo:stylesComponents.menuResponsivo2} onClick={toggleDrawer("left", true)}>
              <MenuIcon/>
            </Grid>

          </Grid>
        </Container>

      </AppBar>




      <Drawer
        anchor={"left"}
        open={state["left"]}
        onClose={toggleDrawer("left", false)}
      >
        {list("left")}
      </Drawer>
      <Drawer
        anchor={"right"}
        open={state["right"]}
        onClose={toggleDrawer("right", false)}
      >
        {shopCar("right")}
      </Drawer>
    </>
  );
}
export default ResponsiveAppBar;