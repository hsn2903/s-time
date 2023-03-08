import { useUserContext } from "@/contexts/userContext";
import { db } from "@/utils/firebase";
import { addDoc, collection } from "firebase/firestore";
import React, { useState } from "react";

const AddTodo = () => {
  const [text, setText] = useState("");
  const { currentUser } = useUserContext();

  const handleSubmit = async (e) => {
    e.preventDefault();
    await addDoc(collection(db, "tasks"), {
      taskName: text,
      userId: currentUser.uid,
    });
    setText("");
  };

  return (
    <form onSubmit={handleSubmit}>
      <input
        type="text"
        value={text}
        onChange={(e) => setText(e.target.value)}
      />
      <button type="submit">Add Todo</button>
    </form>
  );
};

export default AddTodo;
