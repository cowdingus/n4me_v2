import '../css/App.css';
import Sidebar from './Sidebar';
import Main from './Main';
import NoteForm from './NoteForm';

import React from 'react';

function App() {
  return (
    <React.Fragment>
    <NoteForm />
    <div className="app">
      <Sidebar />
      <Main />
    </div>
    </React.Fragment>
  );
}

export default App;
