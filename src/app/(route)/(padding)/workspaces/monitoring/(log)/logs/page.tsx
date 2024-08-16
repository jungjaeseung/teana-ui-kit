import React from "react";

type WorkspacesMonitoringLogsPageProps = {
  searchParams: {
    keywords: string;
    from: string;
    to: string;
    tagIDs: string;
    rows: string;
    page: string;
  };
};

const WorkspacesMonitoringLogsPage = ({
  searchParams,
}: WorkspacesMonitoringLogsPageProps) => {
  return <div>WorkspacesMonitoringLogsPage tagIDs:{searchParams.tagIDs}</div>;
};

export default WorkspacesMonitoringLogsPage;
