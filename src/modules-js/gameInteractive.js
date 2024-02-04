import { modalWrapper } from "./modal";
import { leftClick, rigthClick, audioWinGame } from "./audio";
import { startTimer, stopTimer, result } from "./timer";
import { modalCongratulation } from "./modal";
import { _gameActive } from "./createMenu";
export let countOfTargets = 0;
// import resultOfGames
export function clickOnBoard(count) {
  const gameCell = document.querySelectorAll(".game-cell");
  let winCount = createWinCount(gameCell);
  if (count == undefined) {
    console.log(1);
  } else {
    winCount = count;
  }
  gameCell.forEach((e, i) => {
    e.addEventListener("contextmenu", (elem) => {
      elem.preventDefault();
      if (_gameActive) {
        startTimer();
        rigthClick.play();
        if (e.classList.contains("--fill")) {
          e.classList.remove("--fill");
          if (e.classList.contains("target")) {
            winCount++;
            countOfTargets = winCount;
          }
          if (!e.classList.contains("target")) {
            winCount--;
            countOfTargets = winCount;
          }
        }
        e.classList.toggle("--empty");
      }
    });
    e.addEventListener("click", () => {
      if (_gameActive) {
        startTimer();
        leftClick.play();
        if (e.classList.contains("--empty")) {
          e.classList.remove("--empty");
        }
        if (!e.classList.contains("--fill")) {
          e.classList.add("--fill");
          if (e.classList.contains("target")) {
            winCount--;
            countOfTargets = winCount;
          } else if (!e.classList.contains("target")) {
            winCount++;
            countOfTargets = winCount;
          }
        } else if (e.classList.contains("--fill")) {
          e.classList.remove("--fill");
          if (!e.classList.contains("target")) {
            winCount--;
            countOfTargets = winCount;
          } else if (e.classList.contains("target")) {
            winCount++;
            countOfTargets = winCount;
          }
        }
        if (winCount === 0) {
          audioWinGame.play();
          modalWrapper.classList.add("modal--active");
          modalCongratulation.textContent = `Great! You have solved the nonogram in ${result}`;
          stopTimer();
        }
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
