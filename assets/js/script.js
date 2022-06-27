//DARKMODE

const btnSwitch = document.querySelector(".darkmode-toggle");

btnSwitch.addEventListener("click", () => {
  document.body.classList.toggle("dark");
});

//LOCAL STORAGE

btnSwitch.onclick = checkDarkMode;

function checkDarkMode(){

}