import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import "../index.css";
import { handleCompleted, removeToDo } from "../slices/ToDoSlice";

function ToDoList() {
  const todos = useSelector((state) => state.todo.todos);
  console.log(todos);
  const dispatch = useDispatch();
  const handle = (todo) => {
    dispatch(handleCompleted(todo));
  };
  return (
    <ul className="todo-list">
      {todos &&
        todos.map((todo) =>
          todo.completed ? (
            <li key={todo.id} className="completed">
              <div className="view">
                <input
                  onChange={() => handle(todo)}
                  className="toggle"
                  type="checkbox"
                />
                <label>{todo.title}</label>
                <button
                  onClick={() => dispatch(removeToDo(todo))}
                  className="destroy"
                ></button>
              </div>
            </li>
          ) : (
            <li key={todo.id}>
              <div className="view">
                <input
                  className="toggle"
                  type="checkbox"
                  onChange={() => handle(todo)}
                />
                <label>{todo.title}</label>
                <button
                  onClick={() => dispatch(removeToDo(todo))}
                  className="destroy"
                ></button>
              </div>
            </li>
          )
        )}
    </ul>
  );
}

export default ToDoList;
