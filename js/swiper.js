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

// comment swiper
var commentSwiper = new Swiper(".commentSwiper", {
  direction: "vertical",
  slidesPerView: 3.5,
  navigation: {
    nextEl: ".swiper-button-next",
    prevEl: ".swiper-button-prev",
  },
    mousewheel: {
    forceToAxis: true,
  },
});

// foodlist swiper
var coverflowSwiper = new Swiper(".coverflowSwiper", {
  spaceBetween:24,
  centeredSlides: true,
  effect: "coverflow",
  grabCursor: true,
  navigation: {
    nextEl: ".swiper-button-next",
    prevEl: ".swiper-button-prev",
  },
    mousewheel: {
    forceToAxis: true,
  },
  coverflowEffect: {
    rotate: 30,
    stretch: 0,
    depth: 100,
    modifier: 1,
    slideShadows: false,
  },
  breakpoints: {
    // when window width is >= 375px
    375: {
      slidesPerView: 1.5,
    },
    // when window width is >= 768px
    768: {
      slidesPerView: 2.5,
    },
    // when window width is >= 992px
    992: {
      slidesPerView: 3.5,
    },
  },
});

// article swiper
var swiper = new Swiper(".articleSwiper", {
  navigation: {
    nextEl: ".swiper-button-next",
    prevEl: ".swiper-button-prev",
  },
  breakpoints: {
    // when window width is >= 768px
    375: {
      spaceBetween:12,
      slidesPerView: 1,
    },
    
    // when window width is >= 992px
    992: {
      spaceBetween:24,
      slidesPerView: 2,
    },
  },
});