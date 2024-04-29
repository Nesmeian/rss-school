import { _gameActive, gameActive } from "./createMenu";
import { autoSolutionBtn, soundOn } from "./html";
import { _result, stopTimer } from "./timer";
import { audioSolution, soundActive } from "./audio";
import { restartGame } from "./restartGame";
import { createGame } from "./createItems";
import { currentGame } from "./createMenu";
import { result } from "./timer";
export let solveGame = false;
export const _solveGame = {
  get() {
    return solveGame;
  },
  set(value) {
    solveGame = value;
  },
};
autoSolutionBtn.addEventListener("click", () => {
  solveGame = true;
  restartGame();
  createGame(currentGame);
  const gameCell = document.querySelectorAll(".game-cell");
  gameCell.forEach((e) => {
    if (e.classList.contains("target")) {
      e.classList.add("--fill");
    }
  });
  if (soundActive) {
    audioSolution.play();
  }
  stopTimer();
  gameActive.set(false);
});
