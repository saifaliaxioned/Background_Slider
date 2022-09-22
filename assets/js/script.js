// slider function
var backgroundImage = document.querySelector('.background-image img');
var slide = document.querySelectorAll('.slide-list');
var slideImage = document.querySelectorAll('.slide-image img');
var prevBtn = document.querySelector('#prev-btn');
var nextBtn = document.querySelector('#next-btn');
counter = 0;

nextBtn.addEventListener('click',function () {
  counter++;
  if (counter > slide.length - 1){
    counter = 0;
  }
  slider();
})

prevBtn.addEventListener('click',function () {
  counter--;
  if (counter < 0){
    counter = slide.length - 1;
  }
  slider();
})

function slider() {
  var activeSlide = document.querySelector('.active-list');
  activeSlide.classList.remove('active-list');
  slide[counter].classList.add('active-list','fade-animation');
  backgroundImage.src = slideImage[counter].src;
}

























