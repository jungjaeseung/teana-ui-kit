import { redirect } from "next/navigation";
import React from "react";

type WorkspaceDatasetsPageProps = {
  params: { workspaceId: string };
  searchParams: { category: string; tagIds: string; keywords: string };
};

const WorkspaceDatasetsPage = ({
  params,
  searchParams,
}: WorkspaceDatasetsPageProps) => {
  if (!["all", "rag", "instruction"].includes(searchParams.category)) {
    redirect(`/workspace/${params.workspaceId}/datasets?category=all`);
  }
  return (
    <div>
      WorkspaceDatasetsPage workspaceId:{params.workspaceId} category:
      {searchParams.category}
    </div>
  );
};

export default WorkspaceDatasetsPage;
