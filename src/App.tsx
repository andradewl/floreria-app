import NavBar from "./components/NavBar"
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Home from "./pages/Home";
import Contacto from "./pages/Contacto";
import Nosotros from "./pages/Nosotros";
import Productos from "./pages/Productos";
import Footer from "./components/Footer";

function App() {

  return (


    <BrowserRouter>

      <NavBar/>

      <Routes>
        <Route path="/" Component={Home} />
        <Route path="/Productos" Component={Productos}/>
        <Route path="/Nosotros" Component={Nosotros}/>
        <Route path="/Contacto" Component={Contacto}/>
      </Routes>

      <Footer/>

    </BrowserRouter>



  )
}

export default App