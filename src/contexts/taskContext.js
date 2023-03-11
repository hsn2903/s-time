import { db } from "@/utils/firebase";
import {
  addDoc,
  collection,
  deleteDoc,
  doc,
  getDocs,
  onSnapshot,
  query,
  setDoc,
  updateDoc,
  where,
} from "firebase/firestore";
import { useContext, createContext, useState, useEffect } from "react";
import { useUserContext } from "./userContext";

const TaskContext = createContext();

const TaskProvider = ({ children }) => {
  const [tasksList, setTasksList] = useState([]);
  const [selectedTask, setSelectedTask] = useState(null);

  const { currentUser } = useUserContext();

  // const fetchAllTasks = async () => {
  //   const querySnapshot = await getDocs(collection(db, "tasks"));
  //   const tasksData = querySnapshot.docs.map((doc) => ({
  //     id: doc.id,
  //     ...doc.data(),
  //   }));
  //   setTasksList(tasksData);
  // };

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

  const increaseCompletedPomodoro = async (id) => {
    if (selectedTask) {
      const newValue = selectedTask.completedPomodoro + 1;
      try {
        const todoRef = doc(db, "tasks", selectedTask.id);
        await setDoc(todoRef, { completedPomodoro: newValue }, { merge: true });
        fetchAllTasks();
      } catch (e) {
        console.error("Error toggle completed: ", e);
      }
    }
  };

  useEffect(() => {
    const fetchAllTasks = async () => {
      if (currentUser) {
        const q = query(
          collection(db, "tasks"),
          where("userId", "==", currentUser?.uid)
        );

        // Listen for realtime updates to the user's tasks
        const unsubscribe = onSnapshot(q, (querySnapshot) => {
          const tasks = [];
          querySnapshot.forEach((doc) => {
            tasks.push({ id: doc.id, ...doc.data() });
          });
          setTasksList(tasks);
        });

        // Unsubscribe from realtime updates when the component unmounts
        return () => unsubscribe();
      }
    };
    fetchAllTasks();
  }, [currentUser]);

  return (
    <TaskContext.Provider
      value={{
        selectedTask,
        setSelectedTask,
        createTask,
        updateTask,
        deleteTask,
        tasksList,
        toggleComplete,
        increaseCompletedPomodoro,
      }}
    >
      {children}
    </TaskContext.Provider>
  );
};

const useTaskContext = () => {
  return useContext(TaskContext);
};

export { TaskProvider, useTaskContext };
