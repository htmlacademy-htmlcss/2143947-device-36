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