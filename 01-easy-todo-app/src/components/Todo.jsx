function Todo({ title, description, deleteTodo }) {
  return (
    <>
      <h3>
        {title} <button onClick={deleteTodo}>Delete</button>
      </h3>
      <h5>{description}</h5>
    </>
  );
}

export default Todo;
