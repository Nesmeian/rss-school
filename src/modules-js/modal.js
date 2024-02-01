import { createElement } from "./createFunc";
import { main } from "./html";
import { restartGame } from "./restartGame";
import { createGame } from "./createItems";
import { currentGame } from "./createMenu";
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
const modalCongratulation = createElement({
  tag: "div",
  classes: ["modal__congratulation"],
  text: "You win this game your score is",
});

main.append(modalWrapper);
modalWrapper.append(modal);
modal.append(modalCongratulation);
modal.append(modalBtn);

function playAgain(game) {
  modalBtn.addEventListener("click", () => {
    modalWrapper.classList.remove("modal--active");
    restartGame();
    createGame(currentGame);
  });
}
playAgain(currentGame);