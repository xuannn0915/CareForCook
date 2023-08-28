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

// AOS
AOS.init();