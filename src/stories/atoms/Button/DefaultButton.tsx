import React from "react";

export interface DefaultButtonProps {
  /**
   * 해당 버튼의 고유 id
   */
  id: string;
  /**
   * 해당 버튼이 선택 되었는지 여부
   */
  selected: boolean;
  /**
   * 표기할 label
   */
  label: string;
  /**
   * click event [버튼의 고유 id 사용하여 어떤 버튼 클릭했는지 handle]
   */
  onClick: (id: string) => void;
  /**
   * React-Icons
   */
  Icon?: React.JSX.Element;
}

/**
 * *Wrapper에 요구 : 클래스에 [relative flex]
 */
const DefaultButton = ({
  id,
  label,
  selected,
  onClick,
  Icon,
}: DefaultButtonProps) => {
  return (
    <div
      className={`${selected ? " border-[0.5px] text-primary-600 bg-white border-gray-200 shadow-xs hover:bg-white" : " border-transparent text-gray-700 hover:bg-gray-200"}
        mr-1 px-3 py-[7px] h-[32px] flex items-center rounded-lg text-[13px] font-medium leading-[18px] cursor-pointer
        `}
      onClick={() => {
        onClick(id);
      }}
    >
      {Icon && (
        <div className=" w-[14px] h-[14px] mr-1 flex items-center justify-center">
          {Icon}
        </div>
      )}
      {label}
    </div>
  );
};

export default DefaultButton;
