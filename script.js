'use strict';

$(function () {
  let rating = '';

  //Set rating and add active class to rating
  //when clicked and remove from siblings
  $('#ratingBar > .circle').click(function (e) {
    e.preventDefault();
    $(this).addClass('circle-active');
    $(this).siblings().removeClass('circle-active');

    rating = $(this).text();
  });

  //Fade out current card and fade in new card
  $('button').click(function (e) {
    $('#ratingState').fadeOut('fast');

    setTimeout(function () {
      $('#thankYouState').fadeIn('fast');
    }, 1000);

    $('#myRating').text(`You selected ${rating} out of 5`);
  });
});
