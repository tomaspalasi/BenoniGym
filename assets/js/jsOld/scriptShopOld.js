// //Uso de FUNCION CONSTRUCTORA / DECLARACION DE CLASE para seleccion de prenda en SHOP
// class Producto {
//     constructor(id, nombre, cant, precio) {
//         this.id = id
//         this.nombre = nombre;
//         this.cant = cant;
//         this.precio = precio;
//         this.iva = 1.21
//         }
//         precioConIva(){
//             let pf = this.precio * this.iva
//             return pf.toFixed(2)
//         }
// }

// const producto1 = new Producto(1234, "BENONI", 25, 2500)
// const producto2 = new Producto(2345, "BIELAS", 28, 2400)
// const producto3 = new Producto(3456,"DAVAI", 30, 2800)
// const producto4 = new Producto(4567, "DAVAI!!", 10, 3000)
// const producto5 = new Producto(5678, "MERENGUITOS", 35, 2000)
// const shop = [producto1, producto2, producto3, producto4, producto5]

// //Uso de IF / ELSE / WHILE para ingreso de usuario

// let repetir = true

// while(repetir){
//         let nombre = prompt("Ingrese su nombre")
//         if (nombre == ""){
//             alert ("Tenés que ingresar un nombre");
//         } else {
//             repetir = false
//             alert ("Bienvenido " + nombre);
//         }
//     }
// //Uso de WHILE para ingreso de prendas

// let repetir1 = true
// let prenda = 0
// let stock = 0
// let remeraSelect = ""
// let idRemera = 0

// while (repetir1) {
//     let remera = prompt("¿Que remera vas a llevar? \n 1: BENONI \n 2: BIELAS \n 3: DAVAI \n 4: DAVAI!! \n 5: MERENGUITOS").toUpperCase();
//     switch (remera) {
//         case "BENONI":
//             alert ("Seleccionaste " + remera)
//             idRemera = producto1.id
//             remeraSelect = producto1.nombre
//             prenda = producto1.precioConIva()
//             stock=producto1.cant
//             repetir1 = false;
//             break;
//         case "BIELAS":
//             alert ("Seleccionaste " + remera)
//             idRemera = producto2.id
//             remeraSelect = producto2.nombre
//             prenda = producto2.precioConIva()
//             stock=producto2.cant
//             repetir1 = false;
//             break; 
//         case "DAVAI":
//             alert ("Seleccionaste " + remera)
//             idRemera = producto3.id
//             remeraSelect = producto3.nombre
//             prenda = producto3.precioConIva()
//             stock=producto3.cant
//             repetir1 = false;
//             break; 
//         case "DAVAI!!":
//             alert ("Seleccionaste " + remera)
//             idRemera = producto4.id
//             remeraSelect = producto4.nombre
//             prenda = producto4.precioConIva()
//             stock=producto4.cant
//             repetir1 = false;
//             break; 
//         case "MERENGUITOS":
//             alert ("Seleccionaste " + remera)
//             idRemera = producto5.id
//             remeraSelect = producto5.nombre
//             prenda = producto5.precioConIva()
//             stock=producto5.cant
//             repetir1 = false;
//             break;      
//         default:
//             alert ("Debés seleccionar una remera")
//             repetir1 = true;   
//     }
// }

// //Uso de ARRAYS / FUNCIONES SUPERIORES para buscar o filtrar de Productos

// function buscarProducto() {
//     let busqueda =  prompt ("¿Querés buscar un producto con su nombre?").toUpperCase()
//         if (busqueda === "SI") {
//             let busquedaNombre = prompt ("¿Qué remera buscás?").toUpperCase()
//             debugger
//             let resultadoBusqueda = shop.find((producto)=> producto.nombre.includes(busquedaNombre))
//                 console.clear()
//                 if (resultadoBusqueda){
//                     alert ("Tenemos en stock la remera:")
//                     console.table(resultadoBusqueda)
//                 } else {
//                     alert ("No tenemos lo que buscás")
//                 }
//         } else if (busqueda === "NO"){
//             let busquedaId = parseInt(prompt ("Ingresá el ID que buscás: "))
//             debugger
//             let resultadoBusquedaId = shop.find((producto)=> producto.id == busquedaId)
//                 console.clear()
//                 if (resultadoBusquedaId){
//                     alert ("Tenemos en stock la remera con ID" + busquedaId)
//                     console.table(resultadoBusquedaId)
//                 } else {
//                     alert ("No tenemos el ID que ingresaste")
//                 }
//         } else {
//             alert (busqueda + " No es un parámetro de búsqueda")
//     }
// }

