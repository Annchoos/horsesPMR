$(document).ready(() => {
  let currentSlide = 0;
  let isBusy = false;

  $(".slider-arrow").on("click", (e) => {
    const that = $(e.currentTarget);
    const slideCount = slides.length - 1;

    if (!isBusy) {
      if (that.hasClass("right")) {
        currentSlide += 1;
        if (currentSlide > slideCount) currentSlide = 0;
      } else {
        currentSlide -= 1;
        if (currentSlide < 0) currentSlide = slidesCount;
      }
      isBusy = true;
      $(".slider-image").animate({ opacity: 0 }, 350, () => {
        $(".slider-image").css(
          "background-image",
          "url(" + slides[currentSlide] + ")"
        );
        $(".slider-image").animate({ opacity: 1 }, 350, () => (isBusy = false));
      });
    }
  });
});

const slides = [
  "img/topimg66.jpg",
  "img/topimg77.jpg",
  "img/topimg88.jpg",
  /*'img/slider1.JPG',
    'img/slider2.JPG',
    'img/slider4.JPG'*/
];
