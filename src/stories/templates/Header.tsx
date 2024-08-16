import React from "react";
import { FaFileAlt } from "react-icons/fa";
import { FiLink } from "react-icons/fi";
import IconTitleDesc from "../molecules/IconTitleDesc";
import HoverDescriptionIcon from "../atoms/Icon/HoverDescriptionIcon";
import HeaderTabNavigationButton from "../atoms/Button/HeaderTabNavigationButton";
type HeaderProps = {
  ItemData?: {
    Icon: React.JSX.Element;
    title: string;
    desc: string;
    bgColor: string;
  };
  tabData?: { href: string; selected: boolean; label: string }[];
  descIconInfo?: React.JSX.Element;
};

const Header = ({ ItemData, tabData = [], descIconInfo }: HeaderProps) => {
  if (
    ItemData === undefined &&
    tabData.length === 0 &&
    descIconInfo === undefined
  ) {
    return null;
  }
  return (
    <div className=" sticky top-0 left-0 right-0 z-30  md:px-9 px-6">
      <div className=" flex items-center justify-between">
        {ItemData !== undefined && (
          <IconTitleDesc
            Icon={ItemData.Icon}
            title={ItemData.title}
            desc={ItemData.desc}
            bgColor={ItemData.bgColor}
          />
        )}
        {descIconInfo && (
          <HoverDescriptionIcon Icon={<FiLink className=" w-3 h-3" />}>
            {descIconInfo}
          </HoverDescriptionIcon>
        )}
      </div>

      {tabData.length > 0 && (
        <div
          className={`${ItemData === undefined && descIconInfo === undefined ? " pt-6" : ""} flex flex-1 items-center h-full border-b-[2px] border-gray-200 shrink-0`}
        >
          {tabData.map((tab) => (
            <HeaderTabNavigationButton
              href={tab.href}
              selected={tab.selected}
              label={tab.label}
              key={tab.href}
            />
          ))}
        </div>
      )}
    </div>
  );
};

export default Header;
