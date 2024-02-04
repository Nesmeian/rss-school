import { main } from "./html";
import { createElement } from "./createFunc";
const winnersModal = createElement({
  tag: "div",
  classes: ["winners__modal"],
});
const winnersWrapper = createElement({
  tag: "div",
  classes: ["winners__modal__wrapper"],
});
const winnersPlace = createElement({
  tag: "div",
  classes: ["winners__item", "winners__place"],
});
const winnersGame = createElement({
  tag: "div",
  classes: ["winners__item", "winner__game"],
});

const winnersLevel = createElement({
  tag: "div",
  classes: ["winners__item", "winner__level"],
});
const winnersTime = createElement({
  tag: "div",
  classes: ["winners__item", "winner__time"],
});

main.append(winnersModal);
winnersModal.append(winnersWrapper);
winnersWrapper.append(winnersPlace);
winnersWrapper.append(winnersGame);
winnersWrapper.append(winnersLevel);
winnersWrapper.append(winnersTime);
