import { _gameActive, gameActive } from "./createMenu";
import { autoSolutionBtn } from "./html";
import { stopTimer } from "./timer";
import { audioChangeLevel } from "./audio";
autoSolutionBtn.addEventListener("click", () => {
  const gameCell = document.querySelectorAll(".game-cell");
  gameCell.forEach((e) => {
    if (e.classList.contains("target")) {
      e.classList.add("--fill");
    }
  });
  audioChangeLevel.play()
  stopTimer();
  gameActive.set(false);
});
