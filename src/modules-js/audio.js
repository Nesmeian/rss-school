import { createElement } from "./createFunc";
import left from "../audio/leftclick.mp3";
import rigth from "../audio/rigthclick.mp3";
import changelev from "../audio/changelevel.mp3";
import changegam from "../audio/changegame.mp3";
import wingame from "../audio/winGame.mp3";
import newgame from "../audio/newGame.mp3";
import random from "../audio/random.mp3";
import save from "../audio/saveGame.mp3";
import continueAud from "../audio/continue.mp3";
import restart from "../audio/restart.mp3";
import scores from "../audio/scores.mp3";
import dark from "../audio/dark.mp3";
import light from "../audio/light.mp3";
import solution from "../audio/autoSolution.mp3";
export const leftClick = createElement({
  tag: "audio",
  classes: ["audio__left-click"],
});
export const rigthClick = createElement({
  tag: "audio",
  classes: ["audio__rigth-click"],
});
export const audioChangeLevel = createElement({
  tag: "audio",
  classes: ["audio__change-level"],
});
export const audioChangeGame = createElement({
  tag: "audio",
  classes: ["audio__change-game"],
});
export const audioWinGame = createElement({
  tag: "audio",
  classes: ["audio__win-game"],
});
export const audioNewGame = createElement({
  tag: "audio",
  classes: ["audio__new-game"],
});
export const audioSaveGame = createElement({
  tag: "audio",
  classes: ["audio__save-game"],
});
export const audioContinueGame = createElement({
  tag: "audio",
  classes: ["audio__continue-game"],
});
export const audioRestartGame = createElement({
  tag: "audio",
  classes: ["audio__restart-game"],
});
export const audioRandomGame = createElement({
  tag: "audio",
  classes: ["audio__random-game"],
});
export const audioDark = createElement({
  tag: "audio",
  classes: ["audio__Dark"],
});
export const audioLight = createElement({
  tag: "audio",
  classes: ["audio__Light"],
});
export const audioScore = createElement({
  tag: "audio",
  classes: ["audio__score"],
});
export const audioSolution = createElement({
  tag: "audio",
  classes: ["audio__solution"],
});
leftClick.src = left;
rigthClick.src = rigth;
audioChangeLevel.src = changelev;
audioChangeGame.src = changegam;
audioWinGame.src = wingame;
audioNewGame.src = newgame;
audioDark.src = dark;
audioLight.src = light;
audioScore.src = scores;
audioContinueGame.src = continueAud;
audioRandomGame.src = random;
audioRestartGame.src = restart;
audioSaveGame.src = save;
audioSolution.src = solution;
