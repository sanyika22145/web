const sliderImages = document.querySelectorAll(".slider-image");
const sliderButtons = document.querySelectorAll(".slider-btn");
const contactForm = document.querySelector(".contact-form");

let currentIndex = 0;

const showImage = (index) => {
  sliderImages.forEach((image, i) => {
    image.classList.toggle("active", i === index);
  });
};

const step = (direction) => {
  if (!sliderImages.length) {
    return;
  }

  currentIndex =
    direction === "next"
      ? (currentIndex + 1) % sliderImages.length
      : (currentIndex - 1 + sliderImages.length) % sliderImages.length;

  showImage(currentIndex);
};

sliderButtons.forEach((button) => {
  button.addEventListener("click", () => {
    step(button.dataset.direction);
  });
});

if (sliderImages.length) {
  showImage(currentIndex);
  if (sliderImages.length > 1) {
    setInterval(() => {
      step("next");
    }, 6000);
  }
}

if (contactForm) {
  contactForm.addEventListener("submit", (event) => {
    event.preventDefault();
    alert("Sikeres elküldött üzenet!");
    contactForm.reset();
  });
}
