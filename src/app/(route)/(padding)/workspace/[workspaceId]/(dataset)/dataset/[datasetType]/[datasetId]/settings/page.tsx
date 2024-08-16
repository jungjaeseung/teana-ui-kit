import { redirect } from "next/navigation";
import React from "react";

type WorkspaceDatasetDetailSettingPageProps = {
  params: { workspaceId: string; datasetType: string; datasetId: string };
};

const WorkspaceDatasetDetailSettingPage = ({
  params,
}: WorkspaceDatasetDetailSettingPageProps) => {
  if (!["rag"].includes(params.datasetType)) {
    redirect(`/workspaces/${params.workspaceId}/datasets`);
  }
  return (
    <div>
      WorkspaceDatasetDetailSettingPage
      <div>{JSON.stringify(params, null, 2)}</div>
    </div>
  );
};

export default WorkspaceDatasetDetailSettingPage;
