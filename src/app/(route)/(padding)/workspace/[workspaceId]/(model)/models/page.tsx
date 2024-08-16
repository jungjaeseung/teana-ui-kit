import React from "react";

type WorkspaceModelsPageProps = {
  params: { workspaceId: string };
  searchParams: { keywords: string };
};

const WorkspaceModelsPage = ({
  params,
  searchParams,
}: WorkspaceModelsPageProps) => {
  return (
    <div>
      WorkspaceModelsPage workspaceId: {params.workspaceId} keywords:{" "}
      {searchParams.keywords}
    </div>
  );
};

export default WorkspaceModelsPage;
