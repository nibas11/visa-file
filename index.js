// function verifyEmail() {
//   var emailInput = document.getElementById("emailInput");
//   var verificationMessage = document.getElementById("verificationMessage");

//   var email = emailInput.value;

//   // Regular expression for email validation
//   var emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

//   if (email.match(emailPattern)) {
//     verificationMessage.textContent = "Email verified successfully!";
//     verificationMessage.style.color = "green";
//   } else {
//     verificationMessage.textContent = "Please enter a valid email address!";
//     verificationMessage.style.color = "red";
//   }
// }


//navbar
document.getElementById('loginBtn').addEventListener('click', function() {
  document.getElementById('loginFormContainer').style.display = 'flex';
});

document.getElementById('loginForm').addEventListener('submit', function(event) {
  event.preventDefault();
  // Perform login operation here
  alert('Login successful!');
});

function closeLoginForm() {
  document.getElementById('loginFormContainer').style.display = 'none';
}

// register


function closeregisterForm() {
  document.getElementById('regidterFormContainer').style.display = 'none';
}
registerBtn

//footer 
document.getElementById('openPopup').addEventListener('click', function() {

  var popupContainer = document.getElementById('popupContainer');
  popupContainer.style.display = 'flex';
});

document.getElementById('closePopup').addEventListener('click', function() {
  var popupContainer = document.getElementById('popupContainer');
  popupContainer.style.display = 'none';
});

window.addEventListener('click', function(event) {
  var popupContainer = document.getElementById('popupContainer');
  if (event.target == popupContainer) {
    popupContainer.style.display = 'none';
  }
});

