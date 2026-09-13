/* =========================
   SCROLL REVEAL
========================= */

const revealElements = document.querySelectorAll(".reveal");

function revealOnScroll() {

    revealElements.forEach((element) => {

        const elementTop =
            element.getBoundingClientRect().top;

        const windowHeight =
            window.innerHeight;

        if (elementTop < windowHeight - 100) {

            element.classList.add("active");

        }

    });

}


/* Jalankan saat halaman dibuka */

window.addEventListener("load", revealOnScroll);


/* Jalankan ketika scroll */

window.addEventListener("scroll", revealOnScroll);


/* =========================
   PHOTO PARALLAX
========================= */

const photo = document.querySelector(".about-photo");

window.addEventListener("mousemove", (event) => {

    if (!photo) return;

    const x =
        (window.innerWidth / 2 - event.clientX) / 80;

    const y =
        (window.innerHeight / 2 - event.clientY) / 80;

    photo.style.transform =
        `translate(${x}px, ${y}px)`;

});