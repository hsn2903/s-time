import DashboardLayout from "@/components/dashboard/layout/DashboardLayout";
import React from "react";
import { FaCog } from "react-icons/fa";

const SettingsPage = () => {
  return (
    <DashboardLayout>
      <div className="flex flex-col justify-center items-center  bg-gray-200 p-4">
        <h1 className="text-2xl font-bold mb-4">Settings</h1>
        <div className="bg-white shadow-md rounded-md p-8 max-w-lg w-full">
          <div className="flex items-center mb-4">
            <FaCog className="text-gray-500 mr-2" />
            <h2 className="text-xl font-bold">General Settings</h2>
          </div>
          <div className="flex flex-col mb-6">
            <label htmlFor="timezone" className="mb-2 font-bold">
              Timezone
            </label>
            <select
              id="timezone"
              className="border border-gray-300 rounded-md py-2 px-3 focus:outline-none focus:border-blue-500"
            >
              <option value="EST">Eastern Time (EST)</option>
              <option value="CST">Central Time (CST)</option>
              <option value="MST">Mountain Time (MST)</option>
              <option value="PST">Pacific Time (PST)</option>
            </select>
          </div>
          <div className="flex items-center mb-4">
            <FaCog className="text-gray-500 mr-2" />
            <h2 className="text-xl font-bold">Notifications</h2>
          </div>
          <div className="flex flex-col mb-6">
            <label htmlFor="email" className="mb-2 font-bold">
              Email Notifications
            </label>
            <div className="flex items-center">
              <input
                type="checkbox"
                id="email"
                className="mr-2"
                defaultChecked
              />
              <label htmlFor="email">Receive email notifications</label>
            </div>
          </div>
          <div className="flex flex-col mb-6">
            <label htmlFor="push" className="mb-2 font-bold">
              Push Notifications
            </label>
            <div className="flex items-center">
              <input type="checkbox" id="push" className="mr-2" />
              <label htmlFor="push">Receive push notifications</label>
            </div>
          </div>
          <button className="bg-blue-500 hover:bg-blue-600 text-white py-2 px-4 rounded-md">
            Save
          </button>
        </div>
      </div>
    </DashboardLayout>
  );
};

export default SettingsPage;
