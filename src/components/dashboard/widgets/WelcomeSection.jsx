import Card from "@/components/ui/Card";
import { FaCheckCircle } from "react-icons/fa";

const WelcomeSection = ({ username }) => {
  return (
    <Card className="bg-gradient-to-r from-blue-500 to-blue-600 p-4">
      <div className="max-w-7xl mx-auto text-center">
        <h2 className="text-xl font-bold text-white">
          Welcome back, {username} 🎉!
        </h2>
        <p className="mt-4 text-white">
          Keep track of your habits and tasks with ease.
        </p>
        <div className="mt-8 flex justify-center">
          <div className="inline-flex rounded-md shadow">
            <button
              type="button"
              className="inline-flex items-center px-4 py-1 border border-transparent text-base font-medium rounded-md text-blue-500 bg-white hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500"
            >
              Get started
              <FaCheckCircle
                className="ml-2 -mr-1 h-5 w-5"
                aria-hidden="true"
              />
            </button>
          </div>
        </div>
      </div>
    </Card>
  );
};

export default WelcomeSection;
