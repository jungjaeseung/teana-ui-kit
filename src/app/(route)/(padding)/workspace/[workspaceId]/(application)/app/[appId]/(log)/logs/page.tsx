import React from "react";

type WorkspaceAppDetailLogsPageProps = {
  params: { workspaceId: string; appId: string };
  searchParams: {
    rows: string;
    page: string;
    keywords: string;
    tagIDs: string;
    from: string;
    to: string;
  };
};

const WorkspaceAppDetailLogsPage = ({
  params,
  searchParams,
}: WorkspaceAppDetailLogsPageProps) => {
  return (
    <div>
      WorkspaceAppDetailLogsPage workspaceId: {params.workspaceId} appId:
      {params.appId}
      <div>{JSON.stringify(searchParams, null, 2)}</div>
    </div>
  );
};

export default WorkspaceAppDetailLogsPage;
