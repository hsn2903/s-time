import Card from "@/components/ui/Card";
import { useNoteContext } from "@/contexts/noteContext";
import React from "react";

const NoteContent = () => {
  const { selectedNote } = useNoteContext();
  const { title, text, date } = selectedNote;
  return (
    <Card className="flex flex-col gap-4 w-full p-4">
      <p className="font-bold text-gray-600">{title}</p>
      <hr />
      <p>{text}</p>
    </Card>
  );
};

export default NoteContent;
