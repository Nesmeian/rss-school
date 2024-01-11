import { ridles } from "./words";
const main = document.createElement("main");
main.className = "main";
const wrapper = document.createElement("div");
wrapper.className = "wrapper";
const body = document.querySelector("body");
body.className = "body";

// const hangman
const hagnman = document.createElement("section");
hagnman.className = "hangman";
const gallow = document.createElement("div");
gallow.className = "hangman__gallow";

const supportBeam = document.createElement("div");
supportBeam.className = "hangman__support-beam";

const hangingBeam = document.createElement("div");
hangingBeam.className = "hangman__hanging-beam";

const foundation = document.createElement("div");
foundation.className = "hangman__foundation";

const title = document.createElement("h1");
title.className = "title";
title.innerHTML = "HANGMAN";

// const interactive
const interactive = document.createElement("section");
interactive.className = "interactive";

const word = document.createElement("div");
word.className = "interactive__word";

const question = document.createElement("div");
question.className = "interactive__question";
question.textContent = "How many friends you have";

const attempts = document.createElement("div");
attempts.classList = "interactive__attempts";
attempts.textContent = "Incorect guesses";

const keyboard = document.createElement("div");
keyboard.className = "interactive__keyboard";
const keyboardItem = document.createElement("div");
keyboardItem.className = "keyboard__item";

// common append
body.append(main);
main.append(title);
main.append(wrapper);
wrapper.append(hagnman);
wrapper.append(interactive);
// Hangman append
hagnman.append(gallow);
gallow.append(supportBeam);
gallow.append(hangingBeam);
gallow.append(foundation);

// interactive append
interactive.append(word);
interactive.append(question);
interactive.append(attempts);
interactive.append(keyboard);
createQuestion(takeRandomRidle());

let alphabet = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
alphabet = alphabet.split("");
addItemsToKeyboard();

function createQuestion(rand) {
  question.textContent = `Hint: ${ridles[rand].questions}`;
}
createRandomWord(takeRandomRidle());
function createRandomWord(random) {
  for (let i = 0; i < ridles[random].answear.length; i++) {
    console.log(1);
  }
}

function takeRandomRidle() {
  let rand = 1 + Math.random() * (ridles.length + 1 - 1);
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
