import { topLeft } from "./html";
export let result = "00:00";
let timer;
let timerSwitch = false;
let seconds = 0;
let minutes = 0;
let secdecades = 0;
let mindecades = 0;
topLeft.textContent = `${mindecades}${minutes}:${secdecades}${seconds}`;
export function startTimer(saveTimer) {
  if (!timerSwitch) {
    if (saveTimer) {
      saveTimer = saveTimer.split("").reverse();
      seconds = saveTimer[0];
      secdecades = saveTimer[1];
      minutes = saveTimer[3];
      mindecades = saveTimer[4];
    }
    timer = setInterval(() => {
      seconds++;
      if (seconds === 10) {
        seconds = 0;
        secdecades++;
      }
      if (secdecades === 6) {
        secdecades = 0;
        minutes++;
      }
      if (minutes === 10) {
        minutes = 0;
        mindecades++;
      }
      topLeft.textContent = `${mindecades}${minutes}:${secdecades}${seconds}`;
      result = `${mindecades}${minutes}:${secdecades}${seconds}`;
    }, 1000);
  }
  timerSwitch = true;
}

export function stopTimer() {
  clearInterval(timer);
  timerSwitch = false;
}

export function resetTimer() {
  clearInterval(timer);
  seconds = 0;
  minutes = 0;
  secdecades = 0;
  mindecades = 0;
  topLeft.textContent = `${mindecades}${minutes}:${secdecades}${seconds}`;
  timerSwitch = false;
}
