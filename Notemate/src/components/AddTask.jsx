const AddTask = ({ noteList, setNoteList, note, setNote }) => {
  const handleSubmit = (e) => {
    e.preventDefault();
    if (note.id) {
      const date = new Date();
      const updatedNote = noteList.map((task) =>
        task.id === note.id
          ? {
              id: note.id,
              name: note.name,
              time: `${date.toLocaleTimeString()} ${date.toLocaleDateString()}`,
            }
          : task
      );
      setNoteList(updatedNote);
      setNote({});
    } else {
      const date = new Date();
      const newNote = {
        id: date.getTime(),
        name: e.target.task.value,
        time: `${date.toLocaleTimeString()} ${date.toLocaleDateString()}`,
      };
      setNoteList([...noteList, newNote]);
      setNote({});
    }
  };
  return (
    <section className="addTask">
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          name="task"
          value={note.name || ""}
          autoComplete="off"
          placeholder="add task"
          maxLength="20"
          onChange={(e) => setNote({ ...note, name: e.target.value })}
        />
        <button type="submit">{note.id ? "Update" : "Add"}</button>
      </form>
    </section>
  );
};

export default AddTask;
