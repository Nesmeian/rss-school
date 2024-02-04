import { bottomRight, bottomLeft, topRight } from "./html";
import { createElement } from "./createFunc";
import { currentGame } from "./createMenu";
import { clickOnBoard } from "./gameInteractive";

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
    const leftCross = createElement({
      tag: "div",
      classes: ["left-cross"],
    });
    const rigthCross = createElement({
      tag: "div",
      classes: ["rigth-cross"],
    });
    const items = createElement({
      tag: "div",
      classes: className,
      text: value,
    });
    result.push(items);
    column.append(items);
    if (purpose === "right") {
      items.append(leftCross);
      items.append(rigthCross);
    }
  }
  return result;
}

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
    const columns = createElement({
      tag: "div",
      classes: className,
    });
    if (parent) {
      parent.append(columns);
    }
    item.push(createItem(columns, width, purpose, value));
  }
  return item;
}
export function createGame(game, count) {
  const gameBoard = createColumns(
    game.length,
    game.length,
    bottomRight,
    "right"
  );
  const searchLeft = createColumns(game.length, game.length, bottomLeft);
  const seachTop = createColumns(game.length, game.length, topRight, "top");
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
        arrCountRight.push(countRight);
        countRight = 0;
      }
    }
    if (countLeft > 0) {
      arrCountLeft.unshift(countLeft);
    }
    if (countRight > 0) {
      arrCountRight.push(countRight);
    }
    arrCountRight.forEach((e, j) => {
      seachTop[i][j].textContent = e;
    });
    arrCountLeft.forEach((e, j) => {
      searchLeft[i][j].textContent = e;
    });
  }
  console.log(count);
  deleteTrashItems();
  clickOnBoard(count);
}

export function deleteTrashItems() {
  const itemLeft = document.querySelectorAll(".item-left");
  const itemTop = document.querySelectorAll(".item-top");
  itemLeft.forEach((e) => {
    if (e.textContent === "") {
      e.remove();
    }
  });
  itemTop.forEach((e) => {
    if (e.textContent === "") {
      e.remove();
    }
  });
}
createGame(currentGame);
