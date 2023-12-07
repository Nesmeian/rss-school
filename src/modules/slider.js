const slider = document.querySelector(".coffee__slider");
const sliderItem = document.querySelectorAll(".coffee_img");
const arrowLeft = document.querySelector(".arrow-left");
const arrowRight = document.querySelector(".arrow-right");
const progressBar = document.querySelectorAll(".coffee__control-progress");
let width = 0;
let sliderCount = 0;
let position = 0;

arrowLeft.addEventListener("click", moveLeft);
arrowRight.addEventListener("click", moveRight);
function checkPosition() {
  if (sliderCount < 0) {
    position = -1530;
    sliderCount = 2;
  } else if (sliderCount > 2) {
    position = 510;
    sliderCount = 0;
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
  if (width >= 100) {
    width = 0;
    progressBar[sliderCount].style.width = `${width}%`;
    moveRight();
  } else {
    width = width + 10;
    progressBar[sliderCount].style.width = `${width}%`;
  }
}

sliderItem.forEach((slid) => {
  slid.addEventListener("mousemove", stopFiling, { passive: true });
  slid.addEventListener("mouseout", startFiling, { passive: true });
  slid.addEventListener("mousedown", stopFiling, { passive: true });
  slid.addEventListener("mouseup", startFiling, { passive: true });
});

startFiling();
function startFiling() {
  return (fillInterval = setInterval(fillingProgressBar, 400));
}
function stopFiling() {
  clearInterval(fillInterval);
}
