let review_button = document.getElementById('review-button');

let modal_review = document.getElementById('modal-review');
let modal_overlay = document.querySelector('.modal-overlay');
let modal_close_button = document.getElementById('modal-review-close-button');

// Открывает модальное окно с отзывом и включает подложку
review_button.addEventListener("click", function (event) {
  event.preventDefault();
  modal_review.classList.add("modal--show");
  modal_overlay.classList.add("modal-overlay--show");

  // if (storageName) {
  //   feedbackName.value = storageName;
  //   feedbackEmail.focus();
  // } else {
  //   feedbackName.focus();
  // }
  
  // if (storageEmail) {
  //   feedbackEmail.value = storageEmail;
  //   feedbackText.focus();
  // }
});

// Закрывает модальное окно и выключает подложку
modal_close_button.addEventListener("click", function(event) {
  event.preventDefault();
  modal_review.classList.remove("modal--show");
  modal_overlay.classList.remove("modal-overlay--show");
});