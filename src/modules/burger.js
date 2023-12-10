const burgerBtn = document.querySelector(".burger__btn");
const burgerMenu = document.querySelector(".burger__menu");
const burgerLine = document.querySelectorAll(".burger__line");

burgerBtn.addEventListener("click", toogleBurger);
function toogleBurger() {
  burgerMenu.classList.toggle("--active-burger");
  burgerBtn.classList.toggle("--active-btn-burger");
}
window.addEventListener("click", (e) => {
  for (let i = 0; i < burgerLine.length; i++) {
    if (
      e.target !== burgerBtn &&
      e.target !== burgerMenu &&
      e.target !== burgerLine[0] &&
      e.target !== burgerLine[1]
    ) {
      burgerMenu.classList.remove("--active-burger");
      burgerBtn.classList.remove("--active-btn-burger");
    }
  }
});

function checkingWidth() {
  if (window.innerWidth >= 769) {
    burgerMenu.classList.remove("--active-burger");
    burgerBtn.classList.remove("--active-btn-burger");
  }
}
setInterval(checkingWidth, 1000);
