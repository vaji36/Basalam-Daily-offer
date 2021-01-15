
$(document).ready(function() {

    $('.owl-carousel').owlCarousel({
        loop:false,
        margin:10,
        rtl:true,
        nav:false,
        responsive:{
            0:{
                items:2
            },
            200:{
                items:2,
                margin:70
            },
            600:{
                items:3,
                margin:80
            },
            1000:{
                items:4
            },
            1200:{
                items:5
            },
            1400:{
                items:6
            }
        }
    })
});
