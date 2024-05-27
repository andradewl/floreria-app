import { auth, db} from './firfebase';
import {collection, getDocs, getDoc, doc,  query, where, setDoc, addDoc, updateDoc  } from 'firebase/firestore';
import { Flower, ProductoExtra, NuevoPedido, Tipoflores, Ocasionest } from '../interfaces/interfaces';
import { createUserWithEmailAndPassword, signInWithEmailAndPassword } from 'firebase/auth';


export const addUser = async (nombre: string, apellido: string, email: string, password: string) => {
    const userQuery = query(collection(db, 'usuarios'), where('email', '==', email));
    const userSnapshot = await getDocs(userQuery);

    if (!userSnapshot.empty) {
        throw new Error('¡Este correo electrónico ya está registrado!');
    }

    return new Promise((resolve, reject) => {
        createUserWithEmailAndPassword(auth, email, password)
        .then(async (credential) => {
            console.log(credential);
            const ref = doc(db, "usuarios", credential.user.uid);
            await setDoc(ref, {
                nombre: nombre,
                apellido: apellido,
                email: email,
                tipoUsuario: 'comprador'
            });
            resolve(true); // User creation successful
        })
        .catch((err) => {
            reject(err); // User creation failed
        });
    });
};


export const apartarProducto = async (idProducto: string, cantidad: number) => {

    console.log(idProducto,cantidad)
    const userQuery = query(collection(db, 'productoApartados'), where('idProducto', '==', idProducto));
    const userSnapshot = await getDocs(userQuery);

    if (!userSnapshot.empty) {
        // Producto encontrado, actualizar la cantidad
        userSnapshot.forEach(async (documento) => {
            const productoRef = doc(db, 'productoApartados', documento.id);
            const nuevaCantidad = documento.data().cantidad + cantidad;
            await updateDoc(productoRef, { cantidad: nuevaCantidad });
        });
    } else {
        // Producto no encontrado, agregar nuevo producto apartado
        await addDoc(collection(db, 'productoApartados'), {
            idProducto: idProducto,
            cantidad: cantidad,
            // fechaApartado: new Date()
        });
    }

    return true
};

export const productoOcasionId = async(idOcasion:string): Promise<Flower[]>=>{

    const userQuery = query(collection(db, 'Flores'), where('ocasion', '==', idOcasion));
    const userSnapshot = await getDocs(userQuery);

    const products: Flower[] = userSnapshot.docs.map(doc => {
        const data = doc.data();
        const flower: Flower = {
            id: doc.id,
            sku: data.sku,
            nombre: data.nombre,
            descripcion: data.descripcion,
            imagen: data.imagen,
            precio: data.precio,
            oferta: data.oferta,
            existencias:data.existencias,
            tipoflor:data.tipoflor,
            ocasion:data.ocasion,
            descuento: data.descuento !== undefined ? data.descuento : undefined,
            productosExtra: data.productosExtra !== undefined ? data.productosExtra : []
        };
        return flower;
    });
    return products;
}



export const login = async (email: string, password: string) => {

    return new Promise((resolve, reject) => {
        signInWithEmailAndPassword(auth, email, password)
        .then(async (credential) => {
            console.log(credential);
            const ref = doc(db, "usuarios", credential.user.uid);

            const docSnap = await getDoc(ref)

            if(docSnap.exists()){
                    sessionStorage.setItem("userlogIn", JSON.stringify({
                        id:credential.user.uid,
                        name: docSnap.data().nombre,
                        email:docSnap.data().email,
                        tipoUsuario: docSnap.data().tipoUsuario
                    }) )
                    sessionStorage.setItem("credentials", JSON.stringify(credential.user))
            }
            console.log(docSnap)
            resolve(true);
        })
        .catch((err) => {
            reject(err);
        });
    });
};

