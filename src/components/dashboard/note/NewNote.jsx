import Card from "@/components/ui/Card";
import { useNoteContext } from "@/contexts/noteContext";
import { useUserContext } from "@/contexts/userContext";
import { Timestamp } from "firebase/firestore";
import React, { useEffect, useState } from "react";

const NewNote = () => {
  const [newNote, setNewNote] = useState({
    title: "",
    text: "",
    date: null,
    category: "",
    userId: null,
  });

  const { title, text, date, category, userId } = newNote;

  const { currentUser } = useUserContext();
  const { createNote } = useNoteContext();

  const handleChange = (e) => {
    const { name, value } = e.target;
    setNewNote({
      ...newNote,
      [name]: value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    const noteData = {
      title,
      text,
      userId: currentUser?.uid,
      createdAt: Timestamp.now(),
      category: "",
    };

    createNote(noteData);
  };

  return (
    <Card className="w-full p-4">
      <h3 className="text-gray-600 mb-4 font-bold">Add New Note</h3>
      <form action="" onSubmit={handleSubmit} className="flex flex-col gap-4">
        <input
          type="text"
          name="title"
          id="title"
          placeholder="Title"
          onChange={handleChange}
          value={title}
          className="bg-gray-200 px-2 py-1 rounded-md"
        />

        <textarea
          type="text"
          name="text"
          id="text"
          placeholder="Note"
          rows={5}
          onChange={handleChange}
          value={text}
          className="bg-gray-200 px-2 py-1 rounded-md"
        />

        <button
          type="submit"
          className="bg-green-600 px-4 py-2 rounded-md hover:bg-green-700 text-white self-end"
        >
          Save
        </button>
      </form>
    </Card>
  );
};

export default NewNote;
