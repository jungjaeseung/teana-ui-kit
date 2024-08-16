import React from "react";

type WorkspaceMonitoringLogsPageProps = {
  params: { workspaceId: string };
  searchParams: {
    keywords: string;
    from: string;
    to: string;
    tagIDs: string;
    rows: string;
    page: string;
  };
};

const WorkspaceMonitoringLogsPage = ({
  params,
  searchParams,
}: WorkspaceMonitoringLogsPageProps) => {
  return (
    <div>
      WorkspaceMonitoringLogsPage\n WorkspaceId:{params.workspaceId}
      {JSON.stringify(searchParams, null, 2)}
    </div>
  );
};

export default WorkspaceMonitoringLogsPage;