export const getProducts = async (): Promise<Flower[]> => {
    const result = await getDocs(query(collection(db,'Flores')));
    const products: Flower[] = result.docs.map(doc => {
        const data = doc.data();
        const flower: Flower = {
            id: doc.id,
            sku: data.sku,
            nombre: data.nombre,
            descripcion: data.descripcion,
            imagen: data.imagen,
            precio: data.precio,
            oferta: data.oferta,
            existencias:data.existencias,
            tipoflor:data.tipoflor,
            ocasion:data.ocasion,
            descuento: data.descuento !== undefined ? data.descuento : undefined,
            productosExtra: data.productosExtra !== undefined ? data.productosExtra : []
        };
        return flower;
    });
    return products;
};

export const getTipoFlores = async (): Promise<Tipoflores[]> => {
    const result = await getDocs(query(collection(db,'TipoFlores')));
    const products: Tipoflores[] = result.docs.map(doc => {
        const data = doc.data();
        const tipoflores: Tipoflores = {
            id: doc.id,
            nombre: data.nombre
        };
        return tipoflores;
    });
    return products;
};

export const getOcasiones = async (): Promise<Ocasionest[]> => {
    const result = await getDocs(query(collection(db,'ocasiones')));
    const products: Ocasionest[] = result.docs.map(doc => {
        const data = doc.data();
        const tipoOcasiones: Ocasionest = {
            id: doc.id,
            descripcion: data.descripcion,
            imagen: data.imagen,
            nombre: data.nombre
        };
        return tipoOcasiones;
    });
    return products;
};


export const getProductById = async (productId: string): Promise<Flower | null> => {
    const productDocRef = doc(db, 'Flores', productId);
    try {
        const docSnap = await getDoc(productDocRef);
        if (docSnap.exists()) {
            const productData = docSnap.data();
            if (productData) {
                return {
                    id: docSnap.id,
                    ...productData
                } as Flower;
            }
        }
        return null; // Return null if document does not exist
    } catch (error) {
        console.error('Error getting product:', error);
        return null;
    }
};


export const getexistenciaProductById = async (productId: string): Promise<Flower | null> => {
    const productDocRef = doc(db, 'Flores', productId);

    try {
        const docSnap = await getDoc(productDocRef);
        if (docSnap.exists()) {
            const productData = docSnap.data();
            if (productData) {
                return {
                    id: docSnap.id,
                    ...productData
                } as Flower;
            }
        }
        return null; // Return null if document does not exist
    } catch (error) {
        console.error('Error getting product:', error);
        return null;
    }
};

export const getProductsExtraByIds = async (productIds: string[]): Promise<ProductoExtra[]> => {
        const productsRef = collection(db, 'productosExtra');
        // Crear una consulta con where para filtrar por los IDs de productos
        const q = query(productsRef, where('__name__', 'in', productIds));
        const querySnapshot = await getDocs(q);

        const productsExtra: ProductoExtra[] = querySnapshot.docs.map(doc => {
            const data = doc.data();
            const extra: ProductoExtra = {
                id: doc.id,
                nombre: data.nombre,
                imagen: data.imagen,
                precio: data.precio,
                existencia: data.existencia
            };
            return extra;
        });
        return productsExtra;
};


export const addPedido = async (pedidoData:NuevoPedido) => {
    try {
        const pedidoRef = await addDoc(collection(db, 'pedidos'), pedidoData);
        console.log("Pedido añadido con ID: ", pedidoRef.id);
        return pedidoRef.id; // Devuelve el ID del nuevo pedido
    } catch (error) {
        console.error("Error añadiendo pedido: ", error);
        throw new Error("Error al añadir pedido a Firebase");
    }
};


export const descontarProdcutos = async(docId:string, subtractValue:number)=>{
    const docRef = doc(db, "Flores", docId);

    try {
        const docSnap = await getDoc(docRef);
        if (docSnap.exists()) {
            const currentQuantity = docSnap.data().existencias;
            const newQuantity = currentQuantity - subtractValue;
            await updateDoc(docRef, {
                existencias: newQuantity
            });
            return true
        } else {
            return false
        }
    } catch (error) {
        return false
    }
}

