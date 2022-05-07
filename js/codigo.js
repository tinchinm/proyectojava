    let tablaProds = document.getElementById("prods")

    //---------Trayendo los productos desde el JSON----------------------

fetch("./bbdd/productos.json")
    .then((res) => res.json())
    .then((listaProds) => {

//---------Acá distribuye los elementos en la tabla-----------------

listaProds.forEach((producto) => {

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

}); //cierre del for each

}); //cierre del fetch

//----------------Captura de botones y acciones----------------------------

document.getElementById("agregar").addEventListener("click", () => {agregarElemento();});

document.getElementById("prods").addEventListener("click", (e) => {eliminarProducto(e);});

/* document.getElementById("prods").addEventListener("click", (e) => {editarElemento(e);}); */