$(() => {

    $('.menu__burger').on('click', () => {
        $('.menu').toggle(500);
        $('.bar').toggleClass('bar--active');
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