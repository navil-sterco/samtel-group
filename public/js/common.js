document.addEventListener("DOMContentLoaded", function () {
  /* =========================================
       ELEMENTS
    ========================================= */

  const header = document.querySelector(".header");

  const hamburger = document.querySelector(".hamburger");
  const drawer = document.querySelector(".other-links-drawer");
  const drawerList = drawer?.querySelector(":scope > ul");

  const megaTrigger = document.querySelector(".mega-parent");
  const megaMenu = document.querySelector(".mega-menu");

  const overlay = document.querySelector(".nav-overlay");

  const mediaToggles = document.querySelectorAll(".media-toggle");

  let megaTimer = null;

  /* =========================================
       INITIAL STATE
    ========================================= */

  // Drawer CLOSED
  drawer?.classList.remove("open");

  // UL hidden
  drawerList?.classList.remove("drawer-visible");

  // Hamburger normal
  hamburger?.classList.remove("active");

  // Mega menu closed
  megaTrigger?.classList.remove("active");
  megaMenu?.classList.remove("show");

  // Overlay closed
  overlay?.classList.remove("show");

  /* =========================================
       OVERLAY
    ========================================= */

  function updateOverlay() {
    const drawerOpen = drawer?.classList.contains("open");

    const megaOpen = megaMenu?.classList.contains("show");

    if (drawerOpen || megaOpen) {
      overlay?.classList.add("show");
    } else {
      overlay?.classList.remove("show");
    }
  }

  /* =========================================
       DRAWER OPEN
    ========================================= */

  function openDrawer() {
    // Mega menu close
    clearTimeout(megaTimer);

    megaTrigger?.classList.remove("active");
    megaMenu?.classList.remove("show");

    // Drawer open
    drawer?.classList.add("open");

    // UL reveal
    setTimeout(function () {
      drawerList?.classList.add("drawer-visible");
    }, 100);

    // Hamburger X
    hamburger?.classList.add("active");

    updateOverlay();
  }

  /* =========================================
       DRAWER CLOSE
    ========================================= */

  function closeDrawer() {
    // UL hide first
    drawerList?.classList.remove("drawer-visible");

    // Drawer close
    drawer?.classList.remove("open");

    // Hamburger normal
    hamburger?.classList.remove("active");

    updateOverlay();
  }

  /* =========================================
       HAMBURGER CLICK
    ========================================= */

  hamburger?.addEventListener("click", function (e) {
    e.preventDefault();
    e.stopPropagation();

    if (drawer?.classList.contains("open")) {
      closeDrawer();
    } else {
      openDrawer();
    }
  });

  /* =========================================
       MEGA MENU OPEN
    ========================================= */

  function openMega() {
    clearTimeout(megaTimer);

    // Drawer close
    drawerList?.classList.remove("drawer-visible");
    drawer?.classList.remove("open");
    hamburger?.classList.remove("active");

    // Mega open
    megaTrigger?.classList.add("active");
    megaMenu?.classList.add("show");

    updateOverlay();
  }

  /* =========================================
       MEGA MENU CLOSE
    ========================================= */

  function closeMega() {
    clearTimeout(megaTimer);

    megaTimer = setTimeout(function () {
      megaTrigger?.classList.remove("active");
      megaMenu?.classList.remove("show");

      updateOverlay();
    }, 350);
  }

  /* =========================================
       INDUSTRIES HOVER
    ========================================= */

  if (megaTrigger && megaMenu) {
    megaTrigger.addEventListener("mouseenter", openMega);

    megaTrigger.addEventListener("mouseleave", closeMega);

    megaMenu.addEventListener("mouseenter", function () {
      clearTimeout(megaTimer);
    });

    megaMenu.addEventListener("mouseleave", closeMega);
  }

  /* =========================================
       MEDIA DROPDOWN
       CLICK ONLY
    ========================================= */

  mediaToggles.forEach(function (toggle) {
    toggle.addEventListener("click", function (e) {
      e.preventDefault();
      e.stopPropagation();

      const dropdownWrap = toggle.nextElementSibling;

      if (!dropdownWrap) return;

      const isOpen = toggle.classList.contains("active");

      if (isOpen) {
        toggle.classList.remove("active");

        toggle.setAttribute("aria-expanded", "false");

        dropdownWrap.classList.remove("active");
      } else {
        toggle.classList.add("active");

        toggle.setAttribute("aria-expanded", "true");

        dropdownWrap.classList.add("active");
      }
    });
  });

  /* =========================================
       OVERLAY CLICK
    ========================================= */

  overlay?.addEventListener("click", function () {
    // Drawer close
    drawerList?.classList.remove("drawer-visible");

    drawer?.classList.remove("open");

    hamburger?.classList.remove("active");

    // Mega close
    clearTimeout(megaTimer);

    megaTrigger?.classList.remove("active");
    megaMenu?.classList.remove("show");

    // Overlay
    overlay.classList.remove("show");
  });

  /* =========================================
       ESC KEY
    ========================================= */

  document.addEventListener("keydown", function (e) {
    if (e.key !== "Escape") return;

    // Drawer
    drawerList?.classList.remove("drawer-visible");

    drawer?.classList.remove("open");

    hamburger?.classList.remove("active");

    // Mega
    clearTimeout(megaTimer);

    megaTrigger?.classList.remove("active");
    megaMenu?.classList.remove("show");

    // Overlay
    overlay?.classList.remove("show");
  });

  /* =========================================
       HEADER SCROLL
    ========================================= */

  let lastScrollPosition = window.pageYOffset || 0;

  window.addEventListener("scroll", function () {
    const currentScrollPosition = window.pageYOffset;

    if (currentScrollPosition <= 0) {
      header?.classList.remove("hide-header");

      lastScrollPosition = currentScrollPosition;

      return;
    }

    if (currentScrollPosition > lastScrollPosition) {
      header?.classList.add("hide-header");
    } else {
      header?.classList.remove("hide-header");
    }

    lastScrollPosition = currentScrollPosition;
  });
});





