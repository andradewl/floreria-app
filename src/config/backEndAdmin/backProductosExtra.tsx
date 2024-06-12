import { db, storage } from "../firfebase"; // Importa la instancia de Firestore y Firebase Storage
import { ref, uploadBytes, getDownloadURL } from "firebase/storage"; // Importa los métodos necesarios de Firebase Storage
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

// Función para obtener todos los productos extra de la colección "productosExtra"
export const obtenerProductosExtra = async () => {
  try {
    const result = await getDocs(collection(db, "productosExtra"));
    return result.docs.map((doc) => ({ id: doc.id, ...doc.data() }));
  } catch (error) {
    console.error("Error al obtener los productos extra:", error);
    throw error;
  }
};

// Función para obtener productos extra por campo
export const obtenerProductosExtraPorCampo = async (campo: string, valor: string) => {
  try {
    const result = await getDocs(
      query(collection(db, "productosExtra"), where(campo, "==", valor))
    );
    return result.docs.map((doc) => ({ id: doc.id, ...doc.data() }));
  } catch (error) {
    console.error("Error al obtener los productos extra por campo:", error);
    throw error;
  }
};

// Función para eliminar un producto extra de la colección "productosExtra"
export const eliminarProductoExtra = async (idProducto: string) => {
  try {
    await deleteDoc(doc(db, "productosExtra", idProducto));
    // console.log("Producto extra eliminado correctamente");
  } catch (error) {
    console.error("Error al eliminar el producto extra:", error);
    throw error;
  }
};

// Función para agregar un producto extra a la colección "productosExtra"
export const agregarProductoExtra = async (
  nombre: string,
  precio: number,
  existencia: number,
  imagenURL: string
) => {
  try {
    await addDoc(collection(db, "productosExtra"), {
      nombre,
      precio,
      existencia,
      imagen: imagenURL,
    });

    // console.log("Producto extra agregado correctamente");
  } catch (error) {
    console.error("Error al agregar el producto extra:", error);
    throw error;
  }
};

// Función para subir una imagen a Firebase Storage y obtener la URL de descarga
export const subirImagen = async (nombreProducto: string, imagenFile: File) => {
  try {
    const storageRef = ref(storage, `productosExtra/${nombreProducto}/${imagenFile.name}`);
    const uploadTaskSnapshot = await uploadBytes(storageRef, imagenFile);
    const imagenURL = await getDownloadURL(uploadTaskSnapshot.ref);
    return imagenURL;
  } catch (error) {
    console.error('Error al subir la imagen:', error);
    throw error;
  }
};

// Función para actualizar un producto extra de la colección "productosExtra"
export const actualizarProductoExtra = async (
  idProducto: string,
  nombre: string,
  precio: number,
  existencia: number,
  imagenFile?: File
) => {
  try {
    if (imagenFile) {
      // Subir la nueva imagen a Firebase Storage y obtener la URL de la imagen
      const imagenURL = await subirImagen(idProducto, imagenFile);
      
      // Actualizar el documento del producto extra en Firestore con la nueva URL de la imagen
      await updateDoc(doc(db, "productosExtra", idProducto), {
        nombre,
        precio,
        existencia,
        imagen: imagenURL // Actualizar la URL de la imagen en Firestore
      });
    } else {
      // Actualizar el documento del producto extra en Firestore sin cambiar la imagen
      await updateDoc(doc(db, "productosExtra", idProducto), {
        nombre,
        precio,
        existencia,
      });
    }

    // console.log('Producto extra actualizado correctamente');
  } catch (error) {
    console.error('Error al actualizar el producto extra:', error);
    throw error;
  }
};

// Función para obtener un producto extra por su ID
export const obtenerProductoExtraPorId = async (idProducto: string) => {
  try {
    const productoExtraDocRef = doc(db, "productosExtra", idProducto);
    const productoExtraDocSnapshot = await getDoc(productoExtraDocRef);
    if (productoExtraDocSnapshot.exists()) {
      return { id: productoExtraDocSnapshot.id, ...productoExtraDocSnapshot.data() };
    } else {
      throw new Error(`No se encontró ningún producto extra con el ID ${idProducto}`);
    }
  } catch (error) {
    console.error("Error al obtener el producto extra por ID:", error);
    throw error;
  }
};
