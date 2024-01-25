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
  classes: ["container__top-left"],
  text: "",
});
const topRight = createElement({
  tag: "div",
  classes: ["container__letf-calc"],
  text: "",
});
const bottomLeft = createElement({
  tag: "div",
  classes: ["container__bottom-calc"],
  text: "",
});

const bottomRight = createElement({
  tag: "div",
  classes: ["container__right-bottom"],
  text: "",
});

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
function createColumns(n, parent) {
  const result = [];
  for (let i = 0; i < n; i++) {
    const columns = createElement({
      tag: "div",
      classes: ["column"],
    });
    result.push(columns);
    parent.append(columns);
    // createItem(columns);
  }
  return result;
}
function createItem(column) {
  const result = [];
  for (let i = 0; i < 5; i++) {
    const items = createElement({
      tag: "div",
      classes: ["item"],
    });
    column.append(items);
  }
}
createColumns(5, topLeft);
console.log(createColumns(5, topLeft));
