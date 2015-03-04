'use strict';

// Set element height based on height of reference element

function sliderHeight() {
  var maxHeight = Math.max.apply(null, $('div.slidesjs-slide').map(function (){
    return $(this).height();
  }).get());
  $('.slidesjs-container').css('height', maxHeight + 16);
  $('.slidesjs-control').css('height', maxHeight + 32);
}

$(document).ready(function() {

  // Menu
  var $menuButton = $('#menu-button');
  var $menuNav = $('#menu');

  $menuButton.on('click', function(e) {
    e.preventDefault();

    if ($menuNav.hasClass('menu-open')) {
      $menuButton.removeClass('x');
    } else {
      $menuButton.addClass('x');
    }

    $menuNav.toggleClass('menu-open');
  });

  $('.main').fitVids();
  $('#slides').slidesjs({
    width: 940,
    height: 540,
    fadeSpeed: 1,
    navigation: true,
    callback: {
      loaded: function() {
        $('.slidesjs-container').css('background', 'rgb(23,79,101)');
        sliderHeight();
      },
      complete: function(number) {
        if(number === 1) {
          $('.slidesjs-container').css('background', 'rgb(23,79,101)');
          sliderHeight();
        } else {
          $('.slidesjs-container').css('background', 'rgb(255,254,252)');
          sliderHeight();
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
  sliderHeight();
});

$(window).on( 'orientationchange', function() {
  sliderHeight();
});
