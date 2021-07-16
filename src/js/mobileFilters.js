import { clearAllBodyScrollLocks, disableBodyScroll } from 'body-scroll-lock';

export default function mobileFilters() {
    const btn = document.querySelector('.catalog__filters-open-btn');
    const filters = document.querySelector('.catalog__filters');
    const closeBtn = document.querySelector('.catalog__filters-close');

    if (!btn || !filters || !closeBtn) return;

    if (!window.matchMedia('(max-width: 640px)').matches) return;

    let open = false;

    const openFilters = () => {
        if (open) return;

        document.body.classList.add('catalog-filters-open');
        disableBodyScroll(filters);
        open = true;
    };
    const closeFilters = () => {
        if (!open) return;

        document.body.classList.remove('catalog-filters-open');
        clearAllBodyScrollLocks();
        open = false;
    };

    btn.addEventListener('click', event => {
        event.preventDefault();
        openFilters();
    });

    closeBtn.addEventListener('click', event => {
        event.preventDefault();
        closeFilters();
    })
}
