document.addEventListener("DOMContentLoaded", function () {
    const loginForm = document.getElementById("login-form");
    const registerForm = document.getElementById("register-form");
    const toggleButton = document.getElementById("toggle-register");

    // Function to switch between login and registration forms
    function toggleForms() {
        if (loginForm.style.display === "block") {
            loginForm.style.display = "none";
            registerForm.style.display = "block";
        } else {
            loginForm.style.display = "block";
            registerForm.style.display = "none";
        }
    }

    toggleButton.addEventListener("click", toggleForms);

    const loginButton = document.getElementById("login-button");
    const registerButton = document.getElementById("register-button");

    // Example login and registration form submission logic
    loginButton.addEventListener("click", function (e) {
        e.preventDefault();
        const loginUsername = document.getElementById("login-username").value;
        const loginPassword = document.getElementById("login-password").value;
        // Add your login logic here
        console.log("Login clicked. Username: " + loginUsername + " Password: " + loginPassword);
    });

    registerButton.addEventListener("click", function (e) {
        e.preventDefault();
        const fullName = document.getElementById("full-name").value;
        const email = document.getElementById("email").value;
        const registerUsername = document.getElementById("register-username").value;
        const registerPassword = document.getElementById("register-password").value;
        const confirmPassword = document.getElementById("confirm-password").value;

        if (registerPassword !== confirmPassword) {
            // Passwords do not match
            console.log("Password and confirm password do not match.");
            return;
        }

        // Add your registration logic here
        console.log("Register clicked. Full Name: " + fullName + ", Email: " + email + ", Username: " + registerUsername + ", Password: " + registerPassword);
    });
});
