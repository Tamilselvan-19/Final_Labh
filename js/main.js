/* =========================================
   MOBILE MENU
========================================= */

const menuBtn = document.querySelector(".menu-toggle");
const mobileMenu = document.querySelector(".mobile-menu");

if (menuBtn && mobileMenu) {

    menuBtn.addEventListener("click", () => {

        mobileMenu.classList.toggle("open");

    });

}


/* =========================================
   DROPDOWN MENU
========================================= */

const dropdowns = document.querySelectorAll(".dropdown");

dropdowns.forEach((dropdown) => {

    const btn = dropdown.querySelector(".dropbtn");

    if (btn) {

        btn.addEventListener("click", (e) => {

            e.stopPropagation();

            dropdown.classList.toggle("open");

        });

    }

});


document.addEventListener("click", (e) => {

    dropdowns.forEach((dropdown) => {

        if (!dropdown.contains(e.target)) {

            dropdown.classList.remove("open");

        }

    });

});


/* =========================================
   HERO SLIDER
========================================= */

const slides = document.querySelectorAll(".hero-slide");
const dots = document.querySelectorAll(".dot");

let currentSlide = 0;
let slideInterval;


/* SHOW SLIDE */

function showSlide(index) {

    slides.forEach((slide) => {

        slide.classList.remove("active");

    });

    dots.forEach((dot) => {

        dot.classList.remove("active");

    });

    slides[index].classList.add("active");

    dots[index].classList.add("active");

}


/* NEXT SLIDE */

function nextSlide() {

    currentSlide++;

    if (currentSlide >= slides.length) {

        currentSlide = 0;

    }

    showSlide(currentSlide);

}


/* PREVIOUS SLIDE */

function prevSlide() {

    currentSlide--;

    if (currentSlide < 0) {

        currentSlide = slides.length - 1;

    }

    showSlide(currentSlide);

}


/* AUTO SLIDE START */

function startSlider() {

    slideInterval = setInterval(() => {

        nextSlide();

    }, 4000);

}


/* AUTO SLIDE STOP */

function stopSlider() {

    clearInterval(slideInterval);

}


/* START SLIDER */

if (slides.length > 0) {

    startSlider();

}


/* DOT CLICK */

dots.forEach((dot, index) => {

    dot.addEventListener("click", () => {

        currentSlide = index;

        showSlide(currentSlide);

        stopSlider();

        startSlider();

    });

});


/* =========================================
   PAUSE SLIDER ON HOVER
========================================= */

const heroSlider = document.querySelector(".hero-slider");

if (heroSlider) {

    heroSlider.addEventListener("mouseenter", () => {

        stopSlider();

    });

    heroSlider.addEventListener("mouseleave", () => {

        startSlider();

    });

}


/* =========================================
   TOUCH SWIPE FOR MOBILE
========================================= */

let touchStartX = 0;
let touchEndX = 0;

if (heroSlider) {

    heroSlider.addEventListener("touchstart", (e) => {

        touchStartX = e.changedTouches[0].screenX;

    });

    heroSlider.addEventListener("touchend", (e) => {

        touchEndX = e.changedTouches[0].screenX;

        handleSwipe();

    });

}


function handleSwipe() {

    if (touchEndX < touchStartX - 50) {

        nextSlide();

    }

    if (touchEndX > touchStartX + 50) {

        prevSlide();

    }

}


/* =========================================
   SCROLL ANIMATION
========================================= */

const animatedItems = document.querySelectorAll(
    ".product-card, .category-card, .stat, .value-card"
);

window.addEventListener("scroll", () => {

    animatedItems.forEach((item) => {

        const itemTop = item.getBoundingClientRect().top;

        if (itemTop < window.innerHeight - 100) {

            item.classList.add("show");

        }

    });

});


/* =========================================
   SMOOTH ACTIVE NAV LINK
========================================= */

const navLinks = document.querySelectorAll(".main-nav a");

navLinks.forEach((link) => {

    link.addEventListener("click", () => {

        navLinks.forEach((nav) => {

            nav.classList.remove("active");

        });

        link.classList.add("active");

    });

});


/* =========================================
   PAGE LOADER EFFECT
========================================= */

window.addEventListener("load", () => {

    document.body.classList.add("loaded");

});