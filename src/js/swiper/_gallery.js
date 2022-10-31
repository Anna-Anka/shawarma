export const gallerySwiper = () => {
    if (document.querySelector('.gallery__swiper')) {
        const swiperGallery = new Swiper('.gallery__swiper', {
            slidesPerView: 1,
            slidesPerGroup: 1,
            spaceBetween: 10,
            loop: true,

            navigation: {
                nextEl: '.gallery__button--next',
                prevEl: '.gallery__button--prev',
            },
        });
    }
}