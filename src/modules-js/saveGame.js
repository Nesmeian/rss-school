import { countOfTargets } from "./gameInteractive";
import { saveGameBtn, contineGameBtn } from "./html";
import { restartGame } from "./restartGame";
import {
  currentGame,
  _currentGame,
  _choseGame,
  _choseLevel,
  choseGame,
  choseLevel,
} from "./createMenu";
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
  _currentGame.set(currentGameResult);
  console.log(currentGame);
  saveTimer = a.time;
  audioChangeLevel.play();
  restartGame();
  resetTimer();
  createGame(currentGameResult, saveCount, saveTimer);
  const gameCell = document.querySelectorAll(".game-cell");
  _choseGame.set(a.gameName);
  _choseLevel.set(a.gameLevel);
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
    gameName: choseGame,
    gameLevel: choseLevel,
  };
  audioChangeLevel.play();
  saveGame = saveGameObj;
  localStorage.setItem("saveGame", JSON.stringify(saveGame));
}
