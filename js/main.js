"use strict";

$(document).ready(() => {
  $(".menu-btn").on("click", function (e) {
    e.preventDefault;
    $(this).toggleClass("menu-btn_active");
    $("#jsMobileNav").toggleClass("mobile-active");
    $("section").toggleClass("hero-filter");
    $("body").toggleClass("overflow-h");
  });
  // $(".mobile__nav-link").on("click", function (e) {
  //   $(this).each(function () {
  //     $("#jsMobileNav").toggleClass("mobile-active");
  //     $("section").toggleClass("hero-filter");
  //     $("body").toggleClass("overflow-h");
  //   });
  // });
});
