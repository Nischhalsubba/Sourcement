const modelOpeners = document.querySelectorAll('.model_open');
const modal = document.querySelector('.model');
const closeButton = document.querySelector('#btn_close');

if (modal && closeButton) {
    const body = modal.querySelector('.model_content p');
    const originalText = body?.textContent ?? '';
    let previousFocus = null;

    modal.setAttribute('role', 'dialog');
    modal.setAttribute('aria-label', 'Product demonstration');
    closeButton.setAttribute('role', 'button');
    closeButton.setAttribute('tabindex', '0');
    closeButton.setAttribute('aria-label', 'Close product demonstration');

    function setModalContent(raw) {
        if (!body) return;

        const value = String(raw ?? '');
        body.replaceChildren();

        // Only the documented YouTube product demo may be embedded. Do not
        // inject arbitrary HTML from data-content into the live document.
        const candidate = new DOMParser().parseFromString(value, 'text/html').querySelector('iframe');
        let embedUrl;
        try {
            embedUrl = new URL(candidate?.getAttribute('src') ?? '');
        } catch {
            embedUrl = null;
        }

        if (
            embedUrl?.protocol === 'https:' &&
            ['www.youtube.com', 'www.youtube-nocookie.com'].includes(embedUrl.hostname) &&
            embedUrl.pathname.startsWith('/embed/') && /^[A-Za-z0-9_-]+$/.test(embedUrl.pathname.slice(7))
        ) {
            const iframe = document.createElement('iframe');
            iframe.src = embedUrl.href;
            iframe.title = 'Sourcement product demonstration';
            iframe.width = '100%';
            iframe.height = '100%';
            iframe.allow = 'accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture';
            iframe.allowFullscreen = true;
            iframe.referrerPolicy = 'strict-origin-when-cross-origin';
            body.append(iframe);
        } else {
            body.textContent = value;
        }
    }

    function closeModal() {
        modal.style.display = 'none';
        if (body) body.textContent = originalText;
        previousFocus?.focus();
    }

    modelOpeners.forEach((opener) => {
        opener.addEventListener('click', (event) => {
            event.preventDefault();
            previousFocus = document.activeElement;
            setModalContent(opener.getAttribute('data-content'));
            modal.style.display = 'block';
            closeButton.focus();
        });
    });

    closeButton.addEventListener('click', closeModal);
    closeButton.addEventListener('keydown', (event) => {
        if (event.key === 'Enter' || event.key === ' ') {
            event.preventDefault();
            closeModal();
        }
    });
    modal.addEventListener('click', (event) => {
        if (event.target === modal) closeModal();
    });
    document.addEventListener('keydown', (event) => {
        if (event.key === 'Escape' && modal.style.display === 'block') closeModal();
    });
}
