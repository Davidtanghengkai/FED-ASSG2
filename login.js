// Get DOM elements
const emailInput = document.getElementById('login-email');
const passwordInput = document.getElementById('login-password');
const loginButton = document.getElementById('login-submit');
const loginMessage = document.getElementById('login-msg');

// API details
const API_URL = "https://emailauthenticator-50e0.restdb.io/rest/email";
const API_KEY = "29329517d6ca4f35021dfb113153966287397";

// Event listener for the login button
loginButton.addEventListener('click', function (e) {
    e.preventDefault(); // Prevent form submission

    // Get the email and password values
    const email = emailInput.value;
    const password = passwordInput.value;

    // Validate input
    if (!email || !password) {
        showMessage("Please enter both email and password.", "error");
        return;
    }

    // Send a GET request to search for the user by email
    const url = `${API_URL}?q={"email":"${email}"}`;

    fetch(url, {
        method: 'GET',
        headers: {
            'x-apikey': API_KEY,
            'Content-Type': 'application/json'
        }
    })
    .then(response => {
        if (!response.ok) {
            throw new Error(`HTTP error! Status: ${response.status}`);
        }
        return response.json();
    })
    .then(data => {
        if (data.length === 0) {
            // If no user found with the provided email
            showMessage("No account found with this email address.", "error");
        } else {
            const user = data[0]; // Assuming only one user exists with the email
            if (user.password === password) {
                // If passwords match, login is successful
                showMessage("Login successful!", "success");
                // Optionally, store user data or redirect to another page
                // localStorage.setItem('user', JSON.stringify(user)); 
                window.location.href = "dashboard.html"; // Redirect to a dashboard page or home
            } else {
                // If passwords don't match
                showMessage("Incorrect password. Please try again.", "error");
            }
        }
    })
    .catch(error => {
        // Catch and log the error in detail
        console.error("Error during login request:");
        console.error(`Error message: ${error.message}`);
        console.error(`Error stack: ${error.stack}`);
        showMessage("An error occurred. Please try again later.", "error");
    });

});

// Function to display success/error messages
function showMessage(message, type) {
    loginMessage.style.display = 'block';
    loginMessage.textContent = message;
    if (type === 'success') {
        loginMessage.className = 'msg success'; // Assuming 'msg' is the base class and 'success' is for success
    } else {
        loginMessage.className = 'msg error'; // 'error' class for failure messages
    }
}

// Catch any uncaught errors globally (in case something goes wrong outside the try-catch in the event listener)
window.onerror = function (message, source, lineno, colno, error) {
    console.error(`Global Error: ${message}`);
    console.error(`Source: ${source}`);
    console.error(`Line: ${lineno}, Column: ${colno}`);
    console.error(`Stack trace: ${error.stack}`);
    showMessage("An unexpected error occurred. Please try again later.", "error");
    return true; // Prevent the browser default error handling
};
