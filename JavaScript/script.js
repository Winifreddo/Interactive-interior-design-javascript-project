// section 2 and 5 image animation

const animation = document.querySelectorAll(".animate");
const options = {
  threshold: 0,
  rootMargin: "0px 0px -400px 0px",
};
const animateScroll = new IntersectionObserver(function (
  entries,
  animateScroll
) {
  entries.forEach((entry) => {
    if (!entry.isIntersecting) {
      return;
    } else {
      entry.target.classList.add("appear");
      animateScroll.unobserve(entry.target);
    }
  });
},
options);

animation.forEach((animation) => {
  animateScroll.observe(animation);
});

// section 3 & 7 image carousel

var swiper = new Swiper(".mySwiper", {
  slidesPerView: 4,
  spaceBetween: 30,
  freeMode: true,
  pagination: {
    el: ".swiper-pagination",
    clickable: true,
  },
  breakpoints: {
    1200: {
      slidesPerView: 4,
      spaceBetween: 20,
    },
    800: {
      slidesPerView: 3,
      spaceBetween: 10,
    },
    600: {
      slidesPerView: 2,
      spaceBetween: 5,
    },

    400: {
      slidesPerView: 1,
      spaceBetween: 5,
    },
    375: {
      slidesPerView: 1,
      spaceBetween: 5,
    },
  },
});

// const images = document.getElementById("vase-images");
// const imageSelection = document.getElementById("imageSelection");
// const popup = document.getElementById("popup");
// const info = document.getElementById("info");
// const imageArray = [1, 2, 3, 4];
// const selectedIndex = null;

// imageArray.forEach((x) => {
//   const newImage = document.createElement("img");
//   newImage.src = `./CSS/images/vase-${x}.jpg`;
//   newImage.alt = `vases`;
//   newImage.classList.add(`imgStyle${x}`);
//   newImage.addEventListener("click", (e) => {
//     popup.style.transform = `translatey(0)`;
//     imageSelection.src = `./CSSimages/vase-${x}.jpg`;
//   });
//   images.appendChild(newImage);
// });

// popup.addEventListener("click", (x) => {
//   popup.style.transform = `translatey(-100%)`;
//   popup.src = "";
//   popup.alt = "";
// })
// section 7 image carousel
