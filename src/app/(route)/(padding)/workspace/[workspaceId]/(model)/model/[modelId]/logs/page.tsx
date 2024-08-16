import React from "react";

type WorkspaceModelDetailLogsPageProps = {
  params: { workspaceId: string; modelId: string };
  searchParams: { rows: string; page: string };
};

const WorkspaceModelDetailLogsPage = ({
  params,
  searchParams,
}: WorkspaceModelDetailLogsPageProps) => {
  return (
    <div>
      WorkspaceModelDetailLogsPage workspaceId: {params.workspaceId} modelId:
      {params.modelId}
      {params.modelId}
      <div>
        pagenation =={`>`} rows:{searchParams.rows} page:{searchParams.page}
      </div>
    </div>
  );
};

export default WorkspaceModelDetailLogsPage;
