import { games } from "./game";
import { createElement } from "./createFunc";
import { setupMenu } from "./html";
import { createGame } from "./createItems";
import { restartGame } from "./restartGame";
import { audioChangeLevel, audioChangeGame } from "./audio";
import { resetTimer } from "./timer";
export let _gameActive = true;
export const gameActive = {
  get() {
    return _gameActive;
  },
  set(value) {
    _gameActive = value;
  },
};
export let game = games.easy.bomb;
export let currentGame = game;
export let choseLevel = "easy";
export let choseGame = "bomb";
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
    select.append(selectLevel);
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
  selectLevel.forEach((e, i) => {
    e.classList.remove("--active");
    e.addEventListener("click", () => {
      if (!e.classList.contains("--active")) {
        selectLevel.forEach((e) => {
          e.classList.remove("--active");
        });
        audioChangeLevel.play();
        e.classList.add("--active");
      } else {
        audioChangeLevel.play();
        e.classList.remove("--active");
      }
    });
  });
}

function changeGame() {
  const selectLevel = document.querySelectorAll(".select__level");
  const menuGames = document.querySelectorAll(".select__game");
  const levelTitle = document.querySelectorAll(".level__title");
  selectLevel.forEach((e, i) => {
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
      gameActive.set(true);
      restartGame();
      resetTimer();
      createGame(currentGame);
    });
  });
}
