// import { assert } from "console";
import Todo from "./Todo";

function Todos({ todos, setTodos }) {
  function deleteTodo(id) {
    fetch(`http://localhost:3000/todos/${id}`, { method: "DELETE" }).then(
      (d) => {
        // assert(d.ok === true);
        fetch("http://localhost:3000/todos")
          .then((d) => d.json())
          .then((d) => setTodos(d.data));
      }
    );
  }

  return (
    <>
      {todos.map((todo) => {
        return (
          <Todo
            title={todo.title}
            description={todo.description}
            deleteTodo={() => deleteTodo(todo.id)}
          ></Todo>
        );
      })}
    </>
  );
}

export default Todos;
