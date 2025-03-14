import { auth, db, provider } from './firfebase';
import { collection, getDocs, getDoc, doc, query, where, setDoc, addDoc, updateDoc, limit, startAfter } from 'firebase/firestore';
import { Flower, ProductoExtra, NuevoPedido, Tipoflores, Ocasionest, facturacionLogin, PrecioEnvio } from '../interfaces/interfaces';
import { createUserWithEmailAndPassword, signInWithEmailAndPassword, signInWithPopup } from 'firebase/auth';
import { BadRequest, CalledBD } from './errors';


export const addUser = async (name: string, lastname: string, email: string, phone: string, password: string) => {
    if (!name || !lastname || !email || !phone || !password) {
        throw new BadRequest('Todos los campos son obligatorios');
    }

    try {
        const userQuery = query(collection(db, 'usuarios'), where('email', '==', email));
        const userSnapshot = await getDocs(userQuery);

        if (!userSnapshot.empty) {
            throw new CalledBD('¡Este correo electrónico ya está registrado!');
        }

        const credential = await createUserWithEmailAndPassword(auth, email, password);
        const userRef = doc(db, "usuarios", credential.user.uid);

        await setDoc(userRef, {
            name,
            lastname,
            email,
            phone,
            tipoUsuario: 'comprador'
        });

        return true;
    } catch (e: any) {
        if (e.code === 'auth/email-already-in-use') {
            throw new CalledBD('El correo ya está en uso');
        } else if (e.code === 'auth/weak-password') {
            throw new BadRequest('La contraseña es demasiado débil');
        }
        throw new BadRequest('Hubo un error al registrarse, inténtelo más tarde');
    }
};


export const loginWithGoogle2 = async () => {
    try {
        const result = await signInWithPopup(auth, provider);
        const nameUser = result.user.displayName;
        const emailUser = result.user.email;

        const userQuery = query(collection(db, 'usuarios'), where('email', '==', emailUser));
        const userSnapshot = await getDocs(userQuery);

        if (userSnapshot.empty) {
            await setDoc(doc(db, "usuarios", result.user.uid), {
                nombre: nameUser,
                apellido: '',
                email: emailUser,
                tipoUsuario: "comprador"
            });

            const ref = doc(db, "usuarios", result.user.uid);
            const docSnap = await getDoc(ref)

            if (docSnap.exists()) {
                sessionStorage.setItem("userlogIn", JSON.stringify({
                    id: result.user.uid,
                    name: docSnap.data().name,
                    email: docSnap.data().email,
                    tipoUsuario: docSnap.data().tipoUsuario
                }))
                sessionStorage.setItem("credentials", JSON.stringify(result.user))
            }
            window.location.href = '/';

        } else {
            const ref = doc(db, "usuarios", result.user.uid);
            const docSnap = await getDoc(ref)

            if (docSnap.exists()) {
                sessionStorage.setItem("userlogIn", JSON.stringify({
                    id: result.user.uid,
                    name: docSnap.data().nombre,
                    email: docSnap.data().email,
                    tipoUsuario: docSnap.data().tipoUsuario
                }))
                sessionStorage.setItem("credentials", JSON.stringify(result.user))
            }
            window.location.href = '/';
        }

    } catch (e) {
        throw new BadRequest('Error en el Login, intentelo de nuevo');
    }
}

export const loginWithGoogle = async () => {
    try {
        const result = await signInWithPopup(auth, provider);
        const { displayName: nameUser, email: emailUser, uid } = result.user;

        const userQuery = query(collection(db, 'usuarios'), where('email', '==', emailUser));
        const userSnapshot = await getDocs(userQuery);

        if (userSnapshot.empty) {
            await setDoc(doc(db, "usuarios", uid), {
                nombre: nameUser,
                apellido: '',
                email: emailUser,
                tipoUsuario: "comprador"
            });
        }

        const userDocRef = doc(db, "usuarios", uid);
        const userDocSnap = await getDoc(userDocRef);

        if (userDocSnap.exists()) {
            const userData = userDocSnap.data();
            sessionStorage.setItem("userlogIn", JSON.stringify({
                id: uid,
                name: userData.nombre,
                email: userData.email,
                tipoUsuario: userData.tipoUsuario
            }));
            sessionStorage.setItem("credentials", JSON.stringify(result.user));
        }

        window.location.href = '/';

    } catch (e) {
        //console.error('Error en el Login:', error);
        throw new BadRequest('Hubo un error al registraste, inténtelo de nuevo o más tarde');

    }
};

export const apartarProducto = async (idProducto: string, cantidad: number) => {

    // console.log(idProducto,cantidad)
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

export const productoOcasionId = async (idOcasion: string): Promise<Flower[]> => {

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
            existencias: data.existencias,
            tipoflor: data.tipoflor,
            ocasion: data.ocasion,
            descuento: data.descuento !== undefined ? data.descuento : undefined,
            productosExtra: data.productosExtra !== undefined ? data.productosExtra : []
        };
        return flower;
    });
    return products;
}


