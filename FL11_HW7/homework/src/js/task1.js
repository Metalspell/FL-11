let userEmail = prompt('Enter your email,please!');
let minLengthOfEmail = 6;
let minLengthOfPassword = 5;
if (userEmail === null || userEmail === '') {
  alert('Canceled');
} else {
  if (userEmail.length < minLengthOfEmail) {
    alert('I don`t know any emails having name length less than 6 symbols');
  } else {
    if (userEmail === 'user@gmail.com' || userEmail === 'admin@gmail.com') {
      let userPassword = prompt('Enter your password,please');
      if (userPassword === null || userPassword === '') {
        alert('Canceled');
      } else {
        if (
          userEmail === 'user@gmail.com' && userPassword === 'UserPass' ||
          userEmail === 'admin@gmail.com' && userPassword === 'AdminPass'
        ) {
          let newPasswordRequest = confirm(
            'Do you want to change your password?'
          );
          if (newPasswordRequest === true) {
            let oldPassword = prompt('Enter your old password,please');
            if (
              userEmail === 'user@gmail.com' && oldPassword === userPassword ||
              userEmail === 'admin@gmail.com' && oldPassword === userPassword
            ) {
              let newPassword = prompt('Enter your new password,please');
              if (newPassword.length < minLengthOfPassword) {
                alert('It’s too short password. Sorry.');
              } else {
                let newPasswordCheck = prompt(
                  'Enter your new password again,please'
                );
                if (newPassword === newPasswordCheck) {
                  alert('You have successfully changed your password.');
                } else {
                  alert('You wrote the wrong password.');
                }
              }
            } else {
              alert('Wrong password');
            }
          } else {
            alert('You have failed the change.');
          }
        } else {
          alert('Wrong password');
        }
      }
    } else {
      alert('I don’t know you');
    }
  }
}
