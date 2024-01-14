/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./src/modules/html.js":
/*!*****************************!*\
  !*** ./src/modules/html.js ***!
  \*****************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   alphabet: () => (/* binding */ alphabet),
/* harmony export */   attempts: () => (/* binding */ attempts),
/* harmony export */   attemptsCount: () => (/* binding */ attemptsCount),
/* harmony export */   hagnmanBody: () => (/* binding */ hagnmanBody),
/* harmony export */   hagnmanHead: () => (/* binding */ hagnmanHead),
/* harmony export */   hagnmanLeftArm: () => (/* binding */ hagnmanLeftArm),
/* harmony export */   hagnmanLeftLeg: () => (/* binding */ hagnmanLeftLeg),
/* harmony export */   hagnmanRightArm: () => (/* binding */ hagnmanRightArm),
/* harmony export */   hagnmanRightLeg: () => (/* binding */ hagnmanRightLeg),
/* harmony export */   keyboard: () => (/* binding */ keyboard),
/* harmony export */   modal: () => (/* binding */ modal),
/* harmony export */   modalResult: () => (/* binding */ modalResult),
/* harmony export */   modalTryAgain: () => (/* binding */ modalTryAgain),
/* harmony export */   modalWord: () => (/* binding */ modalWord),
/* harmony export */   modalWrapper: () => (/* binding */ modalWrapper),
/* harmony export */   question: () => (/* binding */ question),
/* harmony export */   word: () => (/* binding */ word)
/* harmony export */ });
const main = document.createElement("main");
const wrapper = document.createElement("div");
const body = document.querySelector("body");
const hagnman = document.createElement("section");
const gallow = document.createElement("div");
const supportBeam = document.createElement("div");
const hangingBeam = document.createElement("div");
const foundation = document.createElement("div");
const title = document.createElement("h1");
const interactive = document.createElement("section");
const word = document.createElement("div");
const question = document.createElement("div");
const attempts = document.createElement("div");
const keyboard = document.createElement("div");
const attemptsCount = document.createElement("span");
const hagnmanHead = document.createElement("div");
const hagnmanBody = document.createElement("div");
const hagnmanLeftArm = document.createElement("div");
const hagnmanLeftLeg = document.createElement("div");
const hagnmanRightArm = document.createElement("div");
const hagnmanRightLeg = document.createElement("div");
const modal = document.createElement("div");
const modalWrapper = document.createElement("div");
const modalWord = document.createElement("div");
const modalResult = document.createElement("div");
const modalTryAgain = document.createElement("button");
let alphabet = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
alphabet = alphabet.split("");

// wrappers
main.className = "main";
wrapper.className = "wrapper";
body.className = "body";

// const hangman
hagnman.className = "hangman";
gallow.className = "hangman__gallow";
supportBeam.className = "hangman__support-beam";
hangingBeam.className = "hangman__hanging-beam";
foundation.className = "hangman__foundation";
title.className = "title";
title.innerHTML = "HANGMAN";
hagnmanHead.className = "hagman__head limb";
hagnmanBody.className = "hagman__body limb";
hagnmanRightArm.className = "hagman__rigth-arm limb";
hagnmanRightLeg.className = "hagman__rigth-leg limb";
hagnmanLeftArm.className = "hagman__left-arm limb";
hagnmanLeftLeg.className = "hagman__left-leg limb";

// const interactive
interactive.className = "interactive";
word.className = "interactive__word";
question.className = "interactive__question";
question.textContent = "How many friends you have";
attempts.classList = "interactive__attempts";
attempts.textContent = "Incorect guesses  ";
attemptsCount.classList = "attempts__count";
attemptsCount.textContent = "0/6";
keyboard.className = "interactive__keyboard";

// common append
body.append(main);
main.append(modal);
main.append(title);
main.append(wrapper);
wrapper.append(hagnman);
wrapper.append(interactive);
// Hangman append
hagnman.append(gallow);
gallow.append(supportBeam);
gallow.append(hangingBeam);
gallow.append(foundation);
gallow.append(hagnmanHead);
gallow.append(hagnmanBody);
gallow.append(hagnmanLeftArm);
gallow.append(hagnmanRightArm);
gallow.append(hagnmanLeftLeg);
gallow.append(hagnmanRightLeg);

// interactive append
interactive.append(word);
interactive.append(question);
attempts.append(attemptsCount);
interactive.append(attempts);
interactive.append(keyboard);

//modal
modal.append(modalWrapper);
modalWrapper.append(modalResult);
modalWrapper.append(modalWord);
modalWrapper.append(modalTryAgain);
modal.className = "modal";
modalWrapper.className = "modal__wrapper";
modalResult.className = "modal__result";
modalWord.className = "modal__word";
modalTryAgain.className = "modal__btn-try-again";
modalTryAgain.textContent = "Try Again?";
modalTryAgain.type = "button";

/***/ }),

/***/ "./src/modules/interactive.js":
/*!************************************!*\
  !*** ./src/modules/interactive.js ***!
  \************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _words__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./words */ "./src/modules/words.js");
/* harmony import */ var _html__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./html */ "./src/modules/html.js");


