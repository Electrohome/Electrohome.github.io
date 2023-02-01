var scrollButton = document.querySelector('.-togle');
scrollButton.addEventListener('click', function () {
    window.scrollBy({
        top: -3000,
        left: 0,
        behavior: 'smooth'
    });
});
