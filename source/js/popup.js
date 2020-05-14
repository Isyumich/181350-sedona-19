var button = document.querySelector(".feedback__button");
var errorBlock = document.querySelector(".feedback__modal-error");
var successBlock = document.querySelector(".feedback__modal-success");
var errorButton = document.querySelector(".modal-error__button");
var successButton = document.querySelector(".modal-success__button");
var inputRequired = document.querySelector("input[required]");

button.addEventListener("click", function(evt) {
  evt.preventDefault();
  if (inputRequired.value == '') {
    errorBlock.classList.add("feedback__modal-error--active");
  } else {
    successBlock.classList.add("feedback__modal-success--active");
  }
});

errorButton.addEventListener("click", function(evt) {
  evt.preventDefault();
  errorBlock.classList.remove("feedback__modal-error--active");
});

successButton.addEventListener("click", function(evt) {
  evt.preventDefault();
  successBlock.classList.remove("feedback__modal-success--active");
});
