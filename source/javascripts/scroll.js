$('document').ready(function(){
  // Select all links with hashes
  $('a[href*="#"]')
    // Remove links that don't actually link to anything
    .not('[href="#"]')
    .not('[href="#0"]')
    .on('click', function(event) {
      // On-page links
      if (
        location.pathname.replace(/^\//, '') == this.pathname.replace(/^\//, '')
        &&
        location.hostname == this.hostname
      ) {
        // Figure out element to scroll to
        var target = $(this.hash);
        target = target.length ? target : $('[name=' + this.hash.slice(1) + ']');
        // Does a scroll target exist?
        if (target.length) {
          // Only prevent default if animation is actually gonna happen
          event.preventDefault();
          $('html, body').animate({
            scrollTop: target.offset().top
          }, 1000, function() {
            // Callback after animation
            // Must change focus!
            var $target = $(target);
            $target.focus();
            if ($target.is(":focus")) { // Checking if the target was focused
              return false;
            } else {
              $target.attr('tabindex','-1'); // Adding tabindex for elements not focusable
              $target.focus(); // Set focus again
            };
          });
        }
      }
    });

    // Give an active class when tab is selected
    $('.nav-link').on('click', function(e){
      $(this).toggleClass('nav-active');
    });

    // Animate Navbar
    $('#logo-subpage').hide();
    var scrollTop = 0;
    $(window).on('scroll', function(e){
      const scrollTop = $(window).scrollTop();
      if (scrollTop >= 100) {
        $('.main-header').addClass('scrolled-nav');
        $('.nav-link').addClass('scrolled');
        $('#logo-subpage').show();
        $('#logo-homepage').hide();
      } else if (scrollTop < 100) {
        $('.main-header').removeClass('scrolled-nav');
        $('.nav-link').removeClass('scrolled');
        $('#logo-subpage').hide();
        $('#logo-homepage').show();
       }
  });
});


