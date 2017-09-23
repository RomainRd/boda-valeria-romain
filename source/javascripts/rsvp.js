$('document').ready( () => {
  console.log('aok');
  $('.rsvp-check input').on('click', (e) => {
    $('.rsvp-details').animate({
      height: "toggle",
      'padding-top': 'toggle',
      'padding-bottom': 'toggle',
      opacity: "toggle",
    }, "slow").css('display', 'flex');
  });
});
