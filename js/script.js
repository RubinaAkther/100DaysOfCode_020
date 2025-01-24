const notes = document.querySelector('.notes');
const createNote = document.querySelector('.creat-btn');

function showNote() {
  const savedNotes = JSON.parse(localStorage.getItem('notes')) || [];
  notes.innerHTML = '';
  savedNotes.forEach((noteContent) => {
    addNoteElement(noteContent);
  });
}

function saveNote() {
  const allNotes = Array.from(document.querySelectorAll('.input-box')).map(
    (note) => note.innerHTML
  );
  localStorage.setItem('notes', JSON.stringify(allNotes));
}

function addNoteElement(content = '') {
  const inputBox = document.createElement('p');
  const img = document.createElement('img');

  inputBox.className = 'input-box';
  inputBox.setAttribute('contenteditable', 'true');
  inputBox.innerHTML = content;

  img.src = 'images/delete.png';
  img.alt = 'delete-icon';

  notes.appendChild(inputBox).appendChild(img);

  inputBox.addEventListener('keyup', saveNote);

  img.addEventListener('click', () => {
    inputBox.remove();
    saveNote();
  });
}

createNote.addEventListener('click', () => {
  addNoteElement();
});

showNote();
