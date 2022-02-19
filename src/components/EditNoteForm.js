import '../css/NoteForm.css';

import {useState, useEffect} from 'react';

function EditNoteForm({note, handleSubmit, handleClose, handleDelete}) {
  const [title, setTitle] = useState("");
  const [content, setContent] = useState("");
  const [group, setGroup] = useState("");
  const [tags, setTags] = useState("");

  useEffect(() => {
    setTitle(note.title);
    setContent(note.content);
    setTags(note.tags.toString());
    setGroup(note.group);
  }, [note]);

  function handleContentChange(event) {
    setContent(event.target.value);
  }

  function handleTitleChange(event) {
    setTitle(event.target.value);
  }

  function handleTagsChange(event) {
    setTags(event.target.value);
  }

  function handleGroupChange(event) {
    setGroup(event.target.value);
  }

  function invokeSubmitHandler(event) {
    event.preventDefault();

    handleSubmit({title, content, group, tags: tags.split(","), id: note.id});

    handleClose();
  }

  function invokeCloseHandler(event) {
    event.preventDefault();

    handleClose();
  }

  function invokeDeleteHandler(event) {
    event.preventDefault();

    handleDelete(note);

    handleClose();
  }

  return (
    <div className="note-form">
      <form className="note-form-form" onSubmit={invokeSubmitHandler}>
        <input
          type="number"
          name="id"
          value={note.id}
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
        <input
          type="text"
          name="group"
          placeholder="group"
          value={group}
          onChange={handleGroupChange}
          className="note-form-form-input"
        />
        <input
          type="text"
          name="tags"
          placeholder="tags"
          value={tags}
          onChange={handleTagsChange}
        />
        <div className="note-form-form-btn-container">
          <button type="submit" value="submit">
            <i className="ri-check-line"></i>
          </button>
          <button onClick={invokeCloseHandler}>
            <i className="ri-close-line"></i>
          </button>
          <button onClick={invokeDeleteHandler}>
            <i className="ri-delete-bin-line"></i>
          </button>
        </div>
      </form>
    </div>
  );
}

export default EditNoteForm;
