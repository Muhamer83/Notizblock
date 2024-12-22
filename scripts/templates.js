

// Template für eine normale Notiz
function getNoteTemplate(indexNote) {
  return `
    <div class="note">
      <h3>${notesTitles[indexNote]}</h3>
      <p>${notes[indexNote]}</p>
      <div>
        <button onclick="noteToTrash(${indexNote})" class="btn">X</button>
        <button onclick="noteToArchiv(${indexNote})" class="btn">A</button>
      </div>
    </div>
  `;
}

// Template für eine archivierte Notiz
function getArchivNoteTemplate(indexArchivNote) {
  return `
    <div class="note">
      <h3>${archivNotesTitles[indexArchivNote]}</h3>
      <p>${archivNotes[indexArchivNote]}</p>
      <div>
        <button onclick="archivToTrash(${indexArchivNote})" class="btn">X</button>
        <button onclick="archivToNote(${indexArchivNote})" class="btn">N</button>
      </div>
    </div>
  `;
}

// Template für eine Notiz im Papierkorb
function getTrashNoteTemplate(indexTrashNote) {
  return `
    <div class="note">
      <h3>${trashNotesTitles[indexTrashNote]}</h3>
      <p>${trashNotes[indexTrashNote]}</p>
      <div>
        <button onclick="deleteNote(${indexTrashNote})" class="btn">X</button>
        <button onclick="trashToNote(${indexTrashNote})" class="btn">N</button>
        <button onclick="trashToArchiv(${indexTrashNote})" class="btn">A</button>
      </div>
    </div>
  `;
}


function getTrashNoteTemplate(indexTrashNote) {
  return `
    <div class="note">
      <h3>${trashNotesTitles[indexTrashNote]}</h3>
      <p>${trashNotes[indexTrashNote]}</p>
      <div>
        <button onclick="deleteNote(${indexTrashNote})" class="btn">X</button>
        <button onclick="trashToNote(${indexTrashNote})" class="btn">N</button>
        <button onclick="trashToArchiv(${indexTrashNote})" class="btn">A</button>
      </div>
    </div>
  `;
}
