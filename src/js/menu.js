import { clearAllBodyScrollLocks, disableBodyScroll } from 'body-scroll-lock';

export default function menu() {
    const btn = document.querySelector('.page-header__burger');

    const menu = document.querySelector('.page-header__menu');

    if (!btn || !menu) return;

    let menuOpen = false;

    const openMenu = () => {
        if (menuOpen) return;
        document.body.classList.add('mobile-menu-open');
        disableBodyScroll(menu);
        menuOpen = true;
    };
    const closeMenu = () => {
        if (!menuOpen) return;
        document.body.classList.remove('mobile-menu-open');
        clearAllBodyScrollLocks();
        menuOpen = false;
    };

    window.openMenu = openMenu;
    window.closeMenu = closeMenu;

    btn.addEventListener('click', event => {
        event.preventDefault();
        if (!menuOpen) {
            openMenu();
        } else {
            closeMenu();
        }
    });
}