let counterWin = 0;
let counter = 0;
let randomNumber = takeRandomRidle();
addItemsToKeyboard();
createRandomWord(randomNumber);
const limbs = document.querySelectorAll(".limb");
const keyboardItem = document.querySelectorAll(".keyboard__item");
const wordItem = document.querySelectorAll(".word__item");
let splitAnswear = _words__WEBPACK_IMPORTED_MODULE_0__.ridles[randomNumber].answear.split("");
console.log(splitAnswear);
keyboardItem.forEach(e => {
  const text = e.textContent;
  let seacrhIndex = splitAnswear.indexOf(text);
  e.addEventListener("click", () => {
    if (splitAnswear.includes(text)) {
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
    } else if (!splitAnswear.includes(text) && !e.classList.contains("--disabled")) {
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
_html__WEBPACK_IMPORTED_MODULE_1__.modalTryAgain.addEventListener("click", reloadPage);
document.addEventListener("keydown", e => {
  let btn = e.key.toUpperCase();
  let seacrhIndex = splitAnswear.indexOf(btn);
  keyboardItem.forEach(e => {
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
    } else if (!splitAnswear.includes(text) && !e.classList.contains("--disabled") && btn === text) {
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
  _html__WEBPACK_IMPORTED_MODULE_1__.attemptsCount.textContent = `${counter}/6`;
}
function winGame() {
  _html__WEBPACK_IMPORTED_MODULE_1__.modal.classList.add("modal--active");
  _html__WEBPACK_IMPORTED_MODULE_1__.modalResult.textContent = "Congratulations my friend you win this game!";
  _html__WEBPACK_IMPORTED_MODULE_1__.modalWord.textContent = `Secret word is: ${splitAnswear.join("")}`;
}
function loseGame() {
  _html__WEBPACK_IMPORTED_MODULE_1__.modal.classList.add("modal--active");
  _html__WEBPACK_IMPORTED_MODULE_1__.modalResult.textContent = "You lose this game";
  _html__WEBPACK_IMPORTED_MODULE_1__.modalWord.textContent = `Secret word is: ${splitAnswear.join("")}`;
}
function reloadPage() {
  location.reload();
}

// express functions
function createQuestion(rand) {
  _html__WEBPACK_IMPORTED_MODULE_1__.question.textContent = `Hint: ${_words__WEBPACK_IMPORTED_MODULE_0__.ridles[rand].questions}`;
}
function createRandomWord(random) {
  for (let i = 0; i < _words__WEBPACK_IMPORTED_MODULE_0__.ridles[random].answear.length; i++) {
    const wordItem = document.createElement("div");
    wordItem.classList = "word__item";
    _html__WEBPACK_IMPORTED_MODULE_1__.word.append(wordItem);
  }
  createQuestion(random);
}
function takeRandomRidle() {
  let rand = Math.random() * (_words__WEBPACK_IMPORTED_MODULE_0__.ridles.length - 1);
  return Math.floor(rand);
}
function addItemsToKeyboard() {
  for (let i = 0; i < _html__WEBPACK_IMPORTED_MODULE_1__.alphabet.length; i++) {
    const keyboardItem = document.createElement("div");
    keyboardItem.className = "keyboard__item";
    _html__WEBPACK_IMPORTED_MODULE_1__.keyboard.append(keyboardItem);
    keyboardItem.textContent = _html__WEBPACK_IMPORTED_MODULE_1__.alphabet[i];
  }
}

/***/ }),

/***/ "./src/modules/words.js":
/*!******************************!*\
  !*** ./src/modules/words.js ***!
  \******************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   ridles: () => (/* binding */ ridles)
/* harmony export */ });
const ridles = [{
  questions: "What has to be broken before you can use it",
  answear: "EGG"
}, {
  questions: "I’m tall when I’m young, and I’m short when I’m old. What am I",
  answear: "CANDLE"
}, {
  questions: "What is full of holes but still holds water",
  answear: "SPONGE"
}, {
  questions: "What is always in front of you but can’t be seen",
  answear: "FUTURE"
}, {
  questions: "What can you break, even if you never pick it up or touch it",
  answear: "PROMISE"
}, {
  questions: "What gets wet while drying",
  answear: "TOWEL"
}, {
  questions: "I shave every day, but my beard stays the same. What am I",
  answear: "BARBER"
}, {
  questions: "You walk into a room that contains a match, a kerosene lamp, a candle and a fireplace. What would you light first?",
  answear: "MATCH"
}, {
  questions: "I have branches, but no fruit, trunk or leaves. What am I?",
  answear: "BANK"
}, {
  questions: "What can’t talk but will reply when spoken to",
  answear: "ECHO"
}, {
  questions: "The more of this there is, the less you see. What is it",
  answear: "DARKNESS"
}];

/***/ }),

/***/ "./node_modules/css-loader/dist/cjs.js!./node_modules/postcss-loader/dist/cjs.js??ruleSet[1].rules[1].use[2]!./node_modules/sass-loader/dist/cjs.js!./src/main.scss":
/*!**************************************************************************************************************************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js!./node_modules/postcss-loader/dist/cjs.js??ruleSet[1].rules[1].use[2]!./node_modules/sass-loader/dist/cjs.js!./src/main.scss ***!
  \**************************************************************************************************************************************************************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../node_modules/css-loader/dist/runtime/sourceMaps.js */ "./node_modules/css-loader/dist/runtime/sourceMaps.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../node_modules/css-loader/dist/runtime/api.js */ "./node_modules/css-loader/dist/runtime/api.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__);
// Imports


