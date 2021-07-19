import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
gsap.registerPlugin(ScrollTrigger);

export default function productTabs() {
    const elements = Array.from(document.querySelectorAll('.js-product-tabs'));

    elements.forEach(element => {
        if (window.matchMedia('(max-width: 640px)').matches) {
            const tabsLinks = Array.from(element.querySelectorAll('.product__tabs-nav-link'));
            const tabItems = Array.from(element.querySelectorAll('.product__tab-item'));

            tabItems.forEach((item, itemIndex) => {
                item.prepend(tabsLinks[itemIndex]);
            });

            const SPEED = 0.5;

            const openAccordion = element => {

                console.log('Opening accordion')
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

            const elements = Array.from(element.querySelectorAll('.product__tab-item'));

            elements.forEach(element => {
                const btn = element.querySelector('.product__tabs-nav-link');
                const content = element.querySelector('.product__tab-item-content');

                btn.addEventListener('click', event => {
                    event.preventDefault();

                    if (element.hasAttribute('data-close-other')) {
                        elements.forEach(otherElement => {
                            if (otherElement !== element) {
                                if (otherElement.classList.contains('active')) {
                                    const content = otherElement.querySelector('.product__tab-item-content');
                                    closeAccordion(content);
                                    otherElement.classList.remove('active');
                                }
                            }
                        });
                    }

                    if (element.classList.contains('active')) {
                        closeAccordion(content);
                    } else {
                        openAccordion(content);
                    }
                    element.classList.toggle('active');
                });
            });
        } else {
            const tabsLinks = Array.from(element.querySelectorAll('.product__tabs-nav-link'));
            const tabItems = Array.from(element.querySelectorAll('.product__tab-item'));

            const setActiveLink = index => {
                tabsLinks.forEach(link => {
                    link.classList.remove('active');
                });
                tabItems.forEach(item => {
                    item.classList.remove('active');
                });

                tabItems[index].classList.add('active');
                tabsLinks[index].classList.add('active');
            };
            setActiveLink(0);

            tabsLinks.forEach((link, linkIndex) => {
                link.addEventListener('click', event => {
                    event.preventDefault();

                    setActiveLink(linkIndex);
                });
            });
        }
    });
}
