$(() => {

    $('.tabs, .tab').on('click', function (event) {
        var id = $(this).attr('data-id');
        $('.performances__tabs').find('.tab-item').removeClass('active-tab').hide();
        $('.performances__tabs, .tabs').find('.tab').removeClass('active');
        $(this).addClass('active');
        $('#' + id).addClass('active-tab').fadeIn();
        return false;
    });

    $('.burger-menu').on('click', () => {
        $('.burger-menu').toggleClass('burger-active');
        
        $('.header').toggleClass('header-slide');
    });

    $(function () {
        $('.popup-crossfit').magnificPopup({
            delegate: 'a',
            type: 'image',
            tLoading: 'Loading image #%curr%...',
            mainClass: 'mfp-img-mobile',
            gallery: {
                enabled: true,
                navigateByImgClick: true,
                preload: [0, 1] // Will preload 0 - before current, and 1 after the current image
            }
        });
    });
    $(function () {
        $('.popup-bisonRace').magnificPopup({
            delegate: 'a',
            type: 'image',
            tLoading: 'Loading image #%curr%...',
            mainClass: 'mfp-img-mobile',
            gallery: {
                enabled: true,
                navigateByImgClick: true,
                preload: [0, 1] // Will preload 0 - before current, and 1 after the current image
            }
        });
    });
    $(function () {
        $('.popup-halfMarathon').magnificPopup({
            delegate: 'a',
            type: 'image',
            tLoading: 'Loading image #%curr%...',
            mainClass: 'mfp-img-mobile',
            gallery: {
                enabled: true,
                navigateByImgClick: true,
                preload: [0, 1] // Will preload 0 - before current, and 1 after the current image
            }
        });
    });
    $(function () {
        $('.popup-zombieRun').magnificPopup({
            delegate: 'a',
            type: 'image',
            tLoading: 'Loading image #%curr%...',
            mainClass: 'mfp-img-mobile',
            gallery: {
                enabled: true,
                navigateByImgClick: true,
                preload: [0, 1] // Will preload 0 - before current, and 1 after the current image
            }
        });
    });
    $('#category__tab-1').on('click', () => {
        $('.about__me').css('display', 'block');
        $('.career').css('display', 'none');
    });
    $('#category__tab-2').on('click', () => {
        $('.about__me').css('display', 'none');
        $('.career').css('display', 'block');
    });
    $('.input, .textarea, .button').on('click', () => {
        $('.label').css('top','-1px');
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