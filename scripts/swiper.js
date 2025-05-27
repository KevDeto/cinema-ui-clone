const swiperHome = new Swiper('.section-home .swiper', {
    slidesPerView: 1,
    direction: 'horizontal',
    spaceBetween: 0,
    loop: true,
    autoplay: {
        delay: 4500,
    },
    pagination: {
        el: '.swiper-pagination',
        clickable: true,
    },

    navigation: {
        nextEl: '.swiper-button-next',
        prevEl: '.swiper-button-prev',
    }
});


const swiperPreventa = new Swiper('.section-preventa .swiper', {
  slidesPerView: 4,
  spaceBetween: 24,
  watchOverflow: true,
  
  pagination: {
    el: '.swiper-pagination',
    clickable: true,
  },
  
  navigation: {
    nextEl: '.swiper-button-next',
    prevEl: '.swiper-button-prev',
  },

});

const swiperDisfruta = new Swiper('.section-disfruta .swiper', {
  slidesPerView: 3,
  spaceBetween: 24,
  watchOverflow: true,
  
  pagination: {
    el: '.swiper-pagination',
    clickable: true,
  },
  
  navigation: {
    nextEl: '.swiper-button-next',
    prevEl: '.swiper-button-prev',
  },

});

const swiperProximosEstrenos = new Swiper('.section-proximos .swiper', {
  slidesPerView: 4,
  spaceBetween: 24,
  watchOverflow: true,
  
  pagination: {
    el: '.swiper-pagination',
    clickable: true,
  },
  
  navigation: {
    nextEl: '.swiper-button-next',
    prevEl: '.swiper-button-prev',
  },

});