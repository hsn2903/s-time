import { useTaskContext } from "@/contexts/taskContext";
import React, { useState } from "react";
import { FaEdit, FaTrash } from "react-icons/fa";
import { IoCheckmarkCircleOutline, IoEllipseOutline } from "react-icons/io5";
import EditTaskModal from "./EditTaskModal";

const TaskItem = ({ task }) => {
  const { id, taskName, completed, important } = task;
  const [openEditModal, setOpenEditModal] = useState(false);
  const [isSelected, setIsSelected] = useState(false);
  const { deleteTask, toggleComplete } = useTaskContext();

  const handleEditSelect = (task) => {
    setOpenEditModal(true);
  };

  return (
    <>
      <li
        key={id}
        className={`flex px-4 justify-between hover:shadow-md ${
          isSelected ? "border border-green-600 rounded-md bg-gray-200" : ""
        }`}
        onClick={() => setIsSelected(!isSelected)}
      >
        <div className="flex items-center gap-2 py-2">
          <button onClick={() => toggleComplete(id, completed)}>
            {completed ? (
              <IoCheckmarkCircleOutline size={20} className="text-gray-400" />
            ) : (
              <IoEllipseOutline size={20} className="text-gray-500" />
            )}
          </button>

          <span
            className={`font-medium ${
              completed ? "line-through text-gray-400" : "text-gray-500"
            }`}
          >
            {taskName}
          </span>
        </div>

        <div className="flex items-center gap-3">
          <button
            className="text-gray-500 bg-gray-300 p-1 rounded-md flex items-center justify-center"
            onClick={() => handleEditSelect(task)}
          >
            <FaEdit size={12} />
          </button>
          <button
            type="button"
            className="text-gray-500 bg-gray-300 p-1 rounded-md flex items-center justify-center"
            onClick={() => deleteTask(id)}
          >
            <FaTrash size={12} />
          </button>
        </div>
      </li>

      {/* Edit Task Modal */}
      <EditTaskModal
        task={task}
        openEditModal={openEditModal}
        setOpenEditModal={setOpenEditModal}
      />
    </>
  );
};

export default TaskItem;
