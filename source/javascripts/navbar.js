$('document').ready(() => {
  $('#nav-toggle').on('click', function(event) {
    this.classList.toggle('active');
    event.preventDefault();
  });
  $('#nav-toggle').click(function() {
    $('.navigation_links').toggle();
  });


    // Animate Navbar
    $('#logo-subpage').hide();
    var scrollTop = 0;
    $(window).on('scroll', (e) => {
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
