/******/ (() => { // webpackBootstrap
/******/ 	var __webpack_modules__ = ({

/***/ "./src/modules-js/createFunc.js":
/*!**************************************!*\
  !*** ./src/modules-js/createFunc.js ***!
  \**************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   createElement: () => (/* binding */ createElement)
/* harmony export */ });
function createElement(options) {
  const {
    tag = "div",
    text = "",
    parent,
    classes = []
  } = options;
  const element = document.createElement(tag);
  element.textContent = text;
  if (classes.length > 0) {
    element.classList.add(...classes);
  }
  if (parent != null) {
    parent.appendChild(element);
  }
  return element;
}

/***/ }),

/***/ "./src/modules-js/createItems.js":
/*!***************************************!*\
  !*** ./src/modules-js/createItems.js ***!
  \***************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _game__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./game */ "./src/modules-js/game.js");
/* harmony import */ var _html__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./html */ "./src/modules-js/html.js");
/* harmony import */ var _createFunc__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./createFunc */ "./src/modules-js/createFunc.js");



function createItem(column, row, purpose, value) {
  const result = [];
  value = "";
  let className = ["item"];
  if (purpose === "top") {
    className.push("item-top");
  } else if (purpose === "right") {
    className.push("game-cell");
  } else {
    className.push("item-left");
  }
  for (let i = 0; i < row; i++) {
    const items = (0,_createFunc__WEBPACK_IMPORTED_MODULE_2__.createElement)({
      tag: "div",
      classes: className,
      text: value
    });
    result.push(items);
    column.append(items);
  }
  return result;
}
let game = _game__WEBPACK_IMPORTED_MODULE_0__.games.easy.bomb;
function createColumns(height, width, parent, purpose, value) {
  let item = [];
  let className = ["column"];
  if (purpose === "top") {
    className = ["column", "column-top"];
  } else if (purpose === "right") {
    className = ["column", "column-right"];
  } else {
    className = ["column", "column-left"];
  }
  for (let i = 0; i < height; i++) {
    const columns = (0,_createFunc__WEBPACK_IMPORTED_MODULE_2__.createElement)({
      tag: "div",
      classes: className
    });
    if (parent) {
      parent.append(columns);
    }
    item.push(createItem(columns, width, purpose, value));
  }
  return item;
}
function createGame(game) {
  const gameBoard = createColumns(game.length, game.length, _html__WEBPACK_IMPORTED_MODULE_1__.bottomRight, "right");
  const searchLeft = createColumns(game.length, game.length, _html__WEBPACK_IMPORTED_MODULE_1__.bottomLeft);
  const seachTop = createColumns(game.length, game.length, _html__WEBPACK_IMPORTED_MODULE_1__.topRight, "top");
  for (let i = 0; i < game.length; i++) {
    let countLeft = 0;
    let countRight = 0;
    let arrCountLeft = [];
    let arrCountRight = [];
    for (let j = 0; j < game.length; j++) {
      if (game[i][j] === 1) {
        countLeft++;
        gameBoard[i][j].classList.add("target");
      } else if (countLeft > 0) {
        arrCountLeft.unshift(countLeft);
        countLeft = 0;
      }
      if (game[j][i] === 1) {
        countRight++;
      } else if (countRight > 0) {
        arrCountRight.unshift(countRight);
        countRight = 0;
      }
    }
    if (countLeft > 0) {
      arrCountLeft.unshift(countLeft);
    }
    if (countRight > 0) {
      arrCountRight.unshift(countRight);
    }
    arrCountRight.forEach((e, j) => {
      seachTop[i][j].textContent = e;
    });
    arrCountLeft.forEach((e, j) => {
      searchLeft[i][j].textContent = e;
    });
  }
}
function deleteTrashItems() {
  const itemLeft = document.querySelectorAll(".item-left");
  const itemTop = document.querySelectorAll(".item-top");
  itemLeft.forEach(e => {
    if (e.textContent === "") {
      e.remove();
    }
  });
  itemTop.forEach(e => {
    if (e.textContent === "") {
      e.remove();
    }
  });
}
createGame(game);
deleteTrashItems();

/***/ }),

/***/ "./src/modules-js/createMenu.js":
/*!**************************************!*\
  !*** ./src/modules-js/createMenu.js ***!
  \**************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _game__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./game */ "./src/modules-js/game.js");
/* harmony import */ var _createFunc__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./createFunc */ "./src/modules-js/createFunc.js");
/* harmony import */ var _html__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./html */ "./src/modules-js/html.js");



// function createSelect(games) {

//     setupLabel.id = items;
//     setupLabel.textConten = items;
//     setupInput.value = items;
//     setupInput.id = items;
//     setupInput.type = "radio";
//     setupForm.append(setupLabel);
//     setupLabel.append(setupInput);
//   }
// }
// createSelect(games);

