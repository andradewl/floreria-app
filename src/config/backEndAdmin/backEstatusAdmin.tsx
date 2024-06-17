import { db } from "../firfebase";
import { collection, doc, getDocs, updateDoc } from "firebase/firestore";
export const getPedidosUsuario = async () => {
  const result = await getDocs(collection(db, "pedidos"));

  const pedidos = result.docs.map((doc) => {
    const data = doc.data();
    const carritoCompra = data.carritoCompra;
    const datosEnvio = data.datosEnvio;
    // const total = data.total;

    if (carritoCompra && carritoCompra.length > 0) {
      return carritoCompra.map((item: any) => ({
        id: doc.id, // Añadir el ID del pedido
        nombre: item.nombre +", "+ item.productoExtra.nombreProductoExtra,
        cantidad: item.cantidad,
        total: item.precio + item.productoExtra.precioProductoExtra,
        fecha: item.fecha,
        estatusEnv: item.estatuss,
        direccion: datosEnvio?.direccion || "",
        colonia: datosEnvio?.colonia || "",
        ciudad: datosEnvio?.ciudad || "",
        cp: datosEnvio?.cp || "",
        estado: datosEnvio?.estado || "",
        telefono: datosEnvio?.telefono || "",
        nombreEnvio: datosEnvio?.nombre || "",
        imagen: item.imagen || "",
      }));
    } else {
      console.error("No se encontraron pedidos.");
      return [];
    }
  });

  const pedidosFlat = pedidos.flat(); 
  return pedidosFlat;
};
export const actualizarEstatusPedido = async (pedidoId: string, nuevoEstatus: string) => {
  if (!pedidoId) {
    console.error("El ID del pedido es nulo o indefinido.");
    return;
  }

  const pedidoRef = doc(db, "pedidos", pedidoId);

  try {
    await updateDoc(pedidoRef, {
      "datosEnvio.estatusEnv": nuevoEstatus,
    });
  } catch (error) {
    console.error("Error al actualizar el estatus del pedido:", error);
    throw error;
  }
};

