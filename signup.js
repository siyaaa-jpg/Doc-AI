function showSignupForm() {
    document.getElementById("login-form").style.display = "none";
    document.getElementById("signup-form").style.display = "block";
}

function guestLogin() {
    document.getElementById("message").innerText = "Guest login functionality is not implemented yet.";
    // You can implement guest login logic here
}

function login() {
    const username = document.getElementById("username").value;
    const password = document.getElementById("password").value;

    const storedUser = JSON.parse(localStorage.getItem(username));

    if (storedUser && storedUser.password === password) {
        document.getElementById("message").innerText = `Welcome back, ${username}!`;
    } else {
        document.getElementById("message").innerText = "Invalid username or password.";
    }
}

function signup() {
    const newUsername = document.getElementById("new-username").value;
    const newPassword = document.getElementById("new-password").value;

    // Check if the user already exists in local storage
    if (localStorage.getItem(newUsername)) {
        document.getElementById("message").innerText = "Username already taken. Choose another one.";
    } else {
        // Save the new user to local storage
        const newUser = {
            username: newUsername,
            password: newPassword
        };

        localStorage.setItem(newUsername, JSON.stringify(newUser));

        document.getElementById("message").innerText = `User ${newUsername} registered successfully.`;
        document.getElementById("login-form").style.display = "block";
        document.getElementById("signup-form").style.display = "none";
    }
}
