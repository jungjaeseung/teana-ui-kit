import React from "react";
import { FaFileAlt } from "react-icons/fa";

type IconTitleDescProps = {
  Icon: React.JSX.Element;
  title: string;
  desc: string;
  bgColor: string;
};

const IconTitleDesc = ({ Icon, title, desc, bgColor }: IconTitleDescProps) => {
  return (
    <div className=" flex pt-[14px] pb-3 h-[66px] items-center gap-3 grow-0 shrink-0">
      <div className=" shrink-0">
        <div
          className={`${bgColor} h-[2.5rem] w-[2.5rem] flex relative items-center justify-center rounded-[0.5rem] text-[1.125rem] leading-[1.75rem]`}
        >
          {Icon}
        </div>
      </div>
      <div className=" grow py-[1px] md:max-w-[370px] sm:max-w-[270px] max-w-[170px]">
        <div className=" flex items-center text-sm leading-5 font-semibold text-gray-800">
          <h1 className=" truncate">{title}</h1>
        </div>
        <div className=" relative group flex items-center text-[10px] leading-[18px] text-gray-500 font-medium">
          <p className=" truncate">{desc}</p>
          <div className=" absolute top-6 md:-left-14 left-0 py-2 px-4 shadow-sm text-[12px] group-hover:block hidden md:w-[500px] sm:w-[250px] w-[180px] rounded-lg bg-white">
            <p>{desc}</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default IconTitleDesc;
