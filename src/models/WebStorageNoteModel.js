class WebStorageNoteModel {
  constructor() {
    this.storage = localStorage;

    if (!this.storage.getItem("lastNoteId")) {
      this._setNotes([]);
      this._setLastNoteId(0);
    }
  }

  _getNotes() {
    return JSON.parse(this.storage.getItem("notes"));
  }

  _getLastNoteId() {
    return JSON.parse(this.storage.getItem("lastNoteId"));
  }

  _setNotes(notes) {
    return this.storage.setItem("notes", JSON.stringify(notes));
  }

  _setLastNoteId(id) {
    return this.storage.setItem("lastNoteId", JSON.stringify(id));
  }

  read(id) {
    const notes = this._getNotes();

    notes.forEach(note => {
      note.creationDate = new Date(note.creationDate);
      note.lastEditDate = new Date(note.lastEditDate);
    });

    if (id === undefined) {
      return notes;
    }

    for (let note of notes) {
      if (note.id === id) return note;
    }
  }

  add(title, content) {
    const notes = this._getNotes();
    const lastNoteId = this._getLastNoteId();

    const creationDate = new Date();
    const editDate = new Date();

    this._setNotes([...notes, {id: lastNoteId + 1, title, content, creationDate, lastEditDate: editDate}]);
    this._setLastNoteId(lastNoteId + 1);

    return lastNoteId;
  }

  put(title, content, id) {
    let notes = this._getNotes();

    const editDate = new Date();

    const index = notes.findIndex(note => note.id == id);
    notes[index] = {...notes[index], title, content, lastEditDate: editDate};

    this._setNotes(notes);
  }

  delete(id) {
    const notes = this._getNotes();

    this._setNotes(notes.filter((note) => {
      return note.id != id;
    }));
  }
}

export default WebStorageNoteModel;
