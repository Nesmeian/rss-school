// Create
import { createElement } from "./createFunc";
import logoPath from "../img/nogormas-fav.jpg";
const body = document.querySelector("body");
body.className = "body";
export const main = createElement({
  tag: "main",
  classes: ["main"],
});
const wrapper = createElement({
  tag: "div",
  text: "",
  classes: ["wrapper"],
});
const header = createElement({
  tag: "header",
  classes: ["header"],
});
const headerWrapper = createElement({
  tag: "div",
  classes: ["header__wrapper"],
});
export const themes = createElement({
  tag: "div",
  classes: ["themes"],
});
export const themesLight = createElement({
  tag: "button",
  classes: ["button", "themes__light"],
  text: "Light",
});

export const themesDark = createElement({
  tag: "button",
  classes: ["button", "themese__dark"],
  text: "Dark",
});
const title = createElement({
  tag: "div",
  text: "",
  classes: ["title"],
});

const titleN = createElement({
  tag: "div",
  text: "N",
  classes: ["title-nn"],
});
const titleO = createElement({
  tag: "div",
  text: "O",
  classes: ["title-n"],
});
const titleNN = createElement({
  tag: "div",
  text: "O",
  classes: ["title-o"],
});
const titleG = createElement({
  tag: "div",
  text: "G",
  classes: ["title-g"],
});
const titleR = createElement({
  tag: "div",
  text: "R",
  classes: ["title-r"],
});

const titleA = createElement({
  tag: "div",
  text: "A",
  classes: ["title-a"],
});

const titleM = createElement({
  tag: "div",
  text: "M",
  classes: ["title-m"],
});

const titleS = createElement({
  tag: "div",
  text: "S",
  classes: ["title-s"],
});

export const scoresShowBtn = createElement({
  tag: "button",
  classes: ["button", "scores__show-btn"],
  text: "Scores",
});
export const gameFeatures = createElement({
  tag: "div",
  classes: ["game__featurs"],
});
export const randomGameBtn = createElement({
  tag: "button",
  classes: ["button", "featurs__random"],
  text: "Random Game",
});
export const restartGameBtn = createElement({
  tag: "button",
  classes: ["button", "featurs__restart"],
  text: "Restart Game",
});
export const autoSolutionBtn = createElement({
  tag: "button",
  classes: ["button", "featurs__auto-solution"],
  text: "Auto Solution",
});
export const saveGameBtn = createElement({
  tag: "button",
  classes: ["button", "featurs__save-game"],
  text: "Save Game",
});
export const contineGameBtn = createElement({
  tag: "button",
  classes: ["button", "featurs__continue-game"],
  text: "Continue Last Game",
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

body.append(main);
main.append(header);
header.append(headerWrapper);
headerWrapper.append(themes);
themes.append(themesDark);
themes.append(themesLight);
headerWrapper.append(title);
title.append(titleN);
title.append(titleO);
title.append(titleNN);
title.append(titleO);
title.append(titleG);
title.append(titleR);
title.append(titleA);
title.append(titleM);
title.append(titleS);
headerWrapper.append(scoresShowBtn);
main.append(wrapper);
wrapper.append(gameFeatures);
gameFeatures.append(contineGameBtn);
gameFeatures.append(saveGameBtn);
gameFeatures.append(restartGameBtn);
gameFeatures.append(autoSolutionBtn);
gameFeatures.append(randomGameBtn);
wrapper.append(nonogramm);
wrapper.append(setupMenu);
nonogramm.append(nonogrammContainer);
nonogrammContainer.append(topLeft);
nonogrammContainer.append(topRight);
nonogrammContainer.append(bottomLeft);
nonogrammContainer.append(bottomRight);
