import "../css/App.css";
import Sidebar from "./Sidebar";
import Main from "./Main";
import AddNoteForm from "./AddNoteForm";
import EditNoteForm from "./EditNoteForm";

import React, { useState, useRef, useEffect } from "react";
import NoteController from "../controllers/NoteController";
import WebStorageNoteModel from "../models/WebStorageNoteModel";

function useNotes(noteModel) {
  const [notes, setNotes] = useState([]);
  const noteController = useRef(new NoteController(noteModel, setNotes));

  useEffect(() => {
    setNotes(noteController.current.read());
  }, []);

  return [notes, noteController.current];
}

function App() {
  const [popUpStack, setPopUpStack] = useState([]);

  const pushPopUp = (element) => {
    setPopUpStack([...popUpStack, element]);
  };
  const popPopUp = () => {
    setPopUpStack(popUpStack.slice(0, -1));
  };

  function displayAddNoteForm() {
    pushPopUp(
      <AddNoteForm
        key="1"
        handleSubmit={(note) => {noteController.add(note)}}
        handleClose={popPopUp}
      />
    );
  }

  function displayEditNoteForm(note) {
    pushPopUp(
      <EditNoteForm
        key="2"
        handleSubmit={(note) => {noteController.put(note)}}
        handleClose={popPopUp}
        handleDelete={(note) => {noteController.delete(note.id)}}
        note={note}
      />
    );
  }

  const [notes, noteController] = useNotes(new WebStorageNoteModel());

  return (
    <React.Fragment>
      {popUpStack}
      <div className="app">
        <Sidebar addHandler={displayAddNoteForm} />
        <Main notes={notes} editHandler={displayEditNoteForm} />
      </div>
    </React.Fragment>
  );
}

export default App;
