// js2.js

document.addEventListener("DOMContentLoaded", function () {
    // Charger les tâches depuis le localStorage au chargement de la page
    loadTasks('taskListObj6', 'completedTaskListObj6');
});

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