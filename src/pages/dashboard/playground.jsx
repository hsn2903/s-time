import { useState } from "react";
import { AiFillDelete } from "react-icons/ai";
import { FaEdit } from "react-icons/fa";
import { BsCheckCircle, BsCircle } from "react-icons/bs";
import { TiArrowRepeat } from "react-icons/ti";
import { FiPlay } from "react-icons/fi";
import { RiStopCircleLine } from "react-icons/ri";
import { MdLocalDining } from "react-icons/md";

const Task = ({
  task = {
    id: 1,
    name: "Write a blog post",
    pomodoro: 2,
    priority: "High",
    isCompleted: false,
  },
  handleDelete,
  handleEditPriority,
}) => {
  const [isCompleted, setIsCompleted] = useState(false);
  const [isTimerActive, setIsTimerActive] = useState(false);
  const [timer, setTimer] = useState(null);
  const [timeLeft, setTimeLeft] = useState(task.pomodoro * 60);

  const startTimer = () => {
    setIsTimerActive(true);
    setTimer(
      setInterval(() => {
        setTimeLeft((prev) => prev - 1);
      }, 1000)
    );
  };

  const stopTimer = () => {
    setIsTimerActive(false);
    clearInterval(timer);
    setTimer(null);
    setTimeLeft(task.pomodoro * 60);
  };

  const handleComplete = () => {
    setIsCompleted(true);
    stopTimer();
  };

  return (
    <div className="flex items-center justify-between px-4 py-3 bg-white rounded-lg shadow-sm">
      <div className="flex items-center space-x-4">
        {isCompleted ? (
          <BsCheckCircle className="text-green-500 text-2xl" />
        ) : (
          <BsCircle className="text-gray-400 text-2xl" />
        )}
        <div>
          <h3 className="text-lg font-medium">{task.name}</h3>
          <div className="flex items-center space-x-2 text-gray-500">
            <MdLocalDining className="text-red-500" />
            <p>{task.pomodoro}</p>
          </div>
        </div>
      </div>
      <div className="flex items-center space-x-4">
        {!isCompleted && (
          <>
            {isTimerActive ? (
              <button
                className="text-red-500 hover:text-red-600 focus:outline-none"
                onClick={stopTimer}
              >
                <RiStopCircleLine className="text-2xl" />
              </button>
            ) : (
              <button
                className="text-green-500 hover:text-green-600 focus:outline-none"
                onClick={startTimer}
              >
                <FiPlay className="text-2xl" />
              </button>
            )}
          </>
        )}
        <button
          className="text-gray-400 hover:text-gray-600 focus:outline-none"
          onClick={() => handleEditPriority(task.id)}
        >
          <FaEdit className="text-2xl" />
        </button>
        <button
          className="text-red-500 hover:text-red-600 focus:outline-none"
          onClick={() => handleDelete(task.id)}
        >
          <AiFillDelete className="text-2xl" />
        </button>
        {!isCompleted && (
          <button
            className="text-gray-400 hover:text-gray-600 focus:outline-none"
            onClick={handleComplete}
          >
            <TiArrowRepeat className="text-2xl" />
          </button>
        )}
      </div>
    </div>
  );
};

export default Task;
