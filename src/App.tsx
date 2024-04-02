import NavBar from "./components/NavBar"
import { BrowserRouter, Route, Routes } from "react-router-dom";


import Home from "./pages/Home";
import Contacto from "./pages/Contacto";
import Nosotros from "./pages/Nosotros";
import Productos from "./pages/Products/Productos";
import Footer from "./components/Footer";
import Usuario from "./pages/User/Usuario"
import EstatusEnvio from "./pages/User/EstatusEnvio"
import Ubicaciones from "./pages/User/Ubicaciones"
import FormUbicaciones from "./pages/User/FormUbicaciones";
import FormDetaFac from "./pages/User/FormDetaFac";
import ProductId from "./pages/Products/ProductId";
import shoppingCart from "./pages/shoppingCart/shoppingCart";
import Login from "./pages/Login";
import SignIn from "./pages/SignIn";

import shopProducts from "./pages/ShopProduct/shopProducts";
import { PayPalScriptProvider } from "@paypal/react-paypal-js";



function App() {

  const initialOptions = {
    "clientId":"Ac5z9jFzq7vM1OfhlHDJca7sGVhMmyfXSQeSwJE0nxoXboxS_6hSVVy1ownxLWjmXD89Ad66Ql3ivC2V",
    "currency":"MXN",
    "intent":"capture"
  }

  return (
    <PayPalScriptProvider options={initialOptions}>
      <BrowserRouter>

        <NavBar/>

        <Routes>
          <Route path="/" Component={Home} />
          <Route path="/Productos" Component={Productos}/>
          <Route path="/Producto/:id" Component={ProductId}/>
          <Route path="/Nosotros" Component={Nosotros}/>
          <Route path="/Contacto" Component={Contacto}/>
          <Route path="/Usuario/:id" Component={Usuario}/>
          <Route path="/EstatusEnvio" Component={EstatusEnvio}/>
          <Route path="/Ubicaciones" Component={Ubicaciones}/>
          <Route path="/FormUbicaciones" Component={FormUbicaciones}/>
          <Route path="/FormDetaFac" Component={FormDetaFac}/>
          <Route path="/shoppingCart" Component={shoppingCart}/>
          <Route path="/Login" Component={Login}/>
          <Route path="/SignIn" Component={ SignIn }/>
          <Route path="/shopProducts" Component={shopProducts}/>

        </Routes>

        <Footer/>

      </BrowserRouter>
    </PayPalScriptProvider>

  )
}

export default App