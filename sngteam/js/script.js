$(document).ready(function() {
    $('.slider').slick({
        dots: true,
        initialSlide: 1,
        autoplay: false,
        autoplaySpeed: 15000,
        cssEase: 'linear',
        fade: true,
    });
    $('.guild__container__guild-slider__about').slick({
        slidesToScroll: 1,
        arrows: false,
        fade: true,
        initialSlide: 0,
        asNavFor: '.guild__container__guild-slider__guild'
    });
    $('.guild__container__guild-slider__guild').slick({
        slidesToScroll: 1,
        asNavFor: '.guild__container__guild-slider__about',
        dots: true,
        initialSlide: 0,
    });

})