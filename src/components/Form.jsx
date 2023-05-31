import React from "react";
import { useDispatch } from "react-redux";
import { addToDO } from "../slices/ToDoSlice";

function Form() {
  let newToDo = {
    id: Math.floor(Math.random() * 1000),
    title: "",
    completed: false,
  };
  const dispatch = useDispatch();

  const addNewToDo = () => {
    dispatch(addToDO(newToDo));
    newToDo = {
      id: Math.floor(Math.random() * 1000),
      title: "",
      completed: false,
    };
  };
  console.log(newToDo);
  return (
    <form>
      <input
        className="new-todo"
        placeholder="What needs to be done?"
        autoFocus
        onChange={(e) => (newToDo.title = e.target.value)}
        onKeyUp={(e) => {
          if (e.key === "Enter") addNewToDo();
        }}
      />
    </form>
  );
}

export default Form;
