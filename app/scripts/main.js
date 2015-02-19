'use strict';

// Set element height based on height of reference element

function setHeight() {
  var shortHeight = $(window).height() * 0.6;
  $('.landing-banner').css('height', shortHeight);
}

$(document).ready(function() {
  setHeight();
  $('.main').fitVids();
  $('#slides').slidesjs({
    width: 940,
    navigation: false,
    autoHeight: true,
    callback: {
      loaded: function(number) {
        // var slide =$('#slide-' + number);
        // var height = slide.height() * 2;
        // $('.slidesjs-container').css('height', height);
        // $('.slidesjs-control').css('height', height);
        $('.slidesjs-container').css('background', 'rgb(23,79,101)');
      },
      complete: function(number) {
        // var slide =$('#slide-' + number);
        // var height = slide.height();
        if(number === 1) {
          // $('.slidesjs-container').css('height', height * 2);
          // $('.slidesjs-control').css('height', height) * 2;
          $('.slidesjs-container').css('background', 'rgb(23,79,101)');
        } else {
          // $('.slidesjs-container').css('height', height + 40);
          // $('.slidesjs-control').css('height', height) + 40;
          $('.slidesjs-container').css('background', 'rgb(255,254,252)');
        }
      }
    }
  });

  if(!Modernizr.svg) {
    $('img[src*="svg"]').attr('src', function() {
      return $(this).attr('src').replace('.svg', '.png');
    });
  }
});

// Reset heights/positions on window resize
$(window).resize(function() {
  setHeight();
});

$(window).on( 'orientationchange', function() {
  setHeight();
});
