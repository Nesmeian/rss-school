import { bottomRight, bottomLeft, topRight, restartGameBtn } from "./html";
import { currentGame } from "./createMenu";
import { createGame } from "./createItems";
import { resetTimer } from "./timer";
export function restartGame() {
  bottomLeft.textContent = "";
  bottomRight.textContent = "";
  topRight.textContent = "";
}
restartGameBtn.addEventListener("click", () => {
  restartGame();
  createGame(currentGame);
  resetTimer();
});
