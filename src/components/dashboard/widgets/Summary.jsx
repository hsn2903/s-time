import { FaCheck, FaTimes } from "react-icons/fa";

const habits = [
  { id: 1, title: "Drink 8 cups of water", isCompleted: true },
  { id: 2, title: "Exercise for 30 minutes", isCompleted: true },
  { id: 3, title: "Meditate for 10 minutes", isCompleted: false },
];

const tasks = [
  { id: 1, title: "Buy groceries", isCompleted: true },
  { id: 2, title: "Clean the kitchen", isCompleted: false },
  { id: 3, title: "Call mom", isCompleted: false },
  { id: 4, title: "Finish the report", isCompleted: true },
];

const Summary = () => {
  const totalHabits = habits.length;
  const completedHabits = habits.filter((habit) => habit.isCompleted).length;
  const inProgressHabits = totalHabits - completedHabits;

  const totalTasks = tasks.length;
  const completedTasks = tasks.filter((task) => task.isCompleted).length;
  const inProgressTasks = totalTasks - completedTasks;

  return (
    <div className="grid grid-cols-2 gap-4">
      <div className="bg-gray-200 p-4 rounded-lg">
        <h3 className="text-lg font-semibold mb-2">Habits</h3>
        <p className="text-gray-500 mb-1">Total: {totalHabits}</p>
        <p className="text-gray-500 mb-1">
          Completed: {completedHabits}{" "}
          <FaCheck className="text-green-500 inline-block" />
        </p>
        <p className="text-gray-500 mb-1">
          In Progress: {inProgressHabits}{" "}
          <FaTimes className="text-red-500 inline-block" />
        </p>
      </div>
      <div className="bg-gray-200 p-4 rounded-lg">
        <h3 className="text-lg font-semibold mb-2">Tasks</h3>
        <p className="text-gray-500 mb-1">Total: {totalTasks}</p>
        <p className="text-gray-500 mb-1">
          Completed: {completedTasks}{" "}
          <FaCheck className="text-green-500 inline-block" />
        </p>
        <p className="text-gray-500 mb-1">
          In Progress: {inProgressTasks}{" "}
          <FaTimes className="text-red-500 inline-block" />
        </p>
      </div>
    </div>
  );
};

export default Summary;
