import Card from "@/components/ui/Card";
import { useNoteContext } from "@/contexts/noteContext";
import moment from "moment/moment";
import React from "react";
import {
  IoSearchCircleOutline,
  IoTrashBinOutline,
  IoTrashOutline,
} from "react-icons/io5";

const NotesList = ({ onSelectNote }) => {
  const [newNoteText, setNewNoteText] = React.useState("");
  const { notesList, deleteNote, selectedNote, setSelectedNote } =
    useNoteContext();

  const handleChange = (event) => {
    setNewNoteText(event.target.value);
  };

  const handleSubmit = (event) => {
    event.preventDefault();

    setNewNoteText("");
  };

  return (
    <div className="mt-6">
      <form onSubmit={handleSubmit} className="mt-4 flex">
        <input
          type="text"
          placeholder="Search"
          value={newNoteText}
          onChange={handleChange}
          className="flex-1 p-2 rounded-md mr-2"
        />
        <button
          type="submit"
          className="bg-green-500 rounded-sm text-white px-4 py-2 transition hover:bg-green-600"
        >
          <IoSearchCircleOutline size={32} />
        </button>
      </form>

      <Card className="flex flex-col gap-1 p-4">
        {notesList.map((note) => (
          <div
            key={note.id}
            className=" p-2 mb-2 rounded-md border-l-4 border-blue-300"
            onClick={() => onSelectNote(note)}
          >
            <p className="text-sm text-end text-gray-500">
              {moment(note.date).format("MMM Do YY")}
            </p>
            <p className="m-0 text-gray-600">{note.title}</p>
            <div className="flex justify-end">
              <button
                className=" text-red-700 hover:text-red-800"
                onClick={() => deleteNote(note.id)}
              >
                <IoTrashOutline size={12} />
              </button>
            </div>
          </div>
        ))}
      </Card>
    </div>
  );
};

export default NotesList;
