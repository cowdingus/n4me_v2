import '../css/App.css';
import Sidebar from './Sidebar';
import Main from './Main';
import NoteForm from './NoteForm';

import React, {useState, useRef, useEffect} from 'react';
import NoteController from '../controllers/NoteController';
import WebStorageNoteModel from '../models/WebStorageNoteModel';

function useNotes(noteModel) {
  const [notes, setNotes] = useState([]);
  const noteController = useRef(new NoteController(noteModel, setNotes));

  useEffect(() => {
    setNotes(noteController.current.read());
  }, []);

  return [notes, noteController.current];
}

function App() {
  function displayAddNoteForm() {
    setIsEditing(true);
  }

  function displayEditNoteForm() {
    setIsEditing(true);
  }

  function closeNoteForm() {
    setIsEditing(false);
  }

  function addNote(title, content) {
    noteController.add(title, content);
  }

  const noteFormRef = useRef(null);

  const [isEditing, setIsEditing] = useState(false);
  const [notes, noteController] = useNotes(new WebStorageNoteModel());

  return (
    <React.Fragment>
    {isEditing && <NoteForm closeHandler={closeNoteForm} addHandler={addNote} innerRef={noteFormRef} />}
    <div className="app">
      <Sidebar addHandler={displayAddNoteForm}/>
      <Main notes={notes} editHandler={displayEditNoteForm} />
    </div>
    </React.Fragment>
  );
}

export default App;
