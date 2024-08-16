import React from "react";

type WorkspaceMonitoringDashboardPageProps = {
  params: { workspaceId: string };
  searchParams: { from: string; to: string };
};

const WorkspaceMonitoringDashboardPage = ({
  params,
  searchParams,
}: WorkspaceMonitoringDashboardPageProps) => {
  return (
    <div>
      WorkspaceMonitoringDashboardPage from:{searchParams.from} to:
      {searchParams.to}
    </div>
  );
};

export default WorkspaceMonitoringDashboardPage;
