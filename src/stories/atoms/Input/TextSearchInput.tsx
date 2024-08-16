import React, { useRef, useState } from "react";
import { CiSearch } from "react-icons/ci";
import { PiXCircleFill } from "react-icons/pi";
export interface TextSearchInputProps {
  /**
   * input의 name
   */
  name: string;
  /**
   * onChange Handler
   */
  onChange?: (e: React.ChangeEvent<HTMLInputElement>) => void;
  /**
   * onKeydown Handler
   */
  onKeydown?: (e: React.KeyboardEvent<HTMLInputElement>) => void;
  /**
   * 기본 색상
   */
  defaultColor?: "white" | "gray";
  /**
   * placeholer
   */
  placeholder?: string;
  /**
   * 검색 내용 autoComplete 기능
   */
  autoComplete?: "on" | "off";
  /**
   * Input의 width값 수정
   */
  size?: "transparent" | "small" | "medium" | "large";
}

const InputConfig = {
  transparent: "",
  small: "w-[200px]",
  medium: "w-[250px]",
  large: "w-[300px]",
};

/**
 * *Wrapper에 요구 : 클래스에 [flex items-center]
 */
const TextSearchInput = ({
  name,
  placeholder = "",
  defaultColor = "white",
  autoComplete = "off",
  size = "small",
  onChange,
  onKeydown,
}: TextSearchInputProps) => {
  const inputRef = useRef<HTMLInputElement | null>(null);
  const [isTextInputFoucs, setIsTextInputFoucs] = useState(false);
  const [isTextExist, setIsTextExist] = useState(false);
  const handleClickXButton = () => {
    if (inputRef.current) {
      inputRef.current.value = "";
      setIsTextExist(false);
    }
  };

  return (
    <div
      className={`
          ${defaultColor === "white" || (defaultColor === "gray" && isTextInputFoucs) ? " bg-white shadow-xs hover:bg-white !border-gray-300" : " bg-gray-200 hover:bg-gray-300"}
          group flex items-center px-2 h-8 rounded-lg border border-transparent overflow-hidden ${InputConfig[size]}`}
    >
      <div className=" pointer-events-none shrink-0 flex items-center mr-1.5 justify-center w-4 h-4">
        <CiSearch className="w-3.5 h-3.5 text-gray-500" />
      </div>
      <input
        ref={inputRef}
        type="text"
        className={`${defaultColor === "white" || (defaultColor === "gray" && isTextInputFoucs) ? " bg-white hover:bg-white group-hover:bg-white placeholder:text-gray-400" : " bg-gray-200 placeholder:text-gray-500 group-hover:bg-gray-300"} grow block h-[18px] border-0 text-gray-700 text-[13px] appearance-none outline-none caret-purple-600`}
        placeholder={placeholder}
        autoComplete={autoComplete}
        name={name}
        onFocus={() => {
          setIsTextInputFoucs(true);
        }}
        onBlur={() => {
          setIsTextInputFoucs(false);
        }}
        onChange={(e) => {
          if (onChange) onChange(e);
          if (inputRef.current) {
            if (inputRef.current.value === "") {
              setIsTextExist(false);
            } else {
              setIsTextExist(true);
            }
          }
        }}
        onKeyDown={
          onKeydown
            ? (e) => {
                onKeydown(e);
              }
            : undefined
        }
      />
      {isTextExist && (
        <div
          className=" shrink-0 flex items-center justify-center w-4 h-4 cursor-pointer group/clear"
          onClick={handleClickXButton}
        >
          <PiXCircleFill className=" w-3.5 h-3.5 text-gray-400" />
        </div>
      )}
    </div>
  );
};

export default TextSearchInput;
