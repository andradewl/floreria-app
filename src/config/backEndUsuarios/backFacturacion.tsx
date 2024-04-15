import { db } from "../firfebase";
import {
  collection,
  addDoc,
  getDocs,
  query,
  deleteDoc,
  doc,
  where,
  updateDoc,
} from "firebase/firestore";

export const addDirFact = (
  nombre: string,
  apellido: string,
  empresa: string,
  pais: string,
  zip: string,
  estado: string,
  municipio: string,
  colonia: string,
  calle: string,
  NumE: string,
  NumI: string,
  refCalle1: string,
  refCalle2: string,
  telefono: string,
  email: string,
  relUsuario: string
) => {
  addDoc(collection(db, "dirFacturacion"), {
    nombre,
    apellido,
    empresa,
    pais,
    zip,
    estado,
    municipio,
    colonia,
    calle,
    NumE,
    NumI,
    refCalle1,
    refCalle2,
    telefono,
    email,
    relUsuario,
  });
};

export const getDirFact = async (id: string) => {
  const result = await getDocs(query(collection(db, "dirFacturacion", id)));
  return result;
};

export const deleteDirFact = async (id: string) => {
  try {
    await deleteDoc(doc(db, "direcciones", id));
    console.log("dirección eliminada exitosamente");
  } catch (error) {
    console.error("Error al eliminar direccion:", error);
    throw error;
  }
};

export const updateDirFact = async (
  id: string,
  nombre: string,
  apellido: string,
  empresa: string,
  pais: string,
  zip: string,
  estado: string,
  municipio: string,
  colonia: string,
  calle: string,
  NumE: string,
  NumI: string,
  refCalle1: string,
  refCalle2: string,
  telefono: string,
  email: string,
  relUsuario: string
) => {
  try {
    await updateDoc(doc(db, "dirFacturacion", id), {
      nombre: nombre,
      apellido: apellido,
      empresa: empresa,
      pais: pais,
      zip: zip,
      estado: estado,
      municipio: municipio,
      colonia: colonia,
      calle: calle,
      NumE: NumE,
      NumI: NumI,
      refCalle1: refCalle1,
      refCalle2: refCalle2,
      telefono: telefono,
      email: email,
      relUsuario: relUsuario,
    });
  } catch (error) {
    console.error("Error al actualizar la direccion:", error);
  }
};
export const getDireccionesUsuario = async (idUser: string) => {
  const result = await getDocs(
    query(collection(db, "dirFacturacion"), where("relUsuario", "==", idUser))
  );
  return result.docs.map((doc) => ({ id: doc.id, ...doc.data() }));
};
