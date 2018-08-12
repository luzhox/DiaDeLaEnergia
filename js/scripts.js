$( document ).ready(function() {

$('.menu').click(function(){
    $('.menucontainer').slideToggle('fast') 
})
  $(".contador")
  .countdown("2018/10/25", function(event) {
    $(this).html(
      event.strftime('%D'+'<h5>:</h5>'+'%H'+'<h5>:</h5>'+'%M'+'<h5>:</h5>'+'%S')
    );

    $('.congresos').click(function(){

        $('.sub-menu').toggleClass('active')

    })
  });

    $('.owl-carousel').owlCarousel({
        loop:true,
        margin:20,
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