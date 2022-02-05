import '../css/Main.css';
import NoteCard from './NoteCard';

function Main() {
  return (
    <main class="main-section">
      {Array(8).fill(0).map((_, i) => <NoteCard />)}
    </main>
  );
}

export default Main;
