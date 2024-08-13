import Link from "next/link";
import React from "react";

export interface HeaderButtonProps {
  /**
   * 해당 버튼이 선택 되었는지 여부
   */
  selected: boolean;
  /**
   * React-Icons (선택되었을 때)
   */
  IconSel: React.JSX.Element;
  /**
   * React-Icons (선택되지않았을 때)
   */
  IconNonSel: React.JSX.Element;
  /**
   * 표기할 label
   */
  label: string;
  /**
   * 클릭시 이동할 href
   */
  href: string;
  /**
   * click event [href를 사용하여 selected 변환]
   */
  onClick: (href: string) => void;
}

/**
 * 클릭시 Link 컴포넌트가 작동하는 헤더버튼.
 *
 * *Wrapper에 요구 : 클래스에 [flex items-center]
 */
const HeaderButton = ({
  selected,
  IconSel,
  IconNonSel,
  href,
  label,
  onClick,
}: HeaderButtonProps) => {
  return (
    <div
      className={`
          ${selected ? " font-semibold shadow-md bg-components-main-nav-nav-button-bg-active" : " font-medium cursor-pointer hover:bg-components-main-nav-nav-button-bg-hover"}
          flex items-center h-8 mr-0 sm:mr-3 px-0.5 rounded-xl text-sm shrink-0`}
      onClick={() => {
        onClick(href);
      }}
    >
      <Link href={href}>
        <div
          className={`${selected ? " text-components-main-nav-nav-button-text-active" : " text-components-main-nav-nav-button-text"} flex items-center h-7 px-2.5 cursor-pointer rounded-[10px]`}
        >
          <div className=" mr-2">{selected ? IconSel : IconNonSel}</div>
          {label}
        </div>
      </Link>
    </div>
  );
};

export default HeaderButton;
