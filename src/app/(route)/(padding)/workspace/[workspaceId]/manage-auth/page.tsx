import React from "react";

type ManageAuthProps = {
  params: { workspaceId: string };
};

const ManageAuth = ({ params }: ManageAuthProps) => {
  return (
    <div>User 권한 관리 페이지 입니다. workspaceId: {params.workspaceId}</div>
  );
};

export default ManageAuth;
