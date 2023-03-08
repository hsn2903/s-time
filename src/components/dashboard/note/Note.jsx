import React from "react";
import { FaTrash } from "react-icons/fa";

const Note = ({ note, handleDeleteNote }) => {
  return (
    <div className="border border-gray-400 p-2 mb-2 rounded-md">
      <p className="m-0">{note.text}</p>
      <button
        className="text-gray-500 transition-colors"
        onClick={() => handleDeleteNote(note.id)}
      >
        <FaTrash size={16} />
      </button>
    </div>
  );
};

export default Note;
