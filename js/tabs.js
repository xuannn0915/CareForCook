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

$(function () {
  // to forget password page
  $(".forget").click(function (event) {
    event.preventDefault();
    $(".forgetPassword").removeClass("disabled").addClass('active');
    $(".login").removeClass('active').addClass("disabled");
  });

  // return to login page
  $(".retun_login").click(function (event) {
    event.preventDefault();
    $(".forgetPassword").removeClass('active').addClass("disabled");
    $(".login").removeClass("disabled").addClass('active');
  });
});