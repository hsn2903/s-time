import { useTaskContext } from "@/contexts/taskContext";
import { useUserContext } from "@/contexts/userContext";
import { db } from "@/utils/firebase";
import { doc, setDoc } from "firebase/firestore";
import React, { useState, useEffect } from "react";
import AddTaskModal from "../dashboard/task/AddTaskModal";
import EditTaskModal from "../dashboard/task/EditTaskModal";
import TaskItem from "../dashboard/task/TaskItem";

const TestTodo = () => {
  const [openAddModal, setOpenAddModal] = useState(false);
  const { tasksList } = useTaskContext();

  return (
    <div className="shadow-[rgba(13,_38,_76,_0.19)_0px_9px_20px] p-4 rounded-md">
      <div className="flex justify-between">
        <h1 className="text-gray-600 font-bold">My Tasks</h1>
        <button
          className="bg-zinc-800 px-2 py-1 rounded-md text-white text-sm"
          onClick={() => setOpenAddModal(true)}
        >
          New Task
        </button>
      </div>

      {/* Open Add Modal */}
      <AddTaskModal
        openAddModal={openAddModal}
        setOpenAddModal={setOpenAddModal}
      />

      {/* tasks */}
      <ul className="flex flex-col gap-2 mt-6">
        {tasksList.map((task) => (
          <TaskItem key={task.id} task={task} />
        ))}
      </ul>
    </div>
  );
};

export default TestTodo;
