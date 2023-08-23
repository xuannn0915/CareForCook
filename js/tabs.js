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



// login page
$(function () {
    // sign up an account
    $(".signUp").click(function (event) {
      event.preventDefault();
      $(".login").removeClass('active').addClass("disabled");
      $(".register").removeClass("disabled").addClass('active');
    });

  // to forget password page
  $(".forget").click(function (event) {
    event.preventDefault();
    $(".forgetPassword").removeClass("disabled").addClass('active');
    $(".login").removeClass('active').addClass("disabled");
  });

  // return to login page
  $(".return_login").click(function (event) {
    event.preventDefault();
    $(".forgetPassword").removeClass('active').addClass("disabled");
    $(".register").removeClass('active').addClass("disabled");
    $(".login").removeClass("disabled").addClass('active');
  });


});