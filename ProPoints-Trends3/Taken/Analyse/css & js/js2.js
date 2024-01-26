// js2.js

document.addEventListener("DOMContentLoaded", function () {
    // Charger les tâches depuis le localStorage au chargement de la page
    loadTasks('taskListObj4', 'completedTaskListObj4');

    // Ajouter un gestionnaire d'événements pour la touche "Enter" sur le champ de saisie
    var taskInput = document.getElementById("newTask");
    taskInput.addEventListener("keypress", function (event) {
        if (event.key === "Enter") {
            addTask();
        }
    });
});

function addTask() {
    var taskInput = document.getElementById("newTask");
    var taskText = taskInput.value.trim();

    if (taskText !== "") {
        var taskList = document.getElementById("taskList");
        var newTaskItem = document.createElement("li");
        newTaskItem.innerHTML = taskText + ' <button onclick="completeTask(this)">Terminer</button>';
        taskList.appendChild(newTaskItem);

        // Effacer le champ de saisie après l'ajout
        taskInput.value = "";
    }

    // Sauvegarder les tâches dans le localStorage avec une clé spécifique
    saveTasks('taskListObj4', 'completedTaskListObj4');
}

function completeTask(element) {
    var taskItem = element.parentElement;
    var completedTaskList = document.getElementById("completedTaskList");
    taskItem.querySelector("button").remove(); // Supprimer le bouton "Terminer"
    completedTaskList.appendChild(taskItem);

    // Ne plus attacher directement le gestionnaire à removeButton
    // Utiliser la délégation d'événements pour s'assurer que les événements sont gérés
    completedTaskList.addEventListener("click", function (event) {
        if (event.target && event.target.textContent === "Delete") {
            removeCompletedTask(event.target);
        }
    });

    // Sauvegarder les tâches dans le localStorage avec une clé spécifique
    saveTasks('taskListObj4', 'completedTaskListObj4');
}


function removeCompletedTask(element) {
    var completedTaskItem = element.parentElement;
    completedTaskItem.remove();

    // Sauvegarder les tâches dans le localStorage avec une clé spécifique
    saveTasks('taskListObj4', 'completedTaskListObj4');
}


function saveTasks(taskKey, completedTaskKey) {
    var taskList = document.getElementById("taskList").innerHTML;
    var completedTaskList = document.getElementById("completedTaskList").innerHTML;

    localStorage.setItem(taskKey, taskList);
    localStorage.setItem(completedTaskKey, completedTaskList);
}

function loadTasks(taskKey, completedTaskKey) {
    var taskList = localStorage.getItem(taskKey);
    var completedTaskList = localStorage.getItem(completedTaskKey);

    if (taskList) {
        document.getElementById("taskList").innerHTML = taskList;
    }

    if (completedTaskList) {
        document.getElementById("completedTaskList").innerHTML = completedTaskList;
    }
}