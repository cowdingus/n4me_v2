import '../css/NoteCard.css';

function NoteCard() {
  const title = "Lorem ipsum bla";
  const description = "Lorem ipsum bla bla bla bla bla ...";
  const lastEditDate = "11:12 AM";
  const creationDate = "7:32 AM"

  return (
    <div className="card">
      <h2 className="card-title">{title}</h2>
      <p className="card-description">{description}</p>
      <span className="card-details">
        <i class="ri-time-line"></i><span class="card-detail">{creationDate}</span>
        <i class="ri-pencil-line"></i><span class="card-detail">{lastEditDate}</span>
      </span>
    </div>
  );
}

export default NoteCard;
