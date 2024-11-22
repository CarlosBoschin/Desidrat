$(document).ready(function()
{
    $('.owl-carousel').owlCarousel({
        loop: false,
        responsiveClass: true,
        nav: true,
        navText: ['<i style="color: #fff" class="fa fa-chevron-left"></i>', '<i style="color: #fff" class="fa fa-chevron-right"></i>'],
        responsive: {
            0: {
                items: 1,
                nav: true
            },
            600: {
                items: 3,
                nav: true
            },
            1000: {
                items: 5,
                nav: true,
                loop: false
            }
        }
    });
});