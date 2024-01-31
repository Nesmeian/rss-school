clickOnBoard();
import { modalWrapper } from "./modal";
function clickOnBoard() {
  const gameCell = document.querySelectorAll(".game-cell");
  let winCount = createWinCount(gameCell);
  gameCell.forEach((e, i) => {
    e.addEventListener("contextmenu", (elem) => {
      elem.preventDefault();
      if (e.classList.contains("--fill")) {
        e.classList.remove("--fill");
        if (e.classList.contains("target")) {
          winCount++;
        }
      }
      console.log(winCount);
      e.classList.toggle("--empty");
    });
    e.addEventListener("click", () => {
      if (!e.classList.contains("--fill")) {
        e.classList.add("--fill");
        if (e.classList.contains("--empty")) {
          e.classList.remove("--empty");
        }
        if (e.classList.contains("target")) {
          winCount--;
        }
      } else if (e.classList.contains("--fill")) {
        e.classList.remove("--fill");
        if (e.classList.contains("target")) {
          winCount++;
        }
      }
      if (winCount === 0) {
        console.log(modalWrapper);
        modalWrapper.classList.add("modal--active");
      }
    });
  });
}
function createWinCount(gameCell) {
  let winCount = 0;
  gameCell.forEach((e) => {
    if (e.classList.contains("target")) {
      winCount++;
    }
  });
  return winCount;
}
