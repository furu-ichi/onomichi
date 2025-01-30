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
const aboutSwiper = new Swiper("#js-about-swiper", {
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
$(".js-prizes-box").on("click", function (e) {
  e.preventDefault();

  const idx = $(this).index();
  const dialog = $(".prizes-modal").eq(idx)[0];
  dialog.showModal();
  dialog.scrollTop = 0;
  $("body").toggleClass("is-fixed");
});

// モーダルを閉じる
$(".js-prizes-modal-button").on("click", function (e) {
  e.preventDefault();

  const dialog = $(this).parent().parent().parent();
  $(dialog)[0].close();
  $("body").toggleClass("is-fixed");
});

// モーダルの外側クリック時にモーダルを閉じる
$(".js-prizes-modal").on("click", function (e) {
  e.preventDefault();

  if ($(e.target).hasClass("js-prizes-modal")) {
    $(this)[0].close();
    $("body").toggleClass("is-fixed");
  }
});

// Spots スライダー
const spotsSwiper = new Swiper("#js-spots-swiper", {
  // Optional parameters
  loop: true,
  slidesPerView: "auto", // 画面幅に合わせて枚数を自動調整
  spaceBetween: 16, // スライド間の空白
  centeredSlides: true,

  breakpoints: {
    500: {
      spaceBetween: 30, // スライド間の空白
    },
    600: {
      spaceBetween: 100, // スライド間の空白
    },
    600: {
      spaceBetween: 120, // スライド間の空白
    },
    768: {
      spaceBetween: 32, // スライド間の空白
      centeredSlides: false,
      initialSlide: 5,
    },
  },

  // Navigation arrows
  navigation: {
    nextEl: "#js-spots-next",
    prevEl: "#js-spots-prev",
  },
});

// Q＆A開閉
$(".js-qa-question").on("click", function (e) {
  e.preventDefault();

  if ($(this).parent().hasClass("is-open")) {
    $(this).parent().removeClass("is-open");
    $(this).next().slideToggle();
  } else {
    $(this).parent().addClass("is-open");
    $(this).next().slideToggle();
  }
});
