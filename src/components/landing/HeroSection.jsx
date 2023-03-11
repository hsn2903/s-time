import Image from "next/image";
import Link from "next/link";

const HeroSection = () => {
  return (
    <div className="">
      <div className="w-[95vw] md:w-[90vw] mx-auto py-20 ">
        <div className="flex flex-col md:flex-row gap-8">
          <div className="md:w-1/2">
            <h1 className="font-bold text-3xl md:text-4xl lg:text-5xl xl:text-6xl mb-6 ">
              Get More Done in Less Time with{" "}
              <span className="inline-block text-green-500 ">s-time</span>
            </h1>
            <p className="text-lg md:text-xl lg:text-2xl xl:text-3xl font-medium mb-8">
              The ultimate tool for busy professionals and students
            </p>
            <div className="flex items-center">
              <Link
                href="/auth/login"
                className="bg-green-500 hover:opacity-80 text-white font-medium py-3 px-8 rounded-full mr-4 mb-4 md:mb-0 shadow-md"
              >
                Start Using Now
              </Link>
              <a
                href="#how"
                className="font-medium text-gray-900 hover:text-gray-600 py-3 px-8 rounded-full group flex gap-1 hover:gap-3 transition-all"
              >
                <span>Learn More</span>
                <span className="">&rarr;</span>
              </a>
            </div>
          </div>
          <div className="md:w-1/2 flex justify-center md:justify-end">
            <Image
              src="images/bg.svg"
              alt="man working"
              width={400}
              height={400}
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default HeroSection;
