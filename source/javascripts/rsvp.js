$('document').ready( () => {

  function validateEmail(email) {
    var re = /^(([^<>()[\]\\.,;:\s@\"]+(\.[^<>()[\]\\.,;:\s@\"]+)*)|(\".+\"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    return re.test(email);
  }

  // Key settings
  const rsvpSubmit = $('#submit-rsvp');
  const firebaseRef = firebase.database().ref();
  const firebaseCode = firebaseRef.child('SuperSecretCode');
  var sendable = false

  // RSVP fields
  const guestName = $('#name');
  const guestEmail = $('#email');
  const song = $('#song');
  const guestPlusOneName = $('#plusone');
  const guestChildren = $('#children');
  const code = $('#code');

  $('#no-check').on('click', (e) =>{
    $('#yes-check').removeAttr('checked');
  });
  $('#yes-check').on('click', (e) =>{
    $('#no-check').removeAttr('checked');
  });


  rsvpSubmit.on('click', (event) => {
  const comming = $('#yes-check').is(':checked');
  const notComming = $('#no-check').is(':checked');

    // adapt modal to information
    if (comming === true                            &&
        guestName.val() !== ""                       &&
        validateEmail(guestEmail.val()) === true     &&
        guestChildren.val() !== ""                   &&
        song.val() !== ""                            &&
        firebaseCode.on('value', function(datasnapshot){
          code.val() === datasnapshot.val();
        })
        )
    {
      sendable = true;
      $('#submit-rsvp').attr('data-target', '#modal-comming');
    };

    if (notComming === true                          &&
        guestName.val() !== ""                       &&
        validateEmail(guestEmail.val()) === true     &&
        guestChildren.val() !== ""                   &&
        song.val() !== ""                            &&
        firebaseCode.on('value', function(datasnapshot){
          code.val() === datasnapshot.val();
        })) {
      sendable = true;
      $('#submit-rsvp').attr('data-target', '#modal-not-comming');
    };

    if (sendable === false) {
      $('#submit-rsvp').attr('data-target', '#modal-not-yet');
    };

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
      if (sendable == true) {
        firebaseRef.push().set(rsvpObject);
      }
    });
  });

});
