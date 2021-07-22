import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
gsap.registerPlugin(ScrollTrigger);

export default function searchProducts() {
    const elements = Array.from(document.querySelectorAll('.js-search-products'));

    elements.forEach(element => {
        if (window.matchMedia('(max-width: 640px)').matches) {
            const links = Array.from(element.querySelectorAll('.search-panel__products-menu-tab-nav-link'));
            const tabItems = Array.from(element.querySelectorAll('.search-panel__products-menu-tab-item'));

            tabItems.forEach((item, itemIndex) => {
                item.prepend(links[itemIndex]);
            });

            const SPEED = 0.35;

            const openAccordion = element => {
                gsap.to(element, {
                    height: 'auto',
                    duration: SPEED,
                    onComplete: () => ScrollTrigger.refresh()
                });
            };
            const closeAccordion = element => {
                gsap.to(element, {
                    height: 0,
                    duration: SPEED,
                    onComplete: () => ScrollTrigger.refresh()
                });
            };

            

            tabItems.forEach(element => {
                const btn = element.querySelector('.search-panel__products-menu-tab-nav-link');
                const content = element.querySelector('.search-panel__products-menu-tab-item-content');

                btn.addEventListener('click', event => {
                    event.preventDefault();

                    tabItems.forEach(otherElement => {
                        if (otherElement !== element) {
                            if (otherElement.classList.contains('active')) {
                                const content = otherElement.querySelector('.search-panel__products-menu-tab-item-content');
                                closeAccordion(content);
                                otherElement.classList.remove('active');
                            }
                        }
                    });

                    if (element.classList.contains('active')) {
                        closeAccordion(content);
                    } else {
                        openAccordion(content);
                    }
                    element.classList.toggle('active');
                });
            });
        } else {
            const links = Array.from(element.querySelectorAll('.search-panel__products-menu-tab-nav-link'));
            const tabItems = Array.from(element.querySelectorAll('.search-panel__products-menu-tab-item'));

            const setActiveTab = index => {
                links.forEach(link => {
                    link.classList.remove('active');
                });

                tabItems.forEach(item => {
                    item.classList.remove('active');
                });

                links[index].classList.add('active');
                tabItems[index].classList.add('active');
            };

            setActiveTab(0);

            links.forEach((link, linkIndex) => {
                link.addEventListener('click', event => {
                    event.preventDefault();
                    setActiveTab(linkIndex);
                });
                link.addEventListener('mouseenter', event => {
                    event.preventDefault();
                    setActiveTab(linkIndex);
                });
            });
        }
    });
}
