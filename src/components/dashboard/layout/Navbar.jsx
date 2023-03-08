import { useAppContext } from "@/contexts/appContext";
import { useState } from "react";
import { FaSearch, FaUserCircle, FaMoon, FaSun } from "react-icons/fa";
import { IoMenuOutline } from "react-icons/io5";

const Navbar = () => {
  const [isDarkMode, setIsDarkMode] = useState(false);

  const { isSidebarOpen, setIsSidebarOpen } = useAppContext();

  const toggleTheme = () => {
    setIsDarkMode(!isDarkMode);
  };

  return (
    <nav className=" py-2 px-6 flex justify-between items-center shadow-md">
      <div className="flex items-center">
        <button
          className=" focus:outline-none"
          onClick={() => setIsSidebarOpen(!isSidebarOpen)}
          aria-label="Toggle Sidebar"
        >
          <IoMenuOutline size={28} className="text-gray-500" />
        </button>

        <div className="px-4 py-3 flex items-center justify-between">
          <h1 className="text-xl font-bold">s-time</h1>
        </div>

        <form className="flex items-center ml-6">
          <input
            className="px-3 py-1 bg-gray-200 rounded-lg focus:outline-none"
            type="text"
            placeholder="Search"
          />
          <button className=" rounded-lg ml-2 focus:outline-none" type="submit">
            <FaSearch className="" size={18} />
          </button>
        </form>
      </div>
      <div className="flex items-center">
        <button
          className="rounded-lg mr-4 focus:outline-none"
          onClick={toggleTheme}
        >
          {isDarkMode ? (
            <FaSun className="text-yellow-500" size={20} />
          ) : (
            <FaMoon className="" size={20} />
          )}
        </button>
        <button className="focus:outline-none">
          <FaUserCircle className="" size={28} />
        </button>
      </div>
    </nav>
  );
};

export default Navbar;
