export default class NoteController {
  constructor(model, setNotesFn) {
    this.model = model;
    this.setNotesFn = setNotesFn;
  }

  read(id) {
    try {
      return this.model.read(id);
    } catch (e) {
      console.error("Failed to read note with id " + id + ": " + e.message);
    }
  }

  add(title, content) {
    try {
      const insertId = this.model.add(title, content);
      this.setNotesFn(this.model.read());
      return insertId;
    } catch (e) {
      console.error("Failed to add note: " + e.message);
    }
  }

  put(title, content, id) {
    try {
      this.model.put(title, content, id);
      this.setNotesFn(this.model.read());
    } catch (e) {
      console.error("Failed to update note: " + e.message);
    }
  }

  delete(id) {
    try {
      this.model.delete(id);
      this.setNotesFn(this.model.read());
    } catch (e) {
      console.error("Failed to remove note with id " + id + ": " + e.message);
    }
  }
}

