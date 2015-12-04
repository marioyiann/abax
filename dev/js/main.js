// Smooth scroling ( https://css-tricks.com/snippets/jquery/smooth-scrolling/ )
$(function() {
  $('a[href*=#]:not([href=#])').click(function() {
    if (location.pathname.replace(/^\//,'') == this.pathname.replace(/^\//,'') && location.hostname == this.hostname) {
      var target = $(this.hash);
      target = target.length ? target : $('[name=' + this.hash.slice(1) +']');
      if (target.length) {
        $('html,body').animate({
          scrollTop: target.offset().top
        }, 1000);
        event.preventDefault(); 
      }
    }
  });
});

// Close navbar on click item
$('.navbar-collapse ul li a').click(function() {
    $('.navbar-toggle:visible').click();
});

// Responsive hero image
$(function(){
  $('.hero').css({ height: $(window).innerHeight() - 180});
});