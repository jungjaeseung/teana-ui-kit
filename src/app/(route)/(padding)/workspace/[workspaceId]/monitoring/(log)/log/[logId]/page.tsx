import React from "react";

type WorkspaceMonitoringLogDetailPageProps = {
  params: { workspaceId: string; logId: string };
};

const WorkspaceMonitoringLogDetailPage = ({
  params,
}: WorkspaceMonitoringLogDetailPageProps) => {
  return (
    <div>
      WorkspaceMonitoringLogDetailPage
      <div>workspaceId:{params.workspaceId}</div>
      <div>logId:{params.logId}</div>
    </div>
  );
};

export default WorkspaceMonitoringLogDetailPage;
