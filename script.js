window.onload = function() {
  let review_button = document.getElementById('review-button');
  let modal_review = document.getElementById('modal-review');
  let modal_overlay = document.querySelector('.modal-overlay');
  let modal_close_button = document.getElementById('modal-review-close-button');

// Открывает модальное окно с отзывом и включает подложку
review_button.addEventListener("click", function (event) {
  event.preventDefault();
  modal_review.classList.add("modal--show");
  modal_overlay.classList.add("modal-overlay--show");
});

// Закрывает модальное окно и выключает подложку
modal_close_button.addEventListener("click", function(event) {
  event.preventDefault();
  modal_review.classList.remove("modal--show");
  modal_overlay.classList.remove("modal-overlay--show");
});

// header sticky
modal_review.addEventListener('scroll', stickyHeader, false);

function stickyHeader() {
  let review_header = document.querySelector('.review-form__header');
  let nextSibling = review_header.nextElementSibling;

  console.log(nextSibling);
  console.log(nextSibling.getBoundingClientRect().top);
  
  if (nextSibling.getBoundingClientRect().top < 96) { // пока захардкодила координату
    review_header.classList.add('review-form__header--sticky');
  } else {
    review_header.classList.remove('review-form__header--sticky');
  }
}
}