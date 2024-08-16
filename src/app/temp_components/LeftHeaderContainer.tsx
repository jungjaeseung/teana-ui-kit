"use client";

import LeftHeader from "@/stories/templates/LeftHeader";
import { redirect, usePathname, useRouter } from "next/navigation";
import React, { useCallback, useEffect, useState } from "react";
import {
  TbBook,
  TbBookFilled,
  TbOctagon,
  TbOctagonFilled,
  TbRectangle,
  TbRectangleFilled,
  TbTriangle,
  TbTriangleFilled,
} from "react-icons/tb";
import useRouterIds from "../hooks/useRouterIds";
export interface LeftHeaderContainerProps {}

const appInfo = {
  img_expand: "/cerebro_logo_black.png",
  img_collapse: "/cerebro_symbol_icon.png",
  href: "/workspaces",
};
const menuInfo = (workspaceId: string) => [
  {
    label: "모니터링",
    IconNonSel: <TbRectangle className=" h-4 w-4 flex-shrink-0" />,
    IconSel: <TbRectangleFilled className=" h-4 w-4 flex-shrink-0" />,
    href: `/workspace/${workspaceId}/monitoring`,
  },
  {
    label: "데이터셋",
    IconNonSel: <TbTriangle className=" h-4 w-4 flex-shrink-0" />,
    IconSel: <TbTriangleFilled className=" h-4 w-4 flex-shrink-0" />,
    href: `/workspace/${workspaceId}/datasets`,
    secondary: `/workspace/${workspaceId}/dataset/`,
  },
  {
    label: "모델관리",
    IconNonSel: <TbBook className=" h-4 w-4 flex-shrink-0" />,
    IconSel: <TbBookFilled className=" h-4 w-4 flex-shrink-0" />,
    href: `/workspace/${workspaceId}/models`,
    secondary: `/workspace/${workspaceId}/model/`,
  },
  {
    label: "어플리케이션",
    IconNonSel: <TbOctagon className=" h-4 w-4 flex-shrink-0" />,
    IconSel: <TbOctagonFilled className=" h-4 w-4 flex-shrink-0" />,
    href: `/workspace/${workspaceId}/apps`,
    secondary: `/workspace/${workspaceId}/app/`,
  },
];

const generalInfo = (workspaceId: string) => [
  {
    label: "사용자 관리",
    IconNonSel: <TbRectangle className=" h-4 w-4 flex-shrink-0" />,
    IconSel: <TbRectangleFilled className=" h-4 w-4 flex-shrink-0" />,
    href: `/workspace/${workspaceId}/manage-auth`,
  },
  {
    label: "매뉴얼",
    IconNonSel: <TbTriangle className=" h-4 w-4 flex-shrink-0" />,
    IconSel: <TbTriangleFilled className=" h-4 w-4 flex-shrink-0" />,
    href: "/manual",
  },
  {
    label: "설정",
    IconNonSel: <TbBook className=" h-4 w-4 flex-shrink-0" />,
    IconSel: <TbBookFilled className=" h-4 w-4 flex-shrink-0" />,
    href: "/settings/accounts",
    admin: true,
  },
];

const dropdownTempData = [
  {
    id: "uuid-0000-0001",
    name: "workspace 1",
  },
  {
    id: "uuid-0000-0002",
    name: "workspace 2",
  },
  {
    id: "uuid-0000-0003",
    name: "workspace 3",
  },
  {
    id: "uuid-0000-0004",
    name: "workspace 4",
  },
];

const tempUserInfo = {
  id: "userId",
  name: "Jungjaeseung",
  img: "/temp_profile_image.jpeg",
  auth: "admin",
};

const LeftHeaderContainer = ({}: LeftHeaderContainerProps) => {
  const pathname = usePathname();
  const ids = useRouterIds(pathname);
  const router = useRouter();
  let usingMenuInfo = [...menuInfo(ids[0])];
  let usingGeneralInfo = [...generalInfo(ids[0])];
  if (pathname.includes("/workspaces")) {
    usingMenuInfo = [{ ...usingMenuInfo[0], href: "/workspaces/monitoring" }];
    usingGeneralInfo = [usingGeneralInfo[1]];
  }
  const [isCollapsed, setIsCollapsed] = useState(false);
  const collapseHandler = useCallback(() => {
    setIsCollapsed((prev) => !prev);
  }, []);
  const [selectedArr, setSelectedArr] = useState(
    Array(usingMenuInfo.length + usingGeneralInfo.length).fill(false),
  );

  const handleNavigation = () => {
    const array = [];
    array.push(
      ...usingMenuInfo.map(
        (i) =>
          pathname.includes(i.href) ||
          pathname.includes(i.secondary || "undefinedSTR"),
      ),
    );
    array.push(...usingGeneralInfo.map((i) => pathname.includes(i.href)));
    setSelectedArr(array);
  };
  useEffect(() => {
    handleNavigation();
  }, [pathname, ids]);
  useEffect(() => {
    handleNavigation();
  }, []);

  return (
    <LeftHeader
      isCollapsed={isCollapsed}
      collapseHandler={collapseHandler}
      appInfo={appInfo}
      dropdownData={dropdownTempData}
      menuInfo={usingMenuInfo}
      generalInfo={usingGeneralInfo}
      selectedArr={selectedArr}
      userInfo={tempUserInfo}
      onItemClick={(id: string) => {
        console.log(id, "clicked~");
        router.push(`/workspace/${id}/monitoring`);
        handleNavigation();
      }}
    />
  );
};

export default LeftHeaderContainer;
