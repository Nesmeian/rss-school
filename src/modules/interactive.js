import { ridles } from "./words";
import {
  keyboard,
  word,
  question,
  attemptsCount,
  modal,
  modalResult,
  modalWord,
  modalTryAgain,
  alphabet,
} from "./html";
let counterWin = 0;
let counter = 0;
let randomNumber = takeRandomRidle();
addItemsToKeyboard();
createRandomWord(randomNumber);

const limbs = document.querySelectorAll(".limb");
const keyboardItem = document.querySelectorAll(".keyboard__item");
const wordItem = document.querySelectorAll(".word__item");
let splitAnswear = ridles[randomNumber].answear.split("");

console.log(splitAnswear);
keyboardItem.forEach((e) => {
  e.addEventListener("click", () => {
    const text = e.textContent;
    if (splitAnswear.includes(text)) {
      let seacrhIndex = splitAnswear.indexOf(text);
      disabledButton(e);
      while (seacrhIndex != -1) {
        counterWin++;
        wordItem[seacrhIndex].textContent = splitAnswear[seacrhIndex];
        wordItem[seacrhIndex].classList.add("--correct");
        seacrhIndex = splitAnswear.indexOf(text, seacrhIndex + 1);
      }
      if (counterWin === splitAnswear.length) {
        winGame();
      }
    } else if (
      !splitAnswear.includes(text) &&
      !e.classList.contains("--disabled")
    ) {
      if (limbs[counter] != undefined) {
        disabledButton(e);
        incorectLeter();
      } else {
        loseGame();
      }
    }
  });
});
modalTryAgain.addEventListener("click", reloadPage);

// document.addEventListener("keydown", (e) => {
//   if(e.key.toUpperCase());
// });

function disabledButton(btn) {
  btn.classList.add("--disabled");
}

function incorectLeter() {
  limbs[counter].classList.add("--active");
  counter++;
  attemptsCount.textContent = `${counter}/6`;
}

function winGame() {
  modal.classList.add("modal--active");
  modalResult.textContent = "Congratulations my friend you win this game!";
  modalWord.textContent = `Secret word is: ${splitAnswear.join("")}`;
}
function loseGame() {
  modal.classList.add("modal--active");
  modalResult.textContent = "You lose this game";
  modalWord.textContent = `Secret word is: ${splitAnswear.join("")}`;
}
function reloadPage() {
  location.reload();
}

// express functions
function createQuestion(rand) {
  question.textContent = `Hint: ${ridles[rand].questions}`;
}
function createRandomWord(random) {
  for (let i = 0; i < ridles[random].answear.length; i++) {
    const wordItem = document.createElement("div");
    wordItem.classList = "word__item";
    word.append(wordItem);
  }
  createQuestion(random);
}

function takeRandomRidle() {
  let rand = Math.random() * (ridles.length - 1);
  return Math.floor(rand);
}

function addItemsToKeyboard() {
  for (let i = 0; i < alphabet.length; i++) {
    const keyboardItem = document.createElement("div");
    keyboardItem.className = "keyboard__item";
    keyboard.append(keyboardItem);
    keyboardItem.textContent = alphabet[i];
  }
}