var ___CSS_LOADER_EXPORT___ = _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default()((_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default()));
// Module
___CSS_LOADER_EXPORT___.push([module.id, `.hangman {
  padding: 0 40px 40px;
}

.hangman__gallow {
  position: relative;
  width: 200px;
  height: 250px;
  border: black solid 10px;
  border-radius: 5px;
  border-right: 0;
}

.hangman__support-beam {
  width: 10px;
  height: 120px;
  background-color: black;
  transform: rotateZ(45deg);
  position: absolute;
  left: 32px;
  top: -22px;
}

.hangman__hanging-beam {
  position: absolute;
  right: 2px;
  width: 5px;
  height: 40px;
  border-radius: 0 0 10px 10px;
  background-color: black;
}

.hangman__foundation {
  position: absolute;
  bottom: -10px;
  left: -50px;
  width: 300px;
  height: 10px;
  background-color: black;
  border-radius: 10px;
}

.hagman__head {
  position: absolute;
  width: 50px;
  height: 0px;
  border: 0px solid black;
  border-radius: 30px;
  right: -23px;
  top: 38px;
  transition: all 0.7s ease;
}

.hagman__body {
  height: 0px;
  background: black;
  position: absolute;
  right: 1px;
  top: 90px;
  border-radius: 5px;
  transition: all 0.7s ease;
}

.hagman__left-arm {
  transform: rotate(45deg);
  height: 0;
  background: black;
  position: absolute;
  right: 22px;
  top: 84px;
  border-radius: 5px;
  transition: all 0.7s ease;
}

.hagman__rigth-arm {
  transform: rotate(132deg);
  height: 0;
  background: black;
  position: absolute;
  right: -20px;
  top: 85px;
  border-radius: 5px;
  transition: all 0.7s ease;
}

.hagman__left-leg {
  transform: rotate(45deg);
  height: 0;
  background: black;
  position: absolute;
  right: 21px;
  top: 133px;
  border-radius: 5px;
  transition: all 0.7s ease;
}

.hagman__rigth-leg {
  transform: rotate(132deg);
  height: 0;
  background: black;
  position: absolute;
  right: -18px;
  top: 132px;
  border-radius: 5px;
  transition: all 0.7s ease;
}

.--active {
  height: 50px;
  border: 3px solid black;
}

.interactive {
  text-align: center;
  width: 350px;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-evenly;
}

.interactive__question {
  font-size: 24px;
}

.interactive__word {
  display: flex;
  gap: 15px;
  justify-content: center;
}

.word__item {
  width: 20px;
  height: 20px;
  font-size: 20px;
  border-bottom: 1px solid black;
  transition: all 0.7s ease;
}

.--correct {
  border-bottom: 0;
}

.interactive__attempts {
  font-size: 20px;
}

.attempts__count {
  color: red;
  padding-left: 10px;
}

.interactive__keyboard {
  display: flex;
  flex-wrap: wrap;
  width: 330px;
  gap: 7px;
}

.keyboard__item {
  display: flex;
  align-items: center;
  justify-content: center;
  width: 30px;
  height: 30px;
  background-color: #2196f3;
  border-radius: 3px;
  color: white;
  cursor: pointer;
  transition: all 0.5s ease;
}

.--disabled {
  cursor: auto;
  cursor: initial;
  background-color: darkblue;
}

.keyboard__item:nth-child(19) {
  margin-left: 20px;
}

.body {
  background: rgb(46, 77, 147);
  font-family: monospace;
}

.main {
  margin: 0 auto;
  max-width: 1440px;
}

.wrapper {
  display: flex;
  justify-content: space-evenly;
  flex-wrap: wrap;
  margin: 0 auto;
  background: white;
  border-radius: 50px;
  padding: 50px 0;
}

.title {
  text-align: center;
  font-size: 40px;
  padding-bottom: 60px;
  color: white;
}

.modal {
  display: flex;
  position: fixed;
  left: -1000px;
  top: 0;
  height: 100%;
  width: 0;
  background: rgb(46, 77, 147);
  z-index: 2;
  font-size: 24px;
  transition: all 1.5s ease-in-out;
}

.modal__wrapper {
  margin: 0 auto;
  width: 0;
  height: 30lvh;
  background: white;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-around;
  text-align: center;
  border-radius: 40px;
}

.modal--active {
  left: 0;
  align-items: center;
  width: 100%;
}
.modal--active .modal__wrapper {
  min-width: 360px;
  width: 30vw;
}

.modal__btn-try-again {
  display: flex;
  align-items: center;
  justify-content: center;
  background-color: #2196f3;
  border: 0;
  padding: 15px;
  border-radius: 15px;
  color: white;
  cursor: pointer;
  transition: all 0.5s ease;
}`, "",{"version":3,"sources":["webpack://./src/sass/_hangman.scss","webpack://./src/main.scss","webpack://./src/sass/_interactive.scss","webpack://./src/sass/_wrapper.scss","webpack://./src/sass/_modal.scss"],"names":[],"mappings":"AAAA;EACE,oBAAA;ACCF;;ADCA;EACE,kBAAA;EACA,YAAA;EACA,aAAA;EACA,wBAAA;EACA,kBAAA;EACA,eAAA;ACEF;;ADCA;EACE,WAAA;EACA,aAAA;EACA,uBAAA;EACA,yBAAA;EACA,kBAAA;EACA,UAAA;EACA,UAAA;ACEF;;ADCA;EACE,kBAAA;EACA,UAAA;EACA,UAAA;EACA,YAAA;EACA,4BAAA;EACA,uBAAA;ACEF;;ADCA;EACE,kBAAA;EACA,aAAA;EACA,WAAA;EACA,YAAA;EACA,YAAA;EACA,uBAAA;EACA,mBAAA;ACEF;;ADCA;EACE,kBAAA;EACA,WAAA;EACA,WAAA;EACA,uBAAA;EACA,mBAAA;EACA,YAAA;EACA,SAAA;EACA,yBAAA;ACEF;;ADAA;EACE,WAAA;EACA,iBAAA;EACA,kBAAA;EACA,UAAA;EACA,SAAA;EACA,kBAAA;EACA,yBAAA;ACGF;;ADAA;EACE,wBAAA;EACA,SAAA;EACA,iBAAA;EACA,kBAAA;EACA,WAAA;EACA,SAAA;EACA,kBAAA;EACA,yBAAA;ACGF;;ADAA;EACE,yBAAA;EACA,SAAA;EACA,iBAAA;EACA,kBAAA;EACA,YAAA;EACA,SAAA;EACA,kBAAA;EACA,yBAAA;ACGF;;ADAA;EACE,wBAAA;EACA,SAAA;EACA,iBAAA;EACA,kBAAA;EACA,WAAA;EACA,UAAA;EACA,kBAAA;EACA,yBAAA;ACGF;;ADAA;EACE,yBAAA;EACA,SAAA;EACA,iBAAA;EACA,kBAAA;EACA,YAAA;EACA,UAAA;EACA,kBAAA;EACA,yBAAA;ACGF;;ADAA;EACE,YAAA;EACA,uBAAA;ACGF;;AC9GA;EACE,kBAAA;EACA,YAAA;EACA,aAAA;EACA,sBAAA;EACA,mBAAA;EACA,6BAAA;ADiHF;;AC/GA;EACE,eAAA;ADkHF;;AC/GA;EACE,aAAA;EACA,SAAA;EACA,uBAAA;ADkHF;;AC/GA;EACE,WAAA;EACA,YAAA;EACA,eAAA;EACA,8BAAA;EACA,yBAAA;ADkHF;;AC/GA;EACE,gBAAA;ADkHF;;AC/GA;EACE,eAAA;ADkHF;;AC/GA;EACE,UAAA;EACA,kBAAA;ADkHF;;AC/GA;EACE,aAAA;EACA,eAAA;EACA,YAAA;EACA,QAAA;ADkHF;;AC/GA;EACE,aAAA;EACA,mBAAA;EACA,uBAAA;EACA,WAAA;EACA,YAAA;EACA,yBAAA;EACA,kBAAA;EACA,YAAA;EACA,eAAA;EACA,yBAAA;ADkHF;;AC/GA;EACE,YAAA;EAAA,eAAA;EACA,0BAAA;ADkHF;;AC/GA;EACE,iBAAA;ADkHF;;AEnLA;EACE,4BAAA;EACA,sBAAA;AFsLF;;AEnLA;EACE,cAAA;EACA,iBAAA;AFsLF;;AEpLA;EACE,aAAA;EACA,6BAAA;EACA,eAAA;EACA,cAAA;EACA,iBAAA;EACA,mBAAA;EACA,eAAA;AFuLF;;AErLA;EACE,kBAAA;EACA,eAAA;EACA,oBAAA;EACA,YAAA;AFwLF;;AG9MA;EACE,aAAA;EACA,eAAA;EACA,aAAA;EACA,MAAA;EACA,YAAA;EACA,QAAA;EACA,4BAAA;EACA,UAAA;EACA,eAAA;EACA,gCAAA;AHiNF;;AG/MA;EACE,cAAA;EACA,QAAA;EACA,aAAA;EACA,iBAAA;EACA,aAAA;EACA,sBAAA;EACA,mBAAA;EACA,6BAAA;EACA,kBAAA;EACA,mBAAA;AHkNF;;AGhNA;EACE,OAAA;EACA,mBAAA;EACA,WAAA;AHmNF;AGlNE;EACE,gBAAA;EACA,WAAA;AHoNJ;;AGhNA;EACE,aAAA;EACA,mBAAA;EACA,uBAAA;EACA,yBAAA;EACA,SAAA;EACA,aAAA;EACA,mBAAA;EACA,YAAA;EACA,eAAA;EACA,yBAAA;AHmNF","sourcesContent":[".hangman{\r\n  padding: 0 40px 40px;\r\n}\r\n.hangman__gallow {\r\n  position: relative;\r\n  width: 200px;\r\n  height: 250px;\r\n  border: black solid 10px;\r\n  border-radius: 5px;\r\n  border-right: 0;\r\n}\r\n\r\n.hangman__support-beam {\r\n  width: 10px;\r\n  height: 120px;\r\n  background-color: black;\r\n  transform: rotateZ(45deg);\r\n  position: absolute;\r\n  left: 32px;\r\n  top: -22px;\r\n}\r\n\r\n.hangman__hanging-beam {\r\n  position: absolute;\r\n  right: 2px;\r\n  width: 5px;\r\n  height: 40px;\r\n  border-radius: 0 0 10px 10px;\r\n  background-color: black;\r\n}\r\n\r\n.hangman__foundation {\r\n  position: absolute;\r\n  bottom: -10px;\r\n  left: -50px;\r\n  width: 300px;\r\n  height: 10px;\r\n  background-color: black;\r\n  border-radius: 10px;\r\n}\r\n\r\n.hagman__head {\r\n  position: absolute;\r\n  width: 50px;\r\n  height: 0px;\r\n  border: 0px solid black;\r\n  border-radius: 30px;\r\n  right: -23px;\r\n  top: 38px;\r\n  transition: all 0.7s ease;\r\n}\r\n.hagman__body {\r\n  height: 0px;\r\n  background: black;\r\n  position: absolute;\r\n  right: 1px;\r\n  top: 90px;\r\n  border-radius: 5px;\r\n  transition: all 0.7s ease;\r\n}\r\n\r\n.hagman__left-arm {\r\n  transform: rotate(45deg);\r\n  height: 0;\r\n  background: black;\r\n  position: absolute;\r\n  right: 22px;\r\n  top: 84px;\r\n  border-radius: 5px;\r\n  transition: all 0.7s ease;\r\n}\r\n\r\n.hagman__rigth-arm {\r\n  transform: rotate(132deg);\r\n  height: 0;\r\n  background: black;\r\n  position: absolute;\r\n  right: -20px;\r\n  top: 85px;\r\n  border-radius: 5px;\r\n  transition: all 0.7s ease;\r\n}\r\n\r\n.hagman__left-leg {\r\n  transform: rotate(45deg);\r\n  height: 0;\r\n  background: black;\r\n  position: absolute;\r\n  right: 21px;\r\n  top: 133px;\r\n  border-radius: 5px;\r\n  transition: all 0.7s ease;\r\n}\r\n\r\n.hagman__rigth-leg {\r\n  transform: rotate(132deg);\r\n  height: 0;\r\n  background: black;\r\n  position: absolute;\r\n  right: -18px;\r\n  top: 132px;\r\n  border-radius: 5px;\r\n  transition: all 0.7s ease;\r\n}\r\n\r\n.--active {\r\n  height: 50px;\r\n  border: 3px solid black;\r\n}\r\n",".hangman {\n  padding: 0 40px 40px;\n}\n\n.hangman__gallow {\n  position: relative;\n  width: 200px;\n  height: 250px;\n  border: black solid 10px;\n  border-radius: 5px;\n  border-right: 0;\n}\n\n.hangman__support-beam {\n  width: 10px;\n  height: 120px;\n  background-color: black;\n  transform: rotateZ(45deg);\n  position: absolute;\n  left: 32px;\n  top: -22px;\n}\n\n.hangman__hanging-beam {\n  position: absolute;\n  right: 2px;\n  width: 5px;\n  height: 40px;\n  border-radius: 0 0 10px 10px;\n  background-color: black;\n}\n\n.hangman__foundation {\n  position: absolute;\n  bottom: -10px;\n  left: -50px;\n  width: 300px;\n  height: 10px;\n  background-color: black;\n  border-radius: 10px;\n}\n\n.hagman__head {\n  position: absolute;\n  width: 50px;\n  height: 0px;\n  border: 0px solid black;\n  border-radius: 30px;\n  right: -23px;\n  top: 38px;\n  transition: all 0.7s ease;\n}\n\n.hagman__body {\n  height: 0px;\n  background: black;\n  position: absolute;\n  right: 1px;\n  top: 90px;\n  border-radius: 5px;\n  transition: all 0.7s ease;\n}\n\n.hagman__left-arm {\n  transform: rotate(45deg);\n  height: 0;\n  background: black;\n  position: absolute;\n  right: 22px;\n  top: 84px;\n  border-radius: 5px;\n  transition: all 0.7s ease;\n}\n\n.hagman__rigth-arm {\n  transform: rotate(132deg);\n  height: 0;\n  background: black;\n  position: absolute;\n  right: -20px;\n  top: 85px;\n  border-radius: 5px;\n  transition: all 0.7s ease;\n}\n\n.hagman__left-leg {\n  transform: rotate(45deg);\n  height: 0;\n  background: black;\n  position: absolute;\n  right: 21px;\n  top: 133px;\n  border-radius: 5px;\n  transition: all 0.7s ease;\n}\n\n.hagman__rigth-leg {\n  transform: rotate(132deg);\n  height: 0;\n  background: black;\n  position: absolute;\n  right: -18px;\n  top: 132px;\n  border-radius: 5px;\n  transition: all 0.7s ease;\n}\n\n.--active {\n  height: 50px;\n  border: 3px solid black;\n}\n\n.interactive {\n  text-align: center;\n  width: 350px;\n  display: flex;\n  flex-direction: column;\n  align-items: center;\n  justify-content: space-evenly;\n}\n\n.interactive__question {\n  font-size: 24px;\n}\n\n.interactive__word {\n  display: flex;\n  gap: 15px;\n  justify-content: center;\n}\n\n.word__item {\n  width: 20px;\n  height: 20px;\n  font-size: 20px;\n  border-bottom: 1px solid black;\n  transition: all 0.7s ease;\n}\n\n.--correct {\n  border-bottom: 0;\n}\n\n.interactive__attempts {\n  font-size: 20px;\n}\n\n.attempts__count {\n  color: red;\n  padding-left: 10px;\n}\n\n.interactive__keyboard {\n  display: flex;\n  flex-wrap: wrap;\n  width: 330px;\n  gap: 7px;\n}\n\n.keyboard__item {\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  width: 30px;\n  height: 30px;\n  background-color: #2196f3;\n  border-radius: 3px;\n  color: white;\n  cursor: pointer;\n  transition: all 0.5s ease;\n}\n\n.--disabled {\n  cursor: initial;\n  background-color: darkblue;\n}\n\n.keyboard__item:nth-child(19) {\n  margin-left: 20px;\n}\n\n.body {\n  background: rgb(46, 77, 147);\n  font-family: monospace;\n}\n\n.main {\n  margin: 0 auto;\n  max-width: 1440px;\n}\n\n.wrapper {\n  display: flex;\n  justify-content: space-evenly;\n  flex-wrap: wrap;\n  margin: 0 auto;\n  background: white;\n  border-radius: 50px;\n  padding: 50px 0;\n}\n\n.title {\n  text-align: center;\n  font-size: 40px;\n  padding-bottom: 60px;\n  color: white;\n}\n\n.modal {\n  display: flex;\n  position: fixed;\n  left: -1000px;\n  top: 0;\n  height: 100%;\n  width: 0;\n  background: rgb(46, 77, 147);\n  z-index: 2;\n  font-size: 24px;\n  transition: all 1.5s ease-in-out;\n}\n\n.modal__wrapper {\n  margin: 0 auto;\n  width: 0;\n  height: 30lvh;\n  background: white;\n  display: flex;\n  flex-direction: column;\n  align-items: center;\n  justify-content: space-around;\n  text-align: center;\n  border-radius: 40px;\n}\n\n.modal--active {\n  left: 0;\n  align-items: center;\n  width: 100%;\n}\n.modal--active .modal__wrapper {\n  min-width: 360px;\n  width: 30vw;\n}\n\n.modal__btn-try-again {\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  background-color: #2196f3;\n  border: 0;\n  padding: 15px;\n  border-radius: 15px;\n  color: white;\n  cursor: pointer;\n  transition: all 0.5s ease;\n}",".interactive {\r\n  text-align: center;\r\n  width: 350px;\r\n  display: flex;\r\n  flex-direction: column;\r\n  align-items: center;\r\n  justify-content: space-evenly;\r\n}\r\n.interactive__question {\r\n  font-size: 24px;\r\n}\r\n\r\n.interactive__word {\r\n  display: flex;\r\n  gap: 15px;\r\n  justify-content: center;\r\n}\r\n\r\n.word__item {\r\n  width: 20px;\r\n  height: 20px;\r\n  font-size: 20px;\r\n  border-bottom: 1px solid black;\r\n  transition: all 0.7s ease;\r\n}\r\n\r\n.--correct {\r\n  border-bottom: 0;\r\n}\r\n\r\n.interactive__attempts {\r\n  font-size: 20px;\r\n}\r\n\r\n.attempts__count {\r\n  color: red;\r\n  padding-left: 10px;\r\n}\r\n\r\n.interactive__keyboard {\r\n  display: flex;\r\n  flex-wrap: wrap;\r\n  width: 330px;\r\n  gap: 7px;\r\n}\r\n\r\n.keyboard__item {\r\n  display: flex;\r\n  align-items: center;\r\n  justify-content: center;\r\n  width: 30px;\r\n  height: 30px;\r\n  background-color: #2196f3;\r\n  border-radius: 3px;\r\n  color: white;\r\n  cursor: pointer;\r\n  transition: all 0.5s ease;\r\n}\r\n\r\n.--disabled {\r\n  cursor: initial;\r\n  background-color: darkblue;\r\n}\r\n\r\n.keyboard__item:nth-child(19) {\r\n  margin-left: 20px;\r\n}\r\n",".body{\r\n  background: rgb(46,77,147);\r\n  font-family: monospace;\r\n}\r\n\r\n.main {\r\n  margin: 0 auto;\r\n  max-width: 1440px;\r\n}\r\n.wrapper {\r\n  display: flex;\r\n  justify-content: space-evenly;\r\n  flex-wrap: wrap;\r\n  margin: 0 auto;\r\n  background: white;\r\n  border-radius: 50px;\r\n  padding: 50px 0;\r\n}\r\n.title {\r\n  text-align: center;\r\n  font-size: 40px;\r\n  padding-bottom: 60px;\r\n  color: white;\r\n}\r\n",".modal {\r\n  display: flex;\r\n  position: fixed;\r\n  left: -1000px;\r\n  top: 0;\r\n  height: 100%;\r\n  width: 0;\r\n  background: rgb(46, 77, 147);\r\n  z-index: 2;\r\n  font-size: 24px;\r\n  transition: all 1.5s ease-in-out;\r\n}\r\n.modal__wrapper {\r\n  margin: 0 auto;\r\n  width: 0;\r\n  height: 30lvh;\r\n  background: white;\r\n  display: flex;\r\n  flex-direction: column;\r\n  align-items: center;\r\n  justify-content: space-around;\r\n  text-align: center;\r\n  border-radius: 40px;\r\n}\r\n.modal--active {\r\n  left: 0;\r\n  align-items: center;\r\n  width: 100%;\r\n  .modal__wrapper {\r\n    min-width: 360px;\r\n    width: 30vw;\r\n  }\r\n}\r\n\r\n.modal__btn-try-again {\r\n  display: flex;\r\n  align-items: center;\r\n  justify-content: center;\r\n  background-color: #2196f3;\r\n  border: 0;\r\n  padding: 15px;\r\n  border-radius: 15px;\r\n  color: white;\r\n  cursor: pointer;\r\n  transition: all 0.5s ease;\r\n}\r\n"],"sourceRoot":""}]);
// Exports
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (___CSS_LOADER_EXPORT___);


