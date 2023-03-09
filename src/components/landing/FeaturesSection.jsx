import { FaClock, FaCalendarCheck, FaListAlt } from "react-icons/fa";

const FeaturesSection = () => {
  return (
    <div className="bg-gray-100 py-24">
      <div className="w-[95vw] md:w-[90vw] mx-auto">
        <h2 className="font-bold text-2xl md:text-3xl lg:text-4xl xl:text-5xl mb-12 text-center">
          Key Features
        </h2>
        <div className="flex flex-col md:flex-row justify-center gap-8">
          <div className="flex-1 bg-white rounded-lg p-8">
            <div className="flex items-center mb-4">
              <FaClock className="mr-4" size={40} color="#1A237E" />
              <h3 className="font-bold text-2xl">Track Your Habits</h3>
            </div>
            <p className="text-lg">
              Easily track your habits and monitor your progress over time with
              our user-friendly habit tracker.
            </p>
          </div>
          <div className="flex-1 bg-white rounded-lg p-8">
            <div className="flex items-center mb-4">
              <FaCalendarCheck className="mr-4" size={40} color="#1A237E" />
              <h3 className="font-bold text-2xl">Set Reminders</h3>
            </div>
            <p className="text-lg">
              Set reminders and notifications to help you stay on track with
              your habits and achieve your goals.
            </p>
          </div>
          <div className="flex-1 bg-white rounded-lg p-8">
            <div className="flex items-center mb-4">
              <FaListAlt className="mr-4" size={40} color="#1A237E" />
              <h3 className="font-bold text-2xl">Customize Your Habits</h3>
            </div>
            <p className="text-lg">
              Customize your habits to fit your unique needs and goals. Choose
              from our pre-defined habits or create your own.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default FeaturesSection;
