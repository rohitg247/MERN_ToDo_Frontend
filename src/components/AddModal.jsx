import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { createTodo, updateTodo } from "../actions/todoActions";

const AddModal = ({ setShowModal, contact }) => {
  const dispatch = useDispatch();
  const [title, setTitle] = useState(contact?.title || "");
  const [description, setdescription] = useState(contact?.description || "");
  const [status, setStatus] = useState(contact?.status || "notdone");

  const handleSubmitAdd = (e) => {
    e.preventDefault();
    if (!title || title === "") return alert("Please enter title");
    const todoData = { title, description, status };
    dispatch(createTodo(todoData)); // Use createTodo action
    setShowModal(false);
  };

  const handleSubmitEdit = (e) => {
    e.preventDefault();
    if (!title || title === "") return alert("Please enter title");
    const todoData = { id: contact.id, title, description, status };
    console.log(contact)
    dispatch(updateTodo(contact._id, todoData)); // Use updateTodo action
    setShowModal(false);
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-black bg-opacity-50">
      <div className="bg-white w-full max-w-md p-6 rounded-lg shadow-md">
        <h2 className="text-2xl font-semibold mb-4">Tasks </h2>
        <form onSubmit={contact ? handleSubmitEdit : handleSubmitAdd}>
          <label className="block mb-2 font-medium">Title</label>
          <input
            className="w-full p-2 mb-4 border rounded-md focus:outline-none focus:border-blue-500"
            type="text"
            value={title}
            onChange={(e) => setTitle(e.target.value)}
          />

          <label className="block mb-2 font-medium">Description</label>
          <input
            className="w-full p-2 mb-4 border rounded-md focus:outline-none focus:border-blue-500"
            type="text"
            value={description}
            onChange={(e) => setdescription(e.target.value)}
          />

          <label className="block mb-2 font-medium">Status</label>
          <div className="mb-4">
            <label className="inline-flex items-center cursor-pointer">
              <input
                className="mr-2 border rounded focus:outline-none focus:border-blue-500"
                type="radio"
                name="status"
                value="active"
                checked={status === "done"}
                onChange={() => setStatus("done")}
              />
              Done
            </label>
          </div>

          <div className="flex justify-end">
            <button
              className="px-4 py-2 text-white bg-blue-500 rounded-md hover:bg-blue-600 transition-colors duration-300"
              type="submit"
            >
              Save
            </button>
            <button
              className="ml-2 px-4 py-2 text-gray-600 bg-gray-200 rounded-md hover:bg-gray-300 transition-colors duration-300"
              onClick={() => setShowModal(false)}
            >
              Cancel
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default AddModal;