function createSelect(games) {
  const select = (0,_createFunc__WEBPACK_IMPORTED_MODULE_1__.createElement)({
    tag: "div",
    classes: ["select"]
  });
  _html__WEBPACK_IMPORTED_MODULE_2__.setupMenu.append(select);
  for (let level in games) {
    const selectLevel = (0,_createFunc__WEBPACK_IMPORTED_MODULE_1__.createElement)({
      tag: "div",
      classes: ["select__level"]
    });
    const levelTitle = (0,_createFunc__WEBPACK_IMPORTED_MODULE_1__.createElement)({
      tag: "div",
      classes: ["level__title"],
      text: level
    });
    const levelGame = (0,_createFunc__WEBPACK_IMPORTED_MODULE_1__.createElement)({
      tag: "div",
      classes: ["level__game"]
    });
    const levelBtn = (0,_createFunc__WEBPACK_IMPORTED_MODULE_1__.createElement)({
      tag: "div",
      classes: ["level__btn"]
    });
    select.append(selectLevel);
    selectLevel.append(levelBtn);
    selectLevel.append(levelTitle);
    selectLevel.append(levelGame);
    for (let game in games[level]) {
      const selectGame = (0,_createFunc__WEBPACK_IMPORTED_MODULE_1__.createElement)({
        tag: "div",
        classes: ["select__game"]
      });
      const gameValue = (0,_createFunc__WEBPACK_IMPORTED_MODULE_1__.createElement)({
        tag: "div",
        classes: ["select__game_value"],
        text: game
      });
      levelGame.append(selectGame);
      selectGame.append(gameValue);
    }
  }
}
createSelect(_game__WEBPACK_IMPORTED_MODULE_0__.games);
function showSelect() {
  const levelBtn = document.querySelectorAll(".level__btn");
  const levelGame = document.querySelectorAll(".level__game");
  const levelTitle = document.querySelectorAll(".level__title");
  levelBtn.forEach((e, i) => {
    e.addEventListener("click", () => {
      for (let index = 0; index < levelBtn.length; index++) {
        levelTitle[index].classList.remove("--hide");
        levelGame[index].classList.remove("--show");
      }
      levelTitle[i].classList.add("--hide");
      levelGame[i].classList.add("--show");
    });
  });
}
showSelect();

/***/ }),

/***/ "./src/modules-js/game.js":
/*!********************************!*\
  !*** ./src/modules-js/game.js ***!
  \********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   games: () => (/* binding */ games)
