import { useState } from "react";
import { FaSearch, FaUserCircle, FaMoon, FaSun } from "react-icons/fa";

const Navbar = () => {
  const [isDarkMode, setIsDarkMode] = useState(false);

  const toggleTheme = () => {
    setIsDarkMode(!isDarkMode);
  };

  return (
    <nav className="bg-gray-800 text-white py-4 px-6 flex justify-between items-center">
      <div className="flex items-center">
        <form className="flex items-center ml-6">
          <input
            className="px-3 py-2 bg-gray-700 rounded-lg focus:outline-none"
            type="text"
            placeholder="Search"
          />
          <button
            className="bg-gray-700 rounded-lg ml-2 focus:outline-none"
            type="submit"
          >
            <FaSearch className="text-white" size={18} />
          </button>
        </form>
      </div>
      <div className="flex items-center">
        <button
          className="bg-gray-700 rounded-lg mr-4 focus:outline-none"
          onClick={toggleTheme}
        >
          {isDarkMode ? (
            <FaSun className="text-yellow-500" size={20} />
          ) : (
            <FaMoon className="text-white" size={20} />
          )}
        </button>
        <button className="focus:outline-none">
          <FaUserCircle className="text-white" size={28} />
        </button>
      </div>
    </nav>
  );
};

export default Navbar;
