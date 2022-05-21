/*!
 * Start Bootstrap - Bare v5.0.7 (https://startbootstrap.com/template/bare)
 * Copyright 2013-2021 Start Bootstrap
 * Licensed under MIT (https://github.com/StartBootstrap/startbootstrap-bare/blob/master/LICENSE)
 */
// This file is intentionally blank
// Use this file to add JavaScript to your project
(function ($) {
  "use strict";

  $(document).ready(function ($) {
    $(document).on('scroll', function (e) {
      var scrollTop = $(document).scrollTop();
      if (scrollTop > $('#navbar-1').height()) {
        $('#navbar-1').addClass('fixed-top');
        $('#navbar-1').removeClass('navbar-1');

      } else {
        $('#navbar-1').addClass('navbar-1');
        $('#navbar-1').removeClass('fixed-top');

      }
    });
    //Smooth Scroll
    smoothScroll.init();

    //active on scroll
    $('body').scrollspy({
      target: '.navbar',
      offset: 80
    })
  })
})
