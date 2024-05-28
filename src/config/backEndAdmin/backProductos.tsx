import { db } from "../firfebase"; // Importa la instancia de Firestore
import {
  collection,
  addDoc,
  getDocs,
  query,
  deleteDoc,
  doc,
  updateDoc,
  getDoc,
  where,
} from "firebase/firestore";

// Función para obtener todos los productos de la colección "Flores"
export const obtenerProductos = async () => {
  try {
    const result = await getDocs(collection(db, "Flores"));
    return result.docs.map((doc) => ({ id: doc.id, ...doc.data() }));
  } catch (error) {
    console.error("Error al obtener los productos:", error);
    throw error;
  }
};

// Función para obtener productos por campo
export const obtenerProductosPorCampo = async (campo: string, valor: string) => {
  try {
    const result = await getDocs(
      query(collection(db, "Flores"), where(campo, "==", valor))
    );
    return result.docs.map((doc) => ({ id: doc.id, ...doc.data() }));
  } catch (error) {
    console.error("Error al obtener los productos por campo:", error);
    throw error;
  }
};

// Función para eliminar un producto de la colección "Flores"
export const eliminarProducto = async (idProducto: string) => {
  try {
    await deleteDoc(doc(db, "Flores", idProducto));
    console.log("Producto eliminado correctamente");
  } catch (error) {
    console.error("Error al eliminar el producto:", error);
    throw error;
  }
};

// Función para obtener un producto por su ID
export const obtenerProductoPorId = async (idProducto: string) => {
  try {
    const productoDocRef = doc(db, "Flores", idProducto);
    const productoDocSnapshot = await getDoc(productoDocRef);
    if (productoDocSnapshot.exists()) {
      return { id: productoDocSnapshot.id, ...productoDocSnapshot.data() };
    } else {
      throw new Error(`No se encontró ningún producto con el ID ${idProducto}`);
    }
  } catch (error) {
    console.error("Error al obtener el producto por ID: ", error);
    throw new Error("Error al obtener el producto por ID");
  }
};

// Función para agregar un producto a la colección "Flores"
export const agregarProducto = async (
  descripcion: string,
  descuento: number,
  existencias: number,
  nombre: string
) => {
  try {
    await addDoc(collection(db, "Flores"), {
      descripcion,
      descuento,
      existencias,
      nombre,
    });

    console.log("Producto agregado correctamente");
  } catch (error) {
    console.error("Error al agregar el producto:", error);
    throw error;
  }
};

// Función para actualizar un producto de la colección "Flores"
export const actualizarProducto = async (
  idProducto: string,
  descripcion: string,
  descuento: number,
  existencias: number,
  nombre: string,
  precio: number
) => {
  try {
    await updateDoc(doc(db, "Flores", idProducto), {
      descripcion,
      descuento,
      existencias,
      nombre,
      precio,
    });

    console.log("Producto actualizado correctamente");
  } catch (error) {
    console.error("Error al actualizar el producto:", error);
    throw error;
  }
};
