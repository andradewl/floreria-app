import { db, storage } from "../firfebase"; // Importa la instancia de Firestore y Firebase Storage
import { ref, uploadBytes, getDownloadURL } from "firebase/storage"; // Importa los métodos necesarios de Firebase Storage
import {
    collection,
    addDoc,
    query,
    where,
    getDocs,
    doc,
    deleteDoc,
    getDoc,
    updateDoc,
} from "firebase/firestore";


export const agregarOcasion = async (
  descripcion: string,
  nombre: string,
  imagenURL: string // Agregar la URL de la imagen
) => {
  try {
    await addDoc(collection(db, "ocasiones"), {
      descripcion,
      nombre,
      imagen: imagenURL // Guardar la URL de la imagen
    });

    // console.log("Producto agregado correctamente");
  } catch (error) {
    console.error("Error al agregar el producto:", error);
    throw error;
  }
};


// Función para subir una imagen a Firebase Storage y obtener la URL de descarga
export const subirImagenOcasion = async (idProducto: string, imagenFile: File) => {
  try {
    const storageRef = ref(storage, `multimedia/imagenes/ocasiones/${idProducto}/${imagenFile.name}`);
    const uploadTaskSnapshot = await uploadBytes(storageRef, imagenFile);
    const imagenURL = await getDownloadURL(uploadTaskSnapshot.ref);
    return imagenURL;
  } catch (error) {
    console.error('Error al subir la imagen:', error);
    throw error;
  }
};


export const getProducosByIdsOcasiones = async (productIds: string) => {
  const productsRef = collection(db, 'Flores');
  // Crear una consulta con where para filtrar por los IDs de productos
  const q = query(productsRef, where('ocasion', '==', productIds));
  const querySnapshot = await getDocs(q);

  // Verificar si la consulta tiene documentos
  return !querySnapshot.empty;
};


export const deleteOcasionByid = async(id:string) =>{
    const docRef = doc(db, 'ocasiones', id);
    await deleteDoc(docRef);
}

export const deleteContaco = async(id:string) =>{
  const docRef = doc(db, 'Contacto', id);
  await deleteDoc(docRef);
}

export const obtenerOcasionPorId = async (idProducto: string) => {
  try {
    const productoDocRef = doc(db, "ocasiones", idProducto);
    const productoDocSnapshot = await getDoc(productoDocRef);
    if (productoDocSnapshot.exists()) {
      return { id: productoDocSnapshot.id, ...productoDocSnapshot.data() };
    } else {
      throw new Error(`No se encontró ningúna ocasion con el ID ${idProducto}`);
    }
  } catch (error) {
    console.error("Error al obtener la ocasion por ID: ", error);
    throw new Error("Error al obtener la ocasiones por ID");
  }
};


// export const actualizarOcasion = async (
//   idProducto: string,
//   descripcion: string,
//   nombre: string,
//   imagenFile: File // Agregar la imagen como un argumento adicional
// ) => {
//   try {
//     // Subir la nueva imagen a Firebase Storage y obtener la URL de la imagen
//     const imagenURL = await subirImagenOcasion(idProducto, imagenFile);
//     // Actualizar el documento del producto en Firestore con la nueva URL de la imagen
//     await updateDoc(doc(db, "ocasiones", idProducto), {
//       descripcion,
//       nombre,
//       imagen: imagenURL // Actualizar la URL de la imagen en Firestore
//     });

//     // console.log('Producto actualizado correctamente con nueva imagen');
//   } catch (error) {
//     console.error('Error al actualizar el producto:', error);
//     throw error;
//   }
// };


export const actualizarOcasion = async (
  idProducto: string,
  descripcion: string,
  nombre: string,
  imagenFile: File // Agregar la imagen como un argumento adicional
) => {
  try {
    // Subir la nueva imagen a Firebase Storage y obtener la URL de la imagen
    const imagenURL = await subirImagenOcasion(idProducto, imagenFile);

    // Actualizar el documento del producto en Firestore con la nueva URL de la imagen
    await updateDoc(doc(db, "ocasiones", idProducto), {
      descripcion,
      nombre,
      imagen: imagenURL // Actualizar la URL de la imagen en Firestore
    });

    // console.log('Producto actualizado correctamente con nueva imagen');
  } catch (error) {
    console.error('Error al actualizar el producto:', error);
    throw error;
  }
};
