import React, { useEffect, useState } from "react";
import HeaderButton from "../atoms/Button/HeaderButton";
import { usePathname } from "next/navigation";

export interface HeaderNavigationProps {
  headerInfo: {
    label: string;
    IconNonSel: React.JSX.Element;
    IconSel: React.JSX.Element;
    href: string;
  }[];
}

const HeaderNavigation = ({ headerInfo }: HeaderNavigationProps) => {
  const [isSelectedArr, setIsSelectedArr] = useState(
    headerInfo.map(() => false),
  );
  const pathname = usePathname();
  useEffect(() => {
    setIsSelectedArr(headerInfo.map((i) => i.href === pathname));
  }, [pathname]);
  return (
    <div className=" flex items-center">
      {headerInfo.map((info, idx) => (
        <HeaderButton
          selected={isSelectedArr[idx]}
          IconSel={info.IconSel}
          IconNonSel={info.IconNonSel}
          label={info.label}
          href={info.href}
          onClick={() => {}}
        />
      ))}
    </div>
  );
};

export default HeaderNavigation;
