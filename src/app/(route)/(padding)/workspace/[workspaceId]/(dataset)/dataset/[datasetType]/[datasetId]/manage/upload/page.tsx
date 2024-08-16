import { redirect } from "next/navigation";
import React from "react";

type WorkspaceDatasetDetailManageDataUploadPageProps = {
  params: {
    workspaceId: string;
    datasetType: string;
    datasetId: string;
  };
};

const WorkspaceDatasetDetailManageDataUploadPage = ({
  params,
}: WorkspaceDatasetDetailManageDataUploadPageProps) => {
  if (!["rag", "instruction"].includes(params.datasetType)) {
    redirect(`/workspaces/${params.workspaceId}/datasets`);
  }
  return (
    <div>
      데이터셋 안에서 데이터 업로드하는곳
      <div>{JSON.stringify(params, null, 2)}</div>
    </div>
  );
};

export default WorkspaceDatasetDetailManageDataUploadPage;
