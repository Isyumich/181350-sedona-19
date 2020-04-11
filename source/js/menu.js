var menu = document.querySelector(".page-header__navigation");

var toggle = document.querySelector(".main-nav__toggle");

var navList = document.querySelector(".main-nav__list");

toggle.addEventListener("click", function (evt) {
  evt.preventDefault();
  if (navList.classList.contains("main-nav__list--hidden")) {
    navList.classList.remove("main-nav__list--hidden");
    toggle.classList.remove("main-nav__toggle--off");
    toggle.classList.add("main-nav__toggle--on");
  } else {
    navList.classList.add("main-nav__list--hidden");
    toggle.classList.remove("main-nav__toggle--on");
    toggle.classList.add("main-nav__toggle--off");
  }
  });
