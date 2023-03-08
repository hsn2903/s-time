import { FaCheckCircle, FaTimesCircle } from "react-icons/fa";

const tasks = [
  { id: 1, title: "Buy groceries", isCompleted: true },
  { id: 2, title: "Clean the kitchen", isCompleted: false },
  { id: 3, title: "Call mom", isCompleted: false },
  { id: 4, title: "Finish the report", isCompleted: true },
];

const TasksSummary = () => {
  const totalTasks = tasks.length;
  const completedTasks = tasks.filter((task) => task.isCompleted).length;
  const inProgressTasks = totalTasks - completedTasks;
  const progress = completedTasks / totalTasks;

  return (
    <div className="bg-white rounded-lg shadow-lg p-4">
      <h3 className="text-lg font-semibold mb-2">Task Summary</h3>
      <div className="flex items-center mb-4">
        <div className="h-4 w-4 rounded-full bg-green-500 mr-2"></div>
        <p className="text-sm font-medium">{completedTasks} completed</p>
      </div>
      <div className="flex items-center mb-4">
        <div className="h-4 w-4 rounded-full bg-red-500 mr-2"></div>
        <p className="text-sm font-medium">{inProgressTasks} in progress</p>
      </div>
      <div className="relative pt-1">
        <div className="overflow-hidden h-2 mb-4 text-xs flex rounded bg-gray-100">
          <div
            style={{ width: `${progress * 100}%` }}
            className="shadow-none flex flex-col text-center whitespace-nowrap text-white justify-center bg-green-500"
          ></div>
        </div>
        <div className="flex mb-2 items-center justify-between">
          <p className="text-xs font-semibold text-gray-500">Progress</p>
          <p className="text-xs font-semibold text-gray-500">
            {Math.round(progress * 100)}%
          </p>
        </div>
      </div>
      <div className="flex items-center">
        <FaCheckCircle className="text-green-500 mr-2" />
        <p className="text-sm font-medium">{totalTasks} total tasks</p>
      </div>
    </div>
  );
};

export default TasksSummary;