// function filtrarProducto (){
//     let filtro = prompt ("¿Qué remera buscás?").toUpperCase()
//             debugger
//             let resultadoFiltro = shop.filter((producto)=> producto.nombre.includes(filtro))
//                 if (resultadoFiltro !== undefined){
//                     alert ("Tenemos en stock los siguientes productos:")
//                     console.clear()
//                     console.table(resultadoFiltro)
//                 }
// }

// //Uso de SWITCH para seleccion de color en SHOP

// let repetir2 = true

// while (repetir2){
//     let color = prompt("Elegí un color de remera:").toLowerCase();
//     switch (color) {
//         case "blanco":
//             console.log("Hay stock en", color)
//             alert ("Tenemos stock en "+color)
//             repetir2 = false;
//             break;
//         case "negro":
//             console.log("Hay Stock en", color)
//             alert ("Tenemos stock en "+color)
//             repetir2 = false;
//             break;
//         case "gris":
//             console.warn("Ultimas prendas en", color)
//             alert ("¡Apurate! Ultimas remeras en "+color)
//             repetir2 = false;
//             break;
//         case "verde":
//             console.log("No hay stock en", color ,"seleccioná un color nuevamente")
//             alert ("Nos quedamos sin stock en "+color +" seleccioná un color nuevamente")
//             repetir2 = true;
//             break;
//         case "azul":
//             console.log("No hay stock en", color ,"seleccioná un color nuevamente")
//             alert ("Nos quedamos sin stock en "+color +" seleccioná un color nuevamente")
//             repetir2 = true;
//             break;        
//         default:
//             console.error("No realizamos remeras en", color, "por favor, seleccioná un color nuevamente")
//             alert ("No realizamos prendas en "+color +" por favor, seleccioná un color nuevamente")
//             repetir2 = true;
//     }   
// }

// //Uso de OPERACIONES MATEMATICAS para contar la cantidad de prendas disponibles y calcular el precio en cuotas


// let repetir3 = true
// let repetir4 = true

// let cantidad = 0
// while(repetir3){
//     cantidad = parseInt (prompt("¿Cuantas remeras querés comprar?"))
//     let resultado = stock - cantidad;
//         if (cantidad > stock){
//             alert ("No tenemos esa cantidad");
//             continue;
//         } else {
//             repetir3 = false
//             alert (`Actualmente quedan en stock: ${resultado}`);
//         }
//     let cantidadRemeras = cantidad * prenda
//         alert ("Total de la compra: $" + cantidadRemeras)
//     while (repetir4){
//         let cuotas = parseInt (prompt("¿En cuantas cuotas querés realizar el pago?"))
//         let resultado2 = cantidadRemeras / cuotas;
//         if (cuotas > 12){
//             alert ("Solo realizamos hasta 12 cuotas");
//             continue;
//         } else {
//             alert ("El precio final de cada cuota es de: $"+ resultado2.toFixed(1));
//             repetir4 = false
//         }
//     }
// }

// // CARRITO DE COMPRAS

// let precioFinal = cantidad * prenda

// function agregarRemeras() {
//     const tablaProductos = document.getElementById ("carritoCompras").insertRow(-1);
//     let id = tablaProductos.insertCell(0)
//     let nombre = tablaProductos.insertCell(1)
//     let cant = tablaProductos.insertCell(2)
//     let precio = tablaProductos.insertCell(3)

//     id.innerHTML = idRemera
//     nombre.innerHTML =  remeraSelect
//     cant.innerHTML = cantidad
//     precio.innerHTML = "$"+ precioFinal
// }