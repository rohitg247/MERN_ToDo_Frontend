import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { RootState } from '../app/store';
import AddModal from './AddModal';
import { readTodos, updateTodo } from '../actions/todoActions';
import axios from 'axios';
import { useEffect } from 'react';

const ContactList = () => {
  const todos = useSelector(state => state.todos);  // Assuming your TODO items are stored in the 'todos' slice of the Redux store
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const [showModal, setShowModal] = useState(false);
  const [showModalE, setShowModalE] = useState(false);

  useEffect(() => {
    dispatch(readTodos())
  }, [])

  return (
    <div className="w-full p-4">
      <button
        className="w-1/6 m-auto py-2 text-white bg-blue-500 rounded-md flex items-center justify-center mb-4 md:text-base transition-colors duration-300 hover:bg-blue-600 sm:text-xs"
        onClick={() => {
          setShowModal(true);
        }}
      >
        <svg
          className="w-5 h-5 mr-2"
          fill="none"
          stroke="currentColor"
          viewBox="0 0 24 24"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="2"
            d="M12 6v6m0 0v6m0-6h6m-6 0H6"
          />
        </svg>
        Add Task
      </button>
      <ul className="grid gap-4 grid-cols-1 md:grid-cols-2 lg:grid-cols-3">
        {todos.map((todo) => (
          <li key={todo._id} className="bg-white p-9 rounded-lg shadow-md w-full">
            <div className="cardlist">
              <div className="cardlist flex items-center justify-between">
                <span>{todo.title}</span>
                <div className="flex items-center">
                  <input
                    type="checkbox"
                    className="mr-2"
                    checked={todo.status === 'done'}
                    onChange={() => {
                      // Update the todo status using the updateTodo action
                      dispatch(
                        updateTodo(todo._id, {
                          ...todo,
                          status: todo.status === 'done' ? 'notdone' : 'done',
                        })
                      );
                    }}
                  />
                  <span>Done</span>
                </div>
              </div>
              <div className="flex items-center justify-between space-x-4 mt-2">
                <button
                  className="text-blue-500 flex items-center"
                  onClick={() => {
                    // Modify the route to navigate to task details
                    // Replace '/details/' with the actual route for task details
                    navigate(`/details/${todo._id}`);
                  }}
                >
                  View Details
                  <svg
                    className="w-5 h-5 ml-1"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      d="M15 12a3 3 0 11-6 0 3 3 0 016 0z"
                    />
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      d="M12 6v6m0 0v6m0-6h6m-6 0H6"
                    />
                  </svg>
                </button>
                <button
                  className="bg-blue-500 text-white font-semibold py-2 px-4 rounded flex items-center hover:bg-blue-600 transition-colors duration-300"
                  type="button"
                  onClick={() => setShowModalE(true)}
                >
                  <svg
                    className="w-5 h-5 mr-2"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      d="M12 6v6m0 0v6m0-6h6m-6 0H6"
                    />
                  </svg>
                  Edit
                </button>
              </div>
            </div>
            {showModalE && <AddModal setShowModal={setShowModalE} contact={todo} />}
          </li>
        ))}
      </ul>
      {showModal && <AddModal setShowModal={setShowModal} />}
    </div>
  );
};

export default ContactList;
