import "../css/Main.css";
import NoteCard from "./NoteCard";

function Main({ notes, editHandler }) {
  return (
    <main className="main-section">
      {notes.map((note) =>
        <NoteCard
          key={note.id}
          title={note.title}
          content={note.content}
          creationDate={Date.now()}
          lastEditDate={Date.now()}
        />
      )}
    </main>
  );
}

export default Main;
