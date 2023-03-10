import { db } from "@/utils/firebase";
import {
  addDoc,
  collection,
  deleteDoc,
  doc,
  getDocs,
  setDoc,
  updateDoc,
} from "firebase/firestore";
import { useContext, createContext, useState, useEffect } from "react";

const TaskContext = createContext();

const TaskProvider = ({ children }) => {
  const [tasksList, setTasksList] = useState([]);

  const fetchAllTasks = async () => {
    const querySnapshot = await getDocs(collection(db, "tasks"));
    const tasksData = querySnapshot.docs.map((doc) => ({
      id: doc.id,
      ...doc.data(),
    }));
    setTasksList(tasksData);
  };

  const createTask = async (task) => {
    try {
      const tasksCollection = collection(db, "tasks");
      const docRef = await addDoc(tasksCollection, task);
      console.log("Document written with ID: ", docRef.id);
      fetchAllTasks();
    } catch (e) {
      console.error("Error adding document: ", e);
    }
  };

  const updateTask = async (updatedTask) => {
    try {
      await updateDoc(doc(db, "tasks", updatedTask.id), updatedTask);
      console.log("Document updated!");
      fetchAllTasks();
      // close dialog here
    } catch (e) {
      console.error("Error updating document: ", e);
    }
  };

  const deleteTask = async (id) => {
    try {
      await deleteDoc(doc(db, "tasks", id));
      console.log("Document deleted!");
      fetchAllTasks();
      // close dialog here
    } catch (e) {
      console.error("Error deleting document: ", e);
    }
  };

  const toggleComplete = async (id, completedValue) => {
    try {
      const todoRef = doc(db, "tasks", id);
      await setDoc(todoRef, { completed: !completedValue }, { merge: true });
      fetchAllTasks();
    } catch (e) {
      console.error("Error toggle completed: ", e);
    }
  };

  useEffect(() => {
    fetchAllTasks();
  }, []);

  return (
    <TaskContext.Provider
      value={{ createTask, updateTask, deleteTask, tasksList, toggleComplete }}
    >
      {children}
    </TaskContext.Provider>
  );
};

const useTaskContext = () => {
  return useContext(TaskContext);
};

export { TaskProvider, useTaskContext };
