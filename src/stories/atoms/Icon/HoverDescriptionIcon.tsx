import React from "react";

export interface HoverDescriptionIconProps {
  Icon: React.JSX.Element;
  children: React.ReactNode;
}

const HoverDescriptionIcon = ({
  Icon,
  children,
}: HoverDescriptionIconProps) => {
  return (
    <div className=" relative group bg-gray-200 w-6 h-6 flex items-center justify-center rounded-full hover:bg-gray-300">
      {Icon}
      <div className=" absolute top-0 right-7 py-2 px-4 shadow-sm group-hover:block hidden w-[250px] rounded-lg bg-white">
        {children}
      </div>
    </div>
  );
};

export default HoverDescriptionIcon;
