import { FaPlusCircle } from "react-icons/fa";

export default function HabitForm({
  handleSubmit,
  habitName,
  setHabitName,
  targetTimes,
  setTargetTimes,
}) {
  return (
    <form className="flex items-center mb-4" onSubmit={handleSubmit}>
      <input
        type="text"
        placeholder="Enter habit name"
        className="rounded-l-lg py-2 px-4 border-t mr-0 border-b border-l text-gray-800 border-gray-200 bg-white"
        value={habitName}
        onChange={(e) => setHabitName(e.target.value)}
      />
      <input
        type="number"
        placeholder="Target times per week"
        className="py-2 px-4 border-t border-b border-l text-gray-800 border-gray-200 bg-white"
        value={targetTimes}
        onChange={(e) => setTargetTimes(e.target.value)}
      />
      <button
        type="submit"
        className="bg-green-500 text-white rounded-r-lg py-2 px-4 flex items-center hover:bg-green-600 focus:outline-none focus:ring-2 focus:ring-green-600 focus:ring-opacity-50"
      >
        <FaPlusCircle className="w-4 h-4 mr-2" />
        Add Habit
      </button>
    </form>
  );
}
