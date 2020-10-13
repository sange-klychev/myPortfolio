$(() => {

    $('.menu__burger').on('click', () => {
        $('.menu').toggle(500);
        $('.bar').toggleClass('bar--active');
    });

    $('.work__items').slick({
        slideToShow: 1,
        infinite: false,
        prevArrow: '<button type="button" class="slick-prev icon-angle-left"></button>',
        nextArrow: '<button type="button" class="slick-next icon-angle-right"></button>',
        responsive: [
            {
                breakpoint: 500,
                settings: {
                    arrows: false,
                    dots: true
                }
            }
        ]
    });

    wow = new WOW(
        {
            boxClass: 'wow',      // default
            animateClass: 'animate__animated', // default
            offset: 0,          // default
            mobile: true,       // default
            live: true        // default
        }
    )
    wow.init();


});