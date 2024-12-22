// Initialisierung von Notizen, Archiv und Papierkorb
let notesTitles = ["Termin", "Einkaufsliste"]; // Titel der Notizen
let notes = ["Physio", "Essen"];     // Inhalte der Notizen

let trashNotesTitles = []; // Titel der Notizen im Papierkorb
let trashNotes = [];       // Inhalte der Notizen im Papierkorb

let archivNotesTitles = []; // Titel der archivierten Notizen
let archivNotes = [];       // Inhalte der archivierten Notizen

// Funktion zum Rendern der normalen Notizen
function renderNotes() {
  let contentRef = document.getElementById('content');
  contentRef.innerHTML = ""; // Leert den Container

  // Fügt jede Notiz ins HTML ein
  for (let indexNote = 0; indexNote < notes.length; indexNote++) {
    contentRef.innerHTML += getNoteTemplate(indexNote);
  }
}

// Funktion zum Rendern der archivierten Notizen
function renderArchivNotes() {
  let archivContentRef = document.getElementById('archiv_content');
  archivContentRef.innerHTML = ""; // Leert den Container

  // Fügt jede archivierte Notiz ins HTML ein
  for (let indexArchivNote = 0; indexArchivNote < archivNotes.length; indexArchivNote++) {
    archivContentRef.innerHTML += getArchivNoteTemplate(indexArchivNote);
  }
}

// Funktion zum Rendern der Notizen im Papierkorb
function renderTrashNotes() {
  let trashContentRef = document.getElementById('trash_content');
  trashContentRef.innerHTML = ""; // Leert den Container

  // Fügt jede Notiz im Papierkorb ins HTML ein
  for (let indexTrashNote = 0; indexTrashNote < trashNotes.length; indexTrashNote++) {
    trashContentRef.innerHTML += getTrashNoteTemplate(indexTrashNote);
  }
}

// Fügt eine neue Notiz hinzu
function addNote() {
  let titleInputRef = document.getElementById('note_input_title');
  let titleInput = titleInputRef.value; // Titel aus Eingabefeld
  let noteInputRef = document.getElementById('note_input');
  let noteInput = noteInputRef.value; // Inhalt aus Eingabefeld

  if (!titleInput.trim() || !noteInput.trim()) {
    alert("Bitte alle Felder ausfüllen!");
    return; // Bricht ab, wenn ein Feld leer ist
  }

  notesTitles.push(titleInput); // Speichert den Titel
  notes.push(noteInput);        // Speichert den Inhalt

  renderNotes(); // Aktualisiert die Anzeige
  titleInputRef.value = ""; // Leert das Eingabefeld
  noteInputRef.value = "";
}

// Verschiebt eine Notiz in den Papierkorb
function noteToTrash(indexNote) {
  trashNotesTitles.push(notesTitles.splice(indexNote, 1)[0]);
  trashNotes.push(notes.splice(indexNote, 1)[0]);

  renderNotes();
  renderTrashNotes();
}

// Verschiebt eine Notiz ins Archiv
function noteToArchiv(indexNote) {
  archivNotesTitles.push(notesTitles.splice(indexNote, 1)[0]);
  archivNotes.push(notes.splice(indexNote, 1)[0]);

  renderNotes();
  renderArchivNotes();
}

// Verschiebt eine archivierte Notiz in den Papierkorb
function archivToTrash(indexArchivNote) {
  trashNotesTitles.push(archivNotesTitles.splice(indexArchivNote, 1)[0]);
  trashNotes.push(archivNotes.splice(indexArchivNote, 1)[0]);

  renderArchivNotes();
  renderTrashNotes();
}

// Verschiebt eine archivierte Notiz zurück in die normalen Notizen
function archivToNote(indexArchivNote) {
  notesTitles.push(archivNotesTitles.splice(indexArchivNote, 1)[0]);
  notes.push(archivNotes.splice(indexArchivNote, 1)[0]);

  renderArchivNotes();
  renderNotes();
}

// Verschiebt eine Notiz aus dem Papierkorb ins Archiv
function trashToArchiv(indexTrashNote) {
    archivNotesTitles.push(trashNotesTitles.splice(indexTrashNote, 1)[0]);
    archivNotes.push(trashNotes.splice(indexTrashNote, 1)[0]);
  
    renderTrashNotes();
    renderArchivNotes();
  }
  

// Verschiebt eine Notiz aus dem Papierkorb zurück in die normalen Notizen
function trashToNote(indexTrashNote) {
  notesTitles.push(trashNotesTitles.splice(indexTrashNote, 1)[0]);
  notes.push(trashNotes.splice(indexTrashNote, 1)[0]);

  renderTrashNotes();
  renderNotes();
}

// Löscht eine Notiz endgültig aus dem Papierkorb
function deleteNote(indexTrashNote) {
  trashNotesTitles.splice(indexTrashNote, 1);
  trashNotes.splice(indexTrashNote, 1);

  renderTrashNotes();
}
