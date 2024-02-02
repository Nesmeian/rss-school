import { createElement } from "./createFunc";
import left from "../audio/leftclick.mp3";
import rigth from "../audio/rigthclick.mp3";
import changelev from "../audio/changelevel.mp3";
import changegam from "../audio/changegame.mp3";
import wingame from "../audio/winGame.mp3";
import newgame from '../audio/newGame.mp3';
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
export const audioNewGame=createElement({
    tag:'audio',
    classes:['audio__new-game']
}) 
leftClick.src = left;
rigthClick.src = rigth;
audioChangeLevel.src = changelev;
audioChangeGame.src = changegam;
audioWinGame.src = wingame;
audioNewGame.src = newgame