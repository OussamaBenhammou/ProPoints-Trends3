// js2.js

document.addEventListener("DOMContentLoaded", function () {
    // Charger les tâches depuis le localStorage au chargement de la page
    loadTasks('taskListObj2', 'completedTaskListObj2');

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
    saveTasks('taskListObj2', 'completedTaskListObj2');
}

function completeTask(element) {
    var taskItem = element.parentElement;
    var completedTaskList = document.getElementById("completedTaskList");
    taskItem.querySelector("button").remove(); // Supprimer le bouton "Terminer"
    completedTaskList.appendChild(taskItem);

    // Ajouter une option pour supprimer une tâche terminée
    var removeButton = document.createElement("button");
    removeButton.textContent = "Supprimer";
    removeButton.onclick = function () {
        removeCompletedTask(this);
    };
    taskItem.appendChild(removeButton);

    // Sauvegarder les tâches dans le localStorage avec une clé spécifique
    saveTasks('taskListObj2', 'completedTaskListObj2');
}

function removeCompletedTask(element) {
    var completedTaskItem = element.parentElement;
    completedTaskItem.remove();

    // Sauvegarder les tâches dans le localStorage avec une clé spécifique
    saveTasks('taskListObj2', 'completedTaskListObj2');
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