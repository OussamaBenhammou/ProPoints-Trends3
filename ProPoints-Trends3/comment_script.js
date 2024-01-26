// Functie om een commentaar toe te voegen
function addComment() {
    let name = document.getElementById('name').value;
    let comment = document.getElementById('comment').value;
  
    if (name && comment) {
      let commentElement = document.createElement('div');
      commentElement.innerHTML = `<strong>${name}:</strong> ${comment}`;
  
      // Voeg bewerk- en verwijderknoppen toe aan commentaar
      let editButton = document.createElement('button');
      editButton.innerText = 'Bewerk';
      editButton.onclick = function() {
        editComment(commentElement);
      };
  
      let deleteButton = document.createElement('button');
      deleteButton.innerText = 'Verwijder';
      deleteButton.onclick = function() {
        deleteComment(commentElement);
      };
  
      let optionsDiv = document.createElement('div');
      optionsDiv.classList.add('comment-options');
      optionsDiv.appendChild(editButton);
      optionsDiv.appendChild(deleteButton);
  
      commentElement.appendChild(optionsDiv);
  
      document.getElementById('comments').appendChild(commentElement);
  
      // Reset invoervelden
      document.getElementById('name').value = '';
      document.getElementById('comment').value = '';
    } else {
      alert('Vul alstublieft zowel uw naam als opmerking in.');
    }
  }
  
  // Formulierinzending verwerken
  document.getElementById('feedbackForm').addEventListener('submit', function(event) {
    event.preventDefault();
    addComment();
  });
  
  // Functie om een commentaar te bewerken
  function editComment(commentElement) {
    let editedText = prompt('Bewerk het commentaar:', commentElement.innerText.replace(/\n.*$/, ''));
    if (editedText !== null) {
      commentElement.innerText = editedText;
    }
  }
  
  // Functie om een commentaar te verwijderen
  function deleteComment(commentElement) {
    if (confirm('Weet u zeker dat u dit commentaar wilt verwijderen?')) {
      commentElement.remove();
    }
  }
  