"use strict";

const elHamburger = document.querySelector("#jsHumBtn");
const elNav = document.querySelector("#jsMobileNav");

const hideNav = () => {
  elNav.classList.toggle("mobile__navbar__active");
};

elHamburger.addEventListener("click", function (e) {
  e.preventDefault;
  elNav.classList.toggle("mobile__navbar__active");
});
