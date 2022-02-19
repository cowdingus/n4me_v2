import "../css/NoteForm.css";

function AddNoteForm({handleSubmit, handleClose}) {
  function invokeSubmitHandler(event) {
    event.preventDefault();

    handleSubmit({
      title: event.target.title.value,
      content: event.target.content.value,
      group: "",
      tags: []
    });

    handleClose();
  }

  function invokeCloseHandler(event) {
    event.preventDefault();

    handleClose();
  }

  return (
    <div className="note-form">
      <form className="note-form-form" id="add-note-form" onSubmit={invokeSubmitHandler}>
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
          <button onClick={invokeCloseHandler}>
            <i className="ri-close-line"></i>
          </button>
        </div>
      </form>
    </div>
  );
}

export default AddNoteForm;
