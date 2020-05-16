var button = document.querySelector(".feedback__button");
var errorBlock = document.querySelector(".feedback__modal-error");
var successBlock = document.querySelector(".feedback__modal-success");
var errorButton = document.querySelector(".modal-error__button");
var successButton = document.querySelector(".modal-success__button");
var userName = document.querySelector("#first-name");
var userSurname = document.querySelector("#last-name");
var usertel = document.querySelector("#phone-number");
var usermail = document.querySelector("#email");

button.addEventListener("click", function(evt) {
  if (!userName.value || !userSurname.value || !usertel.value || !usermail.value) {
    errorBlock.classList.add("feedback__modal-error--active");
  } else {
    evt.preventDefault();
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
