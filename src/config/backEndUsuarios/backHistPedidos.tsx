import { db } from "../firfebase";
import {
  collection,
  getDocs,
  query,
  where,
} from "firebase/firestore";

export const getPedidosUsuario = async (uidUser: string) => {
    const result = await getDocs(
      query(collection(db, "pedidos"), where("uidUserLogin", "==", uidUser))
    );
    
    const pedidos = result.docs.map((doc) => {
      const data = doc.data();
      const carritoCompra = data.carritoCompra; // Acceder al campo carritoCompra
      
      // Verificar si carritoCompra existe y tiene elementos
      if (carritoCompra && carritoCompra.length > 0) {
        // Mapear los elementos de carritoCompra
        const carritoData = carritoCompra.map((item: any) => ({
          nombre: item.nombre,
          cantidad: item.cantidad,
          precio: item.precio,
          fecha: item.fecha // Incluir la fecha si está presente en el objeto carritoCompra
        }));
        return carritoData;
      } else {
        console.error("No se encontraron pedidos para el usuario con UID:", uidUser);
        return [];
      }
    });
  
    console.log("Pedidos obtenidos:", pedidos); // Agregar este console.log
  
    return pedidos;
};
