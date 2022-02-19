import '../css/NoteCard.css';

function getTimeDifference(a, b) {
  if (b.getTime() > a.getTime()) {
    [a, b] = [b, a];
  }

  let msec = a.getTime() - b.getTime();
  const hoursAgo = Math.floor(msec / 1000 / 60 / 60);
  msec -= hoursAgo * 1000 * 60 * 60;
  const minutesAgo = Math.floor(msec / 1000 / 60);
  msec -= minutesAgo * 1000 * 60;
  const secondsAgo = Math.floor(msec / 1000);
  msec -= secondsAgo * 1000;

  return [hoursAgo, minutesAgo, secondsAgo];
}

function getTimeSince(date) {
  const [hoursAgo, minutesAgo, secondsAgo] = getTimeDifference(new Date(), date);

  // is more than or eq to a day and less than a week
  if (hoursAgo >= 24 && hoursAgo < 168) {
    const daysAgo = Math.floor(hoursAgo / 24);

    if (daysAgo == 1) return "Yesterday";
    return `${daysAgo} days ago`;

    // is more than or eq to a week and less than a month
  } else if (hoursAgo >= 168 && hoursAgo < 672) {
    const weeksAgo = Math.floor(hoursAgo / 24 / 7);

    if (weeksAgo == 1) {
      return "A week ago";
    } else {
      return `${weeksAgo} weeks ago`;
    }

    // is more than or eq to a month and less than a year
  } else if (hoursAgo >= 672 && hoursAgo < 8064) {
    const monthsAgo = Math.floor(hoursAgo / 24 / 7 / 4);

    if (monthsAgo == 1) {
      return "A month ago";
    } else {
      return `${monthsAgo} months ago`;
    }

    // is more than or eq to a year
  } else if (hoursAgo >= 8064) {
    const yearsAgo = Math.floor(hoursAgo / 24 / 7 / 4 / 12);

    if (yearsAgo == 1) {
      return "A year ago";
    } else {
      return `${yearsAgo} years ago`;
    }
  }

  // less than a day and more than an hour
  if (hoursAgo > 0) {
    if (hoursAgo == 1) return "An hour ago";
    else return `${hoursAgo} hours ago`;
  } else if (minutesAgo > 0) {
    if (minutesAgo == 1) return "A minute ago";
    else return `${minutesAgo} minutes ago`;
  } else if (secondsAgo >= 0) {
    return "Just now";
  }

  return "invalid";
}

function NoteCard({note, handleClick}) {
  const creationDateStr = note.creationDate.getFullYear()+'-'+(note.creationDate.getMonth()+1)+'-'+note.creationDate.getDate();
  const editDateStr = getTimeSince(note.editDate);

  return (
    <div className="card" onClick={() => handleClick(note)}>
      <h2 className="card-title">{note.title}</h2>
      <p className="card-content">{note.content}</p>
      <span className="card-details">
        <i className="ri-time-line"></i><span className="card-detail">{creationDateStr}</span>
        <i className="ri-pencil-line"></i><span className="card-detail">{editDateStr}</span>
      </span>
    </div>
  );
}

export default NoteCard;
