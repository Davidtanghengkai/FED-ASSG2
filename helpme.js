document.addEventListener("DOMContentLoaded", function () {
    // Make sure document is ready
    const APIKEY = "6796f31df9d2bb1fcb181e26";

    // Hide message initially
    document.getElementById("login-msg").style.display = "none";
  
    //[STEP 1]: Create our login form submit listener
    document.getElementById("login-submit").addEventListener("click", function (e) {
        // Prevent the default form submission
        e.preventDefault();
  
        //[STEP 2]: Retrieve form data
        let loginEmail = document.getElementById("login-email").value;
        let loginPassword = document.getElementById("login-password").value;
  
        //[STEP 3]: Get form values when user clicks login
        let jsondata = {
            "email": loginEmail,
            "password": loginPassword
        };
  
        //[STEP 4]: Create our AJAX settings (POST request)
        let settings = {
            method: "POST", // Use POST to send login credentials
            headers: {
                "Content-Type": "application/json",
                "x-apikey": APIKEY,
                "Cache-Control": "no-cache"
            },
            body: JSON.stringify(jsondata)
        };
  
        //[STEP 5]: Send the AJAX request
        fetch("https://emailauthenticator-50e0.restdb.io/rest/email  ", settings)
            .then(response => response.json())
            .then(data => {
                console.log(data);
                if (data.success) {
                    // Login successful - Show message and redirect
                    document.getElementById("login-msg").style.display = "block";
                    document.getElementById("login-msg").innerText = "Login successful!";
                    document.getElementById("login-msg").classList.remove("error");
                    document.getElementById("login-msg").classList.add("success");

                    setTimeout(function () {
                        document.getElementById("login-msg").style.display = "none";
                        // You can redirect here if needed
                        window.location.href = "/dashboard"; // Redirect to the dashboard or other page
                    }, 3000);
                } else {
                    // Show error message if login fails
                    document.getElementById("login-msg").style.display = "block";
                    document.getElementById("login-msg").innerText = "Login failed. Please try again.";
                    document.getElementById("login-msg").classList.remove("success");
                    document.getElementById("login-msg").classList.add("error");
                }
            })
            .catch(error => {
                console.log("Error:", error);
                document.getElementById("login-msg").style.display = "block";
                document.getElementById("login-msg").innerText = "An error occurred. Please try again later.";
                document.getElementById("login-msg").classList.remove("success");
                document.getElementById("login-msg").classList.add("error");
            });
    }); // End login submit listener
});
