AOS.init();

var swiper = new Swiper(".mySwiper", {

    slidesPerView: 1,
    spaceBetween: 10,
    // grabCursor: true,
    loop: true,
    freeMode: true,
    pauseOnMouseEnter: false,
    slideToClickedSlide: true,
    autoplay: {
      delay: 3000,
      disableOnInteraction: false,
    },
    navigation: {
      nextEl: ".swiper-button-next",
      prevEl: ".swiper-button-prev",
    },
    pagination: {
      el: ".swiper-pagination-2",
    },
   
  });