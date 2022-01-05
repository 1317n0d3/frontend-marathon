const slides = document.querySelectorAll(".slide");

slides.forEach((slide) => {
  slide.addEventListener("click", () => {
    resetActiveClasses();

    slide.classList.add("active");
  });
});

function resetActiveClasses() {
  slides.forEach((slide) => {
    slide.classList.remove("active");
  });
}
