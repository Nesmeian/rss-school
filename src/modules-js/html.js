// Create
import { createElement } from "./createFunc";

const body = document.querySelector("body");
body.className = "body";
const title = createElement({
  tag: "h1",
  text: "Nonograms",
  classes: ["title"],
});
export const main = createElement({
  tag: "main",
  classes: ["main"],
});
const wrapper = createElement({
  tag: "div",
  text: "",
  classes: ["wrapper"],
});
const nonogramm = createElement({
  tag: "div",
  text: "",
  classes: ["nonogramm"],
});
const nonogrammContainer = createElement({
  tag: "div",
  text: "",
  classes: ["nonogramm__container"],
});
export const topLeft = createElement({
  tag: "div",
  classes: ["container", "container__top-left"],
  text: "",
});
export const topRight = createElement({
  tag: "div",
  classes: ["container", "container__top-right"],
  text: "",
});
export const bottomLeft = createElement({
  tag: "div",
  classes: ["container", "container__bottom-left"],
  text: "",
});

export const bottomRight = createElement({
  tag: "div",
  classes: ["container", "container__bottom-right"],
  text: "",
});

export const setupMenu = createElement({
  tag: "div",
  classes: ["setup-menu"],
});

// append
body.append(main);
main.append(title);
main.append(wrapper);
wrapper.append(nonogramm);
wrapper.append(setupMenu);
nonogramm.append(nonogrammContainer);
nonogrammContainer.append(topLeft);
nonogrammContainer.append(topRight);
nonogrammContainer.append(bottomLeft);
nonogrammContainer.append(bottomRight);

// function
