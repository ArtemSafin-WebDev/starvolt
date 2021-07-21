
import { Swiper, Navigation } from 'swiper';

Swiper.use([Navigation]);

export default function otherNews() {
    const elements = Array.from(document.querySelectorAll('.js-article-other-news'));

    if (!window.matchMedia('(max-width: 640px)').matches) return;
   

    elements.forEach(element => {
        const container = element.querySelector('.swiper-container');

        new Swiper(container, {
            slidesPerView: 'auto',
            watchOverflow: true,
            spaceBetween: 25
        });
    });
}
