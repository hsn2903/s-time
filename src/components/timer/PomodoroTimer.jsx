import React, { useState, useEffect } from "react";
import { FaPlay, FaPause, FaUndo } from "react-icons/fa";

const PomodoroTimer = () => {
  const [seconds, setSeconds] = useState(1500); // 1500 seconds = 25 minutes
  const [isActive, setIsActive] = useState(false);

  useEffect(() => {
    let interval = null;
    if (isActive) {
      interval = setInterval(() => {
        setSeconds((seconds) => seconds - 1);
      }, 1000);
    } else if (!isActive && seconds !== 0) {
      clearInterval(interval);
    }
    return () => clearInterval(interval);
  }, [isActive, seconds]);

  const toggle = () => {
    setIsActive(!isActive);
  };

  const reset = () => {
    setSeconds(1500);
    setIsActive(false);
  };

  const formatTime = (time) => {
    const minutes = Math.floor(time / 60);
    const seconds = time % 60;
    return `${minutes}:${seconds < 10 ? "0" : ""}${seconds}`;
  };

  return (
    <div className="flex flex-col gap-4 items-center justify-center my-24">
      <div
        className={`w-48 h-48 shadow-[rgba(13,_38,_76,_0.19)_0px_9px_20px] flex items-center justify-center rounded-md`}
      >
        <h1 className="text-4xl font-bold mb-4">{formatTime(seconds)}</h1>
      </div>
      <div className="flex space-x-4">
        <button
          className="bg-green-500 text-white rounded-lg px-4 py-2 flex items-center justify-center"
          onClick={toggle}
        >
          {isActive ? <FaPause /> : <FaPlay />}
          <span className="ml-2">{isActive ? "Pause" : "Start"}</span>
        </button>
        <button
          className="bg-red-500 text-white rounded-lg px-4 py-2 flex items-center justify-center"
          onClick={reset}
        >
          <FaUndo />
          <span className="ml-2">Reset</span>
        </button>
      </div>
    </div>
  );
};

export default PomodoroTimer;