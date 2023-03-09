import HabitForm from "@/components/dashboard/habit/HabitForm";
import Reminders from "@/components/dashboard/habit/Reninders";
import DashboardLayout from "@/components/dashboard/layout/DashboardLayout";
import { db } from "@/utils/firebase";
import {
  addDoc,
  collection,
  deleteDoc,
  doc,
  getDocs,
} from "firebase/firestore";
import React, { useState, useEffect } from "react";
import { AiFillHome } from "react-icons/ai";
import { FaPlus, FaTrash, FaUserCircle } from "react-icons/fa";

function HabitTracker() {
  const [habits, setHabits] = useState([]);
  const [newHabit, setNewHabit] = useState("");

  const fetchHabits = async () => {
    const querySnapshot = await getDocs(collection(db, "habits"));
    const documents = [];
    querySnapshot.forEach((doc) => {
      documents.push({ id: doc.id, ...doc.data() });
    });
    setHabits(documents);
  };

  useEffect(() => {
    fetchHabits();
  }, []);

  const addHabit = async (event) => {
    event.preventDefault();
    await addDoc(collection(db, "habits"), { name: newHabit });
    setNewHabit("");
    fetchHabits();
  };

  const deleteHabit = async (id) => {
    await deleteDoc(doc(db, "habits", id));
    fetchHabits();
  };

  return (
    <DashboardLayout>
      <div className="max-w-md mx-auto">
        <h1 className="text-2xl font-bold mb-4">Habit Tracker</h1>
        <form onSubmit={addHabit} className="flex mb-4">
          <input
            type="text"
            value={newHabit}
            onChange={(event) => setNewHabit(event.target.value)}
            className="flex-1 rounded-l-lg p-2 border border-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-600 focus:border-transparent"
          />
          <button
            type="submit"
            className="rounded-r-lg bg-blue-600 text-white p-2 hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-600 focus:ring-opacity-50"
          >
            <FaPlus />
          </button>
        </form>
        <ul className="divide-y divide-gray-300">
          {habits.map((habit) => (
            <li
              key={habit.id}
              className="flex items-center justify-between py-2"
            >
              <span>{habit.name}</span>
              <button
                onClick={() => deleteHabit(habit.id)}
                className="ml-4 bg-red-600 text-white p-2 rounded hover:bg-red-700 focus:outline-none focus:ring-2 focus:ring-red-600 focus:ring-opacity-50"
              >
                <FaTrash />
              </button>
            </li>
          ))}
        </ul>
      </div>
    </DashboardLayout>
  );
}

export default HabitTracker;
