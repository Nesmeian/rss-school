import { themesDark, themesLight } from "./html";
const html = document.querySelector("html");
themesDark.addEventListener("click", () => {
  html.classList.add("--dark");
});
themesLight.addEventListener("click", () => {
  html.classList.remove("--dark");
});
