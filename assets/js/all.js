"use strict";

$(function () {
  console.log('Hello Bootstrap5');
});
$('.row').imagesLoaded().progress(function () {
  $('.row').masonry(); // 渲染整體畫面
});
//# sourceMappingURL=all.js.map
