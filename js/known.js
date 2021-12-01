
/*js code for slider */

$(document).ready(function(){
  var owl = $('.owl-carousel');

  owl.owlCarousel({
    animateOut : 'fadeOut',
    items : 1,
    loop : true,
    autoplay : true,
    autoplayTimeout : 5000,
    autoplayHoverPause : true,
    responsive : {
            0 : {
              items : 1
            },
            600 : {
              items : 1
            },
            1000 : {
              items : 1
            }
          }
  });
});

var maillink = document.querySelector('.mailLink');

maillink.addEventListener('click',function(){
  alert("It's just a web template, so real email id is not available here");
});

