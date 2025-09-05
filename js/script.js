let mobileSwiperHeader;
//top-bar
function initSwiper() {
  if (window.innerWidth <= 991 && !mobileSwiperHeader) {
    mobileSwiperHeader = new Swiper(".mobile-swiper-top-bar", {
      direction: "vertical",
      slidesPerView: 1,
      loop: true,
      grabCursor: true,
      autoplay: {
        delay: 2000,
        disableOnInteraction: false,
      },
    });
  } else if (window.innerWidth > 991 && mobileSwiperHeader) {
    mobileSwiperHeader.destroy(true, true);
    mobileSwiperHeader = null;
  }
}

window.addEventListener("load", initSwiper);
window.addEventListener("resize", initSwiper);

//mobile hero
const mobileSwiper = new Swiper(".mobile-hero-swiper", {
  loop: true,
  grabCursor: true,
  spaceBetween: 20,
  slidesPerView: 1,
  breakpoints: {
    550: { slidesPerView: 1.3, spaceBetween: 5 },
    767: { slidesPerView: 1.5, spaceBetween: 5 },
  },
  autoplay: {
    delay: 5000,
    disableOnInteraction: false,
  },
});

//category
const categorySwiper = new Swiper(".categorySwiper", {
  loop: false,
  spaceBetween: 5,
  grabCursor: true,
  slidesPerView: 3.3,
  breakpoints: {
    545: { slidesPerView: 4.3, spaceBetween: 5 },
    // 480: { slidesPerView: 4.1, spaceBetween: 5 },
    // 600: { slidesPerView: 3.5, spaceBetween: 5 },
    // 650: { slidesPerView: 4.5, spaceBetween: 5 },
    768: { slidesPerView: 6.3, spaceBetween: 5 },
    850: { slidesPerView: 6.5, spaceBetween: 20 },
    1000: { slidesPerView: 6.8, spaceBetween: 20 },
    1100: { slidesPerView: 7, spaceBetween: 20 },
    1300: { slidesPerView: 8, spaceBetween: 20 },
  },
});

//best-seller
const swiper = new Swiper(".swiperProduct", {
  loop: false,
  grabCursor: true,
  speed: 500,
  slidesPerView: 1.5,
  spaceBetween: 16,

  breakpoints: {
    380: { slidesPerView: 1.8, spaceBetween: 20 },
    450: { slidesPerView: 2.1, spaceBetween: 20 },
    500: { slidesPerView: 2.4, spaceBetween: 20 },
    580: { slidesPerView: 2.7, spaceBetween: 20 },
    650: { slidesPerView: 3, spaceBetween: 20 },
    730: { slidesPerView: 3.4, spaceBetween: 20 },
    800: { slidesPerView: 3.5, spaceBetween: 20 },
    860: { slidesPerView: 4, spaceBetween: 24 },
    1024: { slidesPerView: 5, spaceBetween: 28 },
    1200: { slidesPerView: 5.5, spaceBetween: 28 },
    1350: { slidesPerView: 6, spaceBetween: 28 },
  },
});
//brand-logo
const brandSwiper = new Swiper(".brandSwiper", {
  loop: true,
  speed: 3500,
  grabCursor: true,
  centeredSlides: true,
  autoplay: true,
  autoplay: {
    delay: 0,
    disableOnInteraction: true,
    pauseOnMouseEnter: true,
  },
  slidesPerView: 2, // mobile default
  spaceBetween: 20,
  breakpoints: {
    450: { slidesPerView: 3, spaceBetween: 20 },
    650: { slidesPerView: 4, spaceBetween: 20 },
    768: { slidesPerView: 5, spaceBetween: 40 },
    1024: { slidesPerView: 6, spaceBetween: 60 }, // desktop
  },
});

//toggle active

document.querySelectorAll(".brandSwiper .swiper-wrapper").forEach((w) => {
  w.addEventListener("pointerenter", () => w.classList.add("active"));
  w.addEventListener("pointerleave", () => w.classList.remove("active"));
});

//promo-card
let promoSwiper;

function initPromoSwiper() {
  if (window.innerWidth <= 991 && !promoSwiper) {
    promoSwiper = new Swiper(".promoSwiper", {
      loop: false,
      speed: 500,
      grabCursor: true,
      spaceBetween: 20,
      slidesPerView: 1,
      breakpoints: {
        370: { slidesPerView: 1.2, spaceBetween: 20 },
        450: { slidesPerView: 1.4, spaceBetween: 20 },
        500: { slidesPerView: 1.6, spaceBetween: 20 },
        560: { slidesPerView: 1.8, spaceBetween: 20 },
        650: { slidesPerView: 2, spaceBetween: 20 },
        720: { slidesPerView: 2.2, spaceBetween: 20 },
        830: { slidesPerView: 2.5, spaceBetween: 20 },
        920: { slidesPerView: 2.7, spaceBetween: 20 },
      },
    });
  } else if (window.innerWidth > 991 && promoSwiper) {
    promoSwiper.destroy(true, true);
    promoSwiper = null;
  }
}

