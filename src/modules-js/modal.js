import { createElement } from "./createFunc";
import { main } from "./html";
import { restartGame } from "./restartGame";
import { createGame } from "./createItems";
import { currentGame } from "./createMenu";
import { audioNewGame } from "./audio";
import { resetTimer } from "./timer";

const modal = createElement({
  tag: "div",
  classes: ["modal"],
});
export const modalWrapper = createElement({
  tag: "div",
  classes: ["modal__wrapper"],
});
const modalBtn = createElement({
  tag: "button",
  classes: ["modal__btn"],
  text: "Play again?",
});
export const modalCongratulation = createElement({
  tag: "div",
  classes: ["modal__congratulation"],
});

main.append(modalWrapper);
modalWrapper.append(modal);
modal.append(modalCongratulation);
modal.append(modalBtn);

function playAgain(currentGame) {
  modalBtn.addEventListener("click", () => {
    modalWrapper.classList.remove("modal--active");
    audioNewGame.play();
    restartGame();
    createGame(currentGame);
    resetTimer();
  });
}
playAgain(currentGame);
