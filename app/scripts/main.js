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
    callback: {
      loaded: function(number) {
          var slide =$('#slide-' + number);
          var height = slide.height() * 2;
          $('.slidesjs-container').css('height', height);
          $('.slidesjs-control').css('height', height);
          console.log(height);
      },
      complete: function(number) {
          var slide =$('#slide-' + number);
          var height = slide.height() * 2;
          $('.slidesjs-container').css('height', height);
          $('.slidesjs-control').css('height', height);
          console.log(number + ": " + height);
      }
    }
  });
});

// Reset heights/positions on window resize
$(window).resize(function() {
  setHeight();
});

$(window).on( 'orientationchange', function() {
  setHeight();
});
