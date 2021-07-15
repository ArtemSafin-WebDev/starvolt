export default function productsMenu() {
    const elements = Array.from(document.querySelectorAll('.js-products-menu'));

    elements.forEach(element => {
        const btn = element.querySelector('.search-panel__products-menu-btn');

        btn.addEventListener('click', event => {
            event.preventDefault();
            element.classList.toggle('active');
        });

        element.addEventListener('mouseenter', () => {
            element.classList.add('active');
        })
        element.addEventListener('mouseleave', () => {
            element.classList.remove('active');
        })
    })
}