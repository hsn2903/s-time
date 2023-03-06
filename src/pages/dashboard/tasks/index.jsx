import DashboardLayout from "@/components/dashboard/layout/DashboardLayout";
import PomodoroTimer from "@/components/timer/PomodoroTimer";
import Todo from "@/components/todo/Todo";
import React from "react";

const TasksPage = () => {
  return (
    <DashboardLayout>
      <PomodoroTimer />
      <Todo />
    </DashboardLayout>
  );
};

export default TasksPage;
