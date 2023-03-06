import Layout from "@/components/layout/Layout";
import PomodoroTimer from "@/components/timer/PomodoroTimer";
import Todo from "@/components/todo/Todo";
import React from "react";

const TimerMainPage = () => {
  return (
    <Layout>
      <div className="grid grid-cols-1 lg:grid-cols-2 py-24">
        <div className="flex items-center justify-center">
          <PomodoroTimer />
        </div>
        <div className="flex items-center justify-center">
          <Todo />
        </div>
      </div>
    </Layout>
  );
};

export default TimerMainPage;
