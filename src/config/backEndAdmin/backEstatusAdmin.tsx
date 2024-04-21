import { db } from "../firfebase";
import {
  collection,
  getDocs,
} from "firebase/firestore";

export const getPedidosUsuario = async () => {
  const result = await getDocs(collection(db, "pedidos"));

  const pedidos = result.docs.map((doc) => {
    const data = doc.data();
    const carritoCompra = data.carritoCompra;
    const datosEnvio = data.datosEnvio;
    const total = data.total;

    if (carritoCompra && carritoCompra.length > 0) {
      const carritoData = carritoCompra.map((item: any) => ({
        nombre: item.nombre,
        cantidad: item.cantidad,
        total: total,
        fecha: item.fecha,
        estatusEnv: datosEnvio?.estatusEnv
      }));

      return carritoData;
    } else {
      console.error("No se encontraron pedidos.");
      return [];
    }
  });

  console.log("Pedidos obtenidos:", pedidos);
  return pedidos.flat();
};