/***/ }),

/***/ "./node_modules/css-loader/dist/runtime/api.js":
/*!*****************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/api.js ***!
  \*****************************************************/
/***/ ((module) => {



/*
  MIT License http://www.opensource.org/licenses/mit-license.php
  Author Tobias Koppers @sokra
*/
module.exports = function (cssWithMappingToString) {
  var list = [];

  // return the list of modules as css string
  list.toString = function toString() {
    return this.map(function (item) {
      var content = "";
      var needLayer = typeof item[5] !== "undefined";
      if (item[4]) {
        content += "@supports (".concat(item[4], ") {");
      }
      if (item[2]) {
        content += "@media ".concat(item[2], " {");
      }
      if (needLayer) {
        content += "@layer".concat(item[5].length > 0 ? " ".concat(item[5]) : "", " {");
      }
      content += cssWithMappingToString(item);
      if (needLayer) {
        content += "}";
      }
      if (item[2]) {
        content += "}";
      }
      if (item[4]) {
        content += "}";
      }
      return content;
    }).join("");
  };

  // import a list of modules into the list
  list.i = function i(modules, media, dedupe, supports, layer) {
    if (typeof modules === "string") {
      modules = [[null, modules, undefined]];
    }
    var alreadyImportedModules = {};
    if (dedupe) {
      for (var k = 0; k < this.length; k++) {
        var id = this[k][0];
        if (id != null) {
          alreadyImportedModules[id] = true;
        }
      }
    }
    for (var _k = 0; _k < modules.length; _k++) {
      var item = [].concat(modules[_k]);
      if (dedupe && alreadyImportedModules[item[0]]) {
        continue;
      }
      if (typeof layer !== "undefined") {
        if (typeof item[5] === "undefined") {
          item[5] = layer;
        } else {
          item[1] = "@layer".concat(item[5].length > 0 ? " ".concat(item[5]) : "", " {").concat(item[1], "}");
          item[5] = layer;
        }
      }
      if (media) {
        if (!item[2]) {
          item[2] = media;
        } else {
          item[1] = "@media ".concat(item[2], " {").concat(item[1], "}");
          item[2] = media;
        }
      }
      if (supports) {
        if (!item[4]) {
          item[4] = "".concat(supports);
        } else {
          item[1] = "@supports (".concat(item[4], ") {").concat(item[1], "}");
          item[4] = supports;
        }
      }
      list.push(item);
    }
  };
  return list;
};

/***/ }),

