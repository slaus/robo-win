$(document).ready(function() {
    // ---------------------------- //
    // Открытие / Закрытие мобильного меню
    // ---------------------------- //
    $('.toggle-main-menu').click(function() {

        if ($('#mainMenu').hasClass('open')) {
            $('#mainMenu').removeClass('open');
            $('body').removeClass('open-menu');
            $(this).find('img').attr('src', 'images/icons/toggle-menu.png');
        } else {
            $('#mainMenu').addClass('open');
            $('body').addClass('open-menu');
            $(this).find('img').attr('src', 'images/icons/close-menu.png');
        }

    })

    // ---------------------------- //
    // Плавный переход по якорям
    // ---------------------------- //
    $(".sectionSlide").on("click", "a", function(event) {
        $('#mainMenu').removeClass('open');
        $('body').removeClass('open-menu');
        $('.toggle-main-menu').find('img').attr('src', 'images/icons/toggle-menu.png');
        event.preventDefault();
        var id = $(this).attr('href'),
            top = $(id).offset().top;
        $('body,html').animate({ scrollTop: top }, 500);
    });


    // ---------------------------- //
    // Примеры результатов прогнозов // Слайдер
    // ---------------------------- //
    $('.forecast-results-slider').slick({
        arrows: true,
        prevArrow: '<div class="slick-prev"><img src="images/icons/slider-prev.png" alt="" /></div>',
        nextArrow: '<div class="slick-next"><img src="images/icons/slider-next.png" alt="" /></div>',
        dots: true,
    })


    // ---------------------------- //
    // Отзывы покупателей программы прогнозов на спорт Robo-Win 2.0 // Слайдер
    // ---------------------------- //
    $('.reviews-slider').slick({
        slidesToShow: 3,
        slidesToScroll: 1,
        arrows: true,
        prevArrow: '<div class="slick-prev"><img src="images/icons/slider-prev.png" alt="" /></div>',
        nextArrow: '<div class="slick-next"><img src="images/icons/slider-next.png" alt="" /></div>',
        dots: true,
        centerMode: true,
        centerPadding: '20px',
        focusOnSelect: true,
        responsive: [{
            breakpoint: 767,
            settings: {
                slidesToShow: 1,
                slidesToScroll: 1
            }
        }]
    })

    //Скидка по промокоду
    var d = new Date(),
        fulldate = d.getDate() + 1;
    //console.log(fulldate);

    function count(id) {
        //console.log(id);
        $("#" + id + "").countdown('2018/11/' + fulldate).on('update.countdown', function(event) {
            var $this = $(this).html(event.strftime('' +
                '<div><span class="days">%H</span><div class="smalltext">Часов</div></div>' +
                '<div><span class="days">%M</span><div class="smalltext">Минут</div></div>' +
                '<div><span class="days">%S</span><div class="smalltext">Cекунд</div></div>'));
        });
    }
    count('getting-started');
    count('getting-started-1');

    //соединяемся с API Youtube
    var tag = document.createElement('script');
    tag.src = "https://www.youtube.com/iframe_api";
    var firstScriptTag = document.getElementsByTagName('script')[0];
    firstScriptTag.parentNode.insertBefore(tag, firstScriptTag);


    //запускаем функцию проверки видимости элемента
    $(document).scroll(function() {
        checkPosition();
    });
    $(window).resize(function() {
        checkPosition();
    });

    function checkPosition() {
        //функция проверки видимости элемента на jquery
        var div_position = $('#video-placeholder').offset();
        var div_top = div_position.top;
        var div_left = div_position.left;
        var div_width = $('#video-placeholder').width();
        var div_height = $('#video-placeholder').height();
        var top_scroll = $(document).scrollTop();
        var left_scroll = $(document).scrollLeft();
        var screen_width = $(window).width();
        var screen_height = $(window).height() + 600;
        var see_x1 = left_scroll;
        var see_x2 = screen_width + left_scroll;
        var see_y1 = top_scroll;
        var see_y2 = screen_height + top_scroll;
        var div_x1 = div_left;
        var div_x2 = div_left + div_height;
        var div_y1 = div_top;
        var div_y2 = div_top + div_width;
        if (div_x1 >= see_x1 && div_x2 <= see_x2 && div_y1 >= see_y1 && div_y2 <= see_y2) {
            //если элемент видим на экране, запускаем видео Youtube
            player.playVideo();
            //player.pauseVideo();
        } else {
            //если не видим, ставим видео на паузу
            player.pauseVideo();
        }
    }

});

//Back to top button
$(window).scroll(function() {
    if ($(this).scrollTop() > 400) {
        $('#navigation').addClass("fix") & $('#back-to-top').fadeIn();
    } else {
        $('#navigation').removeClass("fix") & $('#back-to-top').fadeOut();
    }
});

// scroll body to 0px on click
$('#back-to-top').click(function() {
    $('#back-to-top').tooltip('hide');
    $('body,html').animate({
        scrollTop: 0
    }, 800);
    return false;
});