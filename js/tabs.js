// tabs
$(function () {
  $("#tabs").tabs();
});


$(function () {
  $(".nav-item").click(function () {
    // remove classes from all
    $(".nav-link").removeClass("active");
    // add class to the one we clicked
    $(this).children('a').addClass("active");
  });
});
