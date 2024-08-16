import FlowComponent from "@/app/temp_components/FlowComponent";
import React from "react";

type WorkspaceAppDetailOrchestratePageProps = {
  params: { workspaceId: string; appId: string };
};

const WorkspaceAppDetailOrchestratePage = ({
  params,
}: WorkspaceAppDetailOrchestratePageProps) => {
  return <FlowComponent />;
};

export default WorkspaceAppDetailOrchestratePage;
