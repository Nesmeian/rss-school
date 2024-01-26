// Create
const body = document.querySelector("body");
body.className = "body";
const title = createElement({
  tag: "h1",
  text: "Nonograms",
  classes: ["title"],
});
const main = createElement({
  tag: "main",
  classes: ["main"],
});
const wrapper = createElement({
  tag: "div",
  text: "",
  classes: ["wrapper"],
});
const nonogramm = createElement({
  tag: "div",
  text: "",
  classes: ["nonogramm"],
});
const nonogrammContainer = createElement({
  tag: "div",
  text: "",
  classes: ["nonogramm__container"],
});
const topLeft = createElement({
  tag: "div",
  classes: ["container", "container__top-left"],
  text: "",
});
const topRight = createElement({
  tag: "div",
  classes: ["container", "container__top-right"],
  text: "",
});
const bottomLeft = createElement({
  tag: "div",
  classes: ["container", "container__bottom-left"],
  text: "",
});

const bottomRight = createElement({
  tag: "div",
  classes: ["container", "container__bottom-right"],
  text: "",
});

// const game = [
//   [0, 0, 1, 0, 0],
//   [0, 1, 0, 1, 0],
//   [1, 1, 1, 1, 1],
//   [0, 1, 0, 1, 0],
//   [0, 0, 1, 0, 0],
// ];
const game = [
  [0, 0, 1, 0, 0, 0, 0, 0, 0, 1, 1, 1, 1, 1, 0],
  [0, 0, 1, 1, 0, 0, 0, 0, 1, 1, 0, 0, 1, 0, 0],
  [0, 1, 1, 1, 1, 0, 0, 1, 0, 0, 0, 1, 0, 0, 0],
  [1, 1, 1, 1, 1, 1, 0, 1, 0, 0, 1, 1, 0, 0, 0],
  [1, 1, 0, 1, 1, 1, 1, 0, 0, 1, 1, 0, 0, 0, 0],
  [0, 0, 0, 1, 0, 1, 0, 0, 1, 0, 0, 0, 0, 0, 0],
  [0, 0, 0, 1, 1, 1, 1, 1, 1, 1, 0, 0, 1, 1, 0],
  [0, 1, 1, 1, 1, 1, 0, 0, 0, 1, 1, 1, 0, 1, 0],
  [0, 1, 0, 0, 1, 1, 1, 1, 0, 0, 1, 1, 0, 1, 1],
  [0, 1, 0, 0, 1, 0, 0, 1, 1, 1, 1, 1, 0, 0, 1],
  [0, 0, 1, 0, 1, 0, 0, 0, 0, 1, 1, 1, 1, 1, 0],
  [0, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1, 0, 0, 1, 0],
  [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 0, 1, 0],
  [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 0, 0, 1],
  [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 0, 0, 0, 0],
];
// append
body.append(main);
main.append(wrapper);
main.append(title);
main.append(nonogramm);
nonogramm.append(nonogrammContainer);
nonogrammContainer.append(topLeft);
nonogrammContainer.append(topRight);
nonogrammContainer.append(bottomLeft);
nonogrammContainer.append(bottomRight);

// function
function createElement(options) {
  const { tag = "div", text = "", parent, classes = [] } = options;
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

function createItem(column, row, purpose, value) {
  const result = [];
  value = "";
  let className = ["item"];
  if (purpose === "top") {
    className.push("item-top");
  } else if (purpose === "right") {
    className.push("item-right");
  } else {
    className.push("item-left");
  }
  for (let i = 0; i < row; i++) {
    const items = createElement({
      tag: "div",
      classes: className,
      text: value,
    });
    result.push(items);
    column.append(items);
  }
  return result;
}

function createGame(game) {
  const gameValue = document.querySelectorAll(".item-left");
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
        gameBoard[i][j].textContent = game[i][j];
      } else if (countLeft > 0) {
        arrCountLeft.push(countLeft);
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
      arrCountLeft.push(countLeft);
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
}
createGame(game);
