window.addEventListener('scroll', function () {
    const header = document.querySelector('nav');
    const banner = 500;
    header.classList.toggle("sticky", window.scrollY > 0);
    header.classList.toggle("fixed", window.scrollY > (banner - (header.clientHeight / 2)));
});