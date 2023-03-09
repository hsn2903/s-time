import { useState } from "react";
import { IoMdNotificationsOutline } from "react-icons/io";

const Reminders = () => {
  const [reminders, setReminders] = useState([
    { id: 1, time: "8:00 AM", days: ["Mon", "Wed", "Fri"] },
    { id: 2, time: "12:00 PM", days: ["Tue", "Thu", "Sat"] },
    { id: 3, time: "5:00 PM", days: ["Sun"] },
  ]);

  const addReminder = () => {
    // Code to add a new reminder to the list
  };

  const removeReminder = (id) => {
    // Code to remove a reminder from the list
  };

  return (
    <div className="bg-white rounded-lg p-4 shadow-lg">
      <h2 className="text-lg font-medium mb-4">Reminders</h2>
      <ul>
        {reminders.map((reminder) => (
          <li
            key={reminder.id}
            className="flex justify-between items-center mb-2"
          >
            <div>
              <span className="font-medium mr-2">{reminder.time}</span>
              {reminder.days.map((day) => (
                <span key={day} className="text-gray-500 mr-1">
                  {day}
                </span>
              ))}
            </div>
            <button onClick={() => removeReminder(reminder.id)}>
              <IoMdNotificationsOutline className="text-gray-500 hover:text-red-500 cursor-pointer" />
            </button>
          </li>
        ))}
      </ul>
      <button
        className="bg-green-500 text-white py-2 px-4 rounded-md mt-4 hover:bg-green-600"
        onClick={addReminder}
      >
        Add Reminder
      </button>
    </div>
  );
};

export default Reminders;