export const login = async (email: string, password: string) => {
    try {
        const credential = signInWithEmailAndPassword(auth, email, password)
        const ref = doc(db, "Flores", (await credential).user.uid);
        const docSnap = await getDoc(ref)

        if (docSnap.exists()) {
            sessionStorage.setItem("userlogIn", JSON.stringify({
                id: (await credential).user.uid,
                name: docSnap.data().name,
                email: docSnap.data().email,
                tipoUsuario: docSnap.data().tipoUsuario
            }))
            sessionStorage.setItem("credentials", JSON.stringify((await credential).user))
        }
        return true
    } catch (e) {
        throw new BadRequest('Error en las crenciales, intentelo de nuevo');
    }
};

export const getProducts = async (): Promise<Flower[]> => {
    const result = await getDocs(query(collection(db, 'Flores')));
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
            existencias: data.existencias,
            tipoflor: data.tipoflor,
            ocasion: data.ocasion,
            descuento: data.descuento !== undefined ? data.descuento : undefined,
            productosExtra: data.productosExtra !== undefined ? data.productosExtra : []
        };

        return flower;
    });
    return products;
};

export const fetchProducts = async (page: number, productsPerPage: number, lastVisible: any = null
  ): Promise<{ products: Flower[]; newLastVisible: any; totalProducts: number }> => {
    const productsRef = collection(db, 'Flores');
    let q;
  
    if (page === 1) {
      q = query(productsRef, limit(productsPerPage));
    } else {
      q = query(productsRef, startAfter(lastVisible), limit(productsPerPage));
    }
  
    const querySnapshot = await getDocs(q);
    const products: Flower[] = querySnapshot.docs.map(doc => ({
      id: doc.id,
      sku: doc.data().sku,
      nombre: doc.data().nombre,
      descripcion: doc.data().descripcion,
      imagen: doc.data().imagen,
      precio: doc.data().precio,
      oferta: doc.data().oferta,
      existencias: doc.data().existencias,
      tipoflor: doc.data().tipoflor,
      ocasion: doc.data().ocasion,
      descuento: doc.data().descuento,
      productosExtra: doc.data().productosExtra,
    }));
  
    // Obtener el último documento visible para la paginación
    const newLastVisible = querySnapshot.docs[querySnapshot.docs.length - 1];
  
    // Obtener el total de productos
    const totalQuerySnapshot = await getDocs(productsRef);
    const totalProducts = totalQuerySnapshot.size;
  
    return { products, newLastVisible, totalProducts };
  };
  

export const getTipoFlores = async (): Promise<Tipoflores[]> => {
    const result = await getDocs(query(collection(db, 'TipoFlores')));
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
    const result = await getDocs(query(collection(db, 'ocasiones')));
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


export const addPedido = async (pedidoData: NuevoPedido) => {
    try {
        const pedidoRef = await addDoc(collection(db, 'pedidos'), pedidoData);
        // console.log("Pedido añadido con ID: ", pedidoRef.id);
        return pedidoRef.id; // Devuelve el ID del nuevo pedido
    } catch (error) {
        console.error("Error añadiendo pedido: ", error);
        throw new Error("Error al añadir pedido a Firebase");
    }
};


export const descontarProdcutos = async (docId: string, subtractValue: number) => {
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


export const getDatosFacturacionidUser = async (idUser: string): Promise<facturacionLogin[]> => {
    const userQuery = query(collection(db, 'dirFacturacion'), where('relUsuario', '==', idUser));

    try {
        const userSnapshot = await getDocs(userQuery);
        const facturacion: facturacionLogin[] = userSnapshot.docs.map(doc => {
            const data = doc.data();
            const fact: facturacionLogin = {
                id: doc.id,
                nombre: data.nombre,
                apellidos: data.apellido,
                direccion: data.refCalle1,
                colonia: data.colonia,
                estado: data.estado,
                municipio: data.municipio,
                zip: data.zip,
                email: data.email,
                telefono: data.telefono,
            };
            return fact;
        });
        return facturacion;
    } catch (error) {
        console.error('Error getting product:', error);
        return [];
    }
};


export const getDatosEntrega = async (idUser: string): Promise<facturacionLogin[]> => {
    const userQuery = query(collection(db, 'direcciones'), where('relUsuario', '==', idUser));

    try {
        const userSnapshot = await getDocs(userQuery);
        const facturacion: facturacionLogin[] = userSnapshot.docs.map(doc => {
            const data = doc.data();
            const fact: facturacionLogin = {
                id: doc.id,
                nombre: data.nombre,
                apellidos: data.apellido,
                direccion: data.refCalle1,
                colonia: data.colonia,
                estado: data.estado,
                municipio: data.municipio,
                zip: data.zip,
                email: '',
                telefono: data.telDestinatario,
            };
            return fact;
        });
        return facturacion;
    } catch (error) {
        console.error('Error getting product:', error);
        return [];
    }
};


export const dataCodigoPosta = async (cp: string): Promise<PrecioEnvio[]> => {
    try {
        const q = query(collection(db, "codigosPostales"), where("cp", "==", cp));
        const querySnapshot = await getDocs(q);
        if (querySnapshot.empty) {
            return []
        }

        const docs: PrecioEnvio[] = querySnapshot.docs.map(doc => {
            const data = doc.data();
            const envi: PrecioEnvio = {
                cp: data.cp,
                envio: data.envio
            }
            return envi;
        });

        return docs;
    } catch (error) {
        throw new Error("Error al obtener datos de Firebase");
    }
}