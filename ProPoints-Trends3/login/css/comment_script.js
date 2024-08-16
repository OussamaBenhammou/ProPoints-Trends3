// Functie om een commentaar toe te voegen
function addComment() {
    let name = document.getElementById('name').value.trim();
    let comment = document.getElementById('comment').value.trim();

    if (name && comment) {
        let commentElement = document.createElement('div');
        commentElement.classList.add('comment');
        commentElement.innerHTML = `<strong>${name}:</strong> <span class="comment-text">${comment}</span>`;

        // Voeg bewerk-, verwijder- en reageerknoppen toe aan commentaar
        let editButton = createButton('Bewerk', () => editComment(commentElement));
        let deleteButton = createButton('Verwijder', () => deleteComment(commentElement));
        let replyButton = createButton('Reageer', () => showReplyField(commentElement));

        let optionsDiv = document.createElement('div');
        optionsDiv.classList.add('comment-options');
        [editButton, deleteButton, replyButton].forEach(button => optionsDiv.appendChild(button));

        commentElement.appendChild(optionsDiv);
        document.getElementById('comments').appendChild(commentElement);

        // Reset invoervelden
        document.getElementById('name').value = '';
        document.getElementById('comment').value = '';
    } else {
        alert('Vul alstublieft zowel uw naam als opmerking in.');
    }
}

// Helperfunctie om knoppen te maken
function createButton(text, onClick) {
    let button = document.createElement('button');
    button.innerText = text;
    button.onclick = onClick;
    return button;
}

// Functie om het reactieveld en opslaan knop te tonen voor een reactie
function showReplyField(commentElement) {
    let replyField = document.createElement('textarea'); // Veranderd van input naar textarea
    replyField.classList.add('reply-field');
    replyField.style.height = '100px'; // Stel de hoogte in op 100px

    let saveButton = createButton('Opslaan', () => {
        saveReply(commentElement, replyField.value);
        commentElement.removeChild(replyField);
        commentElement.removeChild(saveButton);
    });

    commentElement.appendChild(replyField);
    commentElement.appendChild(saveButton);
}

// Functie om de reactie op te slaan en te tonen
function saveReply(commentElement, replyText) {
    if (replyText.trim()) {
        let replyDiv = document.createElement('div');
        replyDiv.classList.add('reply');
        replyDiv.innerHTML = `<strong style="color: red;">Admin:</strong> ${replyText}`;
        commentElement.appendChild(replyDiv);
    }
}

// Functie om een commentaar te bewerken
function editComment(commentElement) {
    let currentText = commentElement.querySelector('.comment-text').innerText;
    let editedText = prompt('Bewerk het commentaar:', currentText);
    if (editedText !== null) {
        commentElement.querySelector('.comment-text').innerText = editedText;
    }
}

// Functie om een commentaar te verwijderen
function deleteComment(commentElement) {
    if (confirm('Weet u zeker dat u dit commentaar wilt verwijderen?')) {
        commentElement.remove();
    }
}

// Formulierinzending verwerken
document.getElementById('feedbackForm').addEventListener('submit', function (event) {
    event.preventDefault();
    addComment();
});