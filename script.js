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
        { name: "Employee 1", points: 150 },
        { name: "Employee 2", points: 120 },
        { name: "Employee 3", points: 100 },
        // Voeg meer werknemers toe zoals nodig
    ];

    const leaderboardList = document.getElementById("leaderboard-list");

    // Vul het leaderboard in met de gegevens
    leaderboardData.forEach((employee, index) => {
        const leaderboardItem = document.createElement("li");
        leaderboardItem.classList.add("leaderboard-item");
        leaderboardItem.innerHTML = `${index + 1}. ${employee.name} - ${employee.points} points`;
        leaderboardList.appendChild(leaderboardItem);
    });
});

// JavaScript-functionaliteit om naar een specifieke doelstellingpagina te navigeren
function openGoalPage(goalPage) {
    window.location.href = goalPage;
}

// debut du code doelstellingen 1 voor brainstorming
window.onload = function() {
    loadTasks();
};

function addTask() {
    const taskContainer = document.getElementById('taskContainer');
    
    const taskElement = document.createElement('div');
    taskElement.classList.add('task');

    const taskContent = document.createElement('div');
    taskContent.classList.add('task-content');

    const taskTextarea = document.createElement('textarea');
    taskTextarea.placeholder = 'Objectif';
    taskTextarea.rows = 4;

    const doneButton = document.createElement('button');
    doneButton.textContent = 'Done';
    doneButton.onclick = function() {
        taskContainer.removeChild(taskElement);
        saveTasks();
    };

    taskContent.appendChild(taskTextarea);
    taskContent.appendChild(doneButton);
    taskElement.appendChild(taskContent);
    taskContainer.appendChild(taskElement);
}

function saveTasks() {
    const taskContainer = document.getElementById('taskContainer');
    const tasks = [];

    taskContainer.querySelectorAll('.task textarea').forEach(function(taskTextarea) {
        tasks.push(taskTextarea.value);
    });

    localStorage.setItem('tasks', JSON.stringify(tasks));
}

function loadTasks() {
    const taskContainer = document.getElementById('taskContainer');
    const tasks = JSON.parse(localStorage.getItem('tasks')) || [];

    tasks.forEach(function(taskText) {
        const taskElement = document.createElement('div');
        taskElement.classList.add('task');

        const taskContent = document.createElement('div');
        taskContent.classList.add('task-content');

        const taskTextarea = document.createElement('textarea');
        taskTextarea.value = taskText;

        const doneButton = document.createElement('button');
        doneButton.textContent = 'Done';
        doneButton.onclick = function() {
            taskContainer.removeChild(taskElement);
            saveTasks();
        };

        taskContent.appendChild(taskTextarea);
        taskContent.appendChild(doneButton);
        taskElement.appendChild(taskContent);
        taskContainer.appendChild(taskElement);
    });
}

function saveAndRedirect() {
    saveTasks();
    window.location.href = 'index.html';
}


// fin du code doelstellingen 1 voor brainstorming
