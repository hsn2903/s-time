import { useAppContext } from "@/contexts/appContext";
import Link from "next/link";
import { useRouter } from "next/router";
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
  IoPencilOutline,
} from "react-icons/io5";

const links = [
  {
    icon: (
      <svg
        xmlns="http://www.w3.org/2000/svg"
        className="icon icon-tabler icon-tabler-layout-2"
        width="44"
        height="44"
        viewBox="0 0 24 24"
        strokeWidth="1.5"
        stroke="#676a6e"
        fill="none"
        strokeLinecap="round"
        strokeLinejoin="round"
      >
        <path stroke="none" d="M0 0h24v24H0z" fill="none" />
        <rect x="4" y="4" width="6" height="5" rx="2" />
        <rect x="4" y="13" width="6" height="7" rx="2" />
        <rect x="14" y="4" width="6" height="7" rx="2" />
        <rect x="14" y="15" width="6" height="5" rx="2" />
      </svg>
    ),
    text: "Home",
    url: "/dashboard",
  },
  {
    icon: <IoFileTrayFullOutline className="w-5 h-5 text-gray-600" />,
    text: "Tasks",
    url: "/dashboard/tasks",
  },
  {
    icon: <IoPencilOutline className="w-5 h-5 text-gray-600" />,
    text: "Notes",
    url: "/dashboard/notes",
  },
];

const Sidebar = () => {
  const [tasksOpen, setTasksOpen] = useState(false);
  const router = useRouter();

  const { isSidebarOpen, setIsSidebarOpen } = useAppContext();

  const toggleSidebar = () => {
    setIsSidebarOpen(!isSidebarOpen);
  };

  return (
    <div
      className={`${
        isSidebarOpen ? "w-64" : "w-[72px]"
      } h-screen transition-all duration-300 shadow-[rgba(13,_38,_76,_0.19)_0px_9px_20px] overflow-hidden`}
    >
      <nav className="items-center block w-auto overflow-hidden grow basis-full">
        <ul className="flex flex-col pl-0 mb-0 mt-4">
          {links.map((linkItem, key) => {
            const { icon, text, url } = linkItem;
            return (
              <li className=" w-full" key={key}>
                <Link
                  href={url}
                  className={`flex items-center px-4 py-1 my-1 mx-2 rounded-md bg-transparent transition-colors text-slate-500 ${
                    router.asPath === url &&
                    "border-l-4 border-cyan-400 pl-2 rounded-sm text-[#109CF1]"
                  }`}
                >
                  <div className="mr-2 flex h-8 w-8 items-center justify-center text-center p-1.5">
                    {icon}
                  </div>
                  <span
                    className={`ml-1 text-sm ${
                      router.asPath === url
                        ? "text-gray-600 font-medium"
                        : "text-gray-500"
                    }`}
                  >
                    {text}
                  </span>
                </Link>
              </li>
            );
          })}
        </ul>
      </nav>
    </div>
  );
};

export default Sidebar;
