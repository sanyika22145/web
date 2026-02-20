const sliderImages = Array.from(document.querySelectorAll(".slider-image"));
const sliderButtons = document.querySelectorAll(".slider-btn");

let currentIndex = 0;

const setActiveImage = (index) => {
  sliderImages.forEach((image, i) => {
    image.classList.toggle("active", i === index);
  });
};

const goToNext = (direction) => {
  if (!sliderImages.length) {
    return;
  }

  const lastIndex = sliderImages.length - 1;
  if (direction === "next") {
    currentIndex = currentIndex === lastIndex ? 0 : currentIndex + 1;
  } else {
    currentIndex = currentIndex === 0 ? lastIndex : currentIndex - 1;
  }
  setActiveImage(currentIndex);
};

sliderButtons.forEach((button) => {
  button.addEventListener("click", () => {
    goToNext(button.dataset.direction);
  });
});

setActiveImage(currentIndex);

if (sliderImages.length > 1) {
  setInterval(() => {
    goToNext("next");
  }, 6000);
}
