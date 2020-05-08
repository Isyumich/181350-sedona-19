var menu = document.querySelector(".page-header__navigation");

var toggle = document.querySelector(".main-nav__toggle");

var toggleInner = document.querySelector(".main-nav__toggle--inner")

var navList = document.querySelector(".main-nav__list");

var pageHeaderImage = document.querySelector(".page-header__image");

window.onload = function() {
    navList.classList.add("main-nav__list--hidden");
    toggle.classList.add("main-nav__toggle--on");
};

toggle.addEventListener("click", function (evt) {
  evt.preventDefault();
  if (navList.classList.contains("main-nav__list--hidden")) {
    navList.classList.remove("main-nav__list--hidden");
    toggle.classList.remove("main-nav__toggle--on");
    toggle.classList.add("main-nav__toggle--off");
  } else {
    navList.classList.add("main-nav__list--hidden");
    toggle.classList.remove("main-nav__toggle--off");
    toggle.classList.add("main-nav__toggle--on");
  }
  });

toggleInner.addEventListener("click", function(evt) {
  evt.preventDefault();
  if (pageHeaderImage.classList.contains("page-header__image--inner")) {
      pageHeaderImage.classList.remove("page-header__image--inner")
    } else {
      pageHeaderImage.classList.add("page-header__image--inner")
    }
  });
