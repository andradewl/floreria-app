import {
  AppBar,
  
  Tab,
  Tabs,
  Toolbar,
  useMediaQuery,
  useTheme,
} from "@mui/material";
import DrawerComp from "./Drawer";
import SearchIcon from '@mui/icons-material/Search';
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';
import Person2Icon from '@mui/icons-material/Person2';
import { Link } from 'react-router-dom';
import { useState } from "react";


function NavBar(){
  
    const [value, setValue] = useState();
    const theme = useTheme();
    console.log(theme);
    const isMatch = useMediaQuery(theme.breakpoints.down("md"));
    console.log(isMatch);

    return(
        <AppBar sx={{ background: "#ffff", padding:'20px', boxShadow:'none', position:'sticky'}}>
                <Toolbar>
                    <img src="https://floreriadaisysgarden.com.mx/wp-content/uploads/2021/03/Recurso-3@4x.png" alt="React Image" width='115'/>
                    {isMatch ? (
                    <>
                        <DrawerComp />
                    </>
                    ) : (
                    <>
                        <Tabs
                            sx={{ marginLeft: "auto", color:'purple'}}
                            indicatorColor="secondary"
                           
                            value={value}
                            onChange={(e, value) => setValue(value)}
                        >
                            <Link to="/">
                                <Tab label="Inicio"/>
                            </Link>
                            <Link to="/Productos">
                                <Tab label="Productos" />
                            </Link>
                            <Link to="/Nosotros">
                                <Tab label="Nosotros" />
                            </Link>
                            <Link to="/Contacto">
                                <Tab label="Contacto" />
                            </Link>
                        </Tabs>
                        <div style={{marginLeft:'auto'}}>
                            <SearchIcon color="disabled" sx={{padding:'3px'}}/>
                            <ShoppingCartIcon color="disabled" sx={{padding:'3px'}}/>
                            <Person2Icon color="disabled" sx={{padding:'3px'}}/>
                        </div>

                    </>
                    )}
                </Toolbar>
            
        </AppBar>
         
    )
}

export default NavBar