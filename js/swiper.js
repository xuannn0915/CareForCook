// banner swiper
var bannerSwiper = new Swiper(".bannerSwiper", {
  spaceBetween: 24,
  centeredSlides: true,
  loop: true,
  autoplay: {
    delay: 2000,
    disableOnInteraction: true,
  },
  // Responsive breakpoints
  breakpoints: {
    // when window width is >= 320px
    320: {
      slidesPerView: 1.5,
      spaceBetween: 20,
    },
    // when window width is >= 992px
    992: {
      slidesPerView: 2.5,
      spaceBetween: 30,
    },
  },
});

// service swiper
var serviceSwiper = new Swiper(".serviceSwiper", {
  pagination: {
    el: ".swiper-pagination",
  },
  // Responsive breakpoints
  breakpoints: {
    // when window width is >= 375px
    375: {
      slidesPerView: 1.1,
      spaceBetween: 8,
    },
    // when window width is >= 768px
    768: {
      slidesPerView: 2.1,
      spaceBetween: 16,
    },
    // when window width is >= 992px
    992: {
      slidesPerView: 3,
      spaceBetween: 24,
    },
  },
});
