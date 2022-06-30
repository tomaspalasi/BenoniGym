//DARKMODE

const btnSwitch = document.querySelector(".darkmode-toggle"); 

btnSwitch.addEventListener("click", () => {
  document.body.classList.toggle("dark")
    localStorage.getItem("dMode") == "False" || localStorage.getItem("dMode") == null ? 
      localStorage.setItem("dMode", "True") :
        localStorage.setItem("dMode", "False")
})

if (localStorage.getItem("dMode") == "True"){
  document.body.classList.toggle("dark")
}

//CARRITO DESDE INDEX

let indice = "";

window.location.href.endsWith("index.html")?
  indice = "pages/": 
    indice = "";

//CARRITO EMPTY BOTON

const continuarCarrito = document.querySelector(".finalizarcompra");

var carritoCheck = JSON.parse(localStorage.getItem("carrito"))

if (window.location.href.endsWith("shop.html")){
  continuarCarrito.addEventListener("click", () => {
    var carritoCheck = JSON.parse(localStorage.getItem("carrito"))
      carritoCheck == null ?
        location.href="carritoEmpty.html":
          location.href="carrito.html"
      })
  }

// CARRITO EMPTY FOOTER Y NAV

const shopCart = document.querySelectorAll(".carritoVacio");

for (let element of shopCart) {
  element.addEventListener("click", () => {
    var carritoCheck = JSON.parse(localStorage.getItem("carrito"))
      carritoCheck == null ?
        location.href= indice + "carritoEmpty.html":
          location.href= indice + "carrito.html"
    }
  )
}



//CARRITO EMPTY MENU RESPO

const carroVacio = document.querySelector("#carroVacio");

carroVacio.addEventListener("click", () => {
  var carritoCheck = JSON.parse(localStorage.getItem("carrito"))
    carritoCheck == null?
      location.href= indice + "carritoEmpty.html":
        location.href= indice + "carrito.html"
    })
