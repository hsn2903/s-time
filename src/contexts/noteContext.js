import { db } from "@/utils/firebase";
import {
  addDoc,
  collection,
  deleteDoc,
  doc,
  onSnapshot,
  query,
  updateDoc,
  where,
} from "firebase/firestore";
import { useContext, createContext, useState, useEffect } from "react";
import { useUserContext } from "./userContext";

export const NoteContext = createContext();

export const NoteProvider = ({ children }) => {
  const [notesList, setNotesList] = useState([]);
  const [selectedNote, setSelectedNote] = useState(null);

  const { currentUser } = useUserContext();

  const createNote = async (noteData) => {
    try {
      const notesCollection = collection(db, "notes");
      const docRef = await addDoc(notesCollection, noteData);
      console.log("Document written with ID: ", docRef.id);
    } catch (error) {
      console.error("Error adding document: ", error);
    }
  };

  const updateNote = async (updatedNote) => {
    try {
      await updateDoc(doc(db, "notes", updatedNote.id), updatedNote);
      console.log("Document updated!");
      // close dialog here
    } catch (e) {
      console.error("Error updating document: ", e);
    }
  };

  const deleteNote = async (id) => {
    try {
      await deleteDoc(doc(db, "notes", id));
      console.log("Document deleted!");
      // close dialog here
    } catch (e) {
      console.error("Error deleting document: ", e);
    }
  };

  useEffect(() => {
    const fetchAllNotes = async () => {
      if (currentUser) {
        const q = query(
          collection(db, "notes"),
          where("userId", "==", currentUser?.uid)
        );

        // Listen for realtime updates to the user's notes
        const unsubscribe = onSnapshot(q, (querySnapshot) => {
          const notes = [];
          querySnapshot.forEach((doc) => {
            notes.push({ id: doc.id, ...doc.data() });
          });
          setNotesList(notes);
        });

        // Unsubscribe from realtime updates when the component unmounts
        return () => unsubscribe();
      }
    };
    fetchAllNotes();
  }, [currentUser]);

  return (
    <NoteContext.Provider
      value={{
        createNote,
        notesList,
        updateNote,
        deleteNote,
        selectedNote,
        setSelectedNote,
      }}
    >
      {children}
    </NoteContext.Provider>
  );
};

export const useNoteContext = () => {
  return useContext(NoteContext);
};
