import { audioDark, audioLight } from "./audio";
import { themesDark, themesLight } from "./html";
const html = document.querySelector("html");
themesDark.addEventListener("click", () => {
  audioDark.play();
  html.classList.add("--dark");
});
themesLight.addEventListener("click", () => {
  audioLight.play();
  html.classList.remove("--dark");
});
