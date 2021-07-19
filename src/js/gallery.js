import { Swiper, Thumbs, Navigation } from 'swiper';

Swiper.use([Thumbs, Navigation]);

export default function gallery() {
    const elements = Array.from(document.querySelectorAll('.js-product-gallery'));

    elements.forEach(element => {
        const mainContainer = element.querySelector('.product__gallery-main-slider .swiper-container');
        const thumbsContainer = element.querySelector('.product__gallery-thumbs-slider .swiper-container');
        const links = Array.from(element.querySelectorAll('.product__gallery-thumbs-slider-card'));

        const mainOptions = {
            slidesPerView: 1,
            spaceBetween: 5,
            watchOverflow: true,
            thumbs: {},
            speed: 700
        };

        const mainSlider = new Swiper(mainContainer, mainOptions);

        if (!window.matchMedia('(max-width: 640px)').matches) {
            links.forEach((link, linkIndex) => {
                link.addEventListener('click', event => {
                    event.preventDefault();

                    mainSlider.slideTo(linkIndex);
                });
            });
        }
    });
}
