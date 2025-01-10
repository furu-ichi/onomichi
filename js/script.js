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
