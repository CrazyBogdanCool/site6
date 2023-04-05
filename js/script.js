const burger = document.querySelector(".header__menu-burger");
burger.addEventListener("click", function() {
    const menu = document.querySelector(".header__menu");
    burger.classList.toggle("_open");
    menu.classList.toggle("_open");
    document.body.classList.toggle("lock");
})
new Swiper(".swiper-comtainer",{
    slidesPerView: 6,
    loop: true,
    pagination: {
        el: ".swiper-pagination",
        clickable: true,
    },
    slidesPerGroup: 6,
    breakpoints : {
        1024: {
            slidesPerView: 6,
            slidesPerGroup: 6,
        },
        675: {
            slidesPerView: 4,
            slidesPerGroup: 4,
        },
        500: {
            slidesPerView: 3,
            slidesPerGroup: 3,
        },
        1: {
            slidesPerView: 2,
            slidesPerGroup: 2,
        },
    },
});