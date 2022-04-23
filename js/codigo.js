//declaracion del array

let productos = [];

if(localStorage.length === 0){

}else{

//---------Parseado de datos con JSON desde local storage-------------

let listaProds = JSON.parse(localStorage.getItem('listaProductos'))

//---------Acá distribuye los elementos en la tabla-----------------

let tablaProds = document.getElementById("prods")

for (const producto of listaProds) {

let filas = document.createElement("tr")

filas.innerHTML = `
                    <td>${producto.id}</td>
                    <td>${producto.nombre}</td>
                    <td>${producto.stock}</td>
                    <td>$ ${producto.precio}</td>
                    <td>$ ${producto.valorConIva}</td>
                    <td>$ ${producto.valorContado}</td>
                    <td> <a href="#" id="editar" class="editar-elemento" data-id="${producto.id}" ><img src="./img/icons/edit.png" alt="editar" width="20px"></a></td>
                    <td><button type="button" id="borrar" class="borrar-producto btn-close" aria-label="Close" data-id="${producto.id}" ></button> </td>
                    `;

tablaProds.appendChild(filas);
}; //cierre del for

}; //cierre del else

//----------------Captura de botones y acciones----------------------------

document.getElementById("agregar").onclick = function (){agregarElemento();};

document.getElementById("prods").addEventListener("click", (e) => {eliminarProducto(e);});

/* document.getElementById("prods").addEventListener("click", (e) => {editarElemento(e);}); */