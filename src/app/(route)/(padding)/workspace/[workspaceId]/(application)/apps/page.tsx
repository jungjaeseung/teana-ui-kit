import React from "react";

type WorkspaceAppsPageProps = {
  params: { workspaceId: string };
  searchParams: { keywords: string };
};

const WorkspaceAppsPage = ({
  params,
  searchParams,
}: WorkspaceAppsPageProps) => {
  return (
    <div>
      WorkspaceAppsPage workspaceId: {params.workspaceId} keywords:{" "}
      {searchParams.keywords}
    </div>
  );
};

export default WorkspaceAppsPage;
