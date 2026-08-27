let form = document.getElementById("registrationForm");
alert("Welcome to the Online Exam Registration!");

form.addEventListener("submit", function(event) {

    event.preventDefault();

    let name = document.getElementById("name").value;
    let email = document.getElementById("email").value;
    let password = document.getElementById("password").value;
    let confirmPassword = document.getElementById("confirmPassword").value;
    let message = document.getElementById("message");

    if (name == "" || email == "" || password == "" || confirmPassword == "") {
        message.innerHTML = "Please fill all the fields.";
        return;
    }
if (password.length < 6) {
    message.innerHTML = "Password must contain at least 6 characters.";
    return;
}

    if (password != confirmPassword) {
        message.innerHTML = "Passwords do not match.";
        return;
    }

    message.innerHTML = "Registration successful!";
});
