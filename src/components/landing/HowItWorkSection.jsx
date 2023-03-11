import Image from "next/image";
import { FaClock, FaCalendarCheck, FaListAlt } from "react-icons/fa";

const HowItWorkSection = () => {
  return (
    <div id="how" className="bg-white py-20">
      <div className="wrapper">
        <h2 className="text-3xl md:text-4xl lg:text-5xl xl:text-6xl font-bold mb-12 text-center">
          How It Works
        </h2>
        <div className="flex flex-col md:flex-row gap-8">
          <div className="md:w-1/2 flex justify-center">
            <Image
              src="/images/how-it-works.svg"
              alt="how it works"
              width={400}
              height={400}
            />
          </div>
          <div className="md:w-1/2 flex flex-col gap-4 justify-center">
            <div className="flex mb-4">
              <FaClock className="text-5xl text-teal-600 mr-4" />
              <div>
                <h3 className="text-xl lg:text-2xl font-bold mb-2">
                  Save Time
                </h3>
                <p className="text-gray-800">
                  With our habit tracker app, you can easily track your time and
                  manage your tasks in one place, so you can focus on what
                  matters most.
                </p>
              </div>
            </div>
            <div className="flex mb-4">
              <FaCalendarCheck className="text-4xl text-teal-600 mr-4" />
              <div>
                <h3 className="text-xl lg:text-2xl font-bold mb-2">
                  Stay Organized
                </h3>
                <p className="text-gray-800">
                  Keep all of your deadlines, appointments, and events in one
                  place with our easy-to-use calendar feature.
                </p>
              </div>
            </div>
            <div className="flex mb-4">
              <FaListAlt className="text-4xl text-teal-600 mr-4" />
              <div>
                <h3 className="text-xl lg:text-2xl font-bold mb-2">
                  Stay On Track
                </h3>
                <p className="text-gray-800">
                  Create to-do lists and set reminders to help you stay on track
                  and complete your tasks on time.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HowItWorkSection;
