import { db } from "../firfebase";

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

// Función para crear un producto extra
export const crearProductoExtra = async (productoExtraData: any) => {
    try {
        await addDoc(collection(db, "productosExtra"), productoExtraData); // Uso de addDoc y collection para agregar un documento a la colección
        return true;
    } catch (error) {
        console.error("Error al crear el producto extra:", error);
        return false;
    }
};

// Función para obtener todos los productos extra
export const obtenerProductosExtra = async () => {
    try {
        const querySnapshot = await getDocs(collection(db, "productosExtra")); // Uso de getDocs y collection para obtener todos los documentos de la colección
        const productosExtra = querySnapshot.docs.map((doc) => ({
            id: doc.id,
            ...doc.data(),
        }));
        return productosExtra;
    } catch (error) {
        console.error("Error al obtener los productos extra:", error);
        return [];
    }
};

// Función para actualizar un producto extra
export const actualizarProductoExtra = async (id: string, productoExtraData: any) => {
    try {
        const productoExtraRef = doc(db, "productosExtra", id); // Referencia al documento específico en la colección
        await updateDoc(productoExtraRef, productoExtraData); // Actualización del documento con updateDoc
        return true;
    } catch (error) {
        console.error("Error al actualizar el producto extra:", error);
        return false;
    }
};

// Función para eliminar un producto extra
export const eliminarProductoExtra = async (id: string) => {
    try {
        await deleteDoc(doc(db, "productosExtra", id)); // Eliminación del documento específico con deleteDoc
        return true;
    } catch (error) {
        console.error("Error al eliminar el producto extra:", error);
        return false;
    }
};
