import '../css/NoteCard.css';

function NoteCard({title, content, lastEditDate, creationDate}) {
  return (
    <div className="card">
      <h2 className="card-title">{title}</h2>
      <p className="card-content">{content}</p>
      <span className="card-details">
        <i className="ri-time-line"></i><span className="card-detail">{creationDate}</span>
        <i className="ri-pencil-line"></i><span className="card-detail">{lastEditDate}</span>
      </span>
    </div>
  );
}

export default NoteCard;
