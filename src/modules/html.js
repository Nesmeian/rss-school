const main = document.createElement("main");
const wrapper = document.createElement("div");
const body = document.querySelector("body");
const hagnman = document.createElement("section");
const gallow = document.createElement("div");
const supportBeam = document.createElement("div");
const hangingBeam = document.createElement("div");
const foundation = document.createElement("div");
const title = document.createElement("h1");
const interactive = document.createElement("section");
export const word = document.createElement("div");
export const question = document.createElement("div");
export const attempts = document.createElement("div");
export const keyboard = document.createElement("div");
export const attemptsCount = document.createElement("span");
// wrappers
main.className = "main";
wrapper.className = "wrapper";
body.className = "body";

// const hangman
hagnman.className = "hangman";
gallow.className = "hangman__gallow";
supportBeam.className = "hangman__support-beam";
hangingBeam.className = "hangman__hanging-beam";
foundation.className = "hangman__foundation";
title.className = "title";
title.innerHTML = "HANGMAN";

// const interactive
interactive.className = "interactive";
word.className = "interactive__word";
question.className = "interactive__question";
question.textContent = "How many friends you have";
attempts.classList = "interactive__attempts";
attempts.textContent = "Incorect guesses  ";
attemptsCount.classList = "attempts__count";
attemptsCount.textContent = "0:6";
keyboard.className = "interactive__keyboard";

// common append
body.append(main);
main.append(title);
main.append(wrapper);
wrapper.append(hagnman);
wrapper.append(interactive);
// Hangman append
hagnman.append(gallow);
gallow.append(supportBeam);
gallow.append(hangingBeam);
gallow.append(foundation);

// interactive append
interactive.append(word);
interactive.append(question);
attempts.append(attemptsCount);
interactive.append(attempts);
interactive.append(keyboard);
