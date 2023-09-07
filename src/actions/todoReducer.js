// frontend/src/reducers/todoReducer.js

import {
  CREATE_TODO_SUCCESS,
  READ_TODOS_SUCCESS,
  UPDATE_TODO_SUCCESS,
  DELETE_TODO_SUCCESS,
} from './todoActions';

const initialState = [];

const todoReducer = (state = initialState, action) => {
  switch (action.type) {
    case CREATE_TODO_SUCCESS:
      return [...state, action.payload];

    case READ_TODOS_SUCCESS:
      return action.payload;

    case UPDATE_TODO_SUCCESS:
      return state.map((todo) =>
        todo._id === action.payload._id ? action.payload : todo
      );

    case DELETE_TODO_SUCCESS:
      return state.filter((todo) => todo._id !== action.payload);

    default:
      return state;
  }
};

export default todoReducer;
