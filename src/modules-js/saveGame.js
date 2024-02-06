import { countOfTargets } from "./gameInteractive";
import { saveGameBtn, contineGameBtn, soundOn } from "./html";
import { restartGame } from "./restartGame";
import {
  currentGame,
  _currentGame,
  _choseGame,
  _choseLevel,
  choseGame,
  choseLevel,
  gameActive,
} from "./createMenu";
import { createGame } from "./createItems";
import { resetTimer } from "./timer";
import { result } from "./timer";
import {
  audioChangeLevel,
  audioContinueGame,
  audioSaveGame,
  soundActive,
} from "./audio";
import { topLeft } from "./html";
import { _solveGame, solveGame } from "./autoSolution";
export let saveTimer = 0;
let saveGame = JSON.parse(window.localStorage.getItem("saveGame"));
saveGameBtn.addEventListener("click", save);

contineGameBtn.addEventListener("click", continueGame);
function continueGame() {
  if (soundActive) {
    audioContinueGame.play();
  }
  let a = JSON.parse(localStorage.getItem("saveGame"));
  let currentGameResult = a.game;
  let saveCount = a.saveCount;
  gameActive.set(true);
  _solveGame.set(false);
  _currentGame.set(currentGameResult);
  console.log(currentGame);
  saveTimer = a.time;
  if (soundActive) {
    audioChangeLevel.play();
  }
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
  if (soundActive) {
    audioSaveGame.play();
  }
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
  if (solveGame) {
    saveLeftClick = [];
    saveRightClick = [];
  }
  let saveGameObj = {
    time: result,
    fill: saveLeftClick,
    empty: saveRightClick,
    saveCount: countOfTargets,
    game: currentGame,
    gameName: choseGame,
    gameLevel: choseLevel,
  };
  if (soundActive) {
    audioChangeLevel.play();
  }
  saveGame = saveGameObj;
  localStorage.setItem("saveGame", JSON.stringify(saveGame));
}
