(function ($) {
"use strict";
if (window.innerWidth >= 1024) {
gsap.registerPlugin(ScrollTrigger);

const hVideo = document.querySelector(".video_text");
const pList = document.querySelectorAll(".banner_title > p");
const pEm = document.querySelectorAll(".banner_title > em");
const btn = document.querySelector(".down_btn");
const bannerCaption = document.querySelector(".banner_caption");

// ==========================
// INITIAL STATES
// ==========================
gsap.set(hVideo, {
  y: "100%",
  opacity: 1,
  transformOrigin: "center center",
  force3D: true
});

gsap.set([pList, pEm, btn], {
  y: 50,
  opacity: 0
});

// ==========================
// MAIN SCROLL TIMELINE
// ==========================
const tl = gsap.timeline({
  scrollTrigger: {
    trigger: ".hero_section", // apna section class do
    start: "top top",
    end: "+=200%",
    scrub: true,
    pin: true
  }
});

tl.to(".line-progress", {
    height: "100%",
    ease: "none",
    duration: 1
  }, 0)

  // hVideo moves up with scroll
  .to(hVideo, {
    y: -100,
    ease: "none",
    duration: 1
  }, 0)

  // ==========================
  // MAIN EXIT ANIMATION
  // ==========================
  .to(hVideo, {
    scale: 10,
    opacity: 0,
    ease: "power2.out",
    duration: 1.5,
    force3D: true
  }, 1)

  .to(pList, {
    y: -1000,
    opacity: 0,
    ease: "power2.out",
    duration: 1,
    force3D: true
  }, 1)

  .to(pEm, {
    y: -1000,
    opacity: 0,
    ease: "power2.out",
    duration: 1,
    force3D: true
  }, 1)

  .to(btn, {
    y: -100,
    opacity: 0,
    ease: "power1.out",
    duration: 1,
    force3D: true
  }, 1);

// ==========================
// INTRO ANIMATION
// ==========================
const introTl = gsap.timeline();

introTl
  .to(hVideo, {
    y: "0%",
    duration: 1,
    ease: "power3.out"
  })

  .to(pList, {
    y: 0,
    opacity: 1,
    duration: 0.7,
    stagger: 0.2,
    ease: "power3.out"
  }, "-=0.4")

  .to(pEm, {
    y: 0,
    opacity: 1,
    duration: 0.5,
    stagger: 0.1,
    ease: "power3.out"
  }, "-=0.3")

  .to(btn, {
    y: 0,
    opacity: 1,
    duration: 0.7,
    ease: "power3.out"
  }, "-=0.4");

}
  /*happening slider js*/

document.addEventListener('DOMContentLoaded', function () {
  const swiper = new Swiper('.happenings-slider', {
    slidesPerView: 1.2,
    spaceBetween: 8,
    grabCursor: true,
    
    // Custom Right Navigation Arrow
    navigation: {
      nextEl: '.swiper-button-next-custom',
    },
    
    // Breakpoints for Responsiveness
    breakpoints: {
      480: {
        slidesPerView: 2.2,
        spaceBetween: 8,
      },
      768: {
        slidesPerView: 3.2,
        spaceBetween: 8,
      },
      1024: {
        slidesPerView: 4,
        spaceBetween: 8,
        allowTouchMove: true, // Desktop par scroll seamlessly continuous chalega
      }
    }
  });
});

var swiper = new Swiper(".capacitySwiper", {

    loop:true,

    autoplay:{
        delay:2500,
        disableOnInteraction:false,
    },

    pagination:{
        el:".capacitySwiper .swiper-pagination",
        clickable:true,
    }

});

})(jQuery);