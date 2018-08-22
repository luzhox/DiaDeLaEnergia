$( document ).ready(function() {


  $(".contador")
  .countdown("2018/10/25", function(event) {
    $(this).html(
      event.strftime('%D'+'<h5>:</h5>'+'%H'+'<h5>:</h5>'+'%M'+'<h5>:</h5>'+'%S')
    );

  
  });

    $('.owl-carousel').owlCarousel({
        loop:true,
        margin:20,
        nav:true,
        slideTransition:`ease-in-out`,
        autoplayTimeout:3000,
        autoplay:true,
        responsive:{
            0:{
                items:1,
                nav:false,
                dots:false
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