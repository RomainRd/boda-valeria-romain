$('document').ready(() => {
  const guestName = $('#name');
  const guestEmail = $('#email');
  const guestPlusOneName = $('#plusone');
  const guestChildren = $('#children');
  const rsvpSubmit = $('#submit-rsvp');
  const code = $('#code');

  rsvpSubmit.on('click', (event) => {
    const firebaseRef = firebase.database().ref();
    const firebaseCode = firebaseRef.child('SuperSecretCode');
    console.log($('#yes-checked').prop('checked', true));
    console.log($('#no-checked').prop('checked'));



    const rsvpObject = {
      Name: guestName.val(),
      email: guestEmail.val(),
      plusOneName: guestPlusOneName.val(),
      children: guestChildren.val()
    };
    firebaseCode.on('value', function(datasnapshot){
      if (code.val() === datasnapshot.val()) {
        firebaseRef.push().set(rsvpObject);
      } else {
        console.log('code wrong');
      }
    });
  })
});
