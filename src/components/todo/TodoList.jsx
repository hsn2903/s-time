import React, { useEffect, useState } from "react";
import {
  collection,
  addDoc,
  getDocs,
  updateDoc,
  deleteDoc,
  doc,
} from "firebase/firestore";

import { db } from "@/utils/firebase";
import TaskItem from "./TaskItem";

const TodoList = () => {
  const [tasks, setTasks] = useState([]);
  const [isEdit, setIsEdit] = useState();
  const [text, setText] = useState();

  const fetchTasks = async () => {
    const querySnapshot = await getDocs(collection(db, "tasks"));
    const documents = [];
    querySnapshot.forEach((doc) => {
      documents.push({ id: doc.id, ...doc.data() });
    });
    setTasks(documents);
  };

  const handleEdit = async (id, updatedTask) => {
    await updateDocument("tasks", id, { taskName: updatedTask });
  };

  // Update a document by ID
  const updateDocument = async (collectionName, id, data) => {
    await updateDoc(doc(db, collectionName, id), data);
    fetchTasks();
  };

  // Delete a document by ID
  const deleteDocument = async (collectionName, id) => {
    await deleteDoc(doc(db, collectionName, id));
    fetchTasks();
  };

  // get all tasks
  useEffect(() => {
    fetchTasks();
  }, []);

  return (
    <div>
      <h1>Todo List--</h1>

      <ul>
        {tasks.map((task) => (
          <div key={task.id}>
            <li key={task.id} className="flex gap-6 my-4">
              <p> {task.taskName}</p>
              <button onClick={() => setIsEdit(true)}>edit</button>
              <button onClick={() => deleteDocument("tasks", task.id)}>
                delete
              </button>
            </li>

            <TaskItem
              task={task}
              onEdit={handleEdit}
              onDelete={deleteDocument}
            />
          </div>
        ))}
      </ul>

      {isEdit && (
        <div className="fixed top-1/2 left-1/2 bg-white shadow-lg">
          <form onSubmit={handleEdit}>
            <input
              type="text"
              value={text}
              onChange={(e) => setText(e.target.value)}
            />
            <button type="submit">Save</button>
            <button onClick={() => setIsEdit(false)}>X-x</button>
          </form>
        </div>
      )}
    </div>
  );
};

export default TodoList;
