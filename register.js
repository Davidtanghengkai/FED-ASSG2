const APIKEY = "6796f31df9d2bb1fcb181e26";
const API_URL = "https://emailauthenticator-50e0.restdb.io/rest/email";

document.getElementById("login-submit").addEventListener("click", registerUser);

async function registerUser() {
  const email = document.getElementById("login-email").value.trim();
  const password = document.getElementById("login-password").value;
  const confirmPassword = document.getElementById("login-confirm-password").value;
  const msgDiv = document.getElementById("login-msg");

  msgDiv.style.display = "none";
  msgDiv.classList.remove("success", "error");

  if (!email || !password || !confirmPassword) {
    displayMessage("All fields are required!", "error");
    return;
  }

  if (password !== confirmPassword) {
    displayMessage("Passwords do not match!", "error");
    return;
  }

  try {
    const response = await fetch(`${API_URL}?q={\"Email\":\"${email}\"}`, {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
        "x-apikey": APIKEY,
        "Cache-Control": "no-cache"
      }
    });
    const data = await response.json();

    if (data.length > 0) {
      displayMessage("This email is already registered!", "error");
      return;
    }

    await fetch(API_URL, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        "x-apikey": APIKEY,
        "Cache-Control": "no-cache"
      },
      body: JSON.stringify({ Email: email, Password: password })
    });

    document.getElementById("login-form").reset();
  } catch (error) {
    displayMessage("An error occurred. Please try again later.", "error");
  }
}

function displayMessage(message, type) {
  const msgDiv = document.getElementById("login-msg");
  msgDiv.style.display = "block";
  msgDiv.textContent = message;
  msgDiv.classList.add(type);
}
