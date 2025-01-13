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
  autoplay: {
    delay: 0,
  }, // 自動で流れる設定
  speed: 5000, // 自動で流れるスピード
  slidesPerView: "auto", // 画面幅に合わせて枚数を自動調整
  spaceBetween: 10, // スライド間の空白
  allowTouchMove: false, // ドラッグ、スワイプでの操作無効

  breakpoints: {
    768: {
      spaceBetween: 20, // スライド間の空白
    },
  },
});

// モーダルを開く
$(".prizes__button").on("click", function (e) {
  e.preventDefault();

  $("#js-prizes-modal")[0].showModal();
  $("body").toggleClass("is-fixed");

  // 後ろの要素が選択できない
  // $("#js-about-modal")[0].show();
});

// モーダルを閉じる
$(".js-modal-close").on("click", function (e) {
  e.preventDefault();

  $("#js-about-modal")[0].close();
});
