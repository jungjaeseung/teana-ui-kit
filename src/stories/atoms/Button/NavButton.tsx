import Link from "next/link";
import React from "react";

export interface NavButtonProps {
  label: string;
  href: string;
  selected: boolean;
  mini: boolean;
  IconSel: React.JSX.Element;
  IconNonSel: React.JSX.Element;
  requireAdmin?: boolean;
  isUserAdmin?: boolean;
}

const NavButton = ({
  label,
  href,
  selected,
  mini,
  IconSel,
  IconNonSel,
  requireAdmin = false,
  isUserAdmin = false,
}: NavButtonProps) => {
  if (requireAdmin && !isUserAdmin) return null;
  return (
    <Link
      href={href}
      className={`${selected ? " bg-state-accent-active text-text-accent" : " text-components-menu-item-text hover:bg-gray-100 hover:text-components-menu-item-text-hover"} group flex items-center h-9 rounded-md py-2 text-sm font-normal ${mini ? "px-2.5" : "px-3"}`}
    >
      {selected ? IconSel : IconNonSel}
      {!mini && <span className=" block ml-2">{label}</span>}
    </Link>
  );
};

export default NavButton;
