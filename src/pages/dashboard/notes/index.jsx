import DashboardLayout from "@/components/dashboard/layout/DashboardLayout";
import NewNote from "@/components/dashboard/note/NewNote";
import NoteContent from "@/components/dashboard/note/NoteContent";
import NotesList from "@/components/dashboard/note/NotesList";
import { useNoteContext } from "@/contexts/noteContext";
import React, { useState } from "react";
import { IoAddOutline } from "react-icons/io5";

const NotesMainPage = () => {
  const [notes, setNotes] = React.useState([]);
  const [tabName, setTabName] = useState("new-note");

  const { selectedNote, setSelectedNote } = useNoteContext();

  const handleSelectNote = (note) => {
    setSelectedNote(note);
    setTabName("note");
  };

  return (
    <DashboardLayout>
      <h1 className="text-xl font-bold text-gray-700 p-4">Notes</h1>
      <div className="p-4 flex gap-6">
        <div className="w-[500px]">
          <NotesList onSelectNote={handleSelectNote} />
        </div>
        <div className="w-full">
          {tabName === "new-note" ? <NewNote /> : <NoteContent />}
        </div>

        <div className="fixed bottom-5 right-5">
          <button
            className="p-2 bg-green-600 text-white rounded-full flex items-center justify-center shadow-[0_20px_50px_rgba(8,_112,_184,_0.7)] hover:bg-green-900"
            onClick={() => setTabName("new-note")}
          >
            <IoAddOutline size={32} />
          </button>
        </div>
      </div>
    </DashboardLayout>
  );
};

export default NotesMainPage;
