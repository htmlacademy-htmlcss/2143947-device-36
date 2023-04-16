// SLIDER

const sliderTabButtons = document.querySelectorAll('.slider-pagination-button');
const slides = document.querySelectorAll('.slider-item');
const buttonPrevious = document.querySelector('.previous-slide');
const buttonNext = document.querySelector('.next-slide');

let counter = 0;
const maxStep = slides.length - 1;
slides[counter].classList.add('current-slider-item');

const isFirst = (counter) => {
  if (counter === 0) {
    buttonPrevious.setAttribute('disabled', 'disabled');
  } else {
    buttonPrevious.removeAttribute('disabled', 'disabled');
  }
};

const isLast = (counter) => {
  if (counter === maxStep) {
    buttonNext.setAttribute('disabled', 'disabled');
  } else {
    buttonNext.removeAttribute('disabled', 'disabled');
  }
};

buttonNext.addEventListener('click', () => {
  slides[counter].classList.remove('current-slider-item');
  slides[counter].setAttribute('style', 'transform: translate(0%)');
  sliderTabButtons[counter].classList.remove('slider-pagination-button-current');

  counter++;
  isLast(counter);
  isFirst(counter);

  slides[counter].classList.add('current-slider-item');
  sliderTabButtons[counter].classList.add('slider-pagination-button-current');
});

buttonPrevious.addEventListener('click', () => {
  slides[counter].classList.remove('current-slider-item');
  sliderTabButtons[counter].classList.remove('slider-pagination-button-current');

  counter--;
  isLast(counter);
  isFirst(counter);

  slides[counter].classList.add('current-slider-item');
  slides[counter].removeAttribute('style');
  sliderTabButtons[counter].classList.add('slider-pagination-button-current');
});

sliderTabButtons.forEach((button, counter) => {
  button.addEventListener('click', () => {
    document.querySelector('.slider-pagination-button-current').classList.remove('slider-pagination-button-current');
    button.classList.add('slider-pagination-button-current');
    document.querySelector('.current-slider-item').classList.remove('current-slider-item');
    slides[counter].classList.add('current-slider-item');
  });
});

// TAB-BUTTONS

const tabButtons = document.querySelectorAll('.tab-link');
const tabContents = document.querySelectorAll('.tab-content');

tabButtons.forEach((button, index) => {
  button.addEventListener('click', () => {
    document.querySelector('.tab-link-active').classList.remove('tab-link-active');
    button.classList.add('tab-link-active');
    document.querySelector('.tab-content-active').classList.remove('tab-content-active');
    tabContents[index].classList.add('tab-content-active');
  });
});


// MODAL-WINDOW

const delivery = document.querySelector('.delivery-link');
const deliveryModal = document.querySelector('.modal-container');
const modalClose = deliveryModal.querySelector('.modal-close-button');

delivery.addEventListener('click', (evt) => {
  evt.preventDefault();
  deliveryModal.classList.add('modal-show');
});

modalClose.addEventListener('click', (evt) => {
  evt.preventDefault();
  deliveryModal.classList.remove('modal-show');
});

window.addEventListener('keydown', (evt) => {
  if (evt.keyCode === 27) {
    if (deliveryModal.classList.contains('modal-show')) {
      evt.preventDefault();
      deliveryModal.classList.remove('modal-show');
    }
  }
});
