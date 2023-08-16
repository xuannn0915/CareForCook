// Initialize Swiper 
var swiper = new Swiper(".mySwiper", {
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
        spaceBetween: 20
      },
      // when window width is >= 480px
      // when window width is >= 992px
      992: {
        slidesPerView: 2.5,
        spaceBetween: 30
      }
    }
});