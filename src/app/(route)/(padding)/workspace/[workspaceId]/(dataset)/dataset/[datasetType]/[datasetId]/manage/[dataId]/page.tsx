import { redirect } from "next/navigation";
import React from "react";

type WorkspaceDatasetDetailManageDataDetailPageProps = {
  params: {
    workspaceId: string;
    datasetType: string;
    datasetId: string;
    dataId: string;
  };
  searchParams: { keywords: string; tagIDs: string };
};

const WorkspaceDatasetDetailManageDataDetailPage = ({
  params,
  searchParams,
}: WorkspaceDatasetDetailManageDataDetailPageProps) => {
  if (!["rag", "instruction"].includes(params.datasetType)) {
    redirect(`/workspaces/${params.workspaceId}/datasets`);
  }
  return (
    <div>
      WorkspaceDatasetDetailManageDataDetailPage
      <div>{JSON.stringify(params, null, 2)}</div>
      <div>keywords: {searchParams.keywords}</div>
      <div>tagIDs: {searchParams.tagIDs}</div>
    </div>
  );
};

export default WorkspaceDatasetDetailManageDataDetailPage;
