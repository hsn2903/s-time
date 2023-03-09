import DashboardLayout from "@/components/dashboard/layout/DashboardLayout";
import UnderDevelopment from "@/components/page/UnderDevelopment";
import React from "react";

const StatisticsPage = () => {
  return (
    <DashboardLayout>
      <div>
        <UnderDevelopment />
      </div>
    </DashboardLayout>
  );
};

export default StatisticsPage;
