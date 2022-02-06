import "../css/NoteForm.css";

function NoteForm() {
  return (
    <div className="note-form">
      <form className="note-form-form">
        <input
          type="text"
          className="note-form-form-input"
          placeholder="Title"
        />
        <textarea
          className="note-form-form-input-textarea"
          placeholder="Create a note..."
        />
        <div className="note-form-form-btn-container">
          <button type="submit" value="submit">
            <i class="ri-check-line"></i>
          </button>
        </div>
      </form>
    </div>
  );
}

export default NoteForm;
