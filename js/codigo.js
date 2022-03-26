class Producto {
    constructor(nombre, precio, stock) {
        this.nombre  = nombre;
        this.precio  = precio;
        this.stock   = stock;
    }
    vender() {
        this.stock = this.stock - 1;
    }
    agregar() {
        this.stock = this.stock + 1;
    }
    sumaIva() {
        this.precio = this.precio * 1.21;
    }
    descuento() {
        this.precio = this.precio - (this.precio * 0.10);
    }
}

const micro = new Producto("Micro Intel Core i3", "90000", parseInt("5"));
const memoria = new Producto("Memoria DDR4 8GB ", "8000", parseInt("9") );


console.log("El stock actual de ", micro.nombre," es de ", micro.stock, " unidades");

micro.agregar();

console.log("El stock actual de ", micro.nombre," es de ", micro.stock, " unidades");

console.log("El precio de ", micro.nombre, " sin iva es $", micro.precio); 

micro.sumaIva();

console.log("El precio de ", micro.nombre, " con iva es $", micro.precio);

micro.descuento();

console.log("El precio con descuento de ", micro.nombre, " es $", micro.precio); 

console.log("El stock actual de ", memoria.nombre," es de ", memoria.stock, " unidades");

memoria.vender();

console.log("El stock actual de ", memoria.nombre," es de ", memoria.stock, " unidades");