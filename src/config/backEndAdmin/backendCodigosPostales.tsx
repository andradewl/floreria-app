/* eslint-disable @typescript-eslint/no-explicit-any */
import { Codigospostales } from "../../interfaces/interfaces";
import { db } from "../firfebase";
import { addDoc, collection, deleteDoc, doc, getDoc, getDocs, query, updateDoc } from "firebase/firestore";




export const getCodigosPostales = async (): Promise<Codigospostales[]> => {
    const result = await getDocs(query(collection(db,'codigosPostales')));
    const cp: Codigospostales[] = result.docs.map(doc => {
        const data = doc.data();
        const codigoPostal: Codigospostales = {
            id: doc.id,
            cp: data.cp,
            envio: data.envio,
        };
        return codigoPostal;
    });
    return cp;
};

export const nuevoCodigoPostal = async (codigoPostal:string, envio:number) => {
    await addDoc(collection(db, "codigosPostales"), {
        cp:codigoPostal,
        envio:envio
    });
};

export const deleteCodigoPostal = async (id:string) => {
    await deleteDoc(doc(db, 'codigosPostales', id));
};


export const getCPById = async (cpId: string): Promise<Codigospostales | null> => {
    const productDocRef = doc(db, 'codigosPostales', cpId);
    try {
        const docSnap = await getDoc(productDocRef);
        if (docSnap.exists()) {
            const productData = docSnap.data();
            if (productData) {
                return {
                    id: docSnap.id,
                    ...productData
                } as Codigospostales;
            }
        }
        return null; // Return null if document does not exist
    } catch (error) {
        console.error('Error getting product:', error);
        return null;
    }
};


export const actualizarCodigoPostal = async (id:string, nuevoCodigoPostal:string, nuevoEnvio:number) => {
    const docRef = doc(db, "codigosPostales", id);

    await updateDoc(docRef, {
        cp: nuevoCodigoPostal,
        envio: nuevoEnvio
    })

};