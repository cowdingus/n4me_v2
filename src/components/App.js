import '../css/App.css';
import Sidebar from './Sidebar';
import Main from './Main';
import AddNoteForm from './AddNoteForm';
import EditNoteForm from './EditNoteForm';

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
    setIsAddingNote(true);
  }

  function displayEditNoteForm(id, title, content) {
    setFocusedNote({id, title, content});
    setIsEditingNote(true);
  }

  function handleCloseAddNoteForm(event) {
    event.preventDefault();

    setIsAddingNote(false);
  }

  function handleCloseEditNoteForm(event) {
    event.preventDefault();

    setIsEditingNote(false);
  }

  function handleAddNoteSubmit(event) {
    event.preventDefault();

    const title = event.target.title.value;
    const content = event.target.content.value;

    noteController.add(title, content);

    setIsAddingNote(false);

    event.target.reset();
  }

  function handleEditNoteSubmit(event) {
    event.preventDefault();

    const id = event.target.id.value;
    const title = event.target.title.value;
    const content = event.target.content.value;

    noteController.put(title, content, id);

    setIsEditingNote(false);

    setFocusedNote({id: -1, title: "", content: ""});
  }

  function handleDeleteNote(id, event) {
    event.preventDefault();

    noteController.delete(id);

    setIsEditingNote(false);
    setFocusedNote({id: -1, title: "", content: ""});
  }

  const [isAddingNote, setIsAddingNote] = useState(false);
  const [isEditingNote, setIsEditingNote] = useState(false);
  const [notes, noteController] = useNotes(new WebStorageNoteModel());

  const [focusedNote, setFocusedNote] = useState({id: -1, title: "", content: ""});

  return (
    <React.Fragment>
    <AddNoteForm
      handleClose={handleCloseAddNoteForm}
      handleSubmit={handleAddNoteSubmit}
      isVisible={isAddingNote}
    />
    <EditNoteForm 
      handleClose={handleCloseEditNoteForm}
      handleSubmit={handleEditNoteSubmit}
      handleDelete={handleDeleteNote}
      isVisible={isEditingNote}
      fillData={focusedNote}
    />
    <div className="app">
      <Sidebar addHandler={displayAddNoteForm}/>
      <Main notes={notes} editHandler={displayEditNoteForm} />
    </div>
    </React.Fragment>
  );
}

export default App;
