// USO DE API "FORMSUBMIT" PARA USO DE FETCH EN CONTACTO

const contact = document.getElementById("formularioContacto");

if (contact){
contact.addEventListener("submit", function (e){
    e.preventDefault();
    fetch("https://formsubmit.co/ajax/benoniteam@gmail.com",{
        method: "POST",
        body: new FormData(e.target)
    })
    .then(res => res.ok ? res.json() :Promise.reject(res))
    .then(json => {
        console.log (json)
    })
    .catch(err => {
        console.log (err)
    })
  
    Swal.fire({
        title: '¡Mensaje Enviado!',
        text: 'Pronto nos pondremos en contacto',
        icon: 'success',
        color: "whitesmoke",
        background: "rgb(32, 32, 32)",
        confirmButtonColor: "#e0383f",
    })
    
    contact.reset();
})
}

// VALIDACION FOMULARIOS REGISTRO Y GUARDADO EN LOCAL STORAGE

let dataReg = []

const nombreReg = document.getElementById("name")
const apellidoReg = document.getElementById("apellido")
const telefonoReg = document.getElementById("tel")
const fechaReg = document.getElementById("date")
const emailReg = document.getElementById("email")
const paisReg = document.getElementById("country")
const passReg = document.getElementById("password1")
const pass2Reg = document.getElementById("password2")
const formReg = document.getElementById("formularioReg")

if (formReg){
formReg.addEventListener("submit", e=>{
    e.preventDefault ()
    if (passReg.value.length <6){
        console.error ("contrasñea corta")
        Swal.fire ({
            title: "Contraseña demasiada corta",
            text: 'Por favor, introduce una contraseña de 6 caracteres o más',
            icon: 'error',
            color: "whitesmoke",
            background: "rgb(32, 32, 32)",
            confirmButtonColor: "#e0383f",
        })
    } if (passReg.value !== pass2Reg.value){
        console.error ("Contraseña distinta")
        Swal.fire ({
            title: "Las contraseñas no coinciden",
            text: 'Por favor, volvé a introducir tu contraseña',
            icon: 'error',
            color: "whitesmoke",
            background: "rgb(32, 32, 32)",
            confirmButtonColor: "#e0383f",
        })
        passReg.value= "";
        pass2Reg.value= "";
    } else if (passReg.value.length >= 6 && passReg.value === pass2Reg.value){
        dataReg.push([nombreReg.value, apellidoReg.value, telefonoReg.value, fechaReg.value, emailReg.value, paisReg.value, passReg.value])
        localStorage.setItem("dataReg", JSON.stringify(dataReg))
        Swal.fire ({
            title: "Registro completo",
            text: 'Bievenido a la familia de BENONI',
            icon: 'success',
            color: "whitesmoke",
            background: "rgb(32, 32, 32)",
            confirmButtonColor: "#e0383f",
        })
        formReg.reset()
    }
})
}

if (window.location.href.endsWith("registro.html")) {
    if (localStorage.getItem("dataReg")){
       dataReg = JSON.parse(localStorage.getItem("dataReg"))
    }
}

// LEVANTAR DATOS DEL LOCALSTORAGE PARA USAR EN LOGIN

const formLog = document.getElementById("formLog")
const emailLog = document.getElementById("emailLog")
const passLog = document.getElementById("passwordLog")
const arrayDatos = JSON.parse(localStorage.getItem("dataReg"))

if (formLog){
    formLog.addEventListener("submit", e=> {
        e.preventDefault();
        for (i=0; i < arrayDatos.length; i++ ){
            if (emailLog.value === arrayDatos[i][4] && passLog.value === arrayDatos[i][6]){
                Swal.fire ({
                    title: "Bienvenido a BENONI",
                    icon: 'success',
                    color: "whitesmoke",
                    background: "rgb(32, 32, 32)",
                    position: "top",
                    toast: true,
                    showConfirmButton: false,
                    timer: 2500,
                })
                setTimeout(function(){
                    location.href= "loginAut.html";
                },1000)
                break
            } else {
                    Swal.fire ({
                    title: "Email o contraseña incorrectos",
                    text: 'Por favor, volvé a introducir tus datos',
                    icon: 'error',
                    color: "whitesmoke",
                    background: "rgb(32, 32, 32)",
                    confirmButtonColor: "#e0383f",
                })
            }
        }
        
    })
}

// Pagina Logueo Correcto y muestra datos

const nombreCuenta = document.getElementById("nombreCuenta")
const fechaCuenta = document.getElementById("fechaNacCuenta")
const telefonoCuenta = document.getElementById("telefonoCuenta")
const emailCuenta = document.getElementById("emailCuenta")
const paisCuenta = document.getElementById("paisCuenta")

function buscarDatos (){
    debugger
    for (i=0; i < arrayDatos.length; i++){
        var nombreCuenta = arrayDatos [i][0] +" "+ arrayDatos [i][1];
        var fechaCuenta = arrayDatos [i][3];
        var telefonoCuenta = arrayDatos [i][2];
        var emailCuenta = arrayDatos [i][4];
        var paisCuenta = arrayDatos [i][5];
    }
    return (nombreCuenta + fechaCuenta + telefonoCuenta + emailCuenta + paisCuenta)
    nombreCuenta.innerHTML
}