import { configureStore } from '@reduxjs/toolkit'
import TodoReducer from '../slices/ToDoSlice'

export const store = configureStore({
  reducer: {
    todo: TodoReducer,
  },
})