/* harmony export */ });
// export
const games = {
  easy: {
    dinosaur: [[0, 0, 0, 1, 1], [0, 0, 0, 1, 0], [0, 1, 1, 1, 0], [0, 1, 1, 1, 0], [1, 1, 0, 1, 0]],
    fan: [[0, 1, 0, 0, 1], [0, 1, 0, 1, 1], [0, 0, 1, 0, 0], [1, 1, 0, 1, 0], [0, 0, 0, 1, 0]],
    cat: [[0, 0, 1, 0, 1], [0, 0, 1, 1, 1], [1, 1, 1, 1, 1], [1, 1, 1, 1, 0], [1, 1, 1, 1, 1]],
    sandClock: [[1, 1, 1, 1, 1], [0, 1, 1, 1, 0], [0, 0, 1, 0, 0], [0, 1, 0, 1, 0], [1, 1, 1, 1, 1]],
    bomb: [[0, 0, 1, 1, 0], [0, 1, 0, 0, 1], [1, 1, 1, 0, 0], [1, 0, 1, 0, 0], [1, 1, 1, 0, 0]]
  },
  medium: {
    hamster: [[1, 1, 1, 0, 0, 0, 1, 1, 1, 1], [1, 0, 1, 1, 1, 1, 1, 1, 0, 1], [1, 1, 1, 1, 1, 1, 1, 1, 1, 1], [0, 1, 1, 0, 1, 1, 0, 1, 1, 0], [1, 1, 1, 1, 1, 1, 1, 1, 1, 1], [1, 1, 1, 1, 0, 1, 1, 1, 1, 1], [1, 0, 0, 0, 1, 0, 0, 0, 0, 1], [1, 0, 0, 1, 1, 1, 0, 0, 0, 1], [1, 1, 0, 1, 1, 1, 0, 0, 1, 1], [0, 1, 1, 1, 1, 1, 1, 1, 1, 0]],
    eagle: [[0, 0, 1, 1, 1, 1, 1, 0, 0, 0], [1, 1, 1, 0, 0, 0, 0, 1, 0, 0], [1, 0, 0, 0, 1, 1, 1, 1, 1, 0], [0, 0, 0, 0, 1, 1, 0, 1, 1, 1], [0, 0, 0, 0, 0, 1, 0, 1, 1, 1], [1, 0, 0, 0, 0, 1, 1, 0, 0, 1], [1, 0, 1, 0, 1, 1, 0, 0, 0, 0], [1, 1, 1, 1, 1, 1, 0, 0, 0, 0], [1, 1, 1, 1, 1, 1, 1, 0, 0, 0], [1, 1, 1, 1, 1, 1, 1, 1, 0, 0]],
    dog: [[1, 1, 0, 1, 1, 0, 0, 0, 0, 0], [0, 0, 1, 1, 1, 0, 0, 0, 0, 0], [0, 0, 1, 1, 0, 1, 1, 1, 0, 0], [0, 0, 1, 1, 0, 1, 1, 0, 0, 0], [0, 0, 1, 1, 0, 0, 0, 0, 0, 0], [0, 1, 1, 1, 1, 1, 0, 0, 0, 1], [1, 1, 1, 1, 1, 1, 1, 1, 0, 1], [1, 0, 1, 1, 1, 1, 1, 1, 1, 0], [0, 0, 1, 0, 0, 1, 1, 1, 0, 0], [0, 1, 1, 0, 1, 1, 1, 0, 0, 0]],
    bee: [[1, 1, 1, 1, 0, 0, 0, 1, 1, 1], [1, 0, 0, 1, 0, 0, 1, 0, 0, 1], [1, 0, 0, 0, 1, 0, 1, 0, 1, 1], [0, 1, 0, 0, 1, 1, 0, 1, 0, 0], [0, 0, 1, 1, 0, 1, 1, 0, 0, 0], [1, 1, 0, 1, 1, 1, 1, 1, 1, 0], [0, 1, 0, 1, 1, 0, 1, 0, 1, 0], [0, 0, 1, 1, 1, 0, 1, 1, 1, 0], [0, 0, 0, 1, 0, 1, 0, 0, 0, 1], [0, 0, 1, 0, 0, 0, 1, 0, 0, 0]],
    bamby: [[0, 0, 1, 0, 0, 1, 0, 0, 1, 0], [0, 0, 1, 1, 0, 1, 0, 1, 0, 0], [0, 0, 0, 1, 1, 1, 0, 1, 0, 1], [0, 0, 0, 0, 1, 0, 1, 1, 1, 1], [0, 0, 0, 1, 1, 1, 1, 1, 0, 0], [0, 0, 0, 1, 0, 0, 1, 0, 1, 1], [1, 1, 1, 0, 1, 0, 1, 1, 1, 0], [1, 0, 0, 0, 0, 0, 1, 0, 0, 0], [0, 1, 1, 1, 0, 0, 1, 1, 0, 0], [0, 0, 0, 1, 0, 0, 0, 1, 1, 1]]
  },
  hard: {
    owl: [[0, 0, 1, 1, 1, 1, 0, 0, 0, 1, 1, 1, 1, 1, 0], [0, 0, 0, 1, 0, 0, 1, 1, 1, 1, 0, 0, 1, 0, 0], [0, 0, 0, 1, 1, 0, 0, 0, 0, 0, 0, 1, 1, 0, 0], [0, 0, 0, 0, 1, 1, 1, 0, 1, 1, 1, 1, 0, 0, 0], [0, 0, 0, 1, 1, 0, 1, 0, 1, 0, 1, 0, 1, 0, 0], [0, 0, 0, 1, 0, 1, 1, 1, 1, 1, 1, 0, 1, 0, 0], [0, 0, 0, 1, 0, 0, 1, 0, 1, 0, 0, 0, 1, 0, 0], [0, 0, 0, 0, 1, 1, 1, 0, 1, 1, 1, 1, 0, 0, 0], [1, 1, 1, 1, 0, 1, 1, 1, 1, 1, 1, 1, 1, 0, 0], [1, 1, 1, 1, 1, 1, 0, 0, 0, 1, 1, 1, 1, 1, 0], [0, 1, 1, 1, 1, 1, 0, 0, 0, 1, 0, 1, 1, 1, 0], [0, 0, 1, 1, 1, 1, 0, 0, 0, 1, 0, 1, 1, 1, 0], [0, 0, 0, 1, 1, 1, 0, 0, 0, 1, 1, 0, 1, 1, 1], [0, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1, 1, 0, 1, 1], [0, 0, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1, 1, 0, 1]],
    crown: [[1, 1, 1, 1, 1, 1, 1, 0, 1, 1, 1, 1, 1, 1, 1], [1, 1, 1, 1, 1, 1, 0, 1, 0, 1, 1, 1, 1, 1, 1], [1, 1, 0, 0, 0, 1, 1, 0, 1, 1, 0, 0, 0, 1, 1], [1, 0, 0, 0, 0, 1, 1, 0, 1, 0, 0, 0, 0, 0, 1], [1, 0, 0, 1, 0, 0, 0, 0, 0, 0, 1, 1, 0, 0, 1], [1, 0, 1, 1, 0, 1, 0, 1, 0, 1, 0, 1, 1, 0, 1], [1, 0, 1, 0, 1, 0, 1, 1, 1, 0, 1, 1, 1, 0, 1], [1, 0, 0, 0, 1, 0, 1, 1, 1, 0, 1, 1, 1, 0, 1], [1, 0, 0, 1, 1, 0, 1, 1, 1, 0, 1, 1, 0, 0, 1], [1, 1, 0, 1, 1, 1, 0, 1, 0, 0, 1, 1, 0, 1, 1], [1, 1, 1, 0, 1, 1, 0, 1, 0, 1, 1, 0, 1, 1, 1], [0, 0, 1, 0, 1, 0, 1, 1, 1, 0, 1, 0, 1, 0, 0], [0, 0, 1, 1, 1, 1, 0, 0, 0, 1, 1, 1, 1, 0, 0], [0, 0, 1, 0, 0, 1, 0, 1, 0, 1, 0, 0, 1, 0, 0], [0, 0, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 0, 0]],
    profile: [[0, 1, 1, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0], [1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 0, 0, 0, 0], [1, 1, 1, 1, 1, 1, 0, 0, 0, 0, 1, 1, 1, 0, 0], [1, 0, 0, 1, 1, 0, 0, 1, 1, 0, 0, 0, 1, 1, 0], [1, 1, 0, 1, 0, 0, 1, 1, 1, 1, 0, 0, 0, 1, 0], [0, 1, 0, 1, 0, 1, 1, 1, 1, 1, 0, 1, 1, 1, 0], [1, 0, 0, 1, 1, 1, 0, 0, 1, 0, 0, 1, 0, 1, 0], [0, 0, 1, 1, 1, 1, 0, 0, 1, 0, 0, 0, 0, 0, 1], [0, 0, 1, 1, 1, 1, 1, 0, 0, 0, 0, 0, 1, 1, 1], [0, 0, 1, 1, 1, 1, 0, 0, 0, 0, 0, 0, 0, 1, 0], [0, 0, 0, 1, 1, 1, 0, 0, 0, 0, 0, 1, 1, 1, 0], [0, 0, 0, 0, 0, 1, 0, 0, 1, 0, 0, 0, 0, 1, 0], [0, 0, 0, 1, 1, 1, 1, 0, 0, 1, 1, 1, 0, 0, 0], [0, 0, 1, 1, 1, 1, 1, 1, 0, 1, 1, 1, 1, 0, 0], [0, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 0]],
    catHard: [[[0, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1, 0, 0, 0, 0], [0, 0, 0, 0, 0, 1, 1, 0, 0, 1, 1, 0, 1, 0, 1], [0, 1, 1, 0, 0, 1, 1, 1, 1, 1, 1, 0, 1, 1, 1], [1, 0, 0, 1, 0, 1, 0, 1, 1, 0, 1, 0, 1, 1, 1], [1, 0, 1, 1, 0, 1, 1, 1, 1, 1, 1, 0, 0, 1, 0], [1, 1, 0, 0, 0, 0, 1, 1, 1, 1, 0, 0, 0, 0, 0], [0, 1, 1, 0, 0, 0, 0, 1, 0, 1, 1, 0, 0, 0, 0], [0, 0, 1, 1, 1, 0, 1, 1, 0, 1, 1, 1, 0, 0, 0], [0, 0, 0, 0, 1, 1, 1, 1, 1, 0, 1, 1, 1, 0, 0], [0, 0, 0, 0, 0, 0, 1, 1, 1, 1, 0, 1, 1, 1, 1], [0, 1, 0, 1, 0, 0, 1, 1, 1, 1, 0, 1, 1, 0, 1], [0, 1, 1, 1, 0, 0, 1, 0, 1, 1, 1, 0, 1, 1, 1], [0, 1, 1, 1, 0, 0, 1, 1, 0, 1, 1, 0, 1, 1, 0], [0, 0, 1, 0, 0, 1, 1, 0, 1, 1, 0, 1, 1, 1, 0], [0, 0, 0, 0, 0, 1, 1, 0, 1, 1, 1, 1, 1, 0, 0]]],
    candle: [[0, 0, 0, 0, 0, 0, 0, 0, 1, 0, 0, 0, 0, 0, 0], [0, 0, 0, 0, 0, 0, 0, 1, 1, 1, 0, 0, 0, 0, 0], [0, 0, 0, 0, 0, 0, 0, 1, 1, 1, 0, 0, 0, 0, 0], [0, 0, 0, 0, 0, 0, 1, 1, 1, 1, 1, 0, 0, 0, 0], [0, 0, 0, 0, 0, 1, 1, 1, 1, 1, 1, 1, 0, 0, 0], [0, 0, 0, 0, 0, 1, 1, 0, 0, 0, 1, 1, 0, 0, 0], [0, 0, 0, 0, 0, 1, 1, 0, 1, 0, 1, 1, 0, 0, 0], [0, 0, 0, 0, 0, 1, 1, 0, 1, 1, 1, 1, 0, 0, 0], [0, 0, 0, 0, 0, 0, 1, 1, 1, 1, 1, 0, 0, 0, 0], [0, 0, 0, 0, 0, 0, 0, 1, 1, 1, 0, 0, 0, 0, 0], [1, 0, 0, 0, 0, 1, 1, 1, 1, 1, 1, 0, 0, 0, 1], [1, 1, 0, 0, 0, 1, 1, 0, 0, 0, 1, 0, 0, 1, 1], [1, 1, 1, 0, 0, 1, 1, 0, 0, 0, 1, 0, 1, 1, 1], [0, 1, 1, 1, 1, 1, 1, 0, 0, 0, 1, 1, 1, 1, 1], [0, 0, 1, 1, 1, 1, 1, 1, 1, 0, 1, 0, 1, 1, 0]]
  }
};

