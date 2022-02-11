class WebStorageNoteModel {
  constructor() {
    this.storage = localStorage;

    if (!this.storage.getItem("lastNoteId")) {
      this.storage.setItem("notes", JSON.stringify([]));
      this.storage.setItem("lastNoteId", JSON.stringify(0));
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

    this._setNotes([...notes, {id: lastNoteId + 1, title, content}]);
    this._setLastNoteId(lastNoteId + 1);

    return lastNoteId;
  }

  put(title, content, id) {
    let notes = this._getNotes();

    const index = notes.findIndex((note) => note.id === id);
    notes[index] = {id, title, content};

    this._setNotes(notes);
  }

  delete(id) {
    const notes = this._getNotes();

    this._setNotes(notes.filter((note) => {
      return note.id !== id;
    }));
  }
}

export default WebStorageNoteModel;
