console.log(
  "Пожалуйста при проверки роботаспособности клавиатуры используйте английскую раскладку"
);
console.log(
  `1.The game starts with the correct default view (empty gallows, underscores for secret word, etc.) and a random question: +5\n
  2.The user can play the game by using the virtual keyboard: +20\n
  3.The user can play the game by using the physical keyboard: +20\n
  4.When the letter is correct, it appears instead of the corresponding underscore. If the letter repeats in the word, all corresponding underscores must be replaced by it: +15\n
  5.When the letter is incorrect:\n
  6.the incorrect guesses counter is updated: +5\n
  7.a body part is added to the gallows: +10\n
  8.The clicked/pressed letter is disabled: +5\n
  9.The body parts appear on the gallows in the logical order (head, body, left arm, right arm, left leg, right leg): +5\n
  10.When the user runs out of 6 attempts or wins the game, the modal window appears: +10\n
  11.The modal window includes the message about the game's outcome (winning or losing), the secret word and the 'play again' button: +10\n
  12.When the user clicks the 'play again' button, the game starts over by showing a new question and resetting the gallows, the incorrect guesses counter and the underscores for the secret word: +15`
);
import "./index.html";
import "./main.scss";
import "./modules/html.js";
import "./modules/interactive.js";
