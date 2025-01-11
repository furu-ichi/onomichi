/* ハンバーガーアイコンクリック時のドロワーメニュー開閉 */
$("#js-header-icon").on("click", function (e) {
  e.preventDefault();

  $("#js-header-icon").toggleClass("is-checked");
  $("#js-drawer").toggleClass("is-checked");
  $("body").toggleClass("is-fixed");
});

// ドロワーメニューのナビゲーションクリック時、ドロワーメニューを閉じる
$(".drawer__nav").on("click", function (e) {
  e.preventDefault();

  $("#js-header-icon").removeClass("is-checked");
  $("#js-drawer").removeClass("is-checked");
  $("body").removeClass("is-fixed");
});

// About スライダー
const swiper = new Swiper(".swiper", {
  // Optional parameters
  loop: true,

  // If we need pagination
  pagination: {
    el: ".swiper-pagination",
  },

  // Navigation arrows
  navigation: {
    nextEl: ".swiper-button-next",
    prevEl: ".swiper-button-prev",
  },

  // And if we need scrollbar
  scrollbar: {
    el: ".swiper-scrollbar",
  },
});
