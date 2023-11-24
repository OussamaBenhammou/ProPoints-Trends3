document.addEventListener("DOMContentLoaded", function () {
    const loginForm = document.getElementById("login-form");
    loginForm.addEventListener("submit", function (e) {
        e.preventDefault();
        const username = document.getElementById("username").value;
        const password = document.getElementById("password").value;

        // Voer hier de inlogvalidatie uit. Dit is een eenvoudig voorbeeld.
        if (username === "gebruiker" && password === "wachtwoord") {
            alert("Inloggen gelukt!");

            window.location.href = "index.html";
            // Je kunt hier doorverwijzen naar een andere pagina of extra acties uitvoeren.
        } else {
            alert("Ongeldige gebruikersnaam of wachtwoord. Probeer opnieuw.");
        }
    });
});


// Voorbeeld JavaScript-functionaliteit voor het dynamisch invullen van het leaderboard
document.addEventListener("DOMContentLoaded", function () {
    // Simuleer leaderboard-gegevens (gebruik je eigen logica om werkelijke gegevens op te halen)
    const leaderboardData = [
        { name: "Werknemer 1", points: 150 },
        { name: "Werknemer 2", points: 120 },
        { name: "Werknemer 3", points: 100 },
        // Voeg meer werknemers toe zoals nodig
    ];

    const leaderboardList = document.getElementById("leaderboard-list");

    // Vul het leaderboard in met de gegevens
    leaderboardData.forEach((employee, index) => {
        const leaderboardItem = document.createElement("li");
        leaderboardItem.classList.add("leaderboard-item");
        leaderboardItem.innerHTML = `${index + 1}. ${employee.name} - ${employee.points} punten`;
        leaderboardList.appendChild(leaderboardItem);
    });
});

// JavaScript-functionaliteit om naar een specifieke doelstellingpagina te navigeren
function openGoalPage(goalPage) {
    window.location.href = goalPage;
}