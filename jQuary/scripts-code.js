/*closing overlay menu and account page by default*/
$('#overlay-menu').hide();

$('#account-container').hide();

/*hovering th main menu*/
$('#header-list > li').hover(function () {
    $(this).children('ul').stop(true).fadeIn(500)
}, function () {
    $(this).children('ul').stop(true).fadeOut(500)
})

$('#account-button').click(function () {
    $('#account-container').css('visibility','visible');
    $('#account').removeClass('animate__zoomOut');
    $('#account-container').fadeIn(700);
    $('#account').addClass('animate__zoomIn');
})

$('.exit').click(function () {
    $('#account').removeClass('animate__zoomIn');
    $('#account').addClass('animate__zoomOut');
    $('#account-container').fadeOut(1000);
})

$('ul#account-tabs>li>a').click(function () {
    $('.active-tab').removeClass('active-tab')

    $(this).addClass('active-tab')
    $('ul#account-tabs>li').css('background-color', 'var(--secondaryColor)')
    $(this).parent().css('background-color', 'var(--primaryColor)')
    $('.tabs:visible').hide()
    let target = $(this).attr('href')
    $(target).show()

})

$('#overlay-menu > li:has(i)').click(function () {
    $('#overlay-menu i').toggleClass('fa-angle-left')
    $('#overlay-menu i').toggleClass('fa-angle-down')
    $(this).toggleClass('change-color-2');
    $(this).toggleClass('change-color');
    $('#overlay-menu li').not(this).toggle();
    $('#overlay-menu ul ,#overlay-menu ul > li').toggle();
})

$('.question-wrapper').click(function () {
    $('.question-wrapper>i').removeClass('fa-minus')
    $('.question-wrapper>i').addClass('fa-plus')
    if ($(this).next().is(':visible')) {
        $(this).children('i').removeClass('fa-minus')
        $(this).children('i').addClass('fa-plus')
    } else {
        $(this).children('i').addClass('fa-minus')
        $(this).children('i').removeClass('fa-plus')
    }
    $(this)
        .next()
        .slideToggle()
        .siblings('.answer-wrapper')
        .slideUp()
})

$.keyframe.define({
    name: 'rotation-start',
    from: {
        'transform': 'rotateZ(0deg)'
    },
    to: {
        'transform': 'rotateZ(90deg)'
    }
});
$.keyframe.define({
    name: 'rotation-end',
    from: {
        'transform': 'rotateZ(90deg)'
    },
    to: {
        'transform': 'rotateZ(0deg)'
    }
});

var checked = true;
$('.circle-theme').click(function () {
    var color_keeper = [];
    color_keeper[0] = $(this).children('.even').css('background-color');
    color_keeper[1] = $(this).children('.even').css('color');
    color_keeper[2] = $(this).children('.odd').css('background-color');
    color_keeper[3] = $(this).children('.odd').css('color');

    if ($(this).hasClass('one')) {
        $('#logo').attr('src', 'images/logo_avita_1.png');
        $('#content-wrapper>a>img').attr('src', 'images/logo_avita_1.png');
    } else if ($(this).hasClass('two')) {
        $('#logo').attr('src', 'images/logo_avita_2.png');
        $('#content-wrapper>a>img').attr('src', 'images/logo_avita_2.png');
    } else if ($(this).hasClass('three')) {
        $('#logo').attr('src', 'images/logo_avita_3.png');
        $('#content-wrapper>a>img').attr('src', 'images/logo_avita_3.png');
    } else if ($(this).hasClass('four')) {
        $('#logo').attr('src', 'images/logo_avita_4.png');
        $('#content-wrapper>a>img').attr('src', 'images/logo_avita_4.png');
    } else if ($(this).hasClass('five')) {
        $('#logo').attr('src', 'images/logo_avita_5.png');
        $('#content-wrapper>a>img').attr('src', 'images/logo_avita_5.png');
    }
    $('.active-circle-theme').addClass('not-active-circle-theme');
    $('div').removeClass('active-circle-theme');
    $(this).addClass('active-circle-theme').removeClass('not-active-circle-theme');

    $(":root").css({
        '--primaryColor': color_keeper[2],
        '--secondaryColor': color_keeper[0],
        '--primaryColorOpacity': color_keeper[3],
        '--secondaryColorOpacity': color_keeper[1]
    })
    setTimeout(function () {

            if (checked === true) {
                $('#change-theme').animate({
                    'height': '250'
                }, 700);
                checked = false
            } else {
                $('#change-theme').animate({
                    'height': '0'
                }, 700);
                checked = true
            }

    }, 700)
})

$('#color-changer').click(function () {

        if (checked === true) {
            $('#change-theme').animate({
                'height': '250'
            }, 700);
            checked = false
        } else {
            $('#change-theme').animate({
                'height': '0'
            }, 700);
            checked = true
        }

})

/*for opening overlay menu*/
$('#menu-bars').click(function () {
    $('#overlay-menu').show();
    $('#overlay-container').show().animate({bottom: '0'}, 'fast');
})

/*for closing overlay menu*/
$('.fa-multiply').click(function () {
    $('#overlay-container').animate({bottom: '-100vh'}, 'fast').hide(10);
    $('#overlay-menu').fade(10);
})

/*slider for comment section*/
$(document).ready(function () {
    $(".multiple-items-comment").slick({
        infinite: true,
        slidesToShow: 2,
        slidesToScroll: 2,
        dots: true,
        responsive: [
            {
                breakpoint: 501,
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1,
                }
            }
        ]
    });
});

/*slider for team section*/
$(document).ready(function () {
    $(".multiple-items-team").slick({
        infinite: true,
        slidesToShow: 4,
        slidesToScroll: 4,
        dots: true,
        responsive: [
            {
                breakpoint: 988,
                settings: {
                    slidesToShow: 2,
                    slidesToScroll: 2
                }
            },
            {
                breakpoint: 502,
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1
                }
            }
        ]
    });
});

$('#header-list>li:has(ul)').append('<i class="fa-solid fa-chevron-down"></i>')


/*control tabs for portfolio section*/
$("#header-portfolio-list>li").click(function () {
    $('.active-li').removeClass('active-li')
    $('.active-a').removeClass('active-a')
    $(this).children().addClass('active-a')
    $(this).addClass('active-li')
    $('.portfolios:visible').toggleClass('animate__fadeOut').toggleClass('animate__fadeIn').hide()
    let target = $(this).attr('id')
    $(target).toggleClass('animate__fadeIn').toggleClass('animate__fadeOut').show()
})

Fancybox.bind("[data-fancybox=myGallery]", {
    Thumbs: {
        Carousel: {
            Sync: {
                friction: 0.9,
            },
        },
    },
});

AOS.init()


