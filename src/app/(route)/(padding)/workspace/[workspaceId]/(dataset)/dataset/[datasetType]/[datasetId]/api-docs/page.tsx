import { redirect } from "next/navigation";
import React from "react";

type WorkspaceDatasetDetailApiDocsPageProps = {
  params: { workspaceId: string; datasetType: string; datasetId: string };
};

const WorkspaceDatasetDetailApiDocsPage = ({
  params,
}: WorkspaceDatasetDetailApiDocsPageProps) => {
  if (!["rag"].includes(params.datasetType)) {
    redirect(`/workspaces/${params.workspaceId}/datasets?category=all`);
  }
  return (
    <div>
      WorkspaceDatasetDetailApiDocsPage
      <div>{JSON.stringify(params, null, 2)}</div>
    </div>
  );
};

export default WorkspaceDatasetDetailApiDocsPage;
