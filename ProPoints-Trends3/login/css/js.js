document.addEventListener("DOMContentLoaded", function () {
    document.getElementById("submitBtn").addEventListener("click", function () {
        loginUser();
    });
});

function loginUser() {
    var email = document.getElementById("email").value;
    var password = document.getElementById("password").value;
    var errorMsg = document.getElementById("error-msg");

    // Simulation d'une vérification de connexion
    if (email === "admin@admin.be" && password === "admin123") {
        // Redirection vers home.html après une connexion réussie
        window.location.href = "homelogin.html";
    } else {
        errorMsg.textContent = "Incorrect email or password!";
    }
}

function redirectHome() {
    // Vous pouvez utiliser window.location.href pour rediriger vers home.html
    window.location.href = "hpmelogin.html";
}