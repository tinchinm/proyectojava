class Producto {
    constructor(nombre, precio, stock) {
        this.nombre  = nombre;
        this.precio  = precio;
        this.stock   = stock;
    }
    vender() {
        this.stock = this.stock - 1;
    }
    sumaIva() {
        this.precio = this.precio * 1.21;
    }
}

const micro = new Producto("Micro Intel Core i3", "90000", "5");
const memoria = new Producto("Memoria DDR4 8GB ", "8000", "9");

console.log("El precio de ", micro.nombre, " sin iva es ", micro.precio); 

micro.sumaIva();

console.log("El precio de ", micro.nombre, " con iva es ", micro.precio);

console.log("El stock actual de ", memoria.nombre," es ", memoria.stock);

memoria.vender();

console.log("El stock actual de ", memoria.nombre," es ", memoria.stock);