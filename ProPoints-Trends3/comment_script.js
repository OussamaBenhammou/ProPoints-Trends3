// Fonction pour ajouter un commentaire
function addComment() {
  let name = document.getElementById('name').value;
  let comment = document.getElementById('comment').value;

  if (name && comment) {
      let commentElement = document.createElement('div');
      commentElement.innerHTML = `<strong>${name}:</strong> ${comment}`;

      // Ajouter les boutons d'édition et de suppression au commentaire
      let editButton = document.createElement('button');
      editButton.innerText = 'Bewerk';
      editButton.onclick = function () {
          editComment(commentElement);
      };

      let deleteButton = document.createElement('button');
      deleteButton.innerText = 'Verwijder';
      deleteButton.onclick = function () {
          deleteComment(commentElement);
      };

      let addToCommentButton = document.createElement('button');
      addToCommentButton.innerText = 'Reageer';
      addToCommentButton.onclick = function () {
          replyToComment(commentElement);
      };

      let optionsDiv = document.createElement('div');
      optionsDiv.classList.add('comment-options');
      optionsDiv.appendChild(editButton);
      optionsDiv.appendChild(deleteButton);
      optionsDiv.appendChild(addToCommentButton);

      commentElement.appendChild(optionsDiv);

      document.getElementById('comments').appendChild(commentElement);

      // Sauvegarder le commentaire dans le localStorage
      saveComment({ name, comment });

      // Réinitialiser les champs de saisie
      document.getElementById('name').value = '';
      document.getElementById('comment').value = '';
  } else {
      alert('Vul alstublieft zowel uw naam als opmerking in.');
  }
}

// Fonction pour sauvegarder un commentaire dans le localStorage
function saveComment(comment) {
  let comments = JSON.parse(localStorage.getItem('comments')) || [];
  comments.push(comment);
  localStorage.setItem('comments', JSON.stringify(comments));
}

// Fonction pour charger les commentaires depuis le localStorage
function loadComments() {
  console.log("Loading comments...");
  let comments = JSON.parse(localStorage.getItem('comments')) || [];
  comments.forEach(function (commentObj) {
      let commentElement = document.createElement('div');
      commentElement.innerHTML = `<strong>${commentObj.name}:</strong> ${commentObj.comment}`;

      // Ajouter les boutons d'édition et de suppression au commentaire
      let editButton = document.createElement('button');
      editButton.innerText = 'Bewerk';
      editButton.onclick = function () {
          editComment(commentElement);
      };

      let deleteButton = document.createElement('button');
      deleteButton.innerText = 'Verwijder';
      deleteButton.onclick = function () {
          deleteComment(commentElement);
      };

      let addToCommentButton = document.createElement('button');
      addToCommentButton.innerText = 'Reageer';
      addToCommentButton.onclick = function () {
          replyToComment(commentElement);
      };

      let optionsDiv = document.createElement('div');
      optionsDiv.classList.add('comment-options');
      optionsDiv.appendChild(editButton);
      optionsDiv.appendChild(deleteButton);
      optionsDiv.appendChild(addToCommentButton);

      commentElement.appendChild(optionsDiv);

      document.getElementById('comments').appendChild(commentElement);
  });
}

// Fonction pour éditer un commentaire
function editComment(commentElement) {
  let editedText = prompt('Bewerk het commentaar:', commentElement.childNodes[0].textContent);
  if (editedText !== null) {
      commentElement.childNodes[0].textContent = editedText;
      // Ajouter du code pour sauvegarder la modification dans le localStorage si nécessaire
  }
}

// Fonction pour supprimer un commentaire
function deleteComment(commentElement) {
  if (confirm('Weet u zeker dat u dit commentaar wilt verwijderen?')) {
      let comments = JSON.parse(localStorage.getItem('comments')) || [];
      let commentText = commentElement.childNodes[0].textContent;

      // Filtrer les commentaires pour supprimer le bon
      comments = comments.filter(comment => comment.comment !== commentText);
      localStorage.setItem('comments', JSON.stringify(comments));

      // Supprimer le commentaire de la page
      commentElement.remove();
  }
}

// Fonction pour répondre à un commentaire
function replyToComment(commentElement) {
  let replyText = prompt('Uw reactie:');
  if (replyText) {
      let replyElement = document.createElement('div');
      replyElement.classList.add('reply');
      replyElement.innerHTML = `<strong>Uw antwoord:</strong> ${replyText}`;
      commentElement.appendChild(replyElement);

      // Ajouter du code pour sauvegarder la réponse dans le localStorage si nécessaire
  }
}

// Charger les commentaires lors du chargement de la page
document.addEventListener("DOMContentLoaded", function () {
  loadComments();
});

// Formulaire de soumission
document.getElementById('feedbackForm').addEventListener('submit', function (event) {
  event.preventDefault();
  addComment();
});
//     };