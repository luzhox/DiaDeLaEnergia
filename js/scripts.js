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
  
      setInterval(function(){ 
  
    if($('.hero .image').hasClass('bg2'))
  
    {
  
        $('.hero .image').removeClass('bg2')
    }else{
  
  $('.hero .image').addClass('bg2')
    }
          
  
  
      }, 3500);
    });
    
  
  
  
  