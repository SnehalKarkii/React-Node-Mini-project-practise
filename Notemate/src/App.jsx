import { useEffect, useState } from "react";
import Header from "./components/Header";
import DisplayTask from "./components/DisplayTask";
import AddTask from "./components/AddTask";
import "./App.css";

function App() {
  const [noteList, setNoteList] = useState(JSON.parse(localStorage.getItem("noteList")) || []);
  const [note, setNote] = useState({});

  useEffect(() => {
    localStorage.setItem("noteList", JSON.stringify(noteList));
  }, [noteList]);
  return (
    <div className="App">
      <Header></Header>
      <AddTask
        noteList={noteList}
        setNoteList={setNoteList}
        note={note}
        setNote={setNote}
      ></AddTask>
      <DisplayTask
        noteList={noteList}
        setNoteList={setNoteList}
        note={note}
        setNote={setNote}
      ></DisplayTask>
    </div>
  );
}

export default App;
