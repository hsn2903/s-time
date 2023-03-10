import HabitForm from "@/components/dashboard/habit/HabitForm";
import Reminders from "@/components/dashboard/habit/Reninders";
import DashboardLayout from "@/components/dashboard/layout/DashboardLayout";
import Card from "@/components/ui/Card";
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
import { IoCheckmarkOutline, IoCloseOutline } from "react-icons/io5";

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
      <div className="mx-auto p-6">
        <h1 className="text-xl font-bold mb-4 text-gray-600">Habit Tracker</h1>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          {/* habits list */}
          <Card className="bg-white p-2 rounded-md">
            <ul className="divide-y divide-gray-300">
              {habits.map((habit) => (
                <li
                  key={habit.id}
                  className="flex items-center justify-between p-2"
                >
                  <span className="font-medium text-gray-600">
                    {habit.name}
                  </span>

                  <div className="flex items-center gap-2 bg-gray-200 rounded-md px-3 py-1">
                    <button className="w-5 h-5 bg-green-400 rounded-full text-sm flex items-center justify-center text-white">
                      <IoCheckmarkOutline />
                    </button>
                    <button className="w-5 h-5 bg-red-400 rounded-md text-sm flex items-center justify-center text-white">
                      <IoCloseOutline />
                    </button>
                    <button className="w-5 h-5 bg-green-400 rounded-md text-sm flex items-center justify-center text-white">
                      <IoCheckmarkOutline />
                    </button>
                    <button className="w-5 h-5 bg-green-400 rounded-md text-sm flex items-center justify-center text-white">
                      <IoCheckmarkOutline />
                    </button>
                    <button className="w-5 h-5 bg-green-400 rounded-md text-sm flex items-center justify-center text-white">
                      <IoCheckmarkOutline />
                    </button>
                    <button className="w-5 h-5 bg-red-400 rounded-md text-sm flex items-center justify-center text-white">
                      <IoCloseOutline />
                    </button>
                    <button className="w-5 h-5 bg-green-400 rounded-md text-sm flex items-center justify-center text-white">
                      <IoCheckmarkOutline />
                    </button>
                  </div>
                  <button
                    onClick={() => deleteHabit(habit.id)}
                    className="ml-4 bg-red-400 text-white p-1 rounded hover:bg-red-700 focus:outline-none focus:ring-2 focus:ring-red-600 focus:ring-opacity-50"
                  >
                    <FaTrash size={12} />
                  </button>
                </li>
              ))}
            </ul>
          </Card>
        </div>

        <Card className="p-4">
          <p>Add New Habit</p>
          <form onSubmit={addHabit} className="flex">
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
        </Card>
      </div>
    </DashboardLayout>
  );
}

export default HabitTracker;
