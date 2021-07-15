  
import { Swiper, Navigation } from 'swiper';

Swiper.use([Navigation]);

export default function introSlider() {
    const elements = Array.from(document.querySelectorAll('.js-intro-slider'));

    elements.forEach(element => {
        const container = element.querySelector('.swiper-container');

        new Swiper(container, {
            slidesPerView: 'auto',
            watchOverflow: true,
            speed: 700,
        })
    })
}