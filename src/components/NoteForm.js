import "../css/NoteForm.css";

import {useRef} from 'react';

function NoteForm({closeHandler, addHandler, innerRef}) {
  const titleInputRef = useRef(null);
  const contentInputRef = useRef(null);

  return (
    <div className="note-form">
      <form className="note-form-form" ref={innerRef}>
        <input
          type="text"
          className="note-form-form-input"
          placeholder="Title"
          ref={titleInputRef}
        />
        <textarea
          className="note-form-form-input-textarea"
          placeholder="Create a note..."
          ref={contentInputRef}
        />
        <div className="note-form-form-btn-container">
          <button type="submit" value="submit" onClick={(e) => {e.preventDefault(); addHandler(titleInputRef.current.value, contentInputRef.current.value); closeHandler();}}>
            <i className="ri-check-line"></i>
          </button>
          <button onClick={closeHandler}>
            <i className="ri-close-line"></i>
          </button>
        </div>
      </form>
    </div>
  );
}

export default NoteForm;
