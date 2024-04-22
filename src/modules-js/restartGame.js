import { bottomRight, bottomLeft, topRight, restartGameBtn } from "./html";
import { currentGame, gameActive } from "./createMenu";
import { createGame } from "./createItems";
import { resetTimer } from "./timer";
import { audioRestartGame, soundActive } from "./audio";
import { _solveGame } from "./autoSolution";
export function restartGame() {
  bottomLeft.textContent = "";
  bottomRight.textContent = "";
  topRight.textContent = "";
}
restartGameBtn.addEventListener("click", () => {
  _solveGame.set(false)
  if (soundActive) {
    audioRestartGame.play();
  }
  restartGame();
  createGame(currentGame);
  resetTimer();
  gameActive.set(true);
});
