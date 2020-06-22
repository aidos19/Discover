$(function (){
    $('.menu').click(function (){
        if($('nav ul').css('display') == 'none') {
        $('nav ul').slideDown();
        } else {
        $('nav ul').slideUp();
        }
    });


    $('.service-slider').slick({
        slidesToShow: 1,
        slidesToScroll: 1,
        autoplay: true,
        autoplaySpeed: 3000,
        arrows: false,
        dots: true,
        responsive: [
            {
            breakpoint: 600,
            settings: {
                dots: false,
                centerMode: true,
                centerPadding: '50px',
            }
        },
        {
            breakpoint: 400,
            settings: {
                dots: false,
                centerMode: true,
                centerPadding: '20px'
            }
        }
    ]
    });










});