import React from "react";

const MainFooter = () => {
  return (
    <footer className="bg-gray-900 text-white">
      <div className="container mx-auto py-8">
        <div className="flex flex-col md:flex-row justify-between items-center">
          <div className="mb-4 md:mb-0">
            <h3 className="text-2xl font-bold">s-time</h3>
            <p className="mt-2 text-gray-300">
              The ultimate tool for busy professionals and students.
            </p>
          </div>
          <div className="flex flex-col md:flex-row gap-4">
            <a href="#" className="hover:text-gray-300">
              Privacy Policy
            </a>
            <a href="#" className="hover:text-gray-300">
              Terms of Service
            </a>
            <a href="#" className="hover:text-gray-300">
              Contact Us
            </a>
          </div>
        </div>
        <hr className="border-gray-800 my-8" />
        <p className="text-center text-gray-400">
          &copy; {new Date().getFullYear()} s-time. All rights reserved.
        </p>
      </div>
    </footer>
  );
};

export default MainFooter;
