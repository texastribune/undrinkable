'use strict';

// Set element height based on height of reference element

function sliderHeight() {
  var windowSize = $(window).width();
  if (windowSize <= 500) {
    $('.slidesjs-container').css('height', 700);
  } else {
    $('.slidesjs-container').css('height', 500);
  }
}

$(document).ready(function() {
  $('.main').fitVids();
  $('#slides').slidesjs({
    width: 940,
    navigation: false,
    // autoHeight: true,
    callback: {
      loaded: function(number) {
        $('.slidesjs-container').css('background', 'rgb(23,79,101)');
        sliderHeight();
      },
      complete: function(number) {
        if(number === 1) {
          $('.slidesjs-container').css('background', 'rgb(23,79,101)');
        } else {
          $('.slidesjs-container').css('background', 'rgb(255,254,252)');
        }
        sliderHeight();
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
  sliderHeight();
});

$(window).on( 'orientationchange', function() {
  sliderHeight();
});
