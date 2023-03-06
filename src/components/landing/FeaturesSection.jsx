import {
  FaCalendarCheck,
  FaListUl,
  FaClock,
  FaRegChartBar,
} from "react-icons/fa";

const FeaturesSection = () => {
  return (
    <section className="bg-gray-100 py-20">
      <div className="container mx-auto">
        <div className="text-center mb-10">
          <h2 className="text-3xl font-bold">Features</h2>
          <p className="text-gray-500">
            Discover the benefits of using our time management and productivity
            app
          </p>
        </div>
        <div className="flex flex-wrap justify-center">
          <div className="w-full md:w-1/2 lg:w-1/4 p-4">
            <div className="bg-white rounded-lg shadow-lg px-6 py-8 text-center">
              <FaCalendarCheck className="text-blue-500 text-4xl mb-4" />
              <h3 className="text-xl font-bold mb-2">Calendar View</h3>
              <p className="text-gray-600">
                View your tasks and events in a monthly, weekly or daily
                calendar view.
              </p>
            </div>
          </div>
          <div className="w-full md:w-1/2 lg:w-1/4 p-4">
            <div className="bg-white rounded-lg shadow-lg px-6 py-8 text-center">
              <FaListUl className="text-blue-500 text-4xl mb-4" />
              <h3 className="text-xl font-bold mb-2">Task Lists</h3>
              <p className="text-gray-600">
                Create task lists and organize them by priority, due date or
                project.
              </p>
            </div>
          </div>
          <div className="w-full md:w-1/2 lg:w-1/4 p-4">
            <div className="bg-white rounded-lg shadow-lg px-6 py-8 text-center">
              <FaClock className="text-blue-500 text-4xl mb-4" />
              <h3 className="text-xl font-bold mb-2">Time Tracking</h3>
              <p className="text-gray-600">
                Track the time spent on tasks and analyze your productivity with
                reports.
              </p>
            </div>
          </div>
          <div className="w-full md:w-1/2 lg:w-1/4 p-4">
            <div className="bg-white rounded-lg shadow-lg px-6 py-8 text-center">
              <FaRegChartBar className="text-blue-500 text-4xl mb-4" />
              <h3 className="text-xl font-bold mb-2">Statistics</h3>
              <p className="text-gray-600">
                Get detailed statistics and insights on your performance and
                progress over time.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default FeaturesSection;
