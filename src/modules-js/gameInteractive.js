import { modalWrapper } from "./modal";
import { leftClick, rigthClick, audioWinGame } from "./audio";
import { startTimer, stopTimer, result } from "./timer";
import { modalCongratulation } from "./modal";
import { _gameActive, choseLevel, choseGame } from "./createMenu";
export let countOfTargets = 0;
export let scoreArr = JSON.parse(window.localStorage.getItem("scoreStorage"));
export function activeButton(e){
  e.classList.add('--active-Btn')
  e.classList.remove('--active-Btn')
}
if (!localStorage.hasOwnProperty("scoreStorage")) {
  localStorage.setItem("scoreStorage", JSON.stringify([]));
}
export function clickOnBoard(count, saveTimer) {
  const gameCell = document.querySelectorAll(".game-cell");
  let winCount = createWinCount(gameCell);
  if (count == undefined) {
    let empty = 0;
  } else {
    winCount = count;
  }
  gameCell.forEach((e, i) => {
    e.addEventListener("contextmenu", (elem) => {
      elem.preventDefault();
      if (_gameActive) {
        startTimer(saveTimer);
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
        startTimer(saveTimer);
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
          let scoreObj = {
            gameName: choseGame,
            gameLevel: choseLevel,
            time: result,
          };
          scoreArr.push(scoreObj);
          localStorage.setItem("scoreStorage", JSON.stringify(scoreArr));
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
