import React from "react";

export interface HeaderNavTitleContentProps {
  title: string;
  isCollapsed: boolean;
  children: React.ReactNode;
  isGrow?: boolean;
  hideContentWhenCollapsed?: boolean;
}

const HeaderNavTitleContent = ({
  children,
  isGrow = false,
  isCollapsed,
  title,
  hideContentWhenCollapsed = false,
}: HeaderNavTitleContentProps) => {
  if (hideContentWhenCollapsed && isCollapsed) return null;
  return (
    <nav
      className={`${isCollapsed ? " px-2.5 py-4" : " p-4"}${isGrow ? " grow" : ""} space-y-1`}
    >
      {!isCollapsed && <div className={` text-gray-600 pb-3`}>{title}</div>}
      {children}
    </nav>
  );
};

export default HeaderNavTitleContent;
