const icon = document.querySelectorAll(".icon__item");
const menuLists = document.querySelectorAll(".menu__drinks-list");

icon.forEach((e, i) => {
  e.addEventListener("click", (elem) => {
    menuLists.forEach((e) => {
      e.classList.remove("menu-list--active");
    });
    menuLists[i].classList.add("menu-list--active");
    e.classList.add("icon__item--active");
  });
});
