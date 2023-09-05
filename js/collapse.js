$(function () {
  $(".collapse-btn").click(function () {
    // remove classes from all
    $(this).parent('.collapse-item').toggleClass("open");
    $(this).parent('.collapse-item').siblings().removeClass("open");
    $('ol').removeClass('show');
  });
});

$(function () {
  $(".accordion-button").click(function () {
    $('.accordion-collapse').addClass("accordion-bg");
    $(this).addClass("accordion-title");
  });
});