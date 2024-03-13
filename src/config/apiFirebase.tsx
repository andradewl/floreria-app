import {db} from './firfebase';
import {collection,addDoc} from 'firebase/firestore';

export const addUser = (nombre: string, apellido: string,email:string, password: string) => {
    addDoc(collection(db, 'usuarios'), { nombre, apellido, email, password });
}