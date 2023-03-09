import { FaCog } from "react-icons/fa";
import { AiOutlineLoading } from "react-icons/ai";

function UnderDevelopment() {
  return (
    <div className="flex flex-col items-center justify-center h-screen">
      <div className="flex items-center mb-4">
        <FaCog className="mr-2 animate-spin" />
        <h1 className="text-2xl font-bold">Under Development</h1>
      </div>
      <p className="text-gray-600 mb-8">
        We&apos;re working hard to bring you something awesome. Check back soon!
      </p>
      <AiOutlineLoading className="text-gray-400 animate-pulse text-6xl" />
    </div>
  );
}

export default UnderDevelopment;
