import "../css/NoteForm.css";

function AddNoteForm({handleSubmit, handleClose, isVisible}) {
  return (
    <div className={"note-form" + (isVisible ? "" : " hidden") }>
      <form className="note-form-form" id="add-note-form" onSubmit={handleSubmit}>
        <input
          type="text"
          name="title"
          className="note-form-form-input"
          placeholder="Title"
        />
        <textarea
          name="content"
          className="note-form-form-input-textarea"
          placeholder="Create a note..."
        />
        <div className="note-form-form-btn-container">
          <button type="submit" form="add-note-form">
            <i className="ri-check-line"></i>
          </button>
          <button onClick={handleClose}>
            <i className="ri-close-line"></i>
          </button>
        </div>
      </form>
    </div>
  );
}

export default AddNoteForm;