/***/ }),

/***/ "./src/modules-js/gameInteractive.js":
/*!*******************************************!*\
  !*** ./src/modules-js/gameInteractive.js ***!
  \*******************************************/
/***/ (() => {

function clickOnBoard() {
  const gameCell = document.querySelectorAll(".game-cell");
  let winCount = createWinCount(gameCell);
  gameCell.forEach((e, i) => {
    e.addEventListener("contextmenu", elem => {
      elem.preventDefault();
      if (e.classList.contains("--fill")) {
        e.classList.remove("--fill");
        if (e.classList.contains("target")) {
          winCount++;
        }
      }
      console.log(winCount);
      e.classList.toggle("--empty");
    });
    e.addEventListener("click", () => {
      if (e.classList.contains("--empty")) {
        e.classList.remove("--empty");
      }
      if (e.classList.contains("target")) {
        winCount--;
      }
      if (winCount === 0) {
        alert("you win");
      }
      e.classList.toggle("--fill");
      console.log(winCount);
    });
  });
}
clickOnBoard();
function createWinCount(gameCell) {
  let winCount = 0;
  gameCell.forEach(e => {
    if (e.classList.contains("target")) {
      winCount++;
    }
  });
  return winCount;
}

/***/ }),

/***/ "./src/modules-js/html.js":
/*!********************************!*\
  !*** ./src/modules-js/html.js ***!
  \********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   bottomLeft: () => (/* binding */ bottomLeft),
