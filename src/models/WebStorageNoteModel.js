function Note({id, title, content, creationDate = Date(), editDate = Date(), group = "", tags = []}) {
  this.id = id;
  this.title = title;
  this.content = content;
  this.creationDate = new Date(creationDate);
  this.editDate = new Date(editDate);
  this.group = group;
  this.tags = tags;
}

class WebStorageNoteModel {
  constructor() {
    this.storage = localStorage;

    if (!this.storage.getItem("lastNoteId")) {
      this._setNotes([]);
      this._setLastNoteId(0);
    }
  }

  _getNotes() {
    return (JSON.parse(this.storage.getItem("notes"))).map(note => new Note(note));
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

  add({title, content, group = "", tags = []}) {
    const notes = this._getNotes();
    const lastNoteId = this._getLastNoteId();

    const creationDate = new Date();
    const editDate = new Date();

    this._setNotes([...notes, new Note({id: lastNoteId + 1, title, content, creationDate, editDate, group, tags})]);
    this._setLastNoteId(lastNoteId + 1);

    return lastNoteId;
  }

  put({title, content, group, tags, id}) {
    let notes = this._getNotes();

    const editDate = new Date();

    const index = notes.findIndex(note => note.id == id);
    notes[index] = {...notes[index], title, content, group, tags, editDate};

    this._setNotes(notes);
  }

  delete(id) {
    const notes = this._getNotes();

    this._setNotes(notes.filter((note) => {
      return note.id != id;
    }));
  }
}

export {Note};
export default WebStorageNoteModel;
