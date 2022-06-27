// SIMULACION DE COMPRA

const btnCompra = document.querySelectorAll(".botoncompra")

let carrito = []
let comprado = ""

function agregarCarrito(list) {
    existente = false
    for (var i = 0, len = list.length; i < len; i++){
        list[i].addEventListener("click", (e) =>{
                comprado = e.target.id
                let select = document.getElementsByClassName(comprado)
                remera = select["Modelo"].innerText.split(" ")[1]
                size = select["talles"].value
                cant = select["Cantidad"].value
                price = select["precio"].innerText.split("$")[1]
                finalPrice = price * cant
                alert ("Se agregó a tu carrito: Producto: " + remera + " - Cantidad " + cant + " - Talle " + size + " - Precio unitario: $" + price + " - Precio final: $" + finalPrice)
                console.log("Producto: " + remera,"- Cantidad " + cant,"- Talle " + size,"- Precio unitario: $ " + price,"- Precio final: $ " + finalPrice)
                carrito.push ([remera, cant, size, price, finalPrice])
                localStorage.setItem("carrito", JSON.stringify(carrito))
            })
    }
}

agregarCarrito(btnCompra)

//AGREGADO AL CARRITO

const cargarCarrito = () => {
    if (localStorage.getItem("carrito")) {
        let carro = JSON.parse(localStorage.getItem("carrito"))
            for (elemento of carro) {
                carrito.push(elemento)
            }
    }
}

cargarCarrito ()


function agregarRemeras(list) {
    list = list.slice(2,-2).split("],[")
    for (var i = 0, len = list.length; i < len; i++){
        if (list){
            const tablaProductos = document.getElementById ("carritoCompras").insertRow(-1);
            let nombre = tablaProductos.insertCell(0)
            let cantidad = tablaProductos.insertCell(1)
            let talle = tablaProductos.insertCell(2)
            let precioUnitario = tablaProductos.insertCell(3)
            let precioFinal = tablaProductos.insertCell(4)
            
            nombre.innerHTML = carrito [i][0]
            cantidad.innerHTML =  carrito [i][1]
            talle.innerHTML = carrito [i][2]
            precioUnitario.innerHTML = "$"+ carrito [i][3]
            precioFinal.innerHTML = "$"+ carrito [i][4]
        }
    }
}
agregarRemeras(localStorage.getItem("carrito"))

// function finalPrice (list){
//     // list = list.slice(2,-2).split("],[")
//     for (var i = 0, len = list.length; i < len; i++){
//         if (list){
//             const finalPrice = document.getElementById ("finalPrice").insertRow(-1)
//             let precioTotal = finalPrice.insertCell (0)
        
//             precioTotal.innerHTML = "$"+ carrito [i][0]
//         }
//     }
// }

// finalPrice()

//Clear carrito y checkout

const finalizarCompra = document.querySelector("#checkOut");

finalizarCompra.addEventListener("click", () => {
    localStorage.clear("carrito")
});