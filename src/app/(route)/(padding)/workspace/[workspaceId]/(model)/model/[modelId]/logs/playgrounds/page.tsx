import React from "react";

type WorkspaceModelDetailLogsPlaygroundsPageProps = {
  params: { workspaceId: string; modelId: string };
};

const WorkspaceModelDetailLogsPlaygroundsPage = ({
  params,
}: WorkspaceModelDetailLogsPlaygroundsPageProps) => {
  return (
    <div>
      WorkspaceModelDetailLogsPlaygroundsPage workspaceId: {params.workspaceId}{" "}
      modelId: {params.modelId}
    </div>
  );
};

export default WorkspaceModelDetailLogsPlaygroundsPage;
