"use strict";

$(function () {
  console.log('Hello Bootstrap5');
}); //swipper

var swiper = new Swiper('.swiper-container', {
  slidesPerView: 3,
  spaceBetween: 30,
  centeredSlides: true,
  loop: true,
  pagination: {
    el: '.swiper-pagination',
    clickable: true
  }
});
//# sourceMappingURL=all.js.map
