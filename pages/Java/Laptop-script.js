const button = document.querySelector(".type-6 a");

button.addEventListener("touchstart", function () {
    button.classList.add("active");
});

button.addEventListener("touchend", function () {
    button.classList.remove("active");
});