/* harmony export */   bottomRight: () => (/* binding */ bottomRight),
/* harmony export */   setupMenu: () => (/* binding */ setupMenu),
/* harmony export */   topLeft: () => (/* binding */ topLeft),
/* harmony export */   topRight: () => (/* binding */ topRight)
/* harmony export */ });
/* harmony import */ var _createFunc__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./createFunc */ "./src/modules-js/createFunc.js");
// Create

const body = document.querySelector("body");
body.className = "body";
const title = (0,_createFunc__WEBPACK_IMPORTED_MODULE_0__.createElement)({
  tag: "h1",
  text: "Nonograms",
  classes: ["title"]
});
const main = (0,_createFunc__WEBPACK_IMPORTED_MODULE_0__.createElement)({
  tag: "main",
  classes: ["main"]
});
const wrapper = (0,_createFunc__WEBPACK_IMPORTED_MODULE_0__.createElement)({
  tag: "div",
  text: "",
  classes: ["wrapper"]
});
const nonogramm = (0,_createFunc__WEBPACK_IMPORTED_MODULE_0__.createElement)({
  tag: "div",
  text: "",
  classes: ["nonogramm"]
});
const nonogrammContainer = (0,_createFunc__WEBPACK_IMPORTED_MODULE_0__.createElement)({
  tag: "div",
  text: "",
  classes: ["nonogramm__container"]
});
const topLeft = (0,_createFunc__WEBPACK_IMPORTED_MODULE_0__.createElement)({
  tag: "div",
  classes: ["container", "container__top-left"],
  text: ""
});
const topRight = (0,_createFunc__WEBPACK_IMPORTED_MODULE_0__.createElement)({
  tag: "div",
  classes: ["container", "container__top-right"],
  text: ""
});
const bottomLeft = (0,_createFunc__WEBPACK_IMPORTED_MODULE_0__.createElement)({
  tag: "div",
  classes: ["container", "container__bottom-left"],
  text: ""
});
const bottomRight = (0,_createFunc__WEBPACK_IMPORTED_MODULE_0__.createElement)({
  tag: "div",
  classes: ["container", "container__bottom-right"],
  text: ""
});
const setupMenu = (0,_createFunc__WEBPACK_IMPORTED_MODULE_0__.createElement)({
  tag: "div",
  classes: ["setup-menu"]
});

// append
body.append(main);
main.append(title);
main.append(wrapper);
wrapper.append(nonogramm);
wrapper.append(setupMenu);
nonogramm.append(nonogrammContainer);
nonogrammContainer.append(topLeft);
nonogrammContainer.append(topRight);
nonogrammContainer.append(bottomLeft);
nonogrammContainer.append(bottomRight);

// function

/***/ }),

/***/ "./node_modules/css-loader/dist/cjs.js!./node_modules/postcss-loader/dist/cjs.js??ruleSet[1].rules[1].use[2]!./node_modules/sass-loader/dist/cjs.js!./src/main.scss":
/*!**************************************************************************************************************************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js!./node_modules/postcss-loader/dist/cjs.js??ruleSet[1].rules[1].use[2]!./node_modules/sass-loader/dist/cjs.js!./src/main.scss ***!
  \**************************************************************************************************************************************************************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../node_modules/css-loader/dist/runtime/sourceMaps.js */ "./node_modules/css-loader/dist/runtime/sourceMaps.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../node_modules/css-loader/dist/runtime/api.js */ "./node_modules/css-loader/dist/runtime/api.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _node_modules_css_loader_dist_cjs_js_sass_loyalt_scss__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! -!../node_modules/css-loader/dist/cjs.js!./sass/_loyalt.scss */ "./node_modules/css-loader/dist/cjs.js!./src/sass/_loyalt.scss");
/* harmony import */ var _node_modules_css_loader_dist_cjs_js_sass_menu_scss__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! -!../node_modules/css-loader/dist/cjs.js!./sass/_menu.scss */ "./node_modules/css-loader/dist/cjs.js!./src/sass/_menu.scss");
// Imports




var ___CSS_LOADER_EXPORT___ = _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default()((_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default()));
___CSS_LOADER_EXPORT___.i(_node_modules_css_loader_dist_cjs_js_sass_loyalt_scss__WEBPACK_IMPORTED_MODULE_2__["default"]);
___CSS_LOADER_EXPORT___.i(_node_modules_css_loader_dist_cjs_js_sass_menu_scss__WEBPACK_IMPORTED_MODULE_3__["default"]);
// Module
___CSS_LOADER_EXPORT___.push([module.id, ``, "",{"version":3,"sources":[],"names":[],"mappings":"","sourceRoot":""}]);
// Exports
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (___CSS_LOADER_EXPORT___);


/***/ }),

/***/ "./node_modules/css-loader/dist/cjs.js!./src/sass/_loyalt.scss":
/*!*********************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js!./src/sass/_loyalt.scss ***!
  \*********************************************************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../node_modules/css-loader/dist/runtime/sourceMaps.js */ "./node_modules/css-loader/dist/runtime/sourceMaps.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../node_modules/css-loader/dist/runtime/api.js */ "./node_modules/css-loader/dist/runtime/api.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__);
// Imports


