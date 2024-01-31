import { bottomRight, bottomLeft, topRight } from "./html";
import { selectGame } from "./createMenu";
export function restartGame() {
  bottomLeft.textContent = "";
  bottomRight.textContent = "";
  topRight.textContent = "";
}