/***/ "./node_modules/css-loader/dist/runtime/sourceMaps.js":
/*!************************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/sourceMaps.js ***!
  \************************************************************/
/***/ ((module) => {



module.exports = function (item) {
  var content = item[1];
  var cssMapping = item[3];
  if (!cssMapping) {
    return content;
  }
  if (typeof btoa === "function") {
    var base64 = btoa(unescape(encodeURIComponent(JSON.stringify(cssMapping))));
    var data = "sourceMappingURL=data:application/json;charset=utf-8;base64,".concat(base64);
    var sourceMapping = "/*# ".concat(data, " */");
    return [content].concat([sourceMapping]).join("\n");
  }
  return [content].join("\n");
};

/***/ }),

/***/ "./src/index.html":
/*!************************!*\
  !*** ./src/index.html ***!
  \************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_html_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../node_modules/html-loader/dist/runtime/getUrl.js */ "./node_modules/html-loader/dist/runtime/getUrl.js");
/* harmony import */ var _node_modules_html_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_html_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_0__);
// Imports

var ___HTML_LOADER_IMPORT_0___ = new URL(/* asset import */ __webpack_require__(/*! ./img/hangman-game.png */ "./src/img/hangman-game.png"), __webpack_require__.b);
// Module
var ___HTML_LOADER_REPLACEMENT_0___ = _node_modules_html_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_0___default()(___HTML_LOADER_IMPORT_0___);
var code = "<!DOCTYPE html>\r\n<html lang=\"en\">\r\n  <head>\r\n    <meta charset=\"UTF-8\" />\r\n    <meta name=\"viewport\" content=\"width=device-width, initial-scale=1.0\" />\r\n    <link\r\n      rel=\"shortcut icon\"\r\n      href=\"" + ___HTML_LOADER_REPLACEMENT_0___ + "\"\r\n      type=\"image/x-icon\"\r\n    />\r\n    <title>Hangman</title>\r\n  </head>\r\n  <body></body>\r\n</html>\r\n";
// Exports
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (code);

