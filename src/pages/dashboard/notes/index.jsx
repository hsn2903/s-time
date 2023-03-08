import DashboardLayout from "@/components/dashboard/layout/DashboardLayout";
import NotesList from "@/components/dashboard/note/NotesList";
import React from "react";

const NotesMainPage = () => {
  const [notes, setNotes] = React.useState([]);

  const handleAddNote = (newNote) => {
    setNotes([...notes, newNote]);
  };

  const handleDeleteNote = (id) => {
    setNotes(notes.filter((note) => note.id !== id));
  };

  return (
    <DashboardLayout>
      <div className="w-max-[600px] mx-auto p-4">
        <h1 className="text-4xl">Notes</h1>
        <NotesList
          notes={notes}
          handleAddNote={handleAddNote}
          handleDeleteNote={handleDeleteNote}
        />
      </div>
    </DashboardLayout>
  );
};

export default NotesMainPage;
