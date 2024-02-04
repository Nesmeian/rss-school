import { games } from "./game";
import { createGame } from "./createItems";
import { randomGameBtn } from "./html";
import { restartGame } from "./restartGame";
import { gameActive } from "./createMenu";
randomGameBtn.addEventListener("click", () => {
  let randLevelValue = randomLevel(random());
  let randGameValue = randomGame(randLevelValue);
  restartGame();
  gameActive.set(true);
  createGame(games[randLevelValue][randGameValue]);
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
