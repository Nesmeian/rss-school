const modalItem = document.querySelectorAll(".menu__drinks-item");
const modal = document.querySelector(".modal__container");
const modalImg = document.querySelector(".modal__img");
const modalTitle = document.querySelector(".modal__title");
const modalDesription = document.querySelector(".modal__description");
const modalCost = document.querySelector(".total__cost");
const closeBtn = document.querySelector(".modal__btn_close");
const body = document.querySelector("body");
const modalWrapper = document.querySelector(".modal__wrapper");
const drinksImg = document.querySelectorAll(".menu__drinks-img");
const drinksTitle = document.querySelectorAll(".drinks-item__title");
const sizeCost = document.querySelectorAll(".size__container");
const additivesCost = document.querySelectorAll(".additives__container");
const drinksDescription = document.querySelectorAll(
  ".drinks-item__description"
);
const drinksCost = document.querySelectorAll(".drinks-item__price");

let globalCost = 0;

additivesCost.forEach((e) => {
  e.addEventListener("click", () => {
    console.log(console.log(globalCost));
    console.log(console.log(typeof globalCost));
    e.classList.toggle("size--active");
    if (e.classList.contains("size--active")) {
      globalCost = +globalCost + 0.5;
      modalCost.innerHTML = `$${globalCost.toFixed(2)}`;
    } else {
      globalCost = +globalCost - 0.5;
      modalCost.innerHTML = `$${globalCost.toFixed(2)}`;
    }
  });
});

let indexOfItem = 0;

sizeCost.forEach((e, i) => {
  e.addEventListener("click", () => changeCost(e, i));
});

modalItem.forEach((e, index) => {
  e.addEventListener("click", () => openModal(index));
});

closeBtn.addEventListener("click", closeModal);
window.addEventListener("click", (e) => {
  if (e.target == modalWrapper) {
    closeModal();
  }
});

function removeAdditives() {
  additivesCost.forEach((e) => {
    e.classList.remove("size--active");
  });
}

function changeCost(element, index) {
  let cost = drinksCost[indexOfItem].innerHTML.slice(1);
  sizeCost.forEach((e) => {
    e.classList.remove("size--active");
  });
  cost = +cost + 0.5 * index;
  globalCost = +cost;
  modalCost.innerHTML = `$${globalCost.toFixed(2)}`;
  element.classList.add("size--active");
  removeAdditives();
}

function openModal(index) {
  modalImg.src = drinksImg[index].src;
  modalTitle.innerHTML = drinksTitle[index].innerHTML;
  modalDesription.innerHTML = drinksDescription[index].innerHTML;
  modalCost.innerHTML = drinksCost[index].innerHTML;
  modal.classList.add("modal--active");
  body.classList.add("stop--scroll");
  modalWrapper.classList.add("modal__wrapper--active");
  indexOfItem = index;
  sizeCost.forEach((e, i) => {
    e.classList.remove("size--active");
  });
  globalCost = drinksCost[index].innerHTML;
  globalCost = globalCost.slice(1);
  // console.log(globalCost);
  modalCost.innerHTML = drinksCost[index].innerHTML;

  sizeCost[0].classList.add("size--active");
}

function closeModal() {
  modal.classList.remove("modal--active");
  body.classList.remove("stop--scroll");
  modalWrapper.classList.remove("modal__wrapper--active");
  removeAdditives();
  sizeCost.forEach((e) => {
    e.classList.remove("size--active");
  });
  sizeCost[0].classList.add("size--active");
}

export function changeAdditiveText(index) {
  console.log(1);
  const additivesText = document.querySelectorAll(".icon__text");
  console.log(additivesText[0].innerHTML);
  if (index === 0) {
    additivesText[0].innerText = "200 ml";
    additivesText[1].innerHTML = "300 ml";
    additivesText[2].innerHTML = "400 ml";
    additivesText[3].innerText = "Sugar";
    additivesText[4].innerHTML = "Cinammon";
    additivesText[5].innerHTML = "Syrup";
  } else if (index === 1) {
    additivesText[0].innerText = "200 ml";
    additivesText[1].innerHTML = "300 ml";
    additivesText[2].innerHTML = "400 ml";
    additivesText[3].innerText = "Sugar";
    additivesText[4].innerHTML = "Lemon";
    additivesText[5].innerHTML = "Syrup";
  }
  if (index === 2) {
    additivesText[0].innerText = "50 g";
    additivesText[1].innerHTML = "100 g";
    additivesText[2].innerHTML = "150 g";
    additivesText[3].innerText = "Berries";
    additivesText[4].innerHTML = "Nuts";
    additivesText[5].innerHTML = "Jam";
  }
}
