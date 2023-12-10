const slider = document.querySelector(".coffee__slider");
const sliderItem = document.querySelectorAll(".slider__item");
const arrowLeft = document.querySelector(".arrow-left");
const arrowRight = document.querySelector(".arrow-right");
const progressBar = document.querySelectorAll(".coffee__control-progress");
let width = 0;
let sliderCount = 0;
let position = 0;
let fillInterval;
let x1=0;
let firstPosition;
let moveSlide;
function checkPosition() {
  if(window.innerWidth>=701){
  moveSlide=480;
  if (sliderCount < 0) {
    position = -1440;
    sliderCount = 2;
  } else if (sliderCount > 2) {
    position = 480;
    sliderCount = 0;
  }
}
  if(window.innerWidth<=700){
    moveSlide=348
    if (sliderCount < 0) {
      sliderCount = 2;
      position = -1044;
    } else if (sliderCount > 2) {
      position = 348;
      sliderCount = 0;
    }
  }
}


function moveRight() {
  sliderCount++;
  checkPosition();
  stopFiling()
  clearProgressBar()
  startFiling()
  position = position - moveSlide;
  slider.style.transform = `translateX(${position}px)`;
}

function moveLeft() {
  sliderCount--;
  checkPosition();
  stopFiling()
  clearProgressBar()
  startFiling()
  position = position + moveSlide;
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

function clearProgressBar(){
  progressBar.forEach((bar)=>{
    width=0
    bar.style.width=`${width}%`
  })
}

function touchStart(e){
  let firstTouch=e.touches[0]
  x1=firstTouch.clientX
  stopFiling()
}
function touchMove(e){
  if(!x1){
      return false
  }
  let secondTouch=e.changedTouches[0]
  let x2=secondTouch.clientX
  let move=x2-x1
  if(move>x1){
    moveRight()
  }else{
    moveLeft()
  }
}

function mouseStart(e){
  firstPosition=e.offsetX
}
function mouseMove(e){
  secondPosition=e.offsetX
  if(firstPosition>secondPosition&&firstPosition-secondPosition>100){
    moveLeft()
  }else if(firstPosition<secondPosition&&secondPosition-firstPosition>10){
    moveRight()
  }else{
    startFiling()
  }
}


function startFiling() {
  stopFiling()
  fillInterval = setInterval(fillingProgressBar, 400);
}
function stopFiling() {
  clearInterval(fillInterval);
}
arrowLeft.addEventListener("click", moveLeft);
arrowRight.addEventListener("click", moveRight);
startFiling();


sliderItem.forEach((slid) => {
  slid.addEventListener("mousemove", stopFiling);
  slid.addEventListener("mouseout", startFiling);
  slid.addEventListener("mousedown", mouseStart);
  slid.addEventListener("mouseup", mouseMove);
  slid.addEventListener('touchstart', touchStart);
  slid.addEventListener('touchend', touchMove);
});

