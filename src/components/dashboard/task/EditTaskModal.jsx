import { useTaskContext } from "@/contexts/taskContext";
import { db } from "@/utils/firebase";
import { doc, setDoc } from "firebase/firestore";
import React, { useState } from "react";
import { FaPlus } from "react-icons/fa";
import { IoAddOutline, IoRemoveOutline } from "react-icons/io5";

const EditTaskModal = ({ task, openEditModal, setOpenEditModal }) => {
  const [taskData, setTaskData] = useState({ ...task });
  const {
    id,
    taskName,
    userId,
    completed,
    important,
    requiredPomodoro,
    taskDetail,
    createdAt,
  } = taskData;

  const { updateTask } = useTaskContext();

  const handleChange = (e) => {
    const { name, value } = e.target;
    setTaskData({ ...taskData, [name]: value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    updateTask(taskData);
    setOpenEditModal(false);
  };

  return (
    <div className={` ${openEditModal ? "visible" : "invisible"}`}>
      {/* overlay */}
      <div
        className="fixed inset-0 h-screen w-screen bg-gray-600 opacity-75"
        onClick={() => setOpenEditModal(false)}
      ></div>
      <div className="fixed top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 shadow-md p-4 flex flex-col items-center gap-3 bg-white z-50 rounded-md ">
        <h3 className="font-bold uppercase text-gray-700">Edit Task</h3>
        <form onSubmit={handleSubmit} className="flex flex-col gap-2 w-[300px]">
          <input
            name="taskName"
            id="taskName"
            value={taskName}
            onChange={handleChange}
            className="px-2 py-1 bg-gray-300 rounded-md w-full"
            placeholder="Task Name"
          />

          <textarea
            name="taskDetail"
            id="taskDetail"
            rows="3"
            className="px-2 py-1 bg-gray-300 rounded-md w-full"
            placeholder="task details"
            value={taskDetail}
            onChange={handleChange}
          ></textarea>

          <div className="flex items-center w-full gap-4">
            <p className="font-medium text-gray-600">Est. Pomodoro :</p>
            <input
              name="requiredPomodoro"
              id="requiredPomodoro"
              type="number"
              className="px-2 py-1 bg-gray-300 rounded-md w-16"
              placeholder="0"
              value={requiredPomodoro}
              onChange={handleChange}
            />

            {/* <button
            className="p-1 rounded-sm bg-green-500 text-white"
            onClick={() => setRequiredPomodoro(requiredPomodoro + 1)}
          >
            <IoAddOutline size={20} />
          </button>
          <button
            className="p-1 rounded-sm bg-green-500 text-white"
            onClick={() => setRequiredPomodoro(requiredPomodoro - 1)}
          >
            <IoRemoveOutline size={20} />
          </button> */}
          </div>

          <button
            type="submit"
            className="bg-green-600 text-white p-2 rounded-md"
          >
            Save
          </button>
        </form>
      </div>
    </div>
  );
};

export default EditTaskModal;
