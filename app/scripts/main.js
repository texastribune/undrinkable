'use strict';

// Set element height based on height of reference element

function setHeight() {
  var shortHeight = $(window).height() * 0.6;
  $('.landing-banner').css('height', shortHeight);
}

$(document).ready(function() {
  setHeight();
  $('.main').fitVids();
});

// Reset heights/positions on window resize
$(window).resize(function() {
  setHeight();
});

$(window).on( 'orientationchange', function() {
  setHeight();
});
