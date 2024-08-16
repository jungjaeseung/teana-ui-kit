"use client";

import LeftHeader from "@/stories/templates/LeftHeader";
import { usePathname } from "next/navigation";
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
export interface LeftHeaderContainerProps {}

const appInfo = {
  img_expand: "/cerebro_logo_black.png",
  img_collapse: "/cerebro_symbol_icon.png",
  href: "/workspaces",
};
let menuInfo = [
  {
    label: "모니터링",
    IconNonSel: <TbRectangle className=" h-4 w-4 flex-shrink-0" />,
    IconSel: <TbRectangleFilled className=" h-4 w-4 flex-shrink-0" />,
    href: "/workspace/tempWorkspaceId/monitoring",
  },
  {
    label: "데이터셋",
    IconNonSel: <TbTriangle className=" h-4 w-4 flex-shrink-0" />,
    IconSel: <TbTriangleFilled className=" h-4 w-4 flex-shrink-0" />,
    href: "/workspace/tempWorkspaceId/datasets",
    secondary: "/workspace/tempWorkspaceId/dataset/",
  },
  {
    label: "모델관리",
    IconNonSel: <TbBook className=" h-4 w-4 flex-shrink-0" />,
    IconSel: <TbBookFilled className=" h-4 w-4 flex-shrink-0" />,
    href: "/workspace/tempWorkspaceId/models",
    secondary: "/workspace/tempWorkspaceId/model/",
  },
  {
    label: "어플리케이션",
    IconNonSel: <TbOctagon className=" h-4 w-4 flex-shrink-0" />,
    IconSel: <TbOctagonFilled className=" h-4 w-4 flex-shrink-0" />,
    href: "/workspace/tempWorkspaceId/apps",
    secondary: "/workspace/tempWorkspaceId/app/",
  },
];

let generalInfo = [
  {
    label: "사용자 관리",
    IconNonSel: <TbRectangle className=" h-4 w-4 flex-shrink-0" />,
    IconSel: <TbRectangleFilled className=" h-4 w-4 flex-shrink-0" />,
    href: "/workspace/tempWorkspaceId/manage-auth",
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
  if (pathname.includes("/workspaces")) {
    menuInfo = [
      {
        label: "모니터링",
        IconNonSel: <TbRectangle className=" h-4 w-4 flex-shrink-0" />,
        IconSel: <TbRectangleFilled className=" h-4 w-4 flex-shrink-0" />,
        href: "/workspaces/monitoring",
      },
    ];
    generalInfo = [
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
  }
  const [isCollapsed, setIsCollapsed] = useState(false);
  const collapseHandler = useCallback(() => {
    setIsCollapsed((prev) => !prev);
  }, []);
  const [selectedArr, setSelectedArr] = useState(
    Array(menuInfo.length + generalInfo.length).fill(false),
  );
  useEffect(() => {
    const array = [];
    array.push(
      ...menuInfo.map(
        (i) =>
          pathname.includes(i.href) ||
          pathname.includes(i.secondary || "undefinedSTR"),
      ),
    );
    array.push(...generalInfo.map((i) => pathname.includes(i.href)));
    setSelectedArr(array);
  }, [pathname]);

  return (
    <LeftHeader
      isCollapsed={isCollapsed}
      collapseHandler={collapseHandler}
      appInfo={appInfo}
      dropdownData={dropdownTempData}
      menuInfo={menuInfo}
      generalInfo={generalInfo}
      selectedArr={selectedArr}
      userInfo={tempUserInfo}
    />
  );
};

export default LeftHeaderContainer;
