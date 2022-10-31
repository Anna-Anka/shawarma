export const bannersSwiper = () => {
    if (document.querySelector('.banners__swiper')) {
        const swiperBanneres = new Swiper('.banners__swiper', {
            slidesPerView: 1,
            slidesPerGroup: 1,
            spaceBetween: 10,
            loop: true,

            navigation: {
                nextEl: '.banners__button--next',
                prevEl: '.banners__button--prev',
            },
        });
    }
}