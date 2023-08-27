const DisplayTask = ({ noteList, setNoteList ,setNote}) => {
  const handleEdit = (id) => {
    const selectedTask = noteList.find((note) => note.id === id);
    setNote(selectedTask)
  };
  const handleDelete = (id) => {
    const updatedNotelist = noteList.filter((note) => note.id !== id);
    setNoteList(updatedNotelist);
  };
  return (
    <section className="showTask">
      <div className="head">
        <div>
          <span className="title">Todo</span>
          <span className="count">{noteList.length}</span>
        </div>
        <button className="clearAll" onClick={() => setNoteList([])}>
          Clear All
        </button>
      </div>
      <ul>
        {noteList.map((note) => (
          <li key={note.id}>
            <p>
              <span className="name">{note.name}</span>
              <span className="time">{note.time}</span>
            </p>
            <i
              onClick={() => handleEdit(note.id)}
              className="bi bi-pencil-square"
              width="32"
              height="32"
              color="black"
            ></i>
            <i
              onClick={() => handleDelete(note.id)}
              className="bi bi-trash"
            ></i>
          </li>
        ))}
      </ul>
    </section>
  );
};

export default DisplayTask;
