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


// wizard-tab
$(function () {
  $(".wizard-tab").click(function (e) {
    e.preventDefault();
    $('html,body').animate({ // 有些瀏覽器只支援html，有些只支援body 所以兩個都寫進去
      scrollTop: 0,
    }, 0);
    $('.wizard-tab:nth-child(odd)').css('display','block');
    $(this).css('display','none')
  });
  $(".tab-3").click(function (e) {
    e.preventDefault();
    $('html,body').animate({ // 有些瀏覽器只支援html，有些只支援body 所以兩個都寫進去
      scrollTop: 0,
    }, 0);
    $('.wizard-tab:nth-child(even)').css('display','block');
    $('.wizard-tab:nth-child(odd)').css('display','none')
  });
  $(".tab-1").click(function (e) {
    e.preventDefault();
    $('html,body').animate({ // 有些瀏覽器只支援html，有些只支援body 所以兩個都寫進去
      scrollTop: 0,
    }, 0);
    $('.orderSummary').css('display','none');
    $('.receiveOrder').css('display','block');
    $('.wizard-tab:nth-child(odd)').css('display','none')
  });
});

// article-tab
$(function () {
  $(".article-tab").click(function () {
    $(this).siblings(".nav-item").removeClass("active");
    $(this).addClass("active");
  });
});