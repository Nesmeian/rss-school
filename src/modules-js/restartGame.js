import { bottomRight, bottomLeft, topRight, restartGameBtn } from "./html";
import { currentGame } from "./createMenu";
import { createGame } from "./createItems";
import { resetTimer } from "./timer";
import { audioRestartGame, soundActive } from "./audio";
export function restartGame() {
  bottomLeft.textContent = "";
  bottomRight.textContent = "";
  topRight.textContent = "";
}
restartGameBtn.addEventListener("click", () => {
  if (soundActive) {
    audioRestartGame.play();
  }
  restartGame();
  createGame(currentGame);
  resetTimer();
});
