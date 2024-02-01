import { createElement } from "./createFunc";
import { main } from "./html";
const footer = createElement({
  tag: "footer",
  classes: ["footer"],
});
const footerWrapper = createElement({
  tag: "div",
  classes: ["footer__wrapper"],
});
const school = createElement({
  tag: "div",
  classes: ["footer__school"],
});

const schoolLink = createElement({
  tag: "a",
  classes: ["footer__school_link"],
});
const schoolImg = createElement({
  tag: "img",
  classes: ["footer__school_img"],
});

const year = createElement({
  tag: "div",
  classes: ["footer__year"],
  text: "2024",
});

const nickName = createElement({
  tag: "div",
  classes: ["footer__nick-name"],
});
const nickNameLink = createElement({
  tag: "a",
  classes: ["footer__nick-name_link"],
  text: "Nesmeain",
});
main.append(footer);
footer.append(footerWrapper);
footerWrapper.append(nickName);
nickName.append(nickNameLink);
footerWrapper.append(year);
footerWrapper.append(school);
school.append(schoolLink);
schoolLink.append(schoolImg);
schoolLink.href = "https://rs.school/";
schoolImg.src = "../img/rsSchool.png";
schoolImg.alt = "rss-school";
