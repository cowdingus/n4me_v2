import '../css/NoteForm.css';

import {useState, useEffect} from 'react';

function EditNoteForm({fillData, isVisible, handleSubmit, handleClose}) {
  const [title, setTitle] = useState("");
  const [content, setContent] = useState("");

  useEffect(() => {
    setTitle(fillData.title);
    setContent(fillData.content);
  }, [fillData]);

  function handleContentChange(event) {
    setContent(event.target.value);
  }

  function handleTitleChange(event) {
    setTitle(event.target.value);
  }

  return (
    <div className={"note-form" + (isVisible ? "" : " hidden")}>
      <form className="note-form-form" onSubmit={handleSubmit}>
        <input
          type="number"
          name="id"
          value={fillData.id}
          hidden readOnly
        />
        <input
          type="text"
          name="title"
          placeholder="Title"
          value={title}
          onChange={handleTitleChange}
          className="note-form-form-input"
        />
        <textarea
          name="content"
          placeholder="Write your note here..."
          value={content}
          onChange={handleContentChange}
          className="note-form-form-input-textarea"
        />
        <div className="note-form-form-btn-container">
          <button type="submit" value="submit">
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

export default EditNoteForm;
