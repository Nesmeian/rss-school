import { ridles } from "./words";
import { keyboard, word, question } from "./html";

let counter = 0;
let randomNumber = takeRandomRidle();
let alphabet = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
alphabet = alphabet.split("");

//function call
addItemsToKeyboard();
createRandomWord(randomNumber);

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
const keyboardItem = document.querySelectorAll(".keyboard__item");
const wordItem = document.querySelectorAll(".word__item");
let splitAnswear = ridles[randomNumber].answear.split("");
console.log(splitAnswear);
// console.log(wordItem);
keyboardItem.forEach((e) => {
  e.addEventListener("click", () => {
    const text = e.textContent;
    if (splitAnswear.includes(text)) {
      let seacrhIndex = splitAnswear.indexOf(text);
      e.classList.add("--disabled");
      while (seacrhIndex != -1) {
        wordItem[seacrhIndex].textContent = splitAnswear[seacrhIndex];
        wordItem[seacrhIndex].classList.add("--correct");
        seacrhIndex = splitAnswear.indexOf(text, seacrhIndex + 1);
      }
    } else if (
      !splitAnswear.includes(text) &&
      !e.classList.contains("--disabled")
    ) {
      e.classList.add("--disabled");
      counter++;
      console.log(counter);
    }
  });
});
