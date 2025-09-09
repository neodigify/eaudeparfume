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
    450: { slidesPerView: 1.2, spaceBetween: 20 },
    550: { slidesPerView: 1.5, spaceBetween: 20 },
    650: { slidesPerView: 1.7, spaceBetween: 20 },
    767: { slidesPerView: 1.8, spaceBetween: 20 },
    800: { slidesPerView: 2, spaceBetween: 20 },
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

// details page slider

// accordion
const accordions = document.querySelectorAll(".mobile .accordion-item");

accordions.forEach((item) => {
  const header = item.querySelector(".accordion-header");

  header.addEventListener("click", () => {
    // Close all other accordions
    accordions.forEach((i) => {
      if (i !== item) {
        i.classList.remove("active");
      }
    });

    // Toggle current accordion
    item.classList.toggle("active");
  });
});

document.addEventListener("DOMContentLoaded", function () {
  // Mobile product card slider
  const mobileDetailsSwiper = new Swiper(".product-card-slider-mobile", {
    loop: false,
    centeredSlides: true,
    slidesPerView: 1,
    spaceBetween: 10,
    speed: 500,
    pagination: {
      el: ".product-card-pagination-mobile",
      clickable: true,
    },
  });

  /* Mobile Modal*/
  const mobileModalEl = document.getElementById("mobileImgModal");
  const mobileModalClose = document.getElementById("mobileImgModalClose");

  const mobileModalSwiper = new Swiper(".mobile-modal-gallery", {
    loop: false,
    speed: 350,
    spaceBetween: 15,
    slidesPerView: 1,
    centeredSlides: true,
    navigation: {
      nextEl: ".mobile-modal-gallery .swiper-button-next",
      prevEl: ".mobile-modal-gallery .swiper-button-prev",
    },
    pagination: {
      el: ".mobile-modal-gallery .swiper-pagination",
      clickable: true,
    },
    keyboard: { enabled: true },
    observer: true,
    observeParents: true,
  });

  function rebuildMobileModalFromCard() {
    const wrapper = document.querySelector(
      ".mobile-modal-gallery .swiper-wrapper"
    );
    if (!wrapper) return;

    const imgs = document.querySelectorAll(
      ".product-card-slider-mobile .swiper-slide img"
    );

    wrapper.innerHTML = "";
    imgs.forEach((img) => {
      const src =
        img.getAttribute("data-full") ||
        img.getAttribute("data-src") ||
        img.src;
      const slide = document.createElement("div");
      slide.className = "swiper-slide";
      slide.innerHTML = `<img class="mobile-modal-image" src="${src}" alt="">`;
      wrapper.appendChild(slide);
    });

    mobileModalSwiper.update();
  }

  function openMobileModalAt(index) {
    rebuildMobileModalFromCard();
    // show modal
    document.body.classList.add("modal-open"); // <-- add this
    mobileModalEl.setAttribute("aria-hidden", "false");
    document.body.style.overflow = "hidden";

    // go to same image
    const max = mobileModalSwiper.slides.length - 1;
    const safeIndex = Math.max(0, Math.min(index, max));
    mobileModalSwiper.slideTo(safeIndex, 0);
    setTimeout(() => mobileModalSwiper.update(), 0);
  }
  function closeMobileModal() {
    mobileModalEl.setAttribute("aria-hidden", "true");
    document.body.style.overflow = "";
    document.body.classList.remove("modal-open");
  }

  // Open modal
  mobileDetailsSwiper.on("tap", () =>
    openMobileModalAt(mobileDetailsSwiper.activeIndex)
  );
  document
    .querySelectorAll(".product-card-slider-mobile .swiper-slide img")
    .forEach((img) => {
      img.addEventListener("click", () =>
        openMobileModalAt(mobileDetailsSwiper.activeIndex)
      );
      img.setAttribute("draggable", "false");
    });

  // Close modal
  mobileModalClose.addEventListener("click", closeMobileModal);
  mobileModalEl.addEventListener("click", (e) => {
    if (e.target === mobileModalEl) closeMobileModal();
  });
  document.addEventListener("keydown", (e) => {
    if (e.key === "Escape") closeMobileModal();
  });

  const stop = (e) => e.stopPropagation();
  document
    .querySelector(".product-card-badge-mobile")
    ?.addEventListener("click", stop);
  document
    .querySelector(".product-card-wishlist-mobile")
    ?.addEventListener("click", stop);
});

// tab
const tabButtons = document.querySelectorAll(".tab-btn");
const tabContents = document.querySelectorAll(".tab-content");

