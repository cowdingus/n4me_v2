import "../css/Main.css";
import NoteCard from "./NoteCard";

import Masonry from "react-masonry-css";

function Main({ notes, editHandler }) {
  const groupBy = (data, key) => {
    return data.reduce(function (storage, item) {
      var group = item[key];

      storage[group] = storage[group] || [];

      storage[group].push(item);

      return storage;
    }, {});
  };

  const notesByGroups = groupBy(notes, "group");

  return (
    <main className="main-section">
      {Object.entries(notesByGroups).map(([groupName, notes]) => (
        <div key={groupName}>
          <h1 style={{marginTop: 0}}>{groupName ? groupName : "Ungrouped Notes"}</h1>
          <Masonry
            breakpointCols={{
              default: 4,
              1100: 3,
              700: 2,
              500: 1
            }}
            className="main-section-grid"
            columnClassName="main-section-grid_column"
          >
            {notes.map((note) => (
              <NoteCard key={note.id} note={note} handleClick={editHandler} />
            ))}
          </Masonry>
        </div>
      ))}
    </main>
  );
}

export default Main;
