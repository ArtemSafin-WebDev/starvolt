export default function productCodes() {
    const elements = Array.from(document.querySelectorAll('.js-product-codes'));

    elements.forEach(element => {
        const btn = element.querySelector('.product__codes-show-all');
        const originalText = btn.textContent;

        let open = false;
        btn.addEventListener('click', event => {
            event.preventDefault();
            if (open) {
                element.classList.remove('active');
                btn.textContent = originalText;
                open = false;
            } else {
                element.classList.add('active');
                btn.textContent = 'Скрыть'
                open = true;
            }
            
        })
    })
}