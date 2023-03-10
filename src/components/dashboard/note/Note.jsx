import Card from "@/components/ui/Card";
import React from "react";
import { FaTrash } from "react-icons/fa";

const Note = ({ note, handleDeleteNote }) => {
  return (
    <Card className=" p-2 mb-2 rounded-md border-l-4 border-blue-300">
      <p className="text-sm text-end text-gray-500">23-12-2023</p>
      <p className="m-0 text-gray-600">{note.text}</p>
      <div className="flex justify-end">
        <button
          className="text-gray-500 transition-colors"
          onClick={() => handleDeleteNote(note.id)}
        >
          <FaTrash size={12} />
        </button>
      </div>
    </Card>
  );
};

export default Note;
