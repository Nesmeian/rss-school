import { audioDark, audioLight, soundActive } from "./audio";
import { themesDark, themesLight } from "./html";
const html = document.querySelector("html");
themesDark.addEventListener("click", () => {
  if (soundActive) {
    audioDark.play();
  }
  html.classList.add("--dark");
});
themesLight.addEventListener("click", () => {
  if (soundActive) {
    audioLight.play();
  }
  html.classList.remove("--dark");
});
