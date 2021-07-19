export default function productTabs() {
    const elements = Array.from(document.querySelectorAll('.js-product-tabs'));

    elements.forEach(element => {
        if (window.matchMedia('(max-width: 640px)').matches) {
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
