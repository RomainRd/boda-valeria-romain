$('document').ready(() => {
  const guestName = $('#name');
  const guestEmail = $('#email');
  const song = $('#song');
  const guestPlusOneName = $('#plusone');
  const guestChildren = $('#children');
  const rsvpSubmit = $('#submit-rsvp');
  const code = $('#code');

  rsvpSubmit.on('click', (event) => {
    const comming = $('#yes-check').is(':checked');
    console.log(comming);
    const firebaseRef = firebase.database().ref();
    const firebaseCode = firebaseRef.child('SuperSecretCode');
    const rsvpObject = {
      comming: comming,
      Name: guestName.val(),
      email: guestEmail.val(),
      song: song.val(),
      plusOneName: guestPlusOneName.val(),
      children: guestChildren.val()
    };

    console.log(rsvpObject);
    firebaseCode.on('value', function(datasnapshot){
      if (code.val() === datasnapshot.val()) {
        firebaseRef.push().set(rsvpObject);
      } else {
        console.log('code wrong');
      }
    });
  })
});
