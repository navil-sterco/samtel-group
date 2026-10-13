document.addEventListener("DOMContentLoaded", function () {
  // ==========================================
  // 1. GALLERY MODAL SECTION
  // ==========================================

  const modal = document.getElementById("galleryModal");
  const cards = document.querySelectorAll(".gallery-card");

  if (modal || cards.length > 0) {
    const mediaHolder = document.getElementById("modalMediaHolder");
    const modalDesc = document.getElementById("modalDescription");
    const navContainer = document.getElementById("modalNavContainer");
    const closeBtn = document.getElementById("closeModalBtn");

    let activeCardData = {
      media: [],
      description: "",
      currentIndex: 0,
    };

    cards.forEach((card) => {
      card.addEventListener("click", function () {
        const mediaAttr = this.getAttribute("data-media");
        const descAttr = this.getAttribute("data-desc");

        activeCardData.media = mediaAttr
          ? mediaAttr.split(",").map((item) => item.trim())
          : [];
        activeCardData.description = descAttr || "";
        activeCardData.currentIndex = 0;

        if (navContainer) {
          navContainer.style.display =
            activeCardData.media.length <= 1 ? "none" : "flex";
        }

        updateModalContent();
        if (modal) modal.classList.add("active");
      });
    });

    const navButtons = document.querySelectorAll(".nav-btn");
    if (navButtons.length > 0) {
      navButtons.forEach((btn) => {
        btn.addEventListener("click", function () {
          const direction = parseInt(this.getAttribute("data-dir"));
          changeImage(direction);
        });
      });
    }

    if (closeBtn) closeBtn.addEventListener("click", closeModal);
    if (modal) {
      modal.addEventListener("click", (e) => {
        if (e.target === modal) closeModal();
      });
    }

    function closeModal() {
      if (mediaHolder) mediaHolder.innerHTML = "";
      if (modal) modal.classList.remove("active");
    }

    function changeImage(direction) {
      if (activeCardData.media.length === 0) return;
      activeCardData.currentIndex += direction;

      if (activeCardData.currentIndex >= activeCardData.media.length) {
        activeCardData.currentIndex = 0;
      } else if (activeCardData.currentIndex < 0) {
        activeCardData.currentIndex = activeCardData.media.length - 1;
      }
      updateModalContent();
    }

    function updateModalContent() {
      if (!mediaHolder || activeCardData.media.length === 0) return;
      const currentMediaUrl = activeCardData.media[activeCardData.currentIndex];
      const isVideo = /\.(mp4|webm|ogg|mov)(\?.*)?$/i.test(currentMediaUrl);

      if (isVideo) {
        mediaHolder.innerHTML = `<video src="${currentMediaUrl}" controls autoplay loop></video>`;
      } else {
        mediaHolder.innerHTML = `<img src="${currentMediaUrl}" alt="Popup View">`;
      }

      if (modalDesc) modalDesc.innerText = activeCardData.description;
    }

    document.addEventListener("keydown", (e) => {
      if (!modal || !modal.classList.contains("active")) return;
      if (e.key === "ArrowRight") changeImage(1);
      if (e.key === "ArrowLeft") changeImage(-1);
      if (e.key === "Escape") closeModal();
    });
  }

  // ==========================================
  // 2. FIRST SWIPER SLIDER (.swiper)
  // ==========================================
  const swiperElement = document.querySelector(".samheroswiper");

  if (swiperElement) {
    const samtelHeroSlider = new Swiper(".samheroswiper", {
      direction: "horizontal",
      loop: true,
      speed: 600,
      effect: "slide",
      navigation: {
        nextEl: ".custom-next-btn",
        prevEl: ".custom-prev-btn",
      },
      grabCursor: true,
    });
  }

  // ==========================================
  // 3. SECOND SWIPER SLIDER (.adfSwiper)
  // ==========================================
});

/* =========================================================
       FANCYBOX - GALLERY
    ========================================================= */

if (
  typeof Fancybox !== "undefined" &&
  document.querySelector("[data-fancybox='gallery']")
) {
  Fancybox.bind("[data-fancybox='gallery']", {
    Hash: false,

    Thumbs: {
      type: "classic",
      autoStart: false,
    },

    Carousel: {
      infinite: true,

      Toolbar: {
        display: {
          left: ["counter"],
          middle: ["zoomIn", "zoomOut"],
          right: ["close"],
        },
      },
    },
  });
}

/* =========================================================
       FANCYBOX - VIDEO
    ========================================================= */

if (
  typeof Fancybox !== "undefined" &&
  document.querySelector("[data-fancybox='video']")
) {
  Fancybox.bind('[data-fancybox="video"]', {
    type: "iframe",

    iframe: {
      preload: false,
    },
  });
}

gsap.registerPlugin(ScrollTrigger);

function wipeOn() {
  let width = window.innerWidth;
  if (width < 992) return; // Skip animation on small screens

  var wipers = document.querySelectorAll(".image");
  wipers.forEach(function (wipers) {
    var rect = wipers.getBoundingClientRect();
    if (rect.top < window.innerHeight - 200) {
      wipers.classList.add("reveal-image");
    }
  });

  var wipers1 = document.querySelectorAll(".image2");
  wipers1.forEach(function (wipers1) {
    var rect1 = wipers1.getBoundingClientRect();
    if (rect1.top < window.innerHeight - 200) {
      wipers1.classList.add("reveal-image2");
    }
  });

  var wipers2 = document.querySelectorAll(".image3");
  wipers2.forEach(function (wipers2) {
    var rect2 = wipers2.getBoundingClientRect();
    if (rect2.top < window.innerHeight - 200) {
      wipers2.classList.add("reveal-image3");
    }
  });
}

window.addEventListener("load", wipeOn);
window.addEventListener("scroll", wipeOn);
window.addEventListener("resize", wipeOn);
