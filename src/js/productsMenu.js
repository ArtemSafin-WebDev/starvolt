import { clearAllBodyScrollLocks, disableBodyScroll } from 'body-scroll-lock';

export default function productsMenu() {
    const elements = Array.from(document.querySelectorAll('.js-products-menu'));

    if (window.matchMedia('(max-width: 640px)').matches) {
        elements.forEach(element => {
            const openBtn = element.querySelector('.search-panel__products-menu-btn');
            const menu = element.querySelector('.search-panel__products-menu-dropdown')
            const closeBtn = element.querySelector('.search-panel__products-menu-close');
            let open = false;

            const openMenu = () => {
                if (open) return;

                document.body.classList.add('products-menu-open');
                disableBodyScroll(menu);
                open = true;
            };
            const closeMenu = () => {
                if (!open) return;

                document.body.classList.remove('products-menu-open');
                clearAllBodyScrollLocks();
                open = false;
            };

            openBtn.addEventListener('click', event => {
                event.preventDefault();
                openMenu();
            });

            closeBtn.addEventListener('click', event => {
                event.preventDefault();
                closeMenu();
            });
        });
    } else {
        elements.forEach(element => {
            const btn = element.querySelector('.search-panel__products-menu-btn');

            btn.addEventListener('click', event => {
                event.preventDefault();
                element.classList.toggle('active');
            });

            element.addEventListener('mouseenter', () => {
                element.classList.add('active');
            });
            element.addEventListener('mouseleave', () => {
                element.classList.remove('active');
            });
        });
    }
}
