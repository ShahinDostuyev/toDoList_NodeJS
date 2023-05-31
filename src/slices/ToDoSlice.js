import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  todos: [
    {
      id: 1,
      title: "Learn Javascript",
      completed: false,
    },
    {
      id: 2,
      title: "Learn React",
      completed: false,
    },
    {
      id: 3,
      title: "Have a life",
      completed: false,
    },
  ],
};
console.log("rendered");

export const todoSlice = createSlice({
  name: "todo",
  initialState,
  reducers: {
    addToDO: (state, action) => {
      state.todos = [...state.todos, action.payload];
    },
    removeToDo: (state, action) => {
      let removedTodos = state.todos.filter(
        (todo) => todo.id !== action.payload.id
      );
      state.todos = removedTodos;
    },
    handleCompleted: (state, action) => {
      const getIndex = state.todos.findIndex((todo) => {
        return todo.id === action.payload.id;
      });
      state.todos[getIndex].completed = !state.todos[getIndex].completed;
    },
    clearCompleted: (state)=>{
      const clearedTodos = state.todos.filter(todo => todo.completed !==true)
      state.todos = clearedTodos;

    }
  },
});

export const { addToDO, removeToDo, handleCompleted,clearCompleted } = todoSlice.actions;

export default todoSlice.reducer;
