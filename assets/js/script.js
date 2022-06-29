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