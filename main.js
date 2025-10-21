const swiper = new Swiper(".testimonial-swiper", {
  loop: true,
  autoplay: {
    delay: 3000,
    disableOnInteraction: false,
  },
  pagination: {
    el: ".swiper-pagination",
    clickable: true,
  },
  effect: "slide",
  speed: 600,
});
