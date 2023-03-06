import {
  FaSignInAlt,
  FaListAlt,
  FaCalendarAlt,
  FaCheckCircle,
} from "react-icons/fa";

const HowItWorksSection = () => {
  return (
    <section className="bg-white py-20">
      <div className="container mx-auto">
        <div className="text-center mb-10">
          <h2 className="text-3xl font-bold text-gray-900">How It Works</h2>
          <p className="text-gray-600">
            Discover how easy it is to use our time management and productivity
            app
          </p>
        </div>
        <div className="flex flex-wrap justify-center">
          <div className="w-full md:w-1/2 lg:w-1/4 p-4">
            <div className="bg-gradient-to-br from-blue-500 to-indigo-500 rounded-full h-16 w-16 flex items-center justify-center text-white mb-4 shadow-md">
              <FaSignInAlt className="text-3xl" />
            </div>
            <h3 className="text-xl font-bold text-gray-900 mb-2">Sign Up</h3>
            <p className="text-gray-600">
              Create your account and sign up for our app.
            </p>
          </div>
          <div className="w-full md:w-1/2 lg:w-1/4 p-4">
            <div className="bg-gradient-to-br from-blue-500 to-indigo-500 rounded-full h-16 w-16 flex items-center justify-center text-white mb-4 shadow-md">
              <FaListAlt className="text-3xl" />
            </div>
            <h3 className="text-xl font-bold text-gray-900 mb-2">
              Create Task Lists
            </h3>
            <p className="text-gray-600">
              Create your task lists and organize them by project or priority.
            </p>
          </div>
          <div className="w-full md:w-1/2 lg:w-1/4 p-4">
            <div className="bg-gradient-to-br from-blue-500 to-indigo-500 rounded-full h-16 w-16 flex items-center justify-center text-white mb-4 shadow-md">
              <FaCalendarAlt className="text-3xl" />
            </div>
            <h3 className="text-xl font-bold text-gray-900 mb-2">
              Schedule Tasks
            </h3>
            <p className="text-gray-600">
              Schedule your tasks and events in a monthly, weekly or daily
              calendar view.
            </p>
          </div>
          <div className="w-full md:w-1/2 lg:w-1/4 p-4">
            <div className="bg-gradient-to-br from-blue-500 to-indigo-500 rounded-full h-16 w-16 flex items-center justify-center text-white mb-4 shadow-md">
              <FaCheckCircle className="text-3xl" />
            </div>
            <h3 className="text-xl font-bold text-gray-900 mb-2">
              Get Things Done
            </h3>
            <p className="text-gray-600">
              Track your progress and productivity to get things done on time
              and achieve your goals.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HowItWorksSection;
