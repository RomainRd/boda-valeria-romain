$('document').ready( () => {
  // $('.rsvp-check input').on('click', (e) => {
  //   $('.rsvp-details').animate({
  //     height: "toggle",
  //     'padding-top': 'toggle',
  //     'padding-bottom': 'toggle',
  //     opacity: "toggle",
  //   }, "slow").css('display', 'flex');
    const rsvpSubmit = $('#submit-rsvp');
    const firebaseRef = firebase.database().ref();
    const firebaseCode = firebaseRef.child('SuperSecretCode');
    rsvpSubmit.on('click', (event) => {
      // RSVP fields
      const guestName = $('#name');
      const guestEmail = $('#email');
      const song = $('#song');
      const guestPlusOneName = $('#plusone');
      const guestChildren = $('#children');
      const code = $('#code');
      const comming = $('#yes-check').is(':checked');
      let sendable = false
      // adapt modal to information
      if (comming == true               &&
          guestName.val() != ""         &&
          guestEmail.val() != ""        &&
          guestChildren.val() != ""     &&
          song.val() != ""              &&
          code.val() == 'sardinelove') {
        $('#submit-rsvp').attr('data-target', '#modal-comming');
        let sendable = true;
      };
      if(comming == false               &&
          guestName.val() != ""         &&
          guestEmail.val() != ""        &&
          guestChildren.val() != ""     &&
          song.val() != ""              &&
          code.val() == 'sardinelove') {
        $('#submit-rsvp').attr('data-target', '#modal-not-comming');
      }
      if (guestName.val() === ""         &&
          guestEmail.val() === ""        &&
          guestChildren.val() === ""     &&
          song.val() === ""              &&
          code.val() !== 'sardinelove') {
        $('#submit-rsvp').attr('data-target', '#modal-not-yet');
      }

      // send the information
      const rsvpObject = {
        comming: comming,
        Name: guestName.val(),
        email: guestEmail.val(),
        song: song.val(),
        plusOneName: guestPlusOneName.val(),
        children: guestChildren.val()
      };

      firebaseCode.on('value', function(datasnapshot){
        if (code.val() === datasnapshot.val() && sendable == true) {
          firebaseRef.push().set(rsvpObject);
        }
      });
    });

  });
// });
