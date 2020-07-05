const sliderWrapper = document.getElementsByClassName("header"),
  sliderContainer = document.getElementsByClassName("header__container"),
  slides = document.getElementsByClassName("header__slide-img"),
  slideCount = slides.length,
  prevBtn = document.getElementById("prev"), // 아이디 prev
  nextBtn = document.getElementById("next"); //아이디 next
let currentIndex = 0;

function slideLeft() {
  //header사진 left값 주기
  for (let i = 0; i < slideCount; i++) {
    slides[i].style.left = i * 100 + "%";
  }
}

function moveSlide(index) {
  // 슬라이드 움직이기
  sliderContainer[0].style.left = index * -100 + "%";
  currentIndex = index;

  updateBtn();
}

function updateBtn() {
  if (currentIndex == 0) {
    prevBtn.disabled = "disabled";
  } else {
    prevBtn.disabled = false;
  }

  if (currentIndex == slideCount - 1) {
    nextBtn.disabled = "disabled";
  } else {
    nextBtn.disabled = false;
  }
}

function prev() {
  // 이전버튼
  moveSlide(currentIndex - 1);
}
function next() {
  // 다음버튼
  moveSlide(currentIndex + 1);
}

prevBtn.addEventListener("click", prev);
nextBtn.addEventListener("click", next);

function init() {
  slideLeft();
  updateBtn();
}

init();
