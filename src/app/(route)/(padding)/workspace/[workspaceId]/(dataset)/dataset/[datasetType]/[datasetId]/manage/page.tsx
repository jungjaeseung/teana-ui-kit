import { redirect } from "next/navigation";
import React from "react";

type WorkspaceDatasetDetailManagePageProps = {
  params: { workspaceId: string; datasetType: string; datasetId: string };
  searchParams: { keywords: string };
};

const WorkspaceDatasetDetailManagePage = ({
  params,
  searchParams,
}: WorkspaceDatasetDetailManagePageProps) => {
  if (!["rag", "instruction"].includes(params.datasetType)) {
    redirect(`/workspaces/${params.workspaceId}/datasets`);
  }
  return (
    <div>
      WorkspaceDatasetDetailManagePage
      <div>{JSON.stringify(params, null, 2)}</div>
      <div>keywords: {searchParams.keywords}</div>
    </div>
  );
};

export default WorkspaceDatasetDetailManagePage;
