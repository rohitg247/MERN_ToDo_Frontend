import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useNavigate, useParams } from 'react-router-dom';
import { deleteTodo } from '../actions/todoActions';

const ContactDetails = () => {
  const todos = useSelector((state) => state.todos);
  const params = useParams();
  const id = params.id;
  const navigate = useNavigate();

  const todo = id ? todos.find((todo) => todo._id === id) : undefined;
  const dispatch = useDispatch();

  const handleDelete = () => {
    dispatch(deleteTodo(todo._id));
    navigate('/');
  };

  const handleClose = () => {
    navigate('/');
  };

  return (
    <div className="w-1/4 container m-auto p-6">
      <div className="bg-white rounded-lg shadow p-6">
        <h1 className="text-2xl font-semibold mb-2">{todo?.title}</h1>
        <h2 className="text-lg font-semibold mb-2">{todo?.description}</h2>
        <p className="text-gray-600 mb-4">{todo?.status}</p>
        <div className="flex justify-between items-center space-x-4">
          <button
            onClick={handleDelete}
            className="bg-red-500 text-white font-semibold py-2 px-4 rounded flex items-center hover:bg-red-600 transition-colors duration-300"
          >
            <svg
              className="w-5 h-5 mr-2"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12" />
            </svg>
            Delete
          </button>
          <button
            onClick={handleClose}
            className="bg-blue-500 text-white font-semibold py-2 px-4 rounded flex items-center hover:bg-blue-600 transition-colors duration-300"
          >
            <svg
              className="w-5 h-5 mr-2"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12" />
            </svg>
            Close
          </button>
        </div>
      </div>
    </div>
  );
};

export default ContactDetails;
