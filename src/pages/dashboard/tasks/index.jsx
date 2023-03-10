import DashboardLayout from "@/components/dashboard/layout/DashboardLayout";
import HorizantalTimer from "@/components/timer/HorizantalTimer";
import PomodoroTimer from "@/components/timer/PomodoroTimer";

import TestTodo from "@/components/todo/TestTodo";

const TasksPage = () => {
  return (
    <DashboardLayout>
      <div className="py-12 w-[95%] mx-auto grid grid-cols-1 md:grid-cols-2 gap-6">
        <div className="">
          <TestTodo />
        </div>
        <div className="flex flex-col gap-6">
          <PomodoroTimer />

          <div className="w-full">
            <div className="shadow-[rgba(13,_38,_76,_0.19)_0px_9px_20px] p-4">
              <h3 className="text-center font-medium text-lg mb-6">Stats</h3>

              <div>
                <p>
                  <span className="font-medium"> Pomos:</span>
                  <span> 0/12</span>
                </p>
                <p>
                  <span className="font-medium">Finish At:</span> 00:49 (13h)
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </DashboardLayout>
  );
};

export default TasksPage;
