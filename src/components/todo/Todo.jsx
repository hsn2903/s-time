import React, { useState } from "react";
import { FaPlus, FaTrash, FaStar } from "react-icons/fa";

function Todo() {
  const [text, setText] = useState("");
  const [todos, setTodos] = useState([]);

  const handleTextChange = (event) => {
    setText(event.target.value);
  };

  const handleAddTodo = () => {
    if (text !== "") {
      const newTodo = {
        id: Date.now(),
        text: text,
        completed: false,
        important: false,
      };
      setTodos([...todos, newTodo]);
      setText("");
    }
  };

  const handleDeleteTodo = (id) => {
    const updatedTodos = todos.filter((todo) => todo.id !== id);
    setTodos(updatedTodos);
  };

  const handleToggleTodo = (id) => {
    const updatedTodos = todos.map((todo) => {
      if (todo.id === id) {
        return { ...todo, completed: !todo.completed };
      }
      return todo;
    });
    setTodos(updatedTodos);
  };

  const handleToggleImportant = (id) => {
    const updatedTodos = todos.map((todo) => {
      if (todo.id === id) {
        return { ...todo, important: !todo.important };
      }
      return todo;
    });
    setTodos(updatedTodos);
  };

  return (
    <div className="">
      <div className="max-w-md mx-auto pt-8 px-4">
        <h1 className="text-2xl font-bold mb-4 text-gray-700">Tasks</h1>
        <div className="flex mb-4">
          <input
            type="text"
            value={text}
            onChange={handleTextChange}
            className="flex-1 appearance-none border rounded py-2 px-4 mr-4"
            placeholder="Add a todo..."
          />
          <button
            className="bg-green-500 text-white py-2 px-4 rounded flex items-center justify-center"
            onClick={handleAddTodo}
          >
            <FaPlus className="mr-2" />
            Add
          </button>
        </div>
        <ul className="bg-white rounded-lg shadow-md">
          {todos.map((todo) => (
            <li
              key={todo.id}
              className={`${
                todo.completed ? "line-through text-gray-400" : ""
              } p-4 flex items-center justify-between border-b`}
              onClick={() => handleToggleTodo(todo.id)}
            >
              <div className="flex items-center">
                <span>{todo.text}</span>
                <button
                  className={`text-gray-500 ml-2 ${
                    todo.important ? "text-yellow-500" : ""
                  }`}
                  onClick={(event) => {
                    event.stopPropagation();
                    handleToggleImportant(todo.id);
                  }}
                >
                  <FaStar />
                </button>
              </div>
              <div className="flex items-center">
                <button
                  className="text-red-500"
                  onClick={(event) => {
                    event.stopPropagation();
                    handleDeleteTodo(todo.id);
                  }}
                >
                  <FaTrash />
                </button>
              </div>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}

export default Todo;
