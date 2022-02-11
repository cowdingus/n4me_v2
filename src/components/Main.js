import "../css/Main.css";
import NoteCard from "./NoteCard";

function Main({ notes, editHandler }) {
  return (
    <main className="main-section">
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
    </main>
  );
}

export default Main;
