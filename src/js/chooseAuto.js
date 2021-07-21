import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
gsap.registerPlugin(ScrollTrigger);
import { clearAllBodyScrollLocks, disableBodyScroll } from 'body-scroll-lock';

export default function chooseAuto() {
    const btn = document.querySelector('.search-panel__choose-auto');

    const filters = document.querySelector('.home-filters');

    const closeBtn = document.querySelector('.home-filters__controls-close')

    if (!btn || !filters) return;

    let open = false;

    const openFilters = () => {
        if (open) return;
        document.body.classList.add('card-filters-open');
        disableBodyScroll(filters);
        open = true;
    };

    const closeFilters = () => {
        if (!open) return;
        document.body.classList.remove('card-filters-open');
        clearAllBodyScrollLocks();
        open = false;
    };

    btn.addEventListener('click', event => {
        event.preventDefault();

        if (open) {
            closeFilters();
        } else {
            openFilters();
        }
    });

    closeBtn.addEventListener('click', event => {
        event.preventDefault();
        closeFilters();
    })
}
