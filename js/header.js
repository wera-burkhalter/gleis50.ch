document.addEventListener('DOMContentLoaded', () => {
    const header = document.getElementById('header');
    let lastScrollTop = 0;
    let hasScrolled = false;

    window.addEventListener('scroll', () => {
        let scrollTop = window.pageYOffset || document.documentElement.scrollTop;

        if (scrollTop > 0 && !hasScrolled) {
            header.classList.remove('hidden');
            header.classList.add('headerVisible');
            hasScrolled = true;
        }

        if (scrollTop > lastScrollTop) {
            // Scroll down
            header.classList.add('headerVisible');
        } else if (scrollTop < lastScrollTop && scrollTop > 0) {
            // Scroll up
            header.classList.add('headerVisible');
        } else if (scrollTop === 0) {
            // At the top of the page
            header.classList.remove('headerVisible');
            header.classList.add('hidden');
            hasScrolled = false;
        }

        lastScrollTop = scrollTop <= 0 ? 0 : scrollTop; // For Mobile or negative scrolling
    });
});
