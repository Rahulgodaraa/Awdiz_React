import React, { useState } from "react";

const Todo = () => {
  const [todos, setTodos] = useState([]);
  const [singleTodo, setSingleTodo] = useState("");

  function submitTodo() {
    setTodos([...todos, singleTodo]);
    setSingleTodo("");
  }

  function handleInput(event) {
    // console.log(event.target.value);
    setSingleTodo(event.target.value);
  }

  console.log(singleTodo, "singleTodo");
  console.log(todos, "todos");

  return (
    <div>
      <h1>All Todo</h1>
      {todos.map((todo) => (
        <h3>{todo}</h3>
      ))}
      <input
        value={singleTodo}
        onChange={handleInput}
        placeholder="Type your todo here.."
      />
      <button onClick={submitTodo}>Submit Todo</button>
    </div>
  );
};

export default Todo;

 