/***/ }),

/***/ "./node_modules/html-loader/dist/runtime/getUrl.js":
/*!*********************************************************!*\
  !*** ./node_modules/html-loader/dist/runtime/getUrl.js ***!
  \*********************************************************/
/***/ ((module) => {



module.exports = function (url, options) {
  if (!options) {
    // eslint-disable-next-line no-param-reassign
    options = {};
  }

  if (!url) {
    return url;
  } // eslint-disable-next-line no-underscore-dangle, no-param-reassign


  url = String(url.__esModule ? url.default : url);

  if (options.hash) {
    // eslint-disable-next-line no-param-reassign
    url += options.hash;
  }

  if (options.maybeNeedQuotes && /[\t\n\f\r "'=<>`]/.test(url)) {
    return "\"".concat(url, "\"");
  }

  return url;
};

/***/ }),

/***/ "./src/main.scss":
/*!***********************!*\
  !*** ./src/main.scss ***!
  \***********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js */ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/styleDomAPI.js */ "./node_modules/style-loader/dist/runtime/styleDomAPI.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/insertBySelector.js */ "./node_modules/style-loader/dist/runtime/insertBySelector.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js */ "./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/insertStyleElement.js */ "./node_modules/style-loader/dist/runtime/insertStyleElement.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/styleTagTransform.js */ "./node_modules/style-loader/dist/runtime/styleTagTransform.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _node_modules_css_loader_dist_cjs_js_node_modules_postcss_loader_dist_cjs_js_ruleSet_1_rules_1_use_2_node_modules_sass_loader_dist_cjs_js_main_scss__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! !!../node_modules/css-loader/dist/cjs.js!../node_modules/postcss-loader/dist/cjs.js??ruleSet[1].rules[1].use[2]!../node_modules/sass-loader/dist/cjs.js!./main.scss */ "./node_modules/css-loader/dist/cjs.js!./node_modules/postcss-loader/dist/cjs.js??ruleSet[1].rules[1].use[2]!./node_modules/sass-loader/dist/cjs.js!./src/main.scss");

      
      
      
      
      
      
      
      
      

var options = {};

options.styleTagTransform = (_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default());
options.setAttributes = (_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default());

      options.insert = _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default().bind(null, "head");
    
options.domAPI = (_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default());
options.insertStyleElement = (_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default());

var update = _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default()(_node_modules_css_loader_dist_cjs_js_node_modules_postcss_loader_dist_cjs_js_ruleSet_1_rules_1_use_2_node_modules_sass_loader_dist_cjs_js_main_scss__WEBPACK_IMPORTED_MODULE_6__["default"], options);




       /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_css_loader_dist_cjs_js_node_modules_postcss_loader_dist_cjs_js_ruleSet_1_rules_1_use_2_node_modules_sass_loader_dist_cjs_js_main_scss__WEBPACK_IMPORTED_MODULE_6__["default"] && _node_modules_css_loader_dist_cjs_js_node_modules_postcss_loader_dist_cjs_js_ruleSet_1_rules_1_use_2_node_modules_sass_loader_dist_cjs_js_main_scss__WEBPACK_IMPORTED_MODULE_6__["default"].locals ? _node_modules_css_loader_dist_cjs_js_node_modules_postcss_loader_dist_cjs_js_ruleSet_1_rules_1_use_2_node_modules_sass_loader_dist_cjs_js_main_scss__WEBPACK_IMPORTED_MODULE_6__["default"].locals : undefined);


