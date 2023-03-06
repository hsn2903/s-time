import Layout from "@/components/layout/Layout";
import PomodoroTimer from "@/components/timer/PomodoroTimer";
import Todo from "@/components/todo/Todo";
import React from "react";

const TimerMainPage = () => {
  return (
    <Layout>
      <PomodoroTimer />
      <Todo />
    </Layout>
  );
};

export default TimerMainPage;