// footer menu
document.addEventListener("DOMContentLoaded", function () {

    const industriesToggle = document.getElementById("industriesToggle");
    const contactToggle = document.getElementById("contactToggle");
    const menuToggle = document.getElementById("menuToggle");

    const industriesPanel = document.getElementById("industriesPanel");
    const contactPanel = document.getElementById("contactPanel");
    const mobileMenu = document.getElementById("mobileMenu");

    const bottomNav = document.querySelector(".mobile-bottom-nav");

    // Get ALL submenu toggles
    const submenuToggles = document.querySelectorAll(".submenu-toggle");


    function closeAllPanels() {

        // Close Industries
        if (industriesPanel) {
            industriesPanel.classList.remove("active");
        }

        // Close Contact
        if (contactPanel) {
            contactPanel.classList.remove("active");
        }

        // Close Mobile Menu
        if (mobileMenu) {
            mobileMenu.classList.remove("active");
        }

        // Remove active buttons safely
        if (industriesToggle) {
            industriesToggle.classList.remove("active-btn");
        }

        if (contactToggle) {
            contactToggle.classList.remove("active-btn");
        }

        if (menuToggle) {
            menuToggle.classList.remove("active-btn");
        }

        if (bottomNav) {
            bottomNav.classList.remove("menu-open");
        }

        // Body
        document.body.classList.remove("mobile-menu-open");
    }


    // INDUSTRIES
    if (industriesToggle) {

        industriesToggle.addEventListener("click", function () {

            const isOpen =
                industriesPanel &&
                industriesPanel.classList.contains("active");

            closeAllPanels();

            if (!isOpen && industriesPanel) {

                industriesPanel.classList.add("active");

                industriesToggle.classList.add("active-btn");
            }

        });
    }


    // CONTACT
    if (contactToggle) {

        contactToggle.addEventListener("click", function () {

            const isOpen =
                contactPanel &&
                contactPanel.classList.contains("active");

            closeAllPanels();

            if (!isOpen && contactPanel) {

                contactPanel.classList.add("active");

                contactToggle.classList.add("active-btn");
            }

        });
    }


    // MOBILE MENU
    if (menuToggle) {

        menuToggle.addEventListener("click", function () {

            const isOpen =
                mobileMenu &&
                mobileMenu.classList.contains("active");

            closeAllPanels();

            if (!isOpen && mobileMenu) {

                mobileMenu.classList.add("active");

                if (bottomNav) {
                    bottomNav.classList.add("menu-open");
                }

                menuToggle.classList.add("active-btn");

                document.body.classList.add(
                    "mobile-menu-open"
                );
            }

        });
    }


    // ALL SUBMENU TOGGLES
submenuToggles.forEach(function (submenuToggle) {

    submenuToggle.addEventListener("click", function () {

        const currentParent = this.closest(".has-submenu");

        if (!currentParent) return;

        // Pehle sabhi open submenu close karo
        document.querySelectorAll(".has-submenu.open").forEach(function (item) {

            if (item !== currentParent) {
                item.classList.remove("open");
            }

        });

        // Current submenu ko open / close karo
        currentParent.classList.toggle("open");

    });

    });


    // ESC KEY
    document.addEventListener("keydown", function (event) {

        if (event.key === "Escape") {

            closeAllPanels();

        }

    });

});
        const contactSwiper = new Swiper(
            ".contact-swiper",
            {

                slidesPerView: 1,

                spaceBetween: 0,

                loop: true,

                speed: 700,

                autoplay: {

                    delay: 3000,

                    disableOnInteraction: false,

                    pauseOnMouseEnter: true

                },

                pagination: {

                    el: ".contact-swiper .swiper-pagination",

                    clickable: true

                },

                navigation: {

                    nextEl: ".contact-next",

                    prevEl: ".contact-prev"

                }

            }
        );

