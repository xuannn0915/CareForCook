// tabs
$(function () {
  $("#tabs").tabs();
  $("#tabs-lg").tabs();
  $("#tabs-2").tabs();
});


$(function () {
  $(".nav-item").click(function () {
    // remove classes from all
    $(this).siblings().children(".nav-link").removeClass("active");
    // add class to the one we clicked
    $(this).children('a').addClass("active");
  });
});

$(function () {
  $(".nav-item-lg").click(function () {
    // remove classes from all
    $(".nav-link-lg").removeClass("active");
    // add class to the one we clicked
    $(this).children('a').addClass("active");
  });
});
