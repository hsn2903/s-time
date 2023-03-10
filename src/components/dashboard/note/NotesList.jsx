import React from "react";
import { FaPlusCircle } from "react-icons/fa";
import Note from "./Note";

const NotesList = ({ notes, handleAddNote, handleDeleteNote }) => {
  const [newNoteText, setNewNoteText] = React.useState("");

  const handleChange = (event) => {
    setNewNoteText(event.target.value);
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    handleAddNote({
      id: Date.now(),
      text: newNoteText,
    });
    setNewNoteText("");
  };

  return (
    <div className="mt-6">
      <form onSubmit={handleSubmit} className="mt-4 flex">
        <input
          type="text"
          placeholder="Add a new note"
          value={newNoteText}
          onChange={handleChange}
          className="flex-1 p-2 rounded-md mr-2"
        />
        <button
          type="submit"
          className="bg-green-500 rounded-sm text-white px-4 py-2 transition hover:bg-green-600"
        >
          <FaPlusCircle />
        </button>
      </form>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-3 py-6">
        {notes.map((note) => (
          <Note key={note.id} note={note} handleDeleteNote={handleDeleteNote} />
        ))}
      </div>
    </div>
  );
};

export default NotesList;
