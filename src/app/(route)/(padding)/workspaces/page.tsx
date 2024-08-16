import React from "react";

type WorkspacePageProps = {
  searchParams: { keywords: string };
};

const WorkspacePage = ({ searchParams }: WorkspacePageProps) => {
  return <div>WorkspacePage keywords:{searchParams.keywords}</div>;
};

export default WorkspacePage;
