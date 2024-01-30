import { games } from "./game";
import { createElement } from "./createFunc";
import { setupMenu } from "./html";
// function createSelect(games) {

//     setupLabel.id = items;
//     setupLabel.textConten = items;
//     setupInput.value = items;
//     setupInput.id = items;
//     setupInput.type = "radio";
//     setupForm.append(setupLabel);
//     setupLabel.append(setupInput);
//   }
// }
// createSelect(games);

function createSelect(games) {
  const select = createElement({
    tag: "div",
    classes: ["select"],
  });
  setupMenu.append(select);
  for (let level in games) {
    const selectLevel = createElement({
      tag: "div",
      classes: ["select__level"],
    });
    const levelTitle = createElement({
      tag: "div",
      classes: ["level__title"],
      text: level,
    });
    const levelGame = createElement({
      tag: "div",
      classes: ["level__game"],
    });
    const levelBtn = createElement({
      tag: "div",
      classes: ["level__btn"],
    });
    select.append(selectLevel);
    selectLevel.append(levelBtn);
    selectLevel.append(levelTitle);
    selectLevel.append(levelGame);
    for (let game in games[level]) {
      const selectGame = createElement({
        tag: "div",
        classes: ["select__game"],
      });
      const gameValue = createElement({
        tag: "div",
        classes: ["select__game_value"],
        text: game,
      });
      levelGame.append(selectGame);
      selectGame.append(gameValue);
    }
  }
}
createSelect(games);

function showSelect() {
  const selectLevel = document.querySelectorAll(".select__level");
  const levelBtn = document.querySelectorAll(".level__btn");
  levelBtn.forEach((e, i) => {
    e.addEventListener("click", () => {
      for (let index = 0; index < levelBtn.length; index++) {
        selectLevel[index].classList.remove("--active");
      }
      selectLevel[i].classList.add("--active");
    });
  });
}
showSelect();
