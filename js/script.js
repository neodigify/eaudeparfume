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
  pagination: {
    el: ".swiper-pagination",
    clickable: true,
  },
  navigation: {
    nextEl: ".swiper-button-next",
    prevEl: ".swiper-button-prev",
  },
});

//category
const categorySwiper = new Swiper(".categorySwiper", {
  loop: true,
  spaceBetween: 16,
  grabCursor: true,
  slidesPerView: 2.8,
  breakpoints: {
    400: { slidesPerView: 3.5, spaceBetween: 20 },
    480: { slidesPerView: 4.1, spaceBetween: 20 },
    600: { slidesPerView: 4.5, spaceBetween: 20 },
    650: { slidesPerView: 5.5, spaceBetween: 20 },
    768: { slidesPerView: 5, spaceBetween: 24 },
    850: { slidesPerView: 6, spaceBetween: 24 },
    1000: { slidesPerView: 7, spaceBetween: 28 },
    1150: { slidesPerView: 8, spaceBetween: 28 },
  },
});

//best-seller
const swiper = new Swiper(".swiperProduct", {
  loop: true,
  grabCursor: true,
  // autoplay: { delay: 2800, disableOnInteraction: false },
  speed: 500,
  slidesPerView: 1.5,
  spaceBetween: 16,
  // pagination: { el: ".swiper-pagination", clickable: true },
  // navigation: {
  //   nextEl: ".swiper-button-next",
  //   prevEl: ".swiper-button-prev",
  // },
  breakpoints: {
    450: { slidesPerView: 2.1, spaceBetween: 20 },
    500: { slidesPerView: 2.4, spaceBetween: 20 },
    767: { slidesPerView: 3, spaceBetween: 20 },
    860: { slidesPerView: 4, spaceBetween: 24 },
    1024: { slidesPerView: 5, spaceBetween: 28 },
  },
});
//brand-logo
const brandSwiper = new Swiper(".brandSwiper", {
  loop: true,
  speed: 500,
  grabCursor: true,
  slidesPerView: 2, // mobile default
  spaceBetween: 20,
  breakpoints: {
    450: { slidesPerView: 3, spaceBetween: 20 },
    650: { slidesPerView: 4, spaceBetween: 20 },
    768: { slidesPerView: 5, spaceBetween: 40 },
    1024: { slidesPerView: 6, spaceBetween: 60 }, // desktop
  },
});

//promo-card

const promoSwiper = new Swiper(".promoSwiper", {
  loop: true,
  speed: 500,
  grabCursor: true,
  spaceBetween: 20,
  slidesPerView: 1.2,
  // mobile
  breakpoints: {
    450: { slidesPerView: 1.4, spaceBetween: 20 },
    650: { slidesPerView: 1.8, spaceBetween: 20 },
    767: { slidesPerView: 2, spaceBetween: 20 },
    1024: { slidesPerView: 3, spaceBetween: 40 },
  },
});

//review
const reviewSwiper = new Swiper(".review-swiper", {
  speed: 500,
  loop: true,
  grabCursor: true,
  spaceBetween: 24,
  slidesPerView: 1,
  breakpoints: {
    767: { slidesPerView: 2, spaceBetween: 24 },
    1024: { slidesPerView: 3, spaceBetween: 28 },
  },
  // render your custom tiny dots into the existing container
  pagination: {
    el: ".review-slider-bullet",
    clickable: true,
    renderBullet: function (index, className) {
      // className includes 'swiper-pagination-bullet' and 'swiper-pagination-bullet-active' when active
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

  // Utility: build a truncated plain-text preview with ellipsis
  function makePreview(text, limit) {
    // Normalize whitespace
    const words = text.trim().replace(/\s+/g, " ").split(" ");
    if (words.length <= limit) return text.trim();
    return words.slice(0, limit).join(" ") + "…";
  }

  // Initialize each review card
  function initReviewCard(card) {
    const textEl = card.querySelector(".review-text");
    const btn = card.querySelector(".see-more");
    if (!textEl || !btn) return;

    // Store the full HTML (to restore formatting like <strong>, <br>, etc.)
    const fullHTML = textEl.innerHTML.trim();
    const plainText = textEl.textContent || textEl.innerText || "";

    const previewText = makePreview(plainText, WORD_LIMIT);

    // If no truncation needed, keep button hidden
    if (plainText.trim().replace(/\s+/g, " ").split(" ").length <= WORD_LIMIT) {
      btn.style.display = "none";
      return;
    }

    // Save for toggling
    textEl.dataset.fullHtml = fullHTML;
    textEl.dataset.previewText = previewText;

    // Set initial truncated (plain text) view
    textEl.textContent = previewText;
    btn.style.display = "inline-block";
    btn.textContent = "Læs mere";
    btn.setAttribute("aria-expanded", "false");
  }

  // Toggle handler (event delegation to cover dynamically added slides too)
  document.addEventListener("click", function (e) {
    const btn = e.target.closest(".see-more");
    if (!btn) return;
    e.preventDefault();

    const card = btn.closest(".review-card");
    const textEl = card && card.querySelector(".review-text");
    if (!textEl) return;

    const expanded = btn.getAttribute("aria-expanded") === "true";

    if (expanded) {
      // Collapse to preview
      textEl.textContent = textEl.dataset.previewText || "";
      btn.textContent = "Læs mere";
      btn.setAttribute("aria-expanded", "false");
    } else {
      // Expand to full HTML
      textEl.innerHTML = textEl.dataset.fullHtml || textEl.innerHTML;
      btn.textContent = "Se mindre";
      btn.setAttribute("aria-expanded", "true");
    }
  });

  // Kick off on DOM ready
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

// Toggle menu open/close
hamburger.addEventListener("click", () => {
  navMenu.classList.toggle("active");
});

// Close menu when clicking a link
menuItems.forEach((item) => {
  item.addEventListener("click", () => {
    navMenu.classList.remove("active");
  });
});



