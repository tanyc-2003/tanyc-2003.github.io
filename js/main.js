const navMenu = document.querySelector(".nav-menu");
const menuBtn = document.querySelector(".menu-btn");
const menuExitBtn = document.querySelector(".menu-exit-btn")

menuBtn.addEventListener("click", function(){
    navMenu.setAttribute("data-visible", "true");
    menuBtn.setAttribute("aria-expanded", "true");
});

menuExitBtn.addEventListener("click", function(){
    navMenu.setAttribute("data-visible", "false");
    menuBtn.setAttribute("aria-expanded", "false");
});


if (window.innerWidth < 550) {
    var swiper = new Swiper(".mySwiper", {
        slidesPerView: 1,
        spaceBetween: 30,
        initialSlide : 2,
        loop: true,
        pagination: {
            el: ".swiper-pagination",
            clickable: true,
        },
        autoplay: {
            delay: 2000,
            disableOnInteraction: false,
        }
    });
    
    } else if (window.innerWidth > 1200) {
        var swiper = new Swiper(".mySwiper", {
            slidesPerView: 2.2,
            spaceBetween: 80,
            centeredSlides: true,
            initialSlide : 0,
            loop: true,
            pagination: {
                el: ".swiper-pagination",
                clickable: true,
            },
            navigation: {
                nextEl: ".swiper-button-next",
                prevEl: ".swiper-button-prev",
            },
            autoplay: {
                delay: 2000,
                disableOnInteraction: false,
                pauseOnMouseEnter: true,
            }
        });

    } else {
        var swiper = new Swiper(".mySwiper", {
            slidesPerView: 1.5,
            spaceBetween: 30,
            centeredSlides: true,
            initialSlide : 0,
            loop: true,
            pagination: {
                el: ".swiper-pagination",
                clickable: true,
            },
            navigation: {
                nextEl: ".swiper-button-next",
                prevEl: ".swiper-button-prev",
            },
            autoplay: {
                delay: 2000,
                disableOnInteraction: false,
                pauseOnMouseEnter: true,
            }
        });
    }
