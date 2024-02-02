import { games } from "./game";
import { createElement } from "./createFunc";
import { setupMenu } from "./html";
import { createGame } from "./createItems";
import { restartGame } from "./restartGame";
import { audioChangeLevel, audioChangeGame } from "./audio";
export let game = games.easy.bomb;
export let currentGame = game;
let choseLevel;
let choseGame = "";
createSelect(games);
showSelect();
changeGame();

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
        text: game,
      });
      levelGame.append(selectGame);
    }
  }
}

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

function changeGame() {
  const levelBtn = document.querySelectorAll(".level__btn");
  const menuGames = document.querySelectorAll(".select__game");
  const levelTitle = document.querySelectorAll(".level__title");
  levelBtn.forEach((e, i) => {
    e.addEventListener("click", () => {
      audioChangeLevel.play();
      choseLevel = levelTitle[i].textContent;
    });
  });
  menuGames.forEach((e) => {
    e.addEventListener("click", () => {
      audioChangeGame.play();
      choseGame = e.textContent;
      currentGame = games[choseLevel][choseGame];
      restartGame();
      createGame(currentGame);
    });
  });
}
