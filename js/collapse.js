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


// backstage sidebar
$(function () {
  $(".menu-btn").click(function () {
    $('.logout').toggleClass('visible');
    $('.account-info').toggleClass('visible');
    $('.logout-btn').toggleClass('px-6');
  });
});

$(function () {
  $(".menu-btn").click(function () {
    $('.backstage-content').toggleClass('backstage-content-collapse');
  });
});