initPromoSwiper();
window.addEventListener("resize", initPromoSwiper);

//review
const reviewSwiper = new Swiper(".review-swiper", {
  speed: 500,
  loop: false,
  grabCursor: true,
  spaceBetween: 24,
  slidesPerView: 1,
  breakpoints: {
    767: { slidesPerView: 2, spaceBetween: 24 },
    1024: { slidesPerView: 3, spaceBetween: 28 },
    1400: { slidesPerView: 3, spaceBetween: 80 },
  },

  pagination: {
    el: ".review-slider-bullet",
    clickable: true,
    renderBullet: function (index, className) {
      return (
        '<span class="slider-button slider-buttton-inactive ' +
        className +
        '"></span>'
      );
    },
  },
});

//see more

(function () {
  // how many words to show initially
  const WORD_LIMIT = 15;

  function makePreview(text, limit) {
    const words = text.trim().replace(/\s+/g, " ").split(" ");
    if (words.length <= limit) return text.trim();
    return words.slice(0, limit).join(" ") + "…";
  }

  function initReviewCard(card) {
    const textEl = card.querySelector(".review-text");
    const btn = card.querySelector(".see-more");
    if (!textEl || !btn) return;

    const fullHTML = textEl.innerHTML.trim();
    const plainText = textEl.textContent || textEl.innerText || "";

    const previewText = makePreview(plainText, WORD_LIMIT);

    if (plainText.trim().replace(/\s+/g, " ").split(" ").length <= WORD_LIMIT) {
      btn.style.display = "none";
      return;
    }

    textEl.dataset.fullHtml = fullHTML;
    textEl.dataset.previewText = previewText;

    textEl.textContent = previewText;
    btn.style.display = "inline-block";
    btn.textContent = "Læs mere";
    btn.setAttribute("aria-expanded", "false");
  }

  document.addEventListener("click", function (e) {
    const btn = e.target.closest(".see-more");
    if (!btn) return;
    e.preventDefault();

    const card = btn.closest(".review-card");
    const textEl = card && card.querySelector(".review-text");
    if (!textEl) return;

    const expanded = btn.getAttribute("aria-expanded") === "true";

    if (expanded) {
      textEl.textContent = textEl.dataset.previewText || "";
      btn.textContent = "Læs mere";
      btn.setAttribute("aria-expanded", "false");
    } else {
      textEl.innerHTML = textEl.dataset.fullHtml || textEl.innerHTML;
      btn.textContent = "Se mindre";
      btn.setAttribute("aria-expanded", "true");
    }
  });

  document.addEventListener("DOMContentLoaded", function () {
    document.querySelectorAll(".review-card").forEach(initReviewCard);
  });
})();

//details show more
document.addEventListener("DOMContentLoaded", () => {
  const wrapper = document.querySelector(".details-div-wrapper");
  const button = document.querySelector(".show-more-card");

  button.addEventListener("click", (e) => {
    e.preventDefault();
    wrapper.classList.toggle("show-all");

    // Change button text
    if (wrapper.classList.contains("show-all")) {
      button.textContent = "Vis mindre"; // Show Less
    } else {
      button.textContent = "Læs mere"; // Show More
    }
  });
});

//service
// init only for mobile
let serviceSwiper;

function initServiceSwiper() {
  if (window.innerWidth <= 991 && !serviceSwiper) {
    serviceSwiper = new Swiper(".services-swiper", {
      direction: "vertical",
      slidesPerView: 1,
      spaceBetween: 20,
      loop: true,
      autoHeight: true,
      autoplay: {
        delay: 2500,
        disableOnInteraction: false,
      },
    });
  } else if (window.innerWidth > 991 && serviceSwiper) {
    serviceSwiper.destroy(true, true);
    serviceSwiper = null;
  }
}

initServiceSwiper();
window.addEventListener("resize", initServiceSwiper);

//hambergur
const hamburger = document.querySelector(".hamburger-menu");
const navMenu = document.querySelector(".nav-menu-container");
const menuItems = document.querySelectorAll(".menu-item");

hamburger.addEventListener("click", () => {
  navMenu.classList.toggle("active");
});

menuItems.forEach((item) => {
  item.addEventListener("click", () => {
    navMenu.classList.remove("active");
  });
});
