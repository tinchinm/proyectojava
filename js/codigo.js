class Producto {
    constructor(nombre, precio, stock, valorConIva, valorContado) {
        this.nombre       = nombre;
        this.precio       = precio;
        this.stock        = stock;
        this.valorConIva  = valorConIva;
        this.valorContado = valorContado;
    }
}

let productos = [];

let nombre = prompt("Ingrese el nombre del producto");

while (nombre != "salir") {
    let valor = parseInt ( prompt("Ingrese el valor"));
    let cantidad = parseInt ( prompt("Ingrese el stock"));
    let valorConIva = Math.ceil ( valor * 1.21 ) ;
    let valorContado = Math.ceil ( valorConIva / 1.10 );
    
    productos.push(new Producto(nombre, valor, cantidad, valorConIva, valorContado));

    nombre = prompt("Ingrese el nombre del producto, Para terminar escriba salir");
}

console.log(productos);

const nombres = productos.map((el) => el.nombre)

console.log(nombres)

const filtrado = productos.filter((el) => el.precio < 1000)

console.log(filtrado)
