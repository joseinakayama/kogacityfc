$(function () {
  // headerのドロップダウン開閉
  $(".l-nav-list__item").on("mouseover", function () {
    $(this).find(".l-nav-sub").addClass("is-active-nav-sub-open");
  });
  $(".l-nav-list__item").on("mouseout", function () {
    $(this).find(".l-nav-sub").removeClass("is-active-nav-sub-open");
  });

  //   ハンバーガーメニューの開閉
  $(".l-hamburger").on("click", function () {
    $(this).toggleClass("is-active-hamburger-open");
    $(".l-menu").toggleClass("is-active-menu-open");
    $("body").toggleClass("is-overflow-hidden");
  });
});
