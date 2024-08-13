"use client";
import HeaderNavigation from "@/stories/organisms/HeaderNavigation";
import React from "react";
import HeaderLogoButton from "../atoms/Button/HeaderLogoButton";

type HeaderProps = {
  appInfo: {
    img: string;
    href: string;
  };
  headerInfo: {
    label: string;
    IconNonSel: React.JSX.Element;
    IconSel: React.JSX.Element;
    href: string;
  }[];
};

const Header = ({ appInfo, headerInfo }: HeaderProps) => {
  return (
    <div className=" sticky top-0 left-0 right-0 z-30 flex flex-col grow-0 shrink-0 basis-auto min-h-[56px] border-b border-gray-200">
      <div className=" flex flex-1 items-center justify-between px-4">
        <HeaderLogoButton img={appInfo.img} href={appInfo.href} />
        <HeaderNavigation headerInfo={headerInfo} />
        <div>유저히어로</div>
      </div>
    </div>
  );
};

export default Header;
