import "./App.css";
import { useState, useEffect } from "react";
import Form from "./components/Form";
import TodoList from "./components/TodoList";

function App() {
  // states

  const [textInput, setTextInput] = useState("");
  const [todos, setTodos] = useState([]);
  const [status, setStatus] = useState("all");
  const [filteredStatus, setFilteredStatus] = useState([]);

  //functions

  const filterHandler = () => {
    switch (status) {
      case "completed":
        setFilteredStatus(todos.filter((el) => el.completed === true));
        break;
      case "uncompleted":
        setFilteredStatus(todos.filter((el) => el.completed === false));
        break;
      default:
        setFilteredStatus(todos);
    }
  };

  useEffect(() => {
    filterHandler();
  }, [status, todos]);

  return (
    <div className="App">
      <header>
        <h1>My Todo List</h1>
      </header>
      <Form
        textInput={textInput}
        setTextInput={setTextInput}
        todos={todos}
        setTodos={setTodos}
        setStatus={setStatus}
      />
      <TodoList
        todos={todos}
        setTodos={setTodos}
        filteredStatus={filteredStatus}
      />
    </div>
  );
}

export default App;
