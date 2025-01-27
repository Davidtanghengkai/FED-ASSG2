// Dictionary to store email-password pairs
let users = {};

// Function to handle the registration process
function registerUser() {
  // Get the email, password, and confirm password values from the form
  let email = document.getElementById("login-email").value;
  let password = document.getElementById("login-password").value;
  let confirmPassword = document.getElementsByName("Confirm-password")[0].value;
  
  // Check if the email already exists in the users dictionary
  if (users[email]) {
    displayMessage("This email is already registered!", "error");
    return;
  }

  // Check if the passwords match
  if (password !== confirmPassword) {
    displayMessage("Passwords do not match!", "error");
    return;
  }

  // Store the email and password in the dictionary
  users[email] = password;

  // Optionally, show a success message
  displayMessage("Registration successful!", "success");

  // Reset the form after successful registration (optional)
  document.getElementById("login-form").reset();
}

// Function to display messages (either success or error)
function displayMessage(message, type) {
  const msgDiv = document.getElementById("login-msg");
  msgDiv.style.display = "block";
  msgDiv.textContent = message;
  if (type === "success") {
    msgDiv.style.color = "green";
    
  } else {
    msgDiv.style.color = "red";
  }
}

// Event listener for the registration button
document.getElementById("login-submit").addEventListener("click", function() {
  registerUser();
});
