// SIMULACION DE COMPRA

const btnCompra = document.querySelectorAll(".botoncompra")

let carrito = []
let comprado = ""

function agregarCarrito(list) {
    for (var i = 0, len = list.length; i < len; i++){
        list[i].addEventListener("click", (e) =>{
                comprado = e.target.id
                let select = document.getElementsByClassName(comprado)
                remera = select["Modelo"].innerText.split(" ")[1]
                size = select["talles"].value
                cant = select["Cantidad"].value
                price = select["precio"].innerText.split("$")[1]
                let finalPrice = price * cant
                Swal.fire ({
                    title: "¡Producto agregado al carrito!",
                    position: "top-end",
                    toast: true,
                    showConfirmButton: false,
                    timer: 3000,
                    timerProgressBar: true,
                    color: "whitesmoke",
                    background: "rgb(32, 32, 32)",
                })
                console.log("Producto: " + remera,"- Cantidad " + cant,"- Talle " + size,"- Precio unitario: $ " + price,"- Precio final: $ " + finalPrice)
                carrito.push ([remera, cant, size, price, finalPrice])
                // localStorage.setItem("carrito", JSON.stringify(carrito))
                sessionStorage.setItem("carrito", JSON.stringify(carrito))
            })
    }
}

if (window.location.href.endsWith("shop.html")) {
    if (sessionStorage.getItem("carrito")){
        carrito = JSON.parse(sessionStorage.getItem("carrito"))
    }
}

agregarCarrito(btnCompra)

// REVISAR LOCAL STORAGE

const ordenarCarrito = (list) => {
    list = JSON.parse(list)
    // COMPARAR CADA COMPRA
    for (i = 0; i < list.length; i++) {
        let modelo = list[i][0]
        let cantidad = parseInt(list[i][1])
        let tamaño = list[i][2]
        for (j = i+1, len2 = list.length; j < len2; j++){
            if (modelo == list[j][0] && tamaño == list[j][2]) {
                cantidad += parseInt(list[j][1])
                list.splice(j,1)
                j -= 1
                len2 -= 1
            } 
        }
        list[i][4] = (cantidad * parseInt(list[i][3]))
        list[i][1] = cantidad
    }
    sessionStorage.setItem("carrito", JSON.stringify(list))
}

if (window.location.href.endsWith("carrito.html") && sessionStorage.getItem("carrito")){
    ordenarCarrito (sessionStorage.getItem("carrito"))
}

//AGREGADO AL CARRITO

const cargarCarrito = () => {
    if (sessionStorage.getItem("carrito")) {
        let carro = JSON.parse(sessionStorage.getItem("carrito"))
            for (elemento of carro) {
                carrito.push(elemento)
            }
    }
}

window.location.href.endsWith("carrito.html")&&
    cargarCarrito ()

function agregarRemeras(list) {
    list = JSON.parse(list)
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

if (sessionStorage.getItem("carrito") && window.location.href.endsWith("carrito.html")){
    agregarRemeras(sessionStorage.getItem("carrito"))
}

function finalPrice (list){
    let final = 0
    for (var i = 0, len = list.length; i < len; i++){
        final += list[i][4]
    }
    const finalPrice = document.querySelector(".totalPrice")
    finalPrice.insertCell(1).innerHTML = "$" + final
}

if (sessionStorage.getItem("carrito") && window.location.href.endsWith("carrito.html")){
    finalPrice(carrito)
}

//CLEAR CARRITO Y CHECKOUT

const finalizarCompra = document.querySelector("#checkOut");

if (sessionStorage.getItem("carrito") && window.location.href.endsWith("carrito.html")){
    finalizarCompra.addEventListener("click", () => {
        Swal.fire({
            title: '¡Muchas Gracias!',
            text: 'Pronto te estará llegando un mail con los datos de envio.',
            icon: 'success',
            color: "whitesmoke",
            background: "rgb(32, 32, 32)",
            confirmButtonColor: "#e0383f",
            })
            .then ((result) => {
                if (result.isConfirmed) {
                    Swal.fire (
                        sessionStorage.clear("carrito"),
                        location.href= "shop.html"
                    )
                }
            })
            
        })
} 

//CARRITO EMPTY IMG

if (window.location.href.endsWith("carritoEmpty.html")){
    
    const carritoEmptyImg = document.querySelector(".carritoVacioImg")
    
    carritoEmptyImg.addEventListener("click", () => {
        location.href= "shop.html"
          })
    
    const carritoEmptyBlImg = document.querySelector(".carritoVacioBlImg")
    
    carritoEmptyBlImg.addEventListener("click", () => {
        location.href= "shop.html"
          })
}

