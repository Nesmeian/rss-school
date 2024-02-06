import { games } from "./game";
import { audioRandomGame, soundActive } from "./audio";
import { createGame } from "./createItems";
import { randomGameBtn } from "./html";
import { restartGame } from "./restartGame";
import {
  _choseGame,
  _choseLevel,
  _currentGame,
  gameActive,
} from "./createMenu";

export function activeButton(e) {
  e.classList.add("--active-Btn");
  setTimeout(() => {
    e.classList.remove("--active-Btn");
  }, 1000);
}
randomGameBtn.addEventListener("click", () => {
  if (soundActive) {
    audioRandomGame.play();
  }
  let randLevelValue = randomLevel(random());
  let randGameValue = randomGame(randLevelValue);
  restartGame();
  gameActive.set(true);
  createGame(games[randLevelValue][randGameValue]);
  _currentGame.set(games[randLevelValue][randGameValue]);
  _choseGame.set(randGameValue);
  _choseLevel.set(randLevelValue);
});

function randomLevel(random) {
  let level = Object.keys(games);
  return level[random];
}

function random() {
  let gamesLevelLength = Object.keys(games).length;
  let rand = Math.random() * (gamesLevelLength + 1 - 1);
  return Math.floor(rand);
}

function randomGame(level) {
  let gameKeys = Object.keys(games[level]);
  let randGame = Math.random() * (gameKeys.length + 1 - 1);
  randGame = Math.floor(randGame);
  return gameKeys[randGame];
}
