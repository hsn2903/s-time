import { FaCheckCircle, FaCalendarAlt, FaChartLine } from "react-icons/fa";
import { IoNotificationsOutline } from "react-icons/io5";
import { MdFormatListBulleted } from "react-icons/md";
import { AiOutlineThunderbolt } from "react-icons/ai";

const FeaturesSection = () => {
  return (
    <section className="bg-gray-100 py-20">
      <div className="wrapper">
        <h2 className="text-4xl font-bold mb-12 text-center">Features</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
          <div className="flex items-center">
            <FaCheckCircle className="text-green-500 text-5xl mr-5" />
            <div>
              <h3 className="font-bold text-xl mb-3">Track Your Habits</h3>
              <p className="text-gray-600 leading-relaxed">
                Keep track of your habits and monitor your progress over time.
              </p>
            </div>
          </div>
          <div className="flex items-center">
            <MdFormatListBulleted className="text-green-500 text-5xl mr-5" />
            <div>
              <h3 className="font-bold text-xl mb-3">Customizable Lists</h3>
              <p className="text-gray-600 leading-relaxed">
                Create your own custom lists and add your own habits to them.
              </p>
            </div>
          </div>
          <div className="flex items-center">
            <IoNotificationsOutline className="text-green-500 text-5xl mr-5" />
            <div>
              <h3 className="font-bold text-xl mb-3">Notifications</h3>
              <p className="text-gray-600 leading-relaxed">
                Set reminders and get notifications to help you stay on track.
              </p>
            </div>
          </div>
          <div className="flex items-center">
            <AiOutlineThunderbolt className="text-green-500 text-5xl mr-5" />
            <div>
              <h3 className="font-bold text-xl mb-3">Quick Add</h3>
              <p className="text-gray-600 leading-relaxed">
                Quickly add habits with just a few clicks or taps.
              </p>
            </div>
          </div>
          <div className="flex items-center">
            <FaCalendarAlt className="text-green-500 text-5xl mr-5" />
            <div>
              <h3 className="font-bold text-xl mb-3">Calendar View</h3>
              <p className="text-gray-600 leading-relaxed">
                View your progress over time in a convenient calendar format.
              </p>
            </div>
          </div>
          <div className="flex items-center">
            <FaChartLine className="text-green-500 text-5xl mr-5" />
            <div>
              <h3 className="font-bold text-xl mb-3">Statistics</h3>
              <p className="text-gray-600 leading-relaxed">
                See detailed statistics and graphs to help you understand your
                habits better.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default FeaturesSection;
