import { FaCheckCircle, FaTimesCircle } from "react-icons/fa";

const habits = [
  { id: 1, title: "Drink 8 cups of water", isCompleted: true },
  { id: 2, title: "Exercise for 30 minutes", isCompleted: true },
  { id: 3, title: "Meditate for 10 minutes", isCompleted: false },
];

const HabitSummary = () => {
  const totalHabits = habits.length;
  const completedHabits = habits.filter((habit) => habit.isCompleted).length;
  const inProgressHabits = totalHabits - completedHabits;
  const progress = completedHabits / totalHabits;

  return (
    <div className="bg-white rounded-lg shadow-lg p-4">
      <h3 className="text-lg font-semibold mb-2">Habit Summary</h3>
      <div className="flex items-center mb-4">
        <div className="h-4 w-4 rounded-full bg-green-500 mr-2"></div>
        <p className="text-sm font-medium">{completedHabits} completed</p>
      </div>
      <div className="flex items-center mb-4">
        <div className="h-4 w-4 rounded-full bg-red-500 mr-2"></div>
        <p className="text-sm font-medium">{inProgressHabits} in progress</p>
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
        <p className="text-sm font-medium">{totalHabits} total habits</p>
      </div>
    </div>
  );
};

export default HabitSummary;
