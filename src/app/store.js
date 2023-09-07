import { configureStore } from '@reduxjs/toolkit';
import todoReducer from '../actions/todoReducer'; // Import your todoReducer
import { createTodo, readTodos, updateTodo, deleteTodo } from '../actions/todoActions'; // Import your todoActions

const store = configureStore({
  reducer: {
    todos: todoReducer, // Use todoReducer for the 'todos' slice
  },
});

export default store;
