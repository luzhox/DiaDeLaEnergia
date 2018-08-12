$( document ).ready(function() {

$('.menu').click(function(){
    $('.menucontainer').slideToggle('fast') 
})
    $('.owl-carousel').owlCarousel({
        loop:true,
        margin:10,
        nav:true,
        responsive:{
            0:{
                items:1,
                nav:false
            },
            600:{
                items:4
            },
            1000:{
                items:4
            }
        }
    })




});