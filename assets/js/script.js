//DARKMODE

const btnSwitch = document.querySelector(".darkmode-toggle"); 

btnSwitch.addEventListener("click", () => {
  document.body.classList.toggle("dark")
  if (localStorage.getItem("dMode") == "False" || localStorage.getItem("dMode") == null){
    localStorage.setItem("dMode", "True")
  }
  else {
    localStorage.setItem("dMode", "False")
  }
})

if (localStorage.getItem("dMode") == "True"){
  document.body.classList.toggle("dark")
}

//CARRITO EMPTY BOTON

const continuarCarrito = document.querySelector(".finalizarcompra");

continuarCarrito.addEventListener("click", () => {
  if (carrito.length === 0){
    location.href="carritoEmpty.html"
  } 
  else {
    location.href="carrito.html"
  }
})

// CARRITO EMPTY FOOTER Y NAV

const shopCart = document.querySelector(".carritoVacio");

shopCart.addEventListener("click", () => {
  if (carrito.length === 0){
    location.href="carritoEmpty.html"
  } 
  else {
    location.href="carrito.html"
  }
})


//CARRITO EMPTY MENU RESPO

const carroVacio = document.querySelector("#carroVacio");

carroVacio.addEventListener("click", () => {
  if (carrito.length === 0){
    location.href="carritoEmpty.html"
  } else {
    location.href="carrito.html"
  }
})
