import { rigthClick } from "./audio";
import { countOfTargets } from "./gameInteractive";
import { saveGameBtn, contineGameBtn } from "./html";
const gameCell = document.querySelectorAll(".game-cell");
let saveGame = JSON.parse(window.localStorage.getItem("saveGame"));
saveGameBtn.addEventListener("click", () => {
  let saveLeftClick = [];
  let saveRightClick = [];
  gameCell.forEach((e, i) => {
    if (e.classList.contains("--fill")) {
      saveLeftClick.push(i);
    } else if (e.classList.contains("--empty")) {
      saveRightClick.push(i);
    }
  });
  let saveGameObj = {
    fill: saveLeftClick,
    empty: saveRightClick,
    saveCount: countOfTargets,
  };
  saveGame = saveGameObj;
  localStorage.setItem("saveGame", JSON.stringify(saveGame));
});

contineGameBtn.addEventListener("click", () => {
  let a = JSON.parse(localStorage.getItem("saveGame"));
  a.fill.forEach((e) => {
    gameCell[e].classList.add("--fill");
  });
  a.empty.forEach((e) => {
    gameCell[e].classList.add("--empty");
  });
});
