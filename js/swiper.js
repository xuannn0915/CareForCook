// Initialize Swiper 
var swiper = new Swiper(".mySwiper", {
  spaceBetween: 24,
  centeredSlides: true,
  loop: true,
  autoplay: {
    delay: 5000,
    disableOnInteraction: true,
  },
  pagination: {
    el: ".swiper-pagination",
    clickable: false,
  },
  navigation: {
    nextEl: ".swiper-button-next",
    prevEl: ".swiper-button-prev",
  },
    // Responsive breakpoints
    breakpoints: {
      // when window width is >= 320px
      320: {
        slidesPerView: 2,
        spaceBetween: 20
      },
      // when window width is >= 480px
      // when window width is >= 992px
      992: {
        slidesPerView: 3.25,
        spaceBetween: 30
      }
    }
});