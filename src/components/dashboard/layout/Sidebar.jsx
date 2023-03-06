import Link from "next/link";
import { useState } from "react";
import {
  FaHome,
  FaCalendarAlt,
  FaListUl,
  FaUserAlt,
  FaChevronLeft,
  FaChevronRight,
} from "react-icons/fa";
import {
  IoCalendarOutline,
  IoChevronDownOutline,
  IoFileTrayFullOutline,
  IoHome,
  IoHomeOutline,
} from "react-icons/io5";

const Sidebar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [tasksOpen, setTasksOpen] = useState(false);

  const toggleSidebar = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div
      className={`${
        isOpen ? "w-64" : "w-20"
      } bg-gray-800 text-white h-screen transition-all duration-300 shadow-md text-lg`}
    >
      <div className="px-4 py-3 flex items-center justify-between">
        <h1 className="text-xl font-bold">s-time</h1>
        <button
          className="mt-3 focus:outline-none"
          onClick={toggleSidebar}
          aria-label="Toggle Sidebar"
        >
          {isOpen ? <FaChevronLeft size={20} /> : <FaChevronRight size={20} />}
        </button>
      </div>
      <nav className="flex flex-col gap-4 mt-4">
        <Link href="/" className="flex items-center py-2 px-4">
          <IoHomeOutline className="mr-2" />
          Home
        </Link>
        <Link href="/" className="flex items-center py-2 px-4">
          <IoCalendarOutline className="mr-2" />
          Calendar
        </Link>

        {/* tasks */}
        <div
          className="flex items-center justify-between px-4"
          onClick={() => setTasksOpen(!tasksOpen)}
        >
          <div className="flex items-center gap-2">
            <IoFileTrayFullOutline />
            <span className="font-medium">Tasks</span>
          </div>
          <button>
            <IoChevronDownOutline />
          </button>
        </div>

        {tasksOpen && (
          <div className="px-4">
            <Link href="/" className="flex items-center py-1 px-4">
              <FaListUl className="mr-2" size={12} />
              Daily Tasks
            </Link>
            <Link href="/" className="flex items-center py-1 px-4">
              <FaUserAlt className="mr-2" size={12} />
              Monthly Tasks
            </Link>
          </div>
        )}

        <Link href="/" className="flex items-center py-2 px-4">
          <IoCalendarOutline className="mr-2" />
          Calendar
        </Link>
      </nav>
    </div>
  );
};

export default Sidebar;
