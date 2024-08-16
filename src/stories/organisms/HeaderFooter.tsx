import React from "react";
import { BsChevronBarLeft, BsChevronBarRight } from "react-icons/bs";
import UserButton from "../molecules/UserButton";

export interface HeaderFooterProps {
  isCollapsed: boolean;
  collapseHandler: () => void;
  userInfo: {
    id: string;
    name: string;
    img?: string;
  };
}

const HeaderFooter = ({
  isCollapsed,
  collapseHandler,
  userInfo,
}: HeaderFooterProps) => {
  return (
    <div className=" shrink-0 py-3 px-2">
      <div
        className={`${isCollapsed ? " flex-col items-center" : "items-center justify-between"} flex `}
      >
        <UserButton isCollapsed={isCollapsed} userInfo={userInfo} />
        <div
          className=" flex items-center justify-center w-6 h-6 text-gray-500 cursor-pointer"
          onClick={collapseHandler}
        >
          {isCollapsed ? (
            <BsChevronBarRight className=" w-[14px] h-[14px]" />
          ) : (
            <BsChevronBarLeft className=" w-[14px] h-[14px]" />
          )}
        </div>
      </div>
    </div>
  );
};

export default HeaderFooter;
