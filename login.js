const APIKEY = "6796f31df9d2bb1fcb181e26"; // Your RESTDB API key
const API_URL = "https://emailauthenticator-50e0.restdb.io/rest/email"; // Your RESTDB API URL

document.getElementById("login-submit").addEventListener("click", loginUser);

async function loginUser() {
  const email = document.getElementById("login-email").value.trim();
  const password = document.getElementById("login-password").value;
  const msgDiv = document.getElementById("login-msg");

  // Hide any previous messages
  msgDiv.style.display = "none";
  msgDiv.classList.remove("success", "error");

  if (!email || !password) {
    displayMessage("Please fill in all fields.", "error");
    return;
  }

  try {
    // Fetch user data based on email
    const response = await fetch(`${API_URL}?q={"Email":"${email}"}`, {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
        "x-apikey": APIKEY,
        "Cache-Control": "no-cache",
      },
    });
    const data = await response.json();

    if (data.length === 0) {
      displayMessage("Email not found. Please register.", "error");
      return;
    }

    const user = data[0];
    if (user.Password !== password) {
      displayMessage("Incorrect password. Please try again.", "error");
      return;
    }

    // Successful login: Persist login state and user email, then redirect
    displayMessage("Login successful! Redirecting...", "success");
    localStorage.setItem("isLoggedIn", "true");
    localStorage.setItem("userEmail", email);

    setTimeout(() => {
      window.location.href = "home.html";
    }, 2000);
  } catch (error) {
    console.error("Error:", error);
    displayMessage("An error occurred. Please try again later.", "error");
  }
}

function displayMessage(message, type) {
  const msgDiv = document.getElementById("login-msg");
  msgDiv.style.display = "block";
  msgDiv.textContent = message;
  msgDiv.classList.add(type);
}
