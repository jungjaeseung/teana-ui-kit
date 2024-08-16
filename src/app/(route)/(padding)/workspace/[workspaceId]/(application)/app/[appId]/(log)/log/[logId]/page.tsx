import React from "react";

type WorkspaceAppDetailLogDetailPageProps = {
  params: { workspaceId: string; appId: string; logId: string };
};

const WorkspaceAppDetailLogDetailPage = ({
  params,
}: WorkspaceAppDetailLogDetailPageProps) => {
  return (
    <div>
      WorkspaceAppDetailLogDetailPage workspaceId: {params.workspaceId} AppId:{" "}
      {params.appId} logId: {params.logId}
    </div>
  );
};

export default WorkspaceAppDetailLogDetailPage;
