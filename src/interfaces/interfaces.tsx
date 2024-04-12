//-------------------------------------------- FLORES --------------------------------------------//

interface FlowerWithOferta {
    id: string;
    sku: string;
    nombre: string;
    descripcion: string;
    imagen: string;
    precio: number;
    oferta: number;
    descuento: number;
    productosExtra:[]; // Aquí puedes definir un tipo específico para los productos extra si es necesario
}

interface FlowerWithoutOferta {
    id: string;
    sku: string;
    nombre: string;
    descripcion: string;
    imagen: string;
    precio: number;
    oferta: number;
    descuento?: undefined;
    productosExtra?: undefined;
}


//-------------------------------------------- carrito de compra --------------------------------------------//

interface carritoDeCompra {
    id:string;
    nombre: string;
    precio: number;
    descuento:number;
    imagen:string;
    fecha: string;
    hora: string;
    cantidad:number;
    productoExtra: {
        nombreProductoExtra: string;
        precioProductoExtra: number;
    };
    dedicatoria: string | null;
}


//-------------------------------------------- carrito de compra --------------------------------------------//

interface productoExtra {
    id:string;
    nombre: string;
    precio: number;
    imagen:string;
    existencia:number;
}

//-------------------------------------------- login user --------------------------------------------//

interface userLogin {
    id:string;
    name: string;
    email: string;
}


interface Pedido {
    facturacion: {
        nombre: string;
        apellido: string;
        direccion: string;
        colonia: string;
        ciudad: string;
        estado: string;
        cp: string;
        email: string;
        telefono: string;
    };
    datosEnvio: {
        nombre: string;
        apellido: string;
        direccion: string;
        colonia: string;
        ciudad: string;
        estado: string;
        cp: string;
        email: string;
        telefono: string;
    };
    carritoCompra: carritoDeCompra[];
    idEstado:string;
    uidUserLogin:string

}

export type Flower = FlowerWithOferta | FlowerWithoutOferta;
export type CarritoDeCompra = carritoDeCompra;
export type ProductoExtra = productoExtra;
export type UserLogin = userLogin;

export type NuevoPedido = Pedido;