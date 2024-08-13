import React from "react";
import { FiArrowUpRight } from "react-icons/fi";

export interface ClickableTextButtonProps {
  /**
   * 고유 id
   */
  id: string;
  /**
   * 표기할 text
   */
  text: string;
  /**
   * onClick event handler
   */
  onClick: (id: string) => void;
  /**
   * text의 사이즈
   */
  textSize?: "default" | "large";
  /**
   * font의 굵기
   */
  font?: "default" | "medium";
  /**
   * 기본 상태의 색상
   */
  defaultColor?: "white" | "transparent";
  /**
   * 클릭시 페이지 변경시 우측 화살표 아이콘 표기여부
   */
  rightArrowIcon?: boolean;
  /**
   * 좌측 표기 아이콘
   */
  Icon?: React.JSX.Element;
}

const ButtonStyle = {
  text: {
    default: "text-[13px]",
    large: "text-[14px]",
  },
  font: {
    default: "",
    medium: "font-medium",
  },
};

const ClickableTextButton = ({
  id,
  onClick,
  Icon,
  defaultColor = "white",
  rightArrowIcon = false,
  text,
  font = "default",
  textSize = "default",
}: ClickableTextButtonProps) => {
  return (
    <div
      className={`${
        defaultColor === "white"
          ? " bg-white hover:bg-gray-50"
          : " hover:text-purple-600 hover:bg-white"
      }${text === "" ? " px-2" : " px-3"} group flex items-center justify-between mb1 py-[7px] rounded-lg ${ButtonStyle.text[textSize]} ${ButtonStyle.font[font]} leading-[18px] text-gray-600 cursor-pointer`}
      onClick={() => {
        onClick(id);
      }}
    >
      <div className=" flex items-center truncate">
        {Icon && (
          <div
            className={`${text === "" ? "" : " mr-2"} flex items-center justify-center w-4 h-4 shrink-0`}
          >
            {Icon}
          </div>
        )}
        <p className=" w-full block truncate">{text}</p>
      </div>
      {rightArrowIcon && (
        <FiArrowUpRight className=" hidden w-[14px] h-[14px] text-gray-500 group-hover:flex" />
      )}
    </div>
  );
};

export default ClickableTextButton;
