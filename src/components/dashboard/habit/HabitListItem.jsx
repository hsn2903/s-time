import { FaCheckCircle, FaRegCircle, FaTrash } from "react-icons/fa";

export default function HabitListItem({ habit, handleCheck, handleDelete }) {
  return (
    <li className="flex items-center justify-between py-2 px-4 border-b border-gray-200">
      <div className="flex items-center">
        {habit.completed ? (
          <FaCheckCircle className="text-green-500 mr-2" />
        ) : (
          <FaRegCircle className="text-gray-500 mr-2" />
        )}
        <span className="text-gray-800">{habit.name}</span>
      </div>
      <button
        className="text-red-500 hover:text-red-700 focus:outline-none"
        onClick={() => handleDelete(habit.id)}
      >
        <FaTrash className="w-4 h-4" />
      </button>
    </li>
  );
}
