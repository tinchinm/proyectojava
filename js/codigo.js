function sumarIva(precio){
    return Math.ceil ( precio * 1.21 );
}

function descuento(precio){
    return Math.ceil ( (sumarIva(precio)) / 1.10 );
}

//declaracion del array
let productos = [];

function agregarElemento(){

class Producto {
    constructor(nombre, precio, stock, valorConIva, valorContado) {
        this.nombre       = nombre;
        this.precio       = precio;
        this.stock        = stock;
        this.valorConIva  = valorConIva;
        this.valorContado = valorContado;
        this.checked      = false;
    }
}

let nombre = prompt("Ingrese el nombre del producto");

while (nombre != "fin") {
    let valor = parseInt ( prompt("Ingrese el valor"));
    let cantidad = parseInt ( prompt("Ingrese el stock"));
    let valorConIva = sumarIva(valor) ;
    let valorContado = descuento(valor);
    
    productos.push(new Producto(nombre, valor, cantidad, valorConIva, valorContado));

    nombre = prompt("Ingrese el nombre del producto, Para terminar escriba fin");
}

let tablaProds = document.getElementById("prods")

for (const producto of productos) {

let filas = document.createElement("tr")

filas.innerHTML = `
                    <td><div class="form-check">
                    <input class="form-check-input" type="checkbox" value="" id="flexCheckDefault">
                    </div></td>
                    <td>${producto.nombre}</td>
                    <td>${producto.stock}</td>
                    <td>$ ${producto.precio}</td>
                    <td>$ ${producto.valorConIva}</td>
                    <td>$ ${producto.valorContado}</td>
                    `;

tablaProds.appendChild(filas);
} //cierre del for

} //final de la funcion agregar elemento

function eliminarElemento(){



}

document.getElementById("agregar").onclick = function (){
    agregarElemento();
}

document.getElementById("eliminar").onclick = function (){
    eliminarElemento()
}