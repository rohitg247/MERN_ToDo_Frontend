// frontend/src/actions/todoActions.js

import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import axios from 'axios';
import api from '../api'; // Import your API endpoint URLs
import { BASE_URL } from '../api';

// Action Types
export const CREATE_TODO_SUCCESS = 'CREATE_TODO_SUCCESS';
export const READ_TODOS_SUCCESS = 'READ_TODOS_SUCCESS';
export const UPDATE_TODO_SUCCESS = 'UPDATE_TODO_SUCCESS';
export const DELETE_TODO_SUCCESS = 'DELETE_TODO_SUCCESS';

// Action Creators
export const createTodoSuccess = (todo) => ({
    type: CREATE_TODO_SUCCESS,
    payload: todo,
});

export const readTodosSuccess = (todos) => ({
    type: READ_TODOS_SUCCESS,
    payload: todos,
});

export const updateTodoSuccess = (todo) => ({
    type: UPDATE_TODO_SUCCESS,
    payload: todo,
});

export const deleteTodoSuccess = (todoId) => ({
    type: DELETE_TODO_SUCCESS,
    payload: todoId,
});

// Thunk Action Creators
export const createTodo = (todoData) => async (dispatch) => {
    try {
        const response = await axios.post(`${BASE_URL}/api/todos`, todoData); // Use the API endpoint from api.js
        dispatch(createTodoSuccess(response.data));
    } catch (error) {
        // Handle error
        console.error(error);
    }
};

export const readTodos = () => async (dispatch) => {
    try {
        const response = await axios.get(`${BASE_URL}/api/todos`); // Use the API endpoint from api.js
        dispatch(readTodosSuccess(response.data));
    } catch (error) {
        // Handle error
        console.error(error);
    }
};

export const updateTodo = (id, todoData) => async (dispatch) => {
    try {
        const response = await axios.put(`${BASE_URL}/api/todos/${id}`, todoData); // Use the API endpoint from api.js
        dispatch(updateTodoSuccess(response.data));
    } catch (error) {
        // Handle error
        console.error(error);
    }
};

export const deleteTodo = (id) => async (dispatch) => {
    try {
        await axios.delete(`${BASE_URL}/api/todos/${id}`); // Use the API endpoint from api.js
        dispatch(deleteTodoSuccess(id));
    } catch (error) {
        // Handle error
        console.error(error);
    }
};
