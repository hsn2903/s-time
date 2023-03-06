import { FaClock, FaCalendarCheck, FaListAlt } from "react-icons/fa";

const HeroSection = () => {
  return (
    <div className="bg-gradient-to-r from-blue-500 via-green-600 to-sky-500">
      <div className="container mx-auto py-20">
        <div className="md:flex md:flex-wrap md:items-center">
          <div className="md:w-1/2">
            <h1 className="text-white font-bold text-3xl md:text-4xl lg:text-5xl xl:text-6xl mb-6">
              Get More Done in Less Time with s-time
            </h1>
            <p className="text-white text-lg md:text-xl lg:text-2xl xl:text-3xl font-medium mb-8">
              The ultimate tool for busy professionals and students
            </p>
            <a
              href="#"
              className="bg-white text-blue-500 hover:bg-blue-600 font-medium py-3 px-8 rounded-full mr-4 mb-4 md:mb-0"
            >
              Start Using Now
            </a>
            <a
              href="#"
              className="text-white font-medium hover:text-blue-200 py-3 px-8 rounded-full"
            >
              Learn More
            </a>
          </div>
          <div className="md:w-1/2 flex justify-center md:justify-end">
            <div className="w-full md:w-3/4 lg:w-2/3 xl:w-1/2 flex flex-wrap justify-between items-center">
              <div className="w-1/2 md:w-auto flex flex-col items-center mb-8 md:mb-12">
                <FaClock className="text-white text-4xl md:text-5xl lg:text-6xl mb-4" />
                <h2 className="text-white font-bold text-lg md:text-xl lg:text-2xl xl:text-3xl mb-2">
                  Save Time
                </h2>
                <p className="text-white font-medium text-sm md:text-base lg:text-lg xl:text-xl text-center">
                  Spend less time managing your tasks and more time getting
                  things done with our intuitive time-saving features.
                </p>
              </div>
              <div className="w-1/2 md:w-auto flex flex-col items-center mb-8 md:mb-12">
                <FaCalendarCheck className="text-white text-4xl md:text-5xl lg:text-6xl mb-4" />
                <h2 className="text-white font-bold text-lg md:text-xl lg:text-2xl xl:text-3xl mb-2">
                  Stay Organized
                </h2>
                <p className="text-white font-medium text-sm md:text-base lg:text-lg xl:text-xl text-center">
                  Never miss a deadline or forget an important task again with
                  our powerful organization and scheduling tools.
                </p>
              </div>
              <div className="w-1/2 md:w-auto flex flex-col items-center">
                <FaListAlt className="text-white text-4xl md:text-5xl lg:text-6xl mb-4" />
                <h2 className="text-white font-bold text-lg md:text-xl lg:text-2xl xl:text-3xl mb-2">
                  Achieve More
                </h2>
                <p className="text-white font-medium text-sm md:text-base lg:text-lg xl:text-xl text-center">
                  Boost your productivity and achieve your goals faster by
                  staying focused and on track with our progress tracking and
                  collaboration tools.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HeroSection;
