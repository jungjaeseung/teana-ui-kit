import React from "react";

type WorkspacesMonitoringLogDetailPageProps = {
  params: { logId: string };
};

const WorkspacesMonitoringLogDetailPage = ({
  params,
}: WorkspacesMonitoringLogDetailPageProps) => {
  return <div>LogId :: {params.logId}</div>;
};

export default WorkspacesMonitoringLogDetailPage;