tabButtons.forEach((btn) => {
  btn.addEventListener("click", () => {
    tabContents.forEach((content) => (content.style.display = "none"));

    tabButtons.forEach((button) => button.classList.remove("active"));

    const tabId = btn.getAttribute("data-tab");
    document.getElementById(tabId).style.display = "block";

    btn.classList.add("active");
  });
});

if (tabButtons.length > 0) {
  tabButtons[0].click();
}

// thumb-slider
document.addEventListener("DOMContentLoaded", function () {
  // --- thumbs ---
  const galleryThumbs = new Swiper(".gallery-thumbs", {
    direction: "vertical",
    spaceBetween: 10,
    slidesPerView: 3,
    mousewheel: true,
    loop: false,
    watchSlidesProgress: true,
    slideToClickedSlide: true,
    freeMode: true,
    observer: true,
    observeParents: true,
  });

  // --- main ---
  const galleryMain = new Swiper(".gallery-main", {
    direction: "horizontal",
    spaceBetween: 10,
    loop: false,
    speed: 500,
    thumbs: { swiper: galleryThumbs },
    observer: true,
    observeParents: true,
    // on: {
    //   slideChange() {
    //     galleryThumbs.slideTo(galleryMain.activeIndex);
    //   },
    // },
    on: {
      slideChange() {
        const idx = galleryMain.activeIndex;
        galleryThumbs.slideTo(idx - 1);
      },
    },
  });

  // modal slider
  const modal = document.getElementById("imgModal");
  const modalClose = document.getElementById("imgModalClose");

  const modalSwiper = new Swiper(".modal-gallery", {
    loop: false,
    speed: 1000,
    spaceBetween: 0,
    slidesPerView: 1,
    centeredSlides: true,
    navigation: {
      nextEl: ".modal-gallery .swiper-button-next",
      prevEl: ".modal-gallery .swiper-button-prev",
    },
    pagination: {
      el: ".modal-gallery .swiper-pagination",
      clickable: true,
    },
    keyboard: { enabled: true },
    observer: true,
    observeParents: true,
  });

  // Build modal slides dynamically from main images
  function rebuildPcModalFromMain() {
    const wrapper = document.querySelector(".modal-gallery .swiper-wrapper");
    if (!wrapper) return;
    const imgs = document.querySelectorAll(".gallery-main .main-image");
    wrapper.innerHTML = "";
    imgs.forEach((img) => {
      const src = img.getAttribute("data-full") || img.src;
      const slide = document.createElement("div");
      slide.className = "swiper-slide";
      slide.innerHTML = `<img class="modal-image" src="${src}" alt="">`;
      wrapper.appendChild(slide);
    });
    modalSwiper.update();
  }
  function openModalAt(index) {
    rebuildPcModalFromMain();
    modal.setAttribute("aria-hidden", "false");
    document.body.style.overflow = "hidden";
    modalSwiper.slideTo(index, 0);
    // ensure layout after show
    setTimeout(() => modalSwiper.update(), 0);
  }

  function closeModal() {
    modal.setAttribute("aria-hidden", "true");
    document.body.style.overflow = "";

    const idx = modalSwiper.activeIndex;
    galleryMain.slideTo(idx, 0);
    galleryThumbs.slideTo(idx);
  }

  document.querySelectorAll(".gallery-main .main-image").forEach((img) => {
    img.addEventListener("click", () => openModalAt(galleryMain.activeIndex));
    img.setAttribute("draggable", "false");
  });

  modalClose.addEventListener("click", closeModal);
  modal.addEventListener("click", (e) => {
    if (e.target === modal) closeModal();
  });
  document.addEventListener("keydown", (e) => {
    if (e.key === "Escape") closeModal();
  });

  galleryThumbs.on("click", (swiper) => {
    const idx = swiper.clickedIndex;
    if (typeof idx === "number" && idx >= 0) {
      galleryMain.slideTo(idx);
    }
  });
  document.querySelectorAll(".gallery-thumbs .thumb-img").forEach((btn, i) => {
    btn.addEventListener("click", (e) => {
      e.preventDefault();
      e.stopPropagation();
      galleryMain.slideTo(i);
    });
  });

  const thumbSlides = document.querySelectorAll(
    ".gallery-thumbs .swiper-slide"
  );
  thumbSlides.forEach((slide, i) => {
    slide.addEventListener("mouseenter", () => galleryMain.slideTo(i, 0));
    slide.addEventListener("focusin", () => galleryMain.slideTo(i, 0));
  });

  galleryThumbs.on("touchStart", () => galleryMain.setTransition(0));
});
