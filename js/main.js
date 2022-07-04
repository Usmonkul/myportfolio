"use strict";

$(document).ready(() => {
  $(".menu-btn").on("click", function (e) {
    e.preventDefault;
    $(this).toggleClass("menu-btn_active");
    $("#jsMobileNav").toggleClass("mobile-active");
  });
});
