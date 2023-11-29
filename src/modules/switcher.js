const icon = document.querySelectorAll(".icon__item");
const menuLists = document.querySelectorAll(".menu__drinks-list");
const reboot = document.querySelector(".menu__reboot");
const menuItem = document.querySelectorAll(".menu__drinks-item");

icon.forEach((e, i) => {
  e.addEventListener("click", () => {
    removeIconClass();
    removeListClass();
    addItemClass(e);
    addListClass(i);
    hideItems(i);
    if (window.innerWidth <= 768) {
      if (i !== 1) {
        addReboot();
      } else {
        hideReboot();
      }
    }
  });
});

reboot.addEventListener("click", showMore);

function checkHideItems() {
  if (menuLists[0].children.length > 3) {
    Array.from(menuLists[0].children).forEach((e, i) => {
      if (i > 3) {
        e.classList.add("menu-item--hide");
      }
    });
  }
}

function hideItems(index) {
  if (menuLists[index].children.length > 3) {
    Array.from(menuLists[index].children).forEach((e, i) => {
      if (i > 3) {
        e.classList.add("menu-item--hide");
      }
    });
  }
}

function showMore() {
  console.log(1);
  reboot.classList.add("reboot--active");
  setTimeout(hideReboot, 2900);
  setTimeout(showItem, 3100);
}

function showItem() {
  menuItem.forEach((e) => {
    clearInterval(hideInterval);
    e.classList.remove("menu-item--hide");
  });
}

function hideReboot() {
  reboot.classList.add("reboot--hide");
}
function checkWindow() {
  if (window.innerWidth <= 768) {
    checkHideItems();
  }
}

function removeIconClass() {
  icon.forEach((e) => {
    e.classList.remove("icon__item--active");
  });
}

function removeListClass() {
  menuLists.forEach((e) => {
    e.classList.remove("menu-list--active");
  });
}

function addListClass(index) {
  menuLists[index].classList.add("menu-list--active");
}

function addItemClass(elem) {
  elem.classList.add("icon__item--active");
}

function addReboot() {
  reboot.classList.remove("reboot--active");
  reboot.classList.remove("reboot--hide");
}

window.addEventListener("resize", () => {
  if (window.innerWidth <= 1200) {
    icon.forEach((e, i) => {
      hideItems(i);
      if (i != 1) {
      }
    });
  }
  if (!menuLists[1].classList.contains("menu-list--active")) {
    addReboot();
  }
});

let hideInterval = setInterval(checkWindow, 1000);
