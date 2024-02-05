import { main } from "./html";
import { createElement } from "./createFunc";
import { scoresShowBtn } from "./html";
import { scoreArr } from "./gameInteractive";
const scoresModal = createElement({
  tag: "div",
  classes: ["scores__modal"],
});
const scoresWrapper = createElement({
  tag: "div",
  classes: ["scores__modal__wrapper"],
});
const scoresPlace = createElement({
  tag: "div",
  classes: ["scores__item", "scores__place"],
});
const scoresGame = createElement({
  tag: "div",
  classes: ["scores__item", "scores__game"],
});

const scoresLevel = createElement({
  tag: "div",
  classes: ["scores__item", "scores__level"],
});
const scoresTime = createElement({
  tag: "div",
  classes: ["scores__item", "scores__time"],
});

main.append(scoresModal);
scoresModal.append(scoresWrapper);
scoresWrapper.append(scoresPlace);
scoresWrapper.append(scoresGame);
scoresWrapper.append(scoresLevel);
scoresWrapper.append(scoresTime);

function createResults() {
  let unzipResult = JSON.parse(localStorage.getItem("scoreStorage"));
  sortArr(unzipResult);
  if (unzipResult.length >= 6) {
    unzipResult.pop();
  }
  localStorage.setItem("scoreStorage", JSON.stringify(unzipResult));
  unzipResult.forEach((e, i) => {
    const placeNum = createElement({
      tag: "div",
      classes: ["place__num"],
      text: i,
    });
    const gameNum = createElement({
      tag: "div",
      classes: ["game__num"],
      text: e.gameName,
    });
    const levelNum = createElement({
      tag: "div",
      classes: ["level__num"],
      text: e.gameLevel,
    });
    const timeName = createElement({
      tag: "div",
      classes: ["time__name"],
      text: e.time,
    });
    scoresPlace.append(placeNum);
    scoresGame.append(gameNum);
    scoresLevel.append(levelNum);
    scoresTime.append(timeName);
  });
  console.log(unzipResult);
}
createResults();
function sortArr(arr) {
  arr.sort((a, b) => {
    const [minA, secA] = a.time.split(":").map(Number);
    const [minB, secB] = b.time.split(":").map(Number);

    if (minA !== minB) {
      return minA - minB;
    }
    return secA - secB;
  });
}
