const swiper = new Swiper('.swiper', {
    slidesPerView: 1,/* si coloco 4 se desabilita el swiper, podria usar esto para responsive */
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

const swiperPreventa = new Swiper('.swiper-preventa', {
    slidesPerView: 4,/* si coloco 4 se desabilita el swiper, podria usar esto para responsive */
    direction: 'horizontal',
    spaceBetween: 0,
    /*     loop: true,
     */
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