import { _gameActive, gameActive } from "./createMenu";
import { autoSolutionBtn } from "./html";
import { stopTimer } from "./timer";
import { audioChangeLevel } from "./audio";
import { restartGame } from "./restartGame";
import { createGame } from "./createItems";
import { currentGame } from "./createMenu";
autoSolutionBtn.addEventListener("click", () => {
  restartGame();
  createGame(currentGame);
  const gameCell = document.querySelectorAll(".game-cell");
  gameCell.forEach((e) => {
    if (e.classList.contains("target")) {
      e.classList.add("--fill");
    }
  });
  audioChangeLevel.play();
  stopTimer();
  gameActive.set(false);
});
