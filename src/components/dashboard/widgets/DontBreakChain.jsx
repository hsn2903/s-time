import Card from "@/components/ui/Card";
import { useState } from "react";
import { FaRegCheckCircle, FaRegCircle } from "react-icons/fa";

function DontBreakChain() {
  const [chain, setChain] = useState(Array(30).fill(false));

  function handleDayClick(index) {
    const newChain = [...chain];
    newChain[index] = !newChain[index];
    setChain(newChain);
  }

  function isChainUnbroken() {
    for (let i = 0; i < chain.length; i++) {
      if (!chain[i]) {
        return false;
      }
    }
    return true;
  }

  return (
    <div className="bg-white rounded-lg shadow-lg p-4">
      <h2 className="text-lg font-semibold mb-2">Don&apos;t Break the Chain</h2>
      <div className="flex flex-wrap max-w-sm mt-4">
        {chain.map((day, index) => (
          <div
            key={index}
            className={`flex items-center justify-center w-7 h-7 m-1 rounded-full cursor-pointer transition-all hover:bg-[#e6e6e6] ${
              day ? "bg-[#00a65a] text-white" : "bg-[#dd4b39] text-white"
            }`}
            onClick={() => handleDayClick(index)}
          >
            {day ? <FaRegCheckCircle /> : <FaRegCircle />}
          </div>
        ))}
      </div>
      {isChainUnbroken() ? (
        <p>You have an unbroken chain!</p>
      ) : (
        <p>You broke the chain :(</p>
      )}
    </div>
  );
}

export default DontBreakChain;
