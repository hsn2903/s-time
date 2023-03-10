import { useTaskContext } from "@/contexts/taskContext";
import { useUserContext } from "@/contexts/userContext";
import { Timestamp } from "firebase/firestore";
import React, { useState } from "react";
import { FaPlus } from "react-icons/fa";
import { IoAddOutline, IoRemoveOutline } from "react-icons/io5";

const AddTaskModal = ({ openAddModal, setOpenAddModal }) => {
  const [taskName, setTaskName] = useState("");
  const [taskDetail, setTaskDetail] = useState("");
  const [requiredPomodoro, setRequiredPomodoro] = useState(1);

  const { createTask } = useTaskContext();
  const { currentUser } = useUserContext();

  const handleSubmit = async (e) => {
    e.preventDefault();

    const taskData = {
      taskName,
      requiredPomodoro,
      taskDetail,
      completedPomodoro: 0,
      userId: currentUser.uid,
      completed: false,
      important: false,
      createdAt: Timestamp.now(),
    };

    await createTask(taskData);
    setOpenAddModal(false);
  };

  return (
    <div className={` ${openAddModal ? "visible" : "invisible"}`}>
      {/* overlay */}
      <div
        className="fixed inset-0 h-screen w-screen bg-gray-600 opacity-75"
        onClick={() => setOpenAddModal(false)}
      ></div>
      <div className="fixed top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 shadow-md p-4 flex flex-col items-center gap-3 bg-white z-50 rounded-md ">
        <h3 className="font-bold uppercase text-gray-700">New Task</h3>
        <form action="" className="flex flex-col gap-2" onSubmit={handleSubmit}>
          <input
            value={taskName}
            onChange={(e) => setTaskName(e.target.value)}
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
            onChange={(e) => setTaskDetail(e.target.value)}
          ></textarea>

          <div className="flex items-center w-full gap-4">
            <p className="font-medium text-gray-600">Est. Pomodoro :</p>
            <input
              type="number"
              className="px-2 py-1 bg-gray-300 rounded-md w-16"
              placeholder="0"
              value={requiredPomodoro}
              onChange={(e) => setRequiredPomodoro(e.target.value)}
            />

            <button
              type="button"
              className="p-1 rounded-sm bg-green-500 text-white"
              onClick={() => setRequiredPomodoro(requiredPomodoro + 1)}
            >
              <IoAddOutline size={20} />
            </button>
            <button
              type="button"
              className="p-1 rounded-sm bg-green-500 text-white"
              onClick={() => setRequiredPomodoro(requiredPomodoro - 1)}
            >
              <IoRemoveOutline size={20} />
            </button>
          </div>

          <button
            type="submit"
            disabled={!taskName}
            className="bg-zinc-700 text-white text-center p-1 mt-2 rounded-md cursor-pointer hover:bg-zinc-800 flex items-center gap-4 px-4 justify-center"
          >
            <FaPlus />
            <span>Add New Task</span>
          </button>
        </form>
      </div>
    </div>
  );
};

export default AddTaskModal;
