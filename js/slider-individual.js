$(document).ready(function(){
    $('.carousel').slick({
        dots: true,
        infinite: true,
        speed: 300,
        slidesToShow: 1,
        adaptiveHeight: true
    });

    $('.popup-link').magnificPopup({
        type: 'image',
        gallery:{
            enabled: true
        },
        callbacks: {
            elementParse: function(item) {
                item.src = item.el.attr('src');
            }
        }
    });
});
