debugger

//Uso de IF / ELSE / WHILE para ingreso de usuario

let repetir = true

while(repetir){
        let nombre = prompt("Ingrese su nombre")
        if (nombre == ""){
            alert ("Tenés que ingresar un nombre");
        } else {
            repetir = false
            alert ("Bienvenido " + nombre);
        }
    }

//Uso de FUNCION CONSTRUCTORA / DECLARACION DE CLAE para seleccion de prenda en SHOP
class Producto {
    constructor(nombre, cantidad, precio) {
        this.nombre = nombre;
        this.cantidad = cantidad;
        this.precio = precio;
        this.iva = 1.21
        }
        precioConIva(){
            let pf = this.precio * this.iva
            return pf.toFixed(2)
        }
}

const producto1 = new Producto("BENONI", 20, 2500)
const producto2 = new Producto("BIELAS", 20, 2500)
const producto3 = new Producto("DAVAI", 20, 2500)
const producto4 = new Producto("DAVAI!!", 20, 2500)
const producto5 = new Producto("MERENGUITOS", 20, 2500)


let repetir1 = true

while (repetir1) {
    let remera = parseInt(prompt("¿Que remera vas a llevar? \n 1: BENONI \n 2: BIELAS \n 3: DAVAI \n 4: DAVAI!! \n 5: MERENGUITOS"))
    switch (remera) {
        case 1:
            alert ("Seleccionaste BENONI")
            repetir1 = false;
            break;
        case 2:
            alert ("Seleccionaste BIELAS")
            repetir1 = false;
            break; 
        case 3:
            alert ("Seleccionaste DAVAI")
            repetir1 = false;
            break; 
        case 4:
            alert ("Seleccionaste DAVAI!!")
            repetir1 = false;
            break; 
        case 5:
            calert ("Seleccionaste MERENGUITOS")
            repetir1 = false;
            break;      
        default:
            alert ("Debés seleccionar una remera")
            repetir1 = true;   
    } 
}
  

let repetir2 = true

while(repetir2){
    let cuotas = parseInt (prompt("¿En cuantas cuotas querés realizar el pago?"))
    let resultado = 2500 * 1.21 / cuotas;
    if (cuotas >12){
        alert ("Solo realizamos hasta 12 cuotas");
    } else {
        repetir2 = false
        alert ("El precio final de cada cuota es de: "+resultado.toFixed(2));
    }
}   

//Uso de SWITCH para seleccion de color en SHOP

let repetir3 = true

while (repetir3){
    let color = prompt("Elegí un color de remera:").toLowerCase();
    switch (color) {
        case "blanco":
            console.log("Hay stock en", color)
            alert ("Tenemos stock en "+color)
            repetir3 = false;
            break;
        case "negro":
            console.log("Hay Stock en", color)
            alert ("Tenemos stock en "+color)
            repetir3 = false;
            break;
        case "gris":
            console.warn("Ultimas prendas en", color)
            alert ("¡Apurate! Ultimas remeras en "+color)
            repetir3 = false;
            break;
        case "verde":
            console.log("No hay stock en", color ,"seleccioná un color nuevamente")
            alert ("Nos quedamos sin stock en "+color +" seleccioná un color nuevamente")
            repetir3 = true;
            break;
        case "azul":
            console.log("No hay stock en", color ,"seleccioná un color nuevamente")
            alert ("Nos quedamos sin stock en "+color +" seleccioná un color nuevamente")
            repetir3 = true;
            break;        
        default:
            console.error("No realizamos remeras en", color, "por favor, seleccioná un color nuevamente")
            alert ("No realizamos prendas en "+color +" por favor, seleccioná un color nuevamente")
            repetir3 = true;
    }   
}

//Uso de OPERACIONES MATEMATICAS para contar la cantidad de prendas disponibles

let repetir4 = true

while(repetir4){
    let cantidad = parseInt (prompt("¿Cuantas remeras querés comprar?"))
    let stock = 20
    let resultado = stock - cantidad;
    if (cantidad >20){
        alert ("No tenemos esa cantidad");
    } else {
        repetir4 = false
        alert (`Actualmente quedan en stock: ${resultado}`);
    }
}

