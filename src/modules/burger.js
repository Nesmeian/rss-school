const burgerBtn = document.querySelector(".burger__btn");
const burgerMenu = document.querySelector(".burger__menu");
const burgerLine = document.querySelectorAll(".burger__line");

burgerBtn.addEventListener("click", toogleBurger);
function toogleBurger() {
  burgerMenu.classList.toggle("--active");
  burgerBtn.classList.toggle("--active");
}
window.addEventListener("click", (e) => {
  for (let i = 0; i < burgerLine.length; i++) {
    if (
      e.target !== burgerBtn &&
      e.target !== burgerMenu &&
      e.target !== burgerLine[0] &&
      e.target !== burgerLine[1]
    ) {
      burgerMenu.classList.remove("--active");
      burgerBtn.classList.remove("--active");
    }
  }
});
