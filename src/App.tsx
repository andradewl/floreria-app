import NavBar from "./components/NavBar"
import { BrowserRouter, Route, Routes } from "react-router-dom";


import Home from "./pages/Home";
import Contacto from "./pages/Contacto";
import Nosotros from "./pages/Nosotros";
import Productos from "./pages/Productos";
import Footer from "./components/Footer";
import Usuario from "./pages/User/Usuario"
import EstatusEnvio from "./pages/User/EstatusEnvio"
import Ubicaciones from "./pages/User/Ubicaciones"
import FormUbicaciones from "./pages/User/FormUbicaciones";
import FormDetaFac from "./pages/User/FormDetaFac";
import Login from "./pages/Login";
import SigIn from "./pages/SigIn";

function App() {

  return (
    <BrowserRouter>
      <NavBar/>
      <Routes>
        <Route path="/" Component={Home} />
        <Route path="/Productos" Component={Productos}/>
        <Route path="/Nosotros" Component={Nosotros}/>
        <Route path="/Contacto" Component={Contacto}/>
        <Route path="/Usuario" Component={Usuario}/>
        <Route path="/EstatusEnvio" Component={EstatusEnvio}/>
        <Route path="/Ubicaciones" Component={Ubicaciones}/>
        <Route path="/FormUbicaciones" Component={FormUbicaciones}/>
        <Route path="/FormDetaFac" Component={FormDetaFac}/>
        <Route path="/Login" Component={Login}/>
        <Route path="/SigIn" Component={SigIn}/>
      </Routes>

      <Footer/>

    </BrowserRouter>



  )
}

export default App