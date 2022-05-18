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


(async () => {

    const { value: nombre } = await Swal.fire({
      title: "Ingrese el Nombre",
      input: "text",
      showCancelButton: false,
      inputValidator: (value) => {
        if (!value) {
          return "Por favor ingrese un nombre";
        }
      },
    });

    const { value: valor } = await Swal.fire({
        title: "Ingrese el Precio",
        input: "text",
        showCancelButton: false,
        inputValidator: (value) => {
          if (!value) {
            return "Por favor ingrese un valor";
          }
        },
      });
    
    const { value: stock } = await Swal.fire({
          title: "Ingrese el Stock",
          input: "text",
          showCancelButton: false,
          inputValidator: (value) => {
            if (!value) {
              return "Por favor ingrese el stock";
            }
          },
        });
    
    let valorConIva = sumarIva(valor) ;
    let valorContado = descuento(valor);
    
productos.push(new Producto(id, nombre, valor, stock, valorConIva, valorContado));

listaMemoria.push(new Producto(id, nombre, valor, stock, valorConIva, valorContado));

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

})(); //cierre del async

} //final de la funcion agregar elemento

function eliminarProducto (productID){
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

    setTimeout(() => {
        location.reload()
    }, 1600);
}

function editarElemento(producID) {

    (async () => {

        const { value: opcion } = await Swal.fire({
          title: "Ingrese el item a editar",
          input: "text",
          inputLabel: '1- Nombre 2- Stock 3- Precio',
          showCancelButton: false,
          inputValidator: (value) => {
            if (!value) {
              return "Por favor ingrese un valor";
            }
          },
        });

        modificarProducto (opcion, producID)

    })(); //cierre del async

}

function modificarProducto(opcion, id){
    let productosLS = JSON.parse(localStorage.getItem('listaProductos'));
    if(opcion == 1){
        (async () => {

            const { value: nombreProducto } = await Swal.fire({
              title: "Ingrese el nuevo nombre",
              input: "text",
              showCancelButton: false,
              inputValidator: (value) => {
                if (!value) {
                  return "Por favor ingrese un valor";
                }
              },
            });
            
            let elemento = productosLS.find(elemento => elemento.id == id);
            elemento.nombre = nombreProducto;
            
            localStorage.setItem('listaProductos', JSON.stringify(productosLS));

            Swal.fire({
                position: 'center',
                icon: 'success',
                title: 'El nombre se modificó correctamente',
                showConfirmButton: false,
                timer: 1500
            })

            setTimeout(() => {
                location.reload()
            }, 1600);

        })(); //cierre del async

    }else if(opcion == 2){
            (async () => {

                const { value: stockProducto } = await Swal.fire({
                  title: "Ingrese el nuevo stock",
                  input: "text",
                  showCancelButton: false,
                  inputValidator: (value) => {
                    if (!value) {
                      return "Por favor ingrese un valor";
                    }
                  },
                });

            let elemento = productosLS.find(elemento => elemento.id == id);
            elemento.stock = stockProducto;

            localStorage.setItem('listaProductos', JSON.stringify(productosLS));

            Swal.fire({
                position: 'center',
                icon: 'success',
                title: 'El stock se modificó correctamente',
                showConfirmButton: false,
                timer: 1500
        })
                setTimeout(() => {
                    location.reload()
                }, 1600);

            })(); //cierre del async

    }else if(opcion == 3){
            (async () => {

                const { value: precioProducto } = await Swal.fire({
                  title: "Ingrese el nuevo precio",
                  input: "text",
                  showCancelButton: false,
                  inputValidator: (value) => {
                    if (!value) {
                      return "Por favor ingrese un valor";
                    }
                  },
                });

            let precioConIva = sumarIva(precioProducto);
            let precioDescuento = descuento(precioProducto);
            
            let elemento = productosLS.find(elemento => elemento.id == id);
            elemento.precio = precioProducto;
            
            let elemento2 = productosLS.find(elemento2 => elemento2.id == id);
            elemento2.valorConIva = precioConIva;
            
            let elemento3 = productosLS.find(elemento3 => elemento3.id == id);
            elemento3.valorContado = precioDescuento;

            localStorage.setItem('listaProductos', JSON.stringify(productosLS));

            Swal.fire({
                position: 'center',
                icon: 'success',
                title: 'El precio se modificó correctamente',
                showConfirmButton: false,
                timer: 1500
            })

                setTimeout(() => {
                    location.reload()
                }, 1600);

            })(); //cierre del async

    }else{

    }


}