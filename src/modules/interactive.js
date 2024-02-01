import { ridles } from "./words";
import {
  keyboard,
  word,
  question,
  attemptsCount,
  modal,
  modalResult,
  modalWord,
  btnTryAgain,
  alphabet,
} from "./html";
let counterWin = 0;
let counter = 0;
let randomNumber = takeRandomRidle();
let wordItem;
addItemsToKeyboard();
createRandomWord(randomNumber);
const limbs = document.querySelectorAll(".limb");
const keyboardItem = document.querySelectorAll(".keyboard__item");
let splitAnswear = ridles[randomNumber].answear.split("");
btnTryAgain.addEventListener("click", reloadGame);
let seacrhIndex;

keyboardItem.forEach((e) => {
  const text = e.textContent;
  seacrhIndex = splitAnswear.indexOf(text);
  e.addEventListener("click", () => {
    if (splitAnswear.includes(text)) {
      disabledButton(e);
      [...splitAnswear].forEach((currentLetter, index) => {
        if (currentLetter === text) {
          console.log(wordItem);
          wordItem[index].textContent = splitAnswear[index];
          wordItem[index].classList.add("--correct");
          counterWin++;
        }
      });
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
      }
      if (counter >= 6) {
        loseGame();
      }
    }
  });
});

document.addEventListener("keydown", (e) => {
  let btn = e.key.toUpperCase();
  let seacrhIndex = splitAnswear.indexOf(btn);
  keyboardItem.forEach((e) => {
    let text = e.textContent;
    if (splitAnswear.includes(btn)) {
      if (btn === text) {
        disabledButton(e);
      }
      while (seacrhIndex != -1) {
        counterWin++;
        wordItem[seacrhIndex].textContent = splitAnswear[seacrhIndex];
        wordItem[seacrhIndex].classList.add("--correct");
        seacrhIndex = splitAnswear.indexOf(btn, seacrhIndex + 1);
      }
      if (counterWin === splitAnswear.length) {
        winGame();
      }
    } else if (
      !splitAnswear.includes(text) &&
      !e.classList.contains("--disabled") &&
      btn === text
    ) {
      if (limbs[counter] != undefined) {
        disabledButton(e);
        incorectLeter();
      }
      if (counter >= 6) {
        loseGame();
      }
    }
  });
});

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
function reloadGame() {
  modal.classList.remove("modal--active");
  counterWin = 0;
  counter = 0;
  attemptsCount.textContent = `${counter}/6`;
  seacrhIndex = 0;
  randomNumber = takeRandomRidle();
  word.innerHTML = "";
  createRandomWord(randomNumber);
  splitAnswear = ridles[randomNumber].answear.split("");

  keyboardItem.forEach((e) => {
    e.classList.remove("--disabled");
  });
  limbs.forEach((e) => {
    e.classList.remove("--active");
  });
}

function createQuestion(rand) {
  question.textContent = `Hint: ${ridles[rand].questions}`;
}

function createRandomWord(random) {
  wordItem = [];
  for (let i = 0; i < ridles[random].answear.length; i++) {
    let result = document.createElement("div");
    result.className = "word__item";
    wordItem.push(result);
    word.append(result);
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
