/// <reference types="./@types/jquery"/>

$(document).ready(function() {
  $(".openNav").on("click", function() {
    $("#leftMenu").css("width", "250px");
    $(".openNav").css("left", "250px");
  });

  $(".closebtn").on("click", function() {
    $("#leftMenu").css("width", "0");
    $(".openNav").css("left", "20px");
  });

  $(".toggle").on("click", function() {
    var $inner = $(this).next(".innerfst");
    $inner.toggleClass("active");

    if ($inner.hasClass("active")) {
      var panelHeight = $inner.prop('scrollHeight');
      $inner.css('max-height', panelHeight + 'px');
      $inner.stop().slideDown(5000); 
      $('html, body').animate({
        scrollTop: $inner.offset().top - 100 
      }, 1000);   
    } else {
      $inner.stop().slideUp(5000, function() { 
        $inner.css('max-height', '0');
      });
    }
  });

  $(".innerfst").css('max-height', '0');

  var eventDate = new Date("2024-12-31T23:59:59").getTime();

  function updateTimeRemaining() {
    var now = new Date().getTime();
    var timeRemaining = eventDate - now;

    if (timeRemaining < 0) {
      timeRemaining = 0;
    }

    var days = Math.floor(timeRemaining / (1000 * 60 * 60 * 24));
    var hours = Math.floor((timeRemaining % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
    var minutes = Math.floor((timeRemaining % (1000 * 60 * 60)) / (1000 * 60));
    var seconds = Math.floor((timeRemaining % (1000 * 60)) / 1000);

    $(".days").text(days);
    $(".hours").text(hours);
    $(".minutes").text(minutes);
    $(".seconds").text(seconds);
  }

  setInterval(updateTimeRemaining, 1000); 
});
