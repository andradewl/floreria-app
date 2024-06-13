/* eslint-disable @typescript-eslint/no-unused-vars */
import { db } from "../firfebase"; // Importa la instancia de Firestore y Firebase Storage
// import { ref, uploadBytes, getDownloadURL } from "firebase/storage"; // Importa los métodos necesarios de Firebase Storage
import {
  collection,
    deleteDoc,
    doc,
//   addDoc,
  getDocs,
  query,
//   query,
//   deleteDoc,
//   doc,
//   updateDoc,
//   getDoc,
//   where,
} from "firebase/firestore";

interface Contacto {
    id: string;
    nombre: string;
    asunto: string;
    correoElectronico: string;
    mensaje: string;
    telefono: string;
  }


// Función para obtener todos los productos de la colección "Flores"
export const getContactoUusarios = async (): Promise<Contacto[]> => {
    const result = await getDocs(query(collection(db,'Contacto')));
    const products: Contacto[] = result.docs.map(doc => {
        const data = doc.data();
        const tipoOcasiones: Contacto = {
            id: doc.id,
            nombre: data.nombre,
            asunto: data.asunto,
            correoElectronico: data.correoElectronico,
            mensaje: data.mensaje,
            telefono: data.telefono
        };
        return tipoOcasiones;
    });
    return products;
};

export const deleteContactoByid = async(id:string) =>{
    const docRef = doc(db, 'Contacto', id);
    await deleteDoc(docRef);
}