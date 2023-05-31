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
      state.todos = [...state.todos,action.payload];
    },
    removeToDo: (state, action) => {
      let removedTodos = state.todos.filter(
        (todo) => todo.id !== action.payload.id
      );
      state.todos = removedTodos;
    },
    // changeCompleted: (state, action) => {
    //   const newState = state.todos.map((todo) => {
    //     if (todo.id === action.payload.id) {
    //       if (todo.completed) {
    //         todo.completed = false;
    //       }
    //       todo.completed = true;
    //     }
    //   });
    //   state.todos = newState;
    // },
  },
});

export const { addToDO, removeToDo } = todoSlice.actions;

export default todoSlice.reducer;
