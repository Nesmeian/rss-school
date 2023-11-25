const slider = document.querySelector(".coffee__slider");
const sliderItem = document.querySelectorAll(".coffee_img");
const arrowLeft = document.querySelector(".arrow-left");
const arrowRight = document.querySelector(".arrow-right");
const progressBar = document.querySelectorAll(".coffee__control-progress");
let sliderCount = 1;
let position = 0;

arrowLeft.addEventListener("click", moveLeft);
arrowRight.addEventListener("click", moveRight);
function checkPosition() {
  if (sliderCount < 1) {
    position = -1530;
    sliderCount = 3;
  } else if (sliderCount > 3) {
    position = 510;
    sliderCount = 1;
  }
}

function moveRight() {
  sliderCount++;
  checkPosition();
  position = position - 510;
  slider.style.transform = `translateX(${position}px)`;
}

function moveLeft() {
  sliderCount--;
  checkPosition();
  position = position + 510;
  console.log(sliderCount);
  slider.style.transform = `translateX(${position}px)`;
}

function fillingProgressBar() {
  let width = 1;
  if (width >= 100) {
    width = 0;
  } else {
    width++;
    progressBar[sliderCount - 1].style.width = width + "%";
  }
}
// function update() {
//   var width = 1;
//   var identity = setInterval(scene, 45);
//   function scene() {
//     if (width >= 100) {
//       clearInterval(identity);
//       progressBar[sliderCount - 1].style.width = 0;
//     } else {
//       width++;
//       progressBar[sliderCount - 1].style.width = width + "%";
//     }
//   }
// }
update();
setInterval(() => {
  //   update();
  checkPosition();
  moveRight();
}, 5000);
