import React from "react";
import TodoItem from "./TodoItem";

function TodoList({ todos, setTodos, filteredStatus }) {
  return (
    <div className="todo-container">
      <ul className="todo-list">
        {filteredStatus.map((item) => {
          return (
            <TodoItem
              text={item.text}
              completed={item.completed}
              key={item.id}
              item={item}
              setTodos={setTodos}
              todos={todos}
            />
          );
        })}
      </ul>
    </div>
  );
}

export default TodoList;
