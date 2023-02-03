const slides = document.querySelectorAll(".slides img");
const prev = document.querySelector(".prev");
const next = document.querySelector(".next");
const dots = document.querySelectorAll(".dot");

let index = 0;

const showSlide = (n) => {
    slides[index].style.visibility = "hidden";
    dots[index].classList.remove("active");
    index = (n + slides.length) % slides.length;
    slides[index].style.visibility = "visible";
    dots[index].classList.add("active");
};

prev.addEventListener("click", () => showSlide(index - 1));
next.addEventListener("click", () => showSlide(index + 1));

dots.forEach((dot, i) => {
    dot.addEventListener("click", () => showSlide(i));
});

slides[0].style.visibility = "visible";
dots[0].classList.add("active");
