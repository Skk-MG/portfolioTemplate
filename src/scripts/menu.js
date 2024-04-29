document.addEventListener('astro:page-load', function() {
    let menuLinks = document.querySelectorAll('.menuLink');
    menuLinks.forEach(function(menuLink) {
        if (menuLink.getAttribute('href') === window.location.pathname) {
            menuLink.classList.add('active');
        }
    });
});