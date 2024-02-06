import { countOfTargets } from "./gameInteractive";
import { saveGameBtn, contineGameBtn } from "./html";
import { restartGame } from "./restartGame";
import { currentGame } from "./createMenu";
import { createGame } from "./createItems";
import { resetTimer } from "./timer";
import { result } from "./timer";
import { audioChangeLevel } from "./audio";
import { topLeft } from "./html";
export let saveTimer = 0;
let saveGame = JSON.parse(window.localStorage.getItem("saveGame"));
saveGameBtn.addEventListener("click", save);

contineGameBtn.addEventListener("click", continueGame);
function continueGame() {
  let a = JSON.parse(localStorage.getItem("saveGame"));
  let currentGameResult = a.game;
  let saveCount = a.saveCount;
  saveTimer = a.time;
  audioChangeLevel.play();
  restartGame();
  resetTimer();
  createGame(currentGame, saveCount, saveTimer);
  const gameCell = document.querySelectorAll(".game-cell");
  a.fill.forEach((e) => {
    gameCell[e].classList.add("--fill");
  });
  a.empty.forEach((e) => {
    gameCell[e].classList.add("--empty");
  });
  topLeft.textContent = a.time;
}
function save() {
  const gameCell = document.querySelectorAll(".game-cell");
  let saveLeftClick = [];
  let saveRightClick = [];
  gameCell.forEach((e, i) => {
    if (e.classList.contains("--fill")) {
      saveLeftClick.push(i);
    } else if (e.classList.contains("--empty")) {
      saveRightClick.push(i);
    }
  });
  let saveGameObj = {
    time: result,
    fill: saveLeftClick,
    empty: saveRightClick,
    saveCount: countOfTargets,
    game: currentGame,
  };
  audioChangeLevel.play();
  saveGame = saveGameObj;
  localStorage.setItem("saveGame", JSON.stringify(saveGame));
}
