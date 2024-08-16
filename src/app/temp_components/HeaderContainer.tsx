"use client";
import Header from "@/stories/templates/Header";
import { usePathname, useSearchParams } from "next/navigation";
import React from "react";
import useRouterIds from "../hooks/useRouterIds";
import useHeaderInfos, {
  ItemDataType,
  DescIconInfoType,
  TabDataType,
} from "../hooks/useHeaderInfos";
type HeaderContainerProps = {};

const HeaderContainer = ({}: HeaderContainerProps) => {
  const pathname = usePathname();
  const ids = useRouterIds(pathname);
  const searchParams = useSearchParams();
  const headerInfos = useHeaderInfos(pathname, ids, searchParams);

  const itemData = headerInfos[0] as ItemDataType;
  const descIconInfo = headerInfos[1] as DescIconInfoType;
  const tabData = headerInfos[2] as TabDataType;

  return (
    <Header ItemData={itemData} descIconInfo={descIconInfo} tabData={tabData} />
  );
};

export default HeaderContainer;
