import React from "react";

function TodoItem({ text, completed, item, todos, setTodos }) {
  const deleteTodo = () => {
    setTodos(todos.filter((el) => el.id !== item.id));
  };

  const completeTodo = () => {
    setTodos(
      todos.map((el) => {
        if (el.id === item.id) {
          return { ...el, completed: !el.completed };
        }
        return el;
      })
    );
  };

  return (
    <div className="todo">
      <li className={`todo-item ${item.completed ? "completed" : ""} `}>
        {text}
      </li>
      <button onClick={completeTodo} className="complete-btn">
        <i className="fas fa-check"></i>
      </button>
      <button onClick={deleteTodo} className="trash-btn">
        <i className="fas fa-trash"></i>
      </button>
    </div>
  );
}

export default TodoItem;
