import { _gameActive, gameActive } from "./createMenu";
import { autoSolutionBtn } from "./html";
import { stopTimer } from "./timer";
autoSolutionBtn.addEventListener("click", () => {
  const gameCell = document.querySelectorAll(".game-cell");
  gameCell.forEach((e) => {
    if (e.classList.contains("target")) {
      e.classList.add("--fill");
    }
  });
  stopTimer();
  gameActive.set(false);
});
