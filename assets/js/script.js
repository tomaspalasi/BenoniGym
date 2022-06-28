//DARKMODE

const btnSwitch = document.querySelector(".darkmode-toggle");

btnSwitch.addEventListener("click", () => {
  document.body.classList.toggle("dark")
  localStorage.setItem("dMode", "true")
})