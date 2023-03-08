import React from "react";
import AddTodo from "../todo/AddTodo";
import TodoList from "../todo/TodoList";
import DashboardLayout from "./layout/DashboardLayout";

const DashboardMain = () => {
  return (
    <DashboardLayout>
      <h1>brr</h1>
      <AddTodo />
      <TodoList />
    </DashboardLayout>
  );
};

export default DashboardMain;
