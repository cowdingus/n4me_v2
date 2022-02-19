import "../css/Main.css";
import NoteCard from "./NoteCard";

import Masonry from "react-masonry-css"

function Main({ notes, editHandler }) {
  return (
    <main className="main-section">
      <Masonry
        breakpointCols={4}
        className="main-section-grid"
        columnClassName="main-section-grid_column">
      {notes.map((note) =>
        <NoteCard
          key={note.id}
          id={note.id}
          title={note.title}
          content={note.content}
          creationDate={note.creationDate}
          lastEditDate={note.lastEditDate}
          handleClick={editHandler}
        />
      )}
      </Masonry>
    </main>
  );
}

export default Main;
