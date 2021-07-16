const copyToClipboard = str => {
    const el = document.createElement('textarea');
    el.value = str;
    el.setAttribute('readonly', '');
    el.style.position = 'absolute';
    el.style.left = '-9999px';
    document.body.appendChild(el);
    el.select();
    document.execCommand('copy');
    document.body.removeChild(el);
};



export default function copyCode() {
    document.addEventListener('click', event => {
        if (event.target.matches('.js-copy-code') || event.target.closest('.js-copy-code')) {
            event.preventDefault();
            const btn = event.target.matches('.js-copy-code')
                ? event.target
                : event.target.closest('.js-copy-code');
            const code = btn.dataset.code;
            // console.log('Code', code);

            if (!code) return;

            if (navigator.clipboard) {
                navigator.clipboard.writeText(code).catch(err => {
                    console.error(err);
                });
            } else {
                copyToClipboard(code);
            }
        }
    });
}
