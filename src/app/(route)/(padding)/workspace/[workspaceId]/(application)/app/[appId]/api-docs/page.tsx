import React from "react";

type WorkspaceAppDetailApiDocsPageProps = {
  params: { workspaceId: string; appId: string };
};

const WorkspaceAppDetailApiDocsPage = ({
  params,
}: WorkspaceAppDetailApiDocsPageProps) => {
  return (
    <div>
      WorkspaceAppDetailApiDocsPage workspaceId: {params.workspaceId} AppId:{" "}
      {params.appId}
    </div>
  );
};

export default WorkspaceAppDetailApiDocsPage;
