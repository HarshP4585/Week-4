import { useEffect, useState } from "react";
import Todos from "./components/Todos";
// import './App.css'

function App() {
  const [todos, setTodos] = useState([]);
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");

  useEffect(() => {
    fetch("http://localhost:3000/todos")
      .then((d) => d.json())
      .then((d) => setTodos(d.data));
  }, []);

  function addTodo() {
    fetch("http://localhost:3000/todos", {
      method: "POST",
      body: JSON.stringify({ title, description }),
      headers: {
        "content-type": "Application/json",
      },
    })
      .then((d) => d.json())
      .then((d) =>
        setTodos([...todos, { ...d }])
      );
  }

  return (
    <>
      <div>
        <h1>Easy Todo App</h1>
        Title: <input type="text" onChange={(e) => setTitle(e.target.value)} />
        <br />
        Description:{" "}
        <input type="text" onChange={(e) => setDescription(e.target.value)} />
        <br />
        <button onClick={addTodo}>Add</button>
      </div>
      <Todos todos={todos} setTodos={setTodos}></Todos>
    </>
  );
}

export default App;
