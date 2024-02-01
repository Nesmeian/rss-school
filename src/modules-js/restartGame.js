import { bottomRight, bottomLeft, topRight } from "./html";
export function restartGame() {
  bottomLeft.textContent = "";
  bottomRight.textContent = "";
  topRight.textContent = "";
}
