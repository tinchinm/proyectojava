function sumarIva(precio){
    return Math.ceil ( precio * 1.21 );
}

function descuento(precio){
    return Math.ceil ( (sumarIva(precio)) / 1.10 );
}

function generarId(numero){
    return numero + 1
}

function agregarElemento(){

class Producto {
    constructor(id, nombre, precio, stock, valorConIva, valorContado) {
        this.id           = id;
        this.nombre       = nombre;
        this.precio       = precio;
        this.stock        = stock;
        this.valorConIva  = valorConIva;
        this.valorContado = valorContado;
    }
}

//reemplazo del if por un operador ternario
localStorage.length === 0 ?

    listaMemoria = []

:

    listaMemoria = JSON.parse(localStorage.getItem('listaProductos'));

let id = generarId(listaMemoria.length);
let nombre = prompt("Ingrese el nombre del producto");
let valor = parseInt ( prompt("Ingrese el valor"));
let cantidad = parseInt ( prompt("Ingrese el stock"));
let valorConIva = sumarIva(valor) ;
let valorContado = descuento(valor);

productos.push(new Producto(id, nombre, valor, cantidad, valorConIva, valorContado));

listaMemoria.push(new Producto(id, nombre, valor, cantidad, valorConIva, valorContado));

localStorage.setItem('listaProductos', JSON.stringify(listaMemoria));

Swal.fire({
    position: 'center',
    icon: 'success',
    title: 'Producto agregado correctamente',
    showConfirmButton: false,
    timer: 1500
})

setTimeout(() => {
    location.reload()
}, 1600);

} //final de la funcion agregar elemento

function eliminarProducto (e){
    e.preventDefault();
    let product, productID;
    if(e.target.classList.contains('borrar-producto')){
        e.target.parentElement.parentElement.remove();
        product = e.target.parentElement.parentElement;
        productID = product.querySelector('button').getAttribute('data-id');
    }
    Swal.fire({
        position: 'center',
        icon: 'error',
        title: 'Producto eliminado',
        showConfirmButton: false,
        timer: 1500
    })
    eliminarProductoLocalStorage(productID);
    }

function eliminarProductoLocalStorage(productID){
    let productosLS = JSON.parse(localStorage.getItem('listaProductos'));

productosLS = productosLS.filter(elemento => elemento.id != productID);

localStorage.setItem('listaProductos', JSON.stringify(productosLS));
}

function editarElemento(e) {
        let produc = e.target.parentElement.parentElement;
        let producID = produc.querySelector('a').getAttribute('data-id');
        let opcion = prompt("Ingrese el item a editar 1- Nombre 2- Stock 3- Precio");

    modificarProducto (opcion, producID)
}

function modificarProducto(opcion, id){
    let productosLS = JSON.parse(localStorage.getItem('listaProductos'));
    if(opcion == 1){
        let nombreProducto = prompt("Ingrese el nuevo nombre");
        let elemento = productosLS.find(elemento => elemento.id = id);
        elemento.nombre = nombreProducto;

    localStorage.setItem('listaProductos', JSON.stringify(productosLS));

    Swal.fire({
        position: 'center',
        icon: 'success',
        title: 'El nombre se modificó correctamente',
        showConfirmButton: false,
        timer: 1500
    })

}else if(opcion == 2){
        let stockProducto = prompt("Ingrese el nuevo stock");
        let elemento = productosLS.find(elemento => elemento.id = id);
        elemento.stock = stockProducto;

    localStorage.setItem('listaProductos', JSON.stringify(productosLS));

    Swal.fire({
        position: 'center',
        icon: 'success',
        title: 'El stock se modificó correctamente',
        showConfirmButton: false,
        timer: 1500
    })

}else if(opcion == 3){
        let precioProducto = prompt("Ingrese el nuevo precio");
        let precioConIva = sumarIva(precioProducto);
        let precioDescuento = descuento(precioConIva);
        
        let elemento = productosLS.find(elemento => elemento.id = id);
        elemento.precio = precioProducto;
        
        let elemento2 = productosLS.find(elemento2 => elemento2.id = id);
        elemento2.valorConIva = precioConIva;
        
        let elemento3 = productosLS.find(elemento3 => elemento3.id = id);
        elemento3.valorContado = precioDescuento;

        localStorage.setItem('listaProductos', JSON.stringify(productosLS));

        Swal.fire({
            position: 'center',
            icon: 'success',
            title: 'El precio se modificó correctamente',
            showConfirmButton: false,
            timer: 1500
        })

    }else{

    }

    setTimeout(() => {
        location.reload()
    }, 1600);
}