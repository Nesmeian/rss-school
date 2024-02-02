import { modalWrapper } from "./modal";
import { leftClick, rigthClick, audioWinGame } from "./audio";
import { startTimer, stopTimer, resetTimer, result } from "./timer";
import { modalCongratulation } from "./modal";
export let resultOfGames = 0;
export function clickOnBoard() {
  const gameCell = document.querySelectorAll(".game-cell");
  let winCount = createWinCount(gameCell);
  gameCell.forEach((e, i) => {
    e.addEventListener("contextmenu", (elem) => {
      startTimer();
      rigthClick.play();
      elem.preventDefault();
      if (e.classList.contains("--fill")) {
        e.classList.remove("--fill");
        if (e.classList.contains("target")) {
          winCount++;
        }
        if (!e.classList.contains("target")) {
          winCount--;
        }
      }
      console.log(winCount);
      e.classList.toggle("--empty");
    });
    e.addEventListener("click", () => {
      startTimer();
      leftClick.play();
      if (e.classList.contains("--empty")) {
        e.classList.remove("--empty");
      }
      if (!e.classList.contains("--fill")) {
        e.classList.add("--fill");
        if (e.classList.contains("target")) {
          winCount--;
        } else if (!e.classList.contains("target")) {
          winCount++;
        }
      } else if (e.classList.contains("--fill")) {
        e.classList.remove("--fill");
        if (!e.classList.contains("target")) {
          winCount--;
        } else if (e.classList.contains("target")) {
          winCount++;
        }
      }
      if (winCount === 0) {
        audioWinGame.play();
        modalWrapper.classList.add("modal--active");
        resultOfGames = result;
        modalCongratulation.textContent = `Great! You have solved the nonogram in ${resultOfGames}`;
        stopTimer();
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
