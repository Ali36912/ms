new Swiper('.comment-slider', {
    navigation: {
        nextEl: '.swiper-button-next',
        prevEl: '.swiper-button-prev',
      },
    pagination: {
    el: '.swiper-pagination',
    clickable: true,
    dynamicBullets: true,
    },
    slidesPerView: 2.6,
    centeredSlides: true,
    loop: true,
    breakpoints:{
      1024: {
        slidesPerView: 2.6,
      },
      850: {
        slidesPerView: 1.5,
      },
      768: {
        slidesPerView: 1.5,
      },
      414: {
        slidesPerView: 1,
      },
      320:{
        slidesPerView: 1,
      }
    }
}),

new Swiper('.screen-slider',{
  slidesPerView: 2.1,
  centeredSlides: true,
  loop: true,
  spaceBetween: 30,
  pagination: {
    el: '.swiper-pagination',
    clickable: true,
    dynamicBullets: true,
    },
    breakpoints:{
      1024: {
        slidesPerView: 2.1,
      },
      414: {
        slidesPerView: 1,
        centeredSlides: true,
      },
      320:{
        slidesPerView: 1,
        centeredSlides: true,
      }
    }
}),

new Swiper('.cards-slider',{
  slidesPerView: 1,
  spaceBetween: 30,
  pagination: {
    el: '.swiper-pagination',
    clickable: true,
    },
});