/* =========================================================
      animation
    ========================================================= */

document.addEventListener("DOMContentLoaded", function () {
  const animatedElements = document.querySelectorAll(
    ".fade-up, .fade-down, .fade-left, .fade-right, .zoom-in",
  );

  // Mobile: Disable all animations
  if (window.innerWidth <= 767) {
    animatedElements.forEach((el) => {
      gsap.set(el, {
        opacity: 1,
        x: 0,
        y: 0,
        scale: 1,
      });
    });

    return;
  }

  // Initial state - Desktop only
  animatedElements.forEach((el) => {
    if (el.classList.contains("fade-up")) {
      gsap.set(el, { y: 50, opacity: 0 });
    }

    if (el.classList.contains("fade-down")) {
      gsap.set(el, { y: -50, opacity: 0 });
    }

    if (el.classList.contains("fade-left")) {
      gsap.set(el, { x: -50, opacity: 0 });
    }

    if (el.classList.contains("fade-right")) {
      gsap.set(el, { x: 50, opacity: 0 });
    }

    if (el.classList.contains("zoom-in")) {
      gsap.set(el, { scale: 0.8, opacity: 0 });
    }
  });

  function animateElement(el) {
    const delay = parseFloat(el.dataset.delay) || 0;
    const duration = parseFloat(el.dataset.duration) || 0.8;

    let animation = {
      opacity: 1,
      duration: duration,
      delay: delay,
      ease: "power3.out",
    };

    if (el.classList.contains("fade-up")) {
      animation.y = 0;
    }

    if (el.classList.contains("fade-down")) {
      animation.y = 0;
    }

    if (el.classList.contains("fade-left")) {
      animation.x = 0;
    }

    if (el.classList.contains("fade-right")) {
      animation.x = 0;
    }

    if (el.classList.contains("zoom-in")) {
      animation.scale = 1;
    }

    gsap.to(el, animation);
  }

  // Detect when element enters viewport
  const observer = new IntersectionObserver(
    (entries, observer) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          animateElement(entry.target);

          // Only animate once
          observer.unobserve(entry.target);
        }
      });
    },
    {
      threshold: 0.15,
    },
  );

  animatedElements.forEach((el) => {
    observer.observe(el);
  });
});


// space satellite swiper
document.addEventListener('DOMContentLoaded', function () {

    new Swiper('.spaceSatelliteSwiper', {
        slidesPerView: 1,
        spaceBetween: 0,
        loop: true,
        speed: 800,
        autoplay: {
            delay: 2000,
            disableOnInteraction: false,
        },
    });

});

// infrastructre bottom logo slider
 document.addEventListener("DOMContentLoaded", function () {
    new Swiper(".cus_icon_swiper", {
        slidesPerView: 1,
        spaceBetween: 20,
        loop: true,
        autoplay: {
            delay: 2500,
            disableOnInteraction: false,
        },
        speed: 700
    });
});
