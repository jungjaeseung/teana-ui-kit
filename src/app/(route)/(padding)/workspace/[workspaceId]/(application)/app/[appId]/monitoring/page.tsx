import React from "react";

type WorkspaceAppDetailMonitoringPageProps = {
  params: { workspaceId: string; appId: string };
  searchParams: { from: string; to: string };
};

const WorkspaceAppDetailMonitoringPage = ({
  params,
  searchParams,
}: WorkspaceAppDetailMonitoringPageProps) => {
  return (
    <div>
      WorkspaceAppDetailMonitoringPage workspaceId: {params.workspaceId} appId:{" "}
      {params.appId}
      <div>
        date range =={`>`} from:{searchParams.from} to:{searchParams.to}
      </div>
    </div>
  );
};

export default WorkspaceAppDetailMonitoringPage;
