document.addEventListener("DOMContentLoaded", function () {
    const accountSection = document.getElementById("account-section");
    const accountButton = document.getElementById("account-button");
  
    // Check if the user is logged in
    if (localStorage.getItem("isLoggedIn") === "true") {
      // Display the account section
      accountSection.style.display = "block";
      
      // Retrieve and display the user's email on the account button
      const userEmail = localStorage.getItem("userEmail") || "Account";
      accountButton.textContent = userEmail;
    } else {
      accountSection.style.display = "none";
    }
  
    // Logout functionality
    const logoutButton = document.getElementById("logout-button");
    if (logoutButton) {
      logoutButton.addEventListener("click", function (e) {
        e.preventDefault();
        localStorage.removeItem("isLoggedIn");
        localStorage.removeItem("userEmail");
        window.location.href = "login.html";
      });
    }
  });
  