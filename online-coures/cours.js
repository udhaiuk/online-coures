document.getElementById('goBackBtn').style.display = "none";
displayLoginForm = () => {
    document.getElementById('login-form').style.display = "block";
    document.getElementById('continue-email-login-button').style.display = "none";
    document.getElementById('continue-gmail-login-button').style.display = "none";
    document.getElementById('goBackBtn').style.display = "block";
}
displayRegisterForm = () => {
    document.getElementById('register-form').style.display = "block";
    document.getElementById('continue-email-register-button').style.display = "none";
    document.getElementById('goBackBtn').style.display = "block";
}
originalLoginForm = () => {
    document.getElementById('login-form').style.display = "none";
    document.getElementById('continue-email-login-button').style.display = "block";
    document.getElementById('continue-gmail-login-button').style.display = "block";
    document.getElementById('goBackBtn').style.display = "none";
}