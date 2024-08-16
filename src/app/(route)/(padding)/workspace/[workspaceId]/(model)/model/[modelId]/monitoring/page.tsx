import React from "react";

type WorkspaceModelDetailMonitoringPageProps = {
  params: { workspaceId: string; modelId: string };
  searchParams: { from: string; to: string };
};

const WorkspaceModelDetailMonitoringPage = ({
  params,
  searchParams,
}: WorkspaceModelDetailMonitoringPageProps) => {
  return (
    <div>
      WorkspaceModelDetailMonitoringPage workspaceId: {params.workspaceId}{" "}
      modelId: {params.modelId}
      <div>
        date range =={`>`} from:{searchParams.from} to:{searchParams.to}
      </div>
    </div>
  );
};

export default WorkspaceModelDetailMonitoringPage;