/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js":
/*!****************************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js ***!
  \****************************************************************************/
/***/ ((module) => {



var stylesInDOM = [];
function getIndexByIdentifier(identifier) {
  var result = -1;
  for (var i = 0; i < stylesInDOM.length; i++) {
    if (stylesInDOM[i].identifier === identifier) {
      result = i;
      break;
    }
  }
  return result;
}
function modulesToDom(list, options) {
  var idCountMap = {};
  var identifiers = [];
  for (var i = 0; i < list.length; i++) {
    var item = list[i];
    var id = options.base ? item[0] + options.base : item[0];
    var count = idCountMap[id] || 0;
    var identifier = "".concat(id, " ").concat(count);
    idCountMap[id] = count + 1;
    var indexByIdentifier = getIndexByIdentifier(identifier);
    var obj = {
      css: item[1],
      media: item[2],
      sourceMap: item[3],
      supports: item[4],
      layer: item[5]
    };
    if (indexByIdentifier !== -1) {
      stylesInDOM[indexByIdentifier].references++;
      stylesInDOM[indexByIdentifier].updater(obj);
    } else {
      var updater = addElementStyle(obj, options);
      options.byIndex = i;
      stylesInDOM.splice(i, 0, {
        identifier: identifier,
        updater: updater,
        references: 1
      });
    }
    identifiers.push(identifier);
  }
  return identifiers;
}
function addElementStyle(obj, options) {
  var api = options.domAPI(options);
  api.update(obj);
  var updater = function updater(newObj) {
    if (newObj) {
      if (newObj.css === obj.css && newObj.media === obj.media && newObj.sourceMap === obj.sourceMap && newObj.supports === obj.supports && newObj.layer === obj.layer) {
        return;
      }
      api.update(obj = newObj);
    } else {
      api.remove();
    }
  };
  return updater;
}
module.exports = function (list, options) {
  options = options || {};
  list = list || [];
  var lastIdentifiers = modulesToDom(list, options);
  return function update(newList) {
    newList = newList || [];
    for (var i = 0; i < lastIdentifiers.length; i++) {
      var identifier = lastIdentifiers[i];
      var index = getIndexByIdentifier(identifier);
      stylesInDOM[index].references--;
    }
    var newLastIdentifiers = modulesToDom(newList, options);
    for (var _i = 0; _i < lastIdentifiers.length; _i++) {
      var _identifier = lastIdentifiers[_i];
      var _index = getIndexByIdentifier(_identifier);
      if (stylesInDOM[_index].references === 0) {
        stylesInDOM[_index].updater();
        stylesInDOM.splice(_index, 1);
      }
    }
    lastIdentifiers = newLastIdentifiers;
  };
};

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/insertBySelector.js":
/*!********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/insertBySelector.js ***!
  \********************************************************************/
/***/ ((module) => {



var memo = {};

/* istanbul ignore next  */
function getTarget(target) {
  if (typeof memo[target] === "undefined") {
    var styleTarget = document.querySelector(target);

    // Special case to return head of iframe instead of iframe itself
    if (window.HTMLIFrameElement && styleTarget instanceof window.HTMLIFrameElement) {
      try {
        // This will throw an exception if access to iframe is blocked
        // due to cross-origin restrictions
        styleTarget = styleTarget.contentDocument.head;
      } catch (e) {
        // istanbul ignore next
        styleTarget = null;
      }
    }
    memo[target] = styleTarget;
  }
  return memo[target];
}

/* istanbul ignore next  */
function insertBySelector(insert, style) {
  var target = getTarget(insert);
  if (!target) {
    throw new Error("Couldn't find a style target. This probably means that the value for the 'insert' parameter is invalid.");
  }
  target.appendChild(style);
}
module.exports = insertBySelector;

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/insertStyleElement.js":
/*!**********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/insertStyleElement.js ***!
  \**********************************************************************/
/***/ ((module) => {



/* istanbul ignore next  */
function insertStyleElement(options) {
  var element = document.createElement("style");
  options.setAttributes(element, options.attributes);
  options.insert(element, options.options);
  return element;
}
module.exports = insertStyleElement;

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js":
/*!**********************************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js ***!
  \**********************************************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {



/* istanbul ignore next  */
function setAttributesWithoutAttributes(styleElement) {
  var nonce =  true ? __webpack_require__.nc : 0;
  if (nonce) {
    styleElement.setAttribute("nonce", nonce);
  }
}
module.exports = setAttributesWithoutAttributes;

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/styleDomAPI.js":
/*!***************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/styleDomAPI.js ***!
  \***************************************************************/
/***/ ((module) => {



/* istanbul ignore next  */
function apply(styleElement, options, obj) {
  var css = "";
  if (obj.supports) {
    css += "@supports (".concat(obj.supports, ") {");
  }
  if (obj.media) {
    css += "@media ".concat(obj.media, " {");
  }
  var needLayer = typeof obj.layer !== "undefined";
  if (needLayer) {
    css += "@layer".concat(obj.layer.length > 0 ? " ".concat(obj.layer) : "", " {");
  }
  css += obj.css;
  if (needLayer) {
    css += "}";
  }
  if (obj.media) {
    css += "}";
  }
  if (obj.supports) {
    css += "}";
  }
  var sourceMap = obj.sourceMap;
  if (sourceMap && typeof btoa !== "undefined") {
    css += "\n/*# sourceMappingURL=data:application/json;base64,".concat(btoa(unescape(encodeURIComponent(JSON.stringify(sourceMap)))), " */");
  }

  // For old IE
  /* istanbul ignore if  */
  options.styleTagTransform(css, styleElement, options.options);
}
function removeStyleElement(styleElement) {
  // istanbul ignore if
  if (styleElement.parentNode === null) {
    return false;
  }
  styleElement.parentNode.removeChild(styleElement);
}

/* istanbul ignore next  */
function domAPI(options) {
  if (typeof document === "undefined") {
    return {
      update: function update() {},
      remove: function remove() {}
    };
  }
  var styleElement = options.insertStyleElement(options);
  return {
    update: function update(obj) {
      apply(styleElement, options, obj);
    },
    remove: function remove() {
      removeStyleElement(styleElement);
    }
  };
}
module.exports = domAPI;

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/styleTagTransform.js":
/*!*********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/styleTagTransform.js ***!
  \*********************************************************************/
/***/ ((module) => {



/* istanbul ignore next  */
function styleTagTransform(css, styleElement) {
  if (styleElement.styleSheet) {
    styleElement.styleSheet.cssText = css;
  } else {
    while (styleElement.firstChild) {
      styleElement.removeChild(styleElement.firstChild);
    }
    styleElement.appendChild(document.createTextNode(css));
  }
}
module.exports = styleTagTransform;

/***/ }),

/***/ "./src/img/hangman-game.png":
/*!**********************************!*\
  !*** ./src/img/hangman-game.png ***!
  \**********************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "bc616f497f42a3854efb.png";

/***/ })

/******/ 	});
/************************************************************************/
/******/ 	// The module cache
/******/ 	var __webpack_module_cache__ = {};
/******/ 	
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/ 		// Check if module is in cache
/******/ 		var cachedModule = __webpack_module_cache__[moduleId];
/******/ 		if (cachedModule !== undefined) {
/******/ 			return cachedModule.exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = __webpack_module_cache__[moduleId] = {
/******/ 			id: moduleId,
/******/ 			// no module.loaded needed
/******/ 			exports: {}
/******/ 		};
/******/ 	
/******/ 		// Execute the module function
/******/ 		__webpack_modules__[moduleId](module, module.exports, __webpack_require__);
/******/ 	
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/ 	
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = __webpack_modules__;
/******/ 	
/************************************************************************/
/******/ 	/* webpack/runtime/compat get default export */
/******/ 	(() => {
/******/ 		// getDefaultExport function for compatibility with non-harmony modules
/******/ 		__webpack_require__.n = (module) => {
/******/ 			var getter = module && module.__esModule ?
/******/ 				() => (module['default']) :
/******/ 				() => (module);
/******/ 			__webpack_require__.d(getter, { a: getter });
/******/ 			return getter;
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/define property getters */
/******/ 	(() => {
/******/ 		// define getter functions for harmony exports
/******/ 		__webpack_require__.d = (exports, definition) => {
/******/ 			for(var key in definition) {
/******/ 				if(__webpack_require__.o(definition, key) && !__webpack_require__.o(exports, key)) {
/******/ 					Object.defineProperty(exports, key, { enumerable: true, get: definition[key] });
/******/ 				}
/******/ 			}
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/global */
/******/ 	(() => {
/******/ 		__webpack_require__.g = (function() {
/******/ 			if (typeof globalThis === 'object') return globalThis;
/******/ 			try {
/******/ 				return this || new Function('return this')();
/******/ 			} catch (e) {
/******/ 				if (typeof window === 'object') return window;
/******/ 			}
/******/ 		})();
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/hasOwnProperty shorthand */
/******/ 	(() => {
/******/ 		__webpack_require__.o = (obj, prop) => (Object.prototype.hasOwnProperty.call(obj, prop))
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/make namespace object */
/******/ 	(() => {
/******/ 		// define __esModule on exports
/******/ 		__webpack_require__.r = (exports) => {
/******/ 			if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 				Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 			}
/******/ 			Object.defineProperty(exports, '__esModule', { value: true });
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/publicPath */
/******/ 	(() => {
/******/ 		var scriptUrl;
/******/ 		if (__webpack_require__.g.importScripts) scriptUrl = __webpack_require__.g.location + "";
/******/ 		var document = __webpack_require__.g.document;
/******/ 		if (!scriptUrl && document) {
/******/ 			if (document.currentScript)
/******/ 				scriptUrl = document.currentScript.src;
/******/ 			if (!scriptUrl) {
/******/ 				var scripts = document.getElementsByTagName("script");
/******/ 				if(scripts.length) {
/******/ 					var i = scripts.length - 1;
/******/ 					while (i > -1 && !scriptUrl) scriptUrl = scripts[i--].src;
/******/ 				}
/******/ 			}
/******/ 		}
/******/ 		// When supporting browsers where an automatic publicPath is not supported you must specify an output.publicPath manually via configuration
/******/ 		// or pass an empty string ("") and set the __webpack_public_path__ variable from your code to use your own logic.
/******/ 		if (!scriptUrl) throw new Error("Automatic publicPath is not supported in this browser");
/******/ 		scriptUrl = scriptUrl.replace(/#.*$/, "").replace(/\?.*$/, "").replace(/\/[^\/]+$/, "/");
/******/ 		__webpack_require__.p = scriptUrl;
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/jsonp chunk loading */
/******/ 	(() => {
/******/ 		__webpack_require__.b = document.baseURI || self.location.href;
/******/ 		
/******/ 		// object to store loaded and loading chunks
/******/ 		// undefined = chunk not loaded, null = chunk preloaded/prefetched
/******/ 		// [resolve, reject, Promise] = chunk loading, 0 = chunk loaded
/******/ 		var installedChunks = {
/******/ 			"main": 0
/******/ 		};
/******/ 		
/******/ 		// no chunk on demand loading
/******/ 		
/******/ 		// no prefetching
/******/ 		
/******/ 		// no preloaded
/******/ 		
/******/ 		// no HMR
/******/ 		
/******/ 		// no HMR manifest
/******/ 		
/******/ 		// no on chunks loaded
/******/ 		
/******/ 		// no jsonp function
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/nonce */
/******/ 	(() => {
/******/ 		__webpack_require__.nc = undefined;
/******/ 	})();
/******/ 	
/************************************************************************/
var __webpack_exports__ = {};
// This entry need to be wrapped in an IIFE because it need to be isolated against other modules in the chunk.
(() => {
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _index_html__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./index.html */ "./src/index.html");
/* harmony import */ var _main_scss__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./main.scss */ "./src/main.scss");
/* harmony import */ var _modules_html_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./modules/html.js */ "./src/modules/html.js");
/* harmony import */ var _modules_interactive_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./modules/interactive.js */ "./src/modules/interactive.js");
console.log("Пожалуйста при проверки роботаспособности клавиатуры используйте английскую раскладку");
console.log(`1.The game starts with the correct default view (empty gallows, underscores for secret word, etc.) and a random question: +5\n
  2.The user can play the game by using the virtual keyboard: +20\n
  3.The user can play the game by using the physical keyboard: +20\n
  4.When the letter is correct, it appears instead of the corresponding underscore. If the letter repeats in the word, all corresponding underscores must be replaced by it: +15\n
  5.When the letter is incorrect:\n
  6.the incorrect guesses counter is updated: +5\n
  7.a body part is added to the gallows: +10\n
  8.The clicked/pressed letter is disabled: +5\n
  9.The body parts appear on the gallows in the logical order (head, body, left arm, right arm, left leg, right leg): +5\n
  10.When the user runs out of 6 attempts or wins the game, the modal window appears: +10\n
  11.The modal window includes the message about the game's outcome (winning or losing), the secret word and the 'play again' button: +10\n
  12.When the user clicks the 'play again' button, the game starts over by showing a new question and resetting the gallows, the incorrect guesses counter and the underscores for the secret word: +15`);




})();

/******/ })()
;
//# sourceMappingURL=main.7f019ad2402a227df869.js.map