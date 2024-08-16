import Link from "next/link";
import React from "react";

export interface HeaderTabNavigationButtonProps {
  href: string;
  selected: boolean;
  label: string;
}

const HeaderTabNavigationButton = ({
  href,
  selected,
  label,
}: HeaderTabNavigationButtonProps) => {
  return selected ? (
    <div className=" border-b-[2px] border-gray-800 -mb-[2px] font-semibold text-gray-800 px-5">
      {label}
    </div>
  ) : (
    <Link
      href={href}
      className={
        " text-slate-300 cursor-pointer hover:text-slate-400 hover:border-b-[2px] hover:border-gray-300 hover:-mb-[2px] px-5"
      }
    >
      {label}
    </Link>
  );
};

export default HeaderTabNavigationButton;
