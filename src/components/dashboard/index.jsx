import { useUserContext } from "@/contexts/userContext";
import React from "react";
import AddTodo from "../todo/AddTodo";
import TodoList from "../todo/TodoList";
import Card from "../ui/Card";
import DashboardLayout from "./layout/DashboardLayout";
import DontBreakChain from "./widgets/DontBreakChain";
import HabitSummary from "./widgets/HabitSummary";
import Quote from "./widgets/Quotes";
import Summary from "./widgets/Summary";
import TasksSummary from "./widgets/TasksSummary";
import WelcomeSection from "./widgets/WelcomeSection";

const DashboardMain = () => {
  const { currentUser } = useUserContext();

  return (
    <DashboardLayout>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6 p-6">
        <WelcomeSection />

        <Card className="p-4">
          <Quote />
        </Card>

        <TasksSummary />
        <HabitSummary />
        <DontBreakChain />
      </div>
    </DashboardLayout>
  );
};

export default DashboardMain;
