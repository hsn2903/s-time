// pages/Todo.js

import { useUserContext } from "@/contexts/userContext";
import { db, doc, getDoc, setDoc } from "@/utils/firebase";
import {
  addDoc,
  collection,
  deleteDoc,
  getDocs,
  orderBy,
  query,
} from "firebase/firestore";
import React, { useState, useEffect } from "react";
import { FaPlus, FaEdit, FaTrash } from "react-icons/fa";
import {
  IoCaretForwardCircleOutline,
  IoCheckmarkCircleOutline,
  IoEllipseOutline,
} from "react-icons/io5";

const TestTodo = () => {
  const [tasks, setTasks] = useState([]);
  const [taskName, setTaskName] = useState("");
  const [editId, setEditId] = useState(null);

  const { currentUser } = useUserContext();

  // Read tasks
  const fetchTasks = async () => {
    const querySnapshot = await getDocs(collection(db, "tasks"));

    const documents = [];
    querySnapshot.forEach((doc) => {
      documents.push({ id: doc.id, ...doc.data() });
    });
    setTasks(documents);
  };

  const addTodo = async () => {
    await addDoc(collection(db, "tasks"), {
      taskName: taskName,
      userId: currentUser?.uid || null,
      completed: false,
      important: false,
    });
    setTaskName("");
    fetchTasks();
  };

  const editTodo = async (id, newText) => {
    const todoRef = doc(db, "tasks", id);
    await setDoc(todoRef, { taskName: newText }, { merge: true });
    setEditId(null);
    fetchTasks();
    setTaskName("");
  };

  const toggleComplete = async (id, completedValue) => {
    const todoRef = doc(db, "tasks", id);
    await setDoc(todoRef, { completed: !completedValue }, { merge: true });
    setEditId(null);
    fetchTasks();
  };

  const deleteTodo = async (id) => {
    const todoRef = doc(db, "tasks", id);
    await deleteDoc(todoRef);
    fetchTasks();
  };

  const handleEditSelect = (task) => {
    setEditId(task.id);
    setTaskName(task.taskName);
  };

  useEffect(() => {
    fetchTasks();
  }, []);

  return (
    <div className="shadow-[rgba(13,_38,_76,_0.19)_0px_9px_20px] p-4 rounded-md">
      <h1 className="text-gray-600 font-bold">My Tasks</h1>

      <div className="shadow-md p-4 flex items-center gap-3">
        <input
          value={taskName}
          onChange={(e) => setTaskName(e.target.value)}
          className="px-2 py-1 bg-gray-300 rounded-md"
        />
        {editId ? (
          <button
            onClick={() => editTodo(editId, taskName)}
            className="bg-zinc-600 text-white p-2 rounded-md"
          >
            Save
          </button>
        ) : (
          <button
            onClick={addTodo}
            disabled={!taskName}
            className="bg-zinc-600 text-white p-2 rounded-md cursor-pointer hover:bg-zinc-800"
          >
            <FaPlus />
          </button>
        )}
      </div>
      <ul className="flex flex-col gap-2 mt-6">
        {tasks.map((task) => {
          const { id, taskName, completed, important } = task;
          if (task.deletedAt) {
            return null;
          }
          return (
            <li key={id} className="flex px-4 justify-between hover:shadow-md">
              <div className="flex items-center gap-2 py-2">
                <button onClick={() => toggleComplete(id, completed)}>
                  {completed ? (
                    <IoCheckmarkCircleOutline
                      size={20}
                      className="text-gray-300"
                    />
                  ) : (
                    <IoEllipseOutline size={20} className="text-gray-500" />
                  )}
                </button>

                {editId === id ? (
                  <input
                    value={taskName}
                    onChange={(e) => setTaskName(e.target.value)}
                    className="border-2 border-green-300 rounded-md"
                  />
                ) : (
                  <span
                    className={`font-medium ${
                      completed ? "line-through text-gray-300" : "text-gray-500"
                    }`}
                  >
                    {taskName}
                  </span>
                )}
              </div>

              <div className="flex items-center gap-3">
                <button
                  className="text-gray-500 bg-gray-300 p-1 rounded-md flex items-center justify-center"
                  onClick={() => handleEditSelect(task)}
                >
                  <FaEdit size={12} />
                </button>
                <button
                  className="text-gray-500 bg-gray-300 p-1 rounded-md flex items-center justify-center"
                  onClick={() => deleteTodo(id)}
                >
                  <FaTrash size={12} />
                </button>
              </div>
            </li>
          );
        })}
      </ul>
    </div>
  );
};

export default TestTodo;
