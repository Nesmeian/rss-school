import { createElement } from "./createFunc";
import { main } from "./html";
import { randomGameBtn } from "./randomGame";
const header = createElement({
  tag: "header",
  classes: ["header"],
});
const headerWrapper = createElement({
  tag: "div",
  classes: ["header__wrapper"],
});
main.append(header);
header.append(headerWrapper);
headerWrapper.append(randomGameBtn);
