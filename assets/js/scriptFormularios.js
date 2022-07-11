// USO DE API "FORMSUBMIT" PARA USO DE FETCH EN CONTACTO

const contact = document.getElementById("formularioContacto");


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
        confirmButtonColor: "#e0383f",
    })

    contact.reset();
})