import { useState } from "react";
import "./index.css";

function App() {
  const [todos, setTodos] = useState([]);
  const [todo, setTodo] = useState("");
  console.log(todo);

  const addTodo = () => {
    if (todo !== "") {
      setTodos([...todos, todo]);
      setTodo("");
    }
  };

  const todoDelete = (text) => {
    const tododata = todos.filter((todo) => {
      return todo !== text;
    });
    setTodos(tododata);
  };

  return (
    <div className="App">
      <h1 className="Heading">To Do List</h1>
      <div className="input-warpper">
        <input
          type="text"
          name="todo"
          value={todo}
          placeholder="Create new Task"
          onChange={(e) => {
            setTodo(e.target.value);
          }}
        />
        <button className="add-btn" onClick={addTodo}>
          Add 
        </button>
      </div>
      <div className="container">
        {todos?.length > 0 ? (
          <ul className="todo-list">
            {todos.map((todo, index) => (
              <div className="todo">
                <li key={index}> {todo} 

                <button
                  className="delete-button"
                  onClick={() => {
                    todoDelete(todo);
                  }}
                >
                  Delete
                </button>
                </li>
              </div>
            ))}
          </ul>
        ) : (
          <div className="empty">
            <p>No task found</p>
          </div>
        )}
      </div>
    </div>
  );
}

export default App;