var ___CSS_LOADER_EXPORT___ = _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default()((_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default()));
// Module
___CSS_LOADER_EXPORT___.push([module.id, `.wrapper {
  max-width: 1440px;
  display: flex;
  margin: 0 auto;
  background: white;
  border-radius: 30px;
}
.title {
  text-align: center;
}
.main {
  background: gray;
}
.nonogramm {
  width: max-content;
  padding: 20px;
  margin: 0 auto;
}
.nonogramm__container {
  margin: 0 auto;
  display: grid;
  justify-content: center;
  padding: 10px;
}
.container {
  color: white;
}

.container__bottom-left {
  display: flex;
  grid-row: 2;
  flex-direction: column;
  border: 1px solid black;
  border-right: none;
}
.container__top-right {
  display: flex;
  border: 1px solid black;
  border-bottom: none;
}
.container__bottom-right {
  display: flex;
  grid-row: 2;
  flex-direction: column;
  border: 1px solid black;
}
.column {
  display: flex;
  justify-content: end;
}
.column-top {
  flex-direction: column;
}
.column-left {
  flex-direction: row;
}
.column-right {
  justify-content: space-between;
}
.item {
  display: flex;
  width: 15px;
  height: 15px;
  min-width: 10px;
  min-height: 10px;
  border: 0.2px solid white;
  align-items: center;
  justify-content: center;
  font-size: 0.7rem;
  background-color: black;
}
.game-cell {
  background-color: red;
  transition: all 0.5s ease-in-out;
}

.--fill {
  background-color: black;
}
.--empty {
  background-color: white;
}
.column-top:nth-child(5n):not(:last-child),
.game-cell:nth-child(5n):not(:last-child) {
  border-right: 1px solid black;
}
.column-left:nth-child(5n):not(:last-child),
.column-right:nth-child(5n):not(:last-child) {
  border-bottom: 1px solid black;
}
`, "",{"version":3,"sources":["webpack://./src/sass/_loyalt.scss"],"names":[],"mappings":"AAAA;EACE,iBAAiB;EACjB,aAAa;EACb,cAAc;EACd,iBAAiB;EACjB,mBAAmB;AACrB;AACA;EACE,kBAAkB;AACpB;AACA;EACE,gBAAgB;AAClB;AACA;EACE,kBAAkB;EAClB,aAAa;EACb,cAAc;AAChB;AACA;EACE,cAAc;EACd,aAAa;EACb,uBAAuB;EACvB,aAAa;AACf;AACA;EACE,YAAY;AACd;;AAEA;EACE,aAAa;EACb,WAAW;EACX,sBAAsB;EACtB,uBAAuB;EACvB,kBAAkB;AACpB;AACA;EACE,aAAa;EACb,uBAAuB;EACvB,mBAAmB;AACrB;AACA;EACE,aAAa;EACb,WAAW;EACX,sBAAsB;EACtB,uBAAuB;AACzB;AACA;EACE,aAAa;EACb,oBAAoB;AACtB;AACA;EACE,sBAAsB;AACxB;AACA;EACE,mBAAmB;AACrB;AACA;EACE,8BAA8B;AAChC;AACA;EACE,aAAa;EACb,WAAW;EACX,YAAY;EACZ,eAAe;EACf,gBAAgB;EAChB,yBAAyB;EACzB,mBAAmB;EACnB,uBAAuB;EACvB,iBAAiB;EACjB,uBAAuB;AACzB;AACA;EACE,qBAAqB;EACrB,gCAAgC;AAClC;;AAEA;EACE,uBAAuB;AACzB;AACA;EACE,uBAAuB;AACzB;AACA;;EAEE,6BAA6B;AAC/B;AACA;;EAEE,8BAA8B;AAChC","sourcesContent":[".wrapper {\r\n  max-width: 1440px;\r\n  display: flex;\r\n  margin: 0 auto;\r\n  background: white;\r\n  border-radius: 30px;\r\n}\r\n.title {\r\n  text-align: center;\r\n}\r\n.main {\r\n  background: gray;\r\n}\r\n.nonogramm {\r\n  width: max-content;\r\n  padding: 20px;\r\n  margin: 0 auto;\r\n}\r\n.nonogramm__container {\r\n  margin: 0 auto;\r\n  display: grid;\r\n  justify-content: center;\r\n  padding: 10px;\r\n}\r\n.container {\r\n  color: white;\r\n}\r\n\r\n.container__bottom-left {\r\n  display: flex;\r\n  grid-row: 2;\r\n  flex-direction: column;\r\n  border: 1px solid black;\r\n  border-right: none;\r\n}\r\n.container__top-right {\r\n  display: flex;\r\n  border: 1px solid black;\r\n  border-bottom: none;\r\n}\r\n.container__bottom-right {\r\n  display: flex;\r\n  grid-row: 2;\r\n  flex-direction: column;\r\n  border: 1px solid black;\r\n}\r\n.column {\r\n  display: flex;\r\n  justify-content: end;\r\n}\r\n.column-top {\r\n  flex-direction: column;\r\n}\r\n.column-left {\r\n  flex-direction: row;\r\n}\r\n.column-right {\r\n  justify-content: space-between;\r\n}\r\n.item {\r\n  display: flex;\r\n  width: 15px;\r\n  height: 15px;\r\n  min-width: 10px;\r\n  min-height: 10px;\r\n  border: 0.2px solid white;\r\n  align-items: center;\r\n  justify-content: center;\r\n  font-size: 0.7rem;\r\n  background-color: black;\r\n}\r\n.game-cell {\r\n  background-color: red;\r\n  transition: all 0.5s ease-in-out;\r\n}\r\n\r\n.--fill {\r\n  background-color: black;\r\n}\r\n.--empty {\r\n  background-color: white;\r\n}\r\n.column-top:nth-child(5n):not(:last-child),\r\n.game-cell:nth-child(5n):not(:last-child) {\r\n  border-right: 1px solid black;\r\n}\r\n.column-left:nth-child(5n):not(:last-child),\r\n.column-right:nth-child(5n):not(:last-child) {\r\n  border-bottom: 1px solid black;\r\n}\r\n"],"sourceRoot":""}]);
// Exports
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (___CSS_LOADER_EXPORT___);


/***/ }),

/***/ "./node_modules/css-loader/dist/cjs.js!./src/sass/_menu.scss":
/*!*******************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js!./src/sass/_menu.scss ***!
  \*******************************************************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../node_modules/css-loader/dist/runtime/sourceMaps.js */ "./node_modules/css-loader/dist/runtime/sourceMaps.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../node_modules/css-loader/dist/runtime/api.js */ "./node_modules/css-loader/dist/runtime/api.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__);
// Imports


var ___CSS_LOADER_EXPORT___ = _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default()((_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default()));
// Module
___CSS_LOADER_EXPORT___.push([module.id, `.select {
  display: flex;
  width: 200px;
  background: beige;
  flex-direction: column;
}

.select__level {
  position: relative;
  display: flex;
  border: 1px solid black;
}

.level__title {
  transition: all 0.5 ease;
}

.level__game {
  transition: all 0.5s ease;
  font-size: 0;
}

// .column-left:nth-child(5n):not(:last-child)
.select__game_value:nth-child() {
  border-top: 1px solid black;
  border-bottom: 1px solid black;
}
.level__btn {
  position: relative;
  width: 20px;
  height: 20px;
  background: black;
  border-radius: 30px;
}

.--hide {
  font-size: 0;
}
.--show {
  font-size: 12px;
}
.level__btn::after {
  content: "";
  position: absolute;
  width: 1px;
  height: 7px;
  background-color: white;
  top: 5px;
  right: 10px;
  transform: rotate(45deg);
  transition: all 1.5s ease-in-out;
}
.level__btn::before {
  content: "";
  position: absolute;
  width: 1px;
  height: 7px;
  background-color: white;
  top: 10px;
  right: 10px;
  transform: rotate(-45deg);
  transition: all 0.5s ease;
}
`, "",{"version":3,"sources":["webpack://./src/sass/_menu.scss"],"names":[],"mappings":"AAAA;EACE,aAAa;EACb,YAAY;EACZ,iBAAiB;EACjB,sBAAsB;AACxB;;AAEA;EACE,kBAAkB;EAClB,aAAa;EACb,uBAAuB;AACzB;;AAEA;EACE,wBAAwB;AAC1B;;AAEA;EACE,yBAAyB;EACzB,YAAY;AACd;;AAEA;;EAEE,2BAA2B;EAC3B,8BAA8B;AAChC;AACA;EACE,kBAAkB;EAClB,WAAW;EACX,YAAY;EACZ,iBAAiB;EACjB,mBAAmB;AACrB;;AAEA;EACE,YAAY;AACd;AACA;EACE,eAAe;AACjB;AACA;EACE,WAAW;EACX,kBAAkB;EAClB,UAAU;EACV,WAAW;EACX,uBAAuB;EACvB,QAAQ;EACR,WAAW;EACX,wBAAwB;EACxB,gCAAgC;AAClC;AACA;EACE,WAAW;EACX,kBAAkB;EAClB,UAAU;EACV,WAAW;EACX,uBAAuB;EACvB,SAAS;EACT,WAAW;EACX,yBAAyB;EACzB,yBAAyB;AAC3B","sourcesContent":[".select {\r\n  display: flex;\r\n  width: 200px;\r\n  background: beige;\r\n  flex-direction: column;\r\n}\r\n\r\n.select__level {\r\n  position: relative;\r\n  display: flex;\r\n  border: 1px solid black;\r\n}\r\n\r\n.level__title {\r\n  transition: all 0.5 ease;\r\n}\r\n\r\n.level__game {\r\n  transition: all 0.5s ease;\r\n  font-size: 0;\r\n}\r\n\r\n// .column-left:nth-child(5n):not(:last-child)\r\n.select__game_value:nth-child() {\r\n  border-top: 1px solid black;\r\n  border-bottom: 1px solid black;\r\n}\r\n.level__btn {\r\n  position: relative;\r\n  width: 20px;\r\n  height: 20px;\r\n  background: black;\r\n  border-radius: 30px;\r\n}\r\n\r\n.--hide {\r\n  font-size: 0;\r\n}\r\n.--show {\r\n  font-size: 12px;\r\n}\r\n.level__btn::after {\r\n  content: \"\";\r\n  position: absolute;\r\n  width: 1px;\r\n  height: 7px;\r\n  background-color: white;\r\n  top: 5px;\r\n  right: 10px;\r\n  transform: rotate(45deg);\r\n  transition: all 1.5s ease-in-out;\r\n}\r\n.level__btn::before {\r\n  content: \"\";\r\n  position: absolute;\r\n  width: 1px;\r\n  height: 7px;\r\n  background-color: white;\r\n  top: 10px;\r\n  right: 10px;\r\n  transform: rotate(-45deg);\r\n  transition: all 0.5s ease;\r\n}\r\n"],"sourceRoot":""}]);
// Exports
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (___CSS_LOADER_EXPORT___);


/***/ }),

/***/ "./node_modules/css-loader/dist/runtime/api.js":
/*!*****************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/api.js ***!
  \*****************************************************/
/***/ ((module) => {

"use strict";


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

"use strict";


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

/***/ "./src/main.scss":
/*!***********************!*\
  !*** ./src/main.scss ***!
  \***********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
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

"use strict";


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

"use strict";


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

"use strict";


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

"use strict";


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

"use strict";


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

"use strict";


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
/******/ 	/* webpack/runtime/nonce */
/******/ 	(() => {
/******/ 		__webpack_require__.nc = undefined;
/******/ 	})();
/******/ 	
/************************************************************************/
var __webpack_exports__ = {};
// This entry need to be wrapped in an IIFE because it need to be in strict mode.
(() => {
"use strict";
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _modules_js_html__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./modules-js/html */ "./src/modules-js/html.js");
/* harmony import */ var _modules_js_createItems__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./modules-js/createItems */ "./src/modules-js/createItems.js");
/* harmony import */ var _modules_js_gameInteractive__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./modules-js/gameInteractive */ "./src/modules-js/gameInteractive.js");
/* harmony import */ var _modules_js_gameInteractive__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_modules_js_gameInteractive__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _modules_js_createMenu__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./modules-js/createMenu */ "./src/modules-js/createMenu.js");
/* harmony import */ var _main_scss__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./main.scss */ "./src/main.scss");





})();

/******/ })()
;
//# sourceMappingURL=main.3d41ea887f3deb4f805f.js.map