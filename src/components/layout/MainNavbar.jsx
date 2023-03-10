import { useUserContext } from "@/contexts/userContext";
import { signOutUser } from "@/utils/firebase";
import Link from "next/link";
import React, { useState } from "react";
import { IoCloseOutline, IoMenuOutline } from "react-icons/io5";
import Logo from "./Logo";

const links = [
  { id: 1, text: "Home", url: "/" },
  { id: 2, text: "About", url: "/about" },
  { id: 2, text: "Sign In", url: "/auth/login" },
];

const MainNavbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const { currentUser, setCurrentUser } = useUserContext();

  const signOutHandler = async () => {
    await signOutUser();
    setCurrentUser(null);
  };

  return (
    <div className="shadow-md relative">
      <div className="h-20 flex items-center justify-between w-[95vw] md:w-[90vw] mx-auto">
        {/* nav header */}
        <div className="flex items-center justify-between h-full w-full">
          <Link href="/">
            <Logo />
          </Link>
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="inline-block sm:hidden"
          >
            {isOpen ? (
              <IoCloseOutline size={32} />
            ) : (
              <IoMenuOutline size={32} />
            )}
          </button>
        </div>

        <nav className="hidden sm:flex items-center h-full ">
          <ul className="h-full flex items-center gap-4">
            <li>
              <Link href="/focus" className="font-medium text-gray-700">
                Focus
              </Link>
            </li>
            <li>
              <Link href="/timer" className="font-medium text-gray-700">
                Timer
              </Link>
            </li>

            {currentUser ? (
              <li>
                <Link href="/dashboard" className="font-medium text-gray-700">
                  Dashboard
                </Link>
              </li>
            ) : (
              <li>
                <Link href="/auth/login" className="font-medium text-gray-700">
                  Login
                </Link>
              </li>
            )}
          </ul>
        </nav>
      </div>
      <div
        className={`fixed top-0 left-0 w-screen h-screen flex items-center justify-center bg-gray-100 transition-all duration-700 ${
          isOpen ? "translate-x-0" : "-translate-x-full"
        }`}
      >
        <nav>
          <ul className="flex flex-col gap-4">
            <li>
              <Link href="/focus" className="text-xl font-medium text-gray-700">
                Focus
              </Link>
            </li>
            <li>
              <Link href="/timer" className="text-xl font-medium text-gray-700">
                Timer
              </Link>
            </li>

            <li>
              <Link href="/auth/login" className="font-medium text-gray-700">
                Login
              </Link>
            </li>
          </ul>
        </nav>

        <button
          onClick={() => setIsOpen(!isOpen)}
          className="absolute top-8 right-8"
        >
          <IoCloseOutline
            size={48}
            className="text-red-900 hover:text-red-700"
          />
        </button>
      </div>
    </div>
  );
};

export default MainNavbar;
