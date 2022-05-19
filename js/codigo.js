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
                    <td id="editar${producto.id}"> <a href="#" "><img src="./imagenes/icons/edit.png" alt="editar" width="20px"></a></td>
                    <td id="borrar${producto.id}"><button type="button" class="borrar-producto btn-close" aria-label="Close"></button> </td>
                    `;

tablaProds.appendChild(filas);

document.getElementById(`editar${producto.id}`).addEventListener("click", () => {editarElemento(`${producto.id}`);});

document.getElementById(`borrar${producto.id}`).addEventListener("click", () => {eliminarProducto(`${producto.id}`);});

}; //cierre del for

}; //cierre del else

//----------------Captura de botones y acciones----------------------------

document.getElementById("agregar").addEventListener("click", () => {agregarElemento();});
