"use client";
import React, { useCallback, useEffect, useRef, useState } from "react";
import { MdKeyboardArrowDown, MdKeyboardArrowUp } from "react-icons/md";
export interface DropdownProps {
  label: string;
  children: React.ReactNode;
  defaultColor?: "lightGray" | "gray";
  size?: "transparent" | "fit";
}

const DropdownStyle = {
  size: {
    transparent: "",
    fit: " w-fit",
  },
  color: {
    lightGray: " bg-gray-100 hover:bg-gray-200",
    gray: " bg-gray-200 hover:bg-gray-300",
    open: {
      lightGray: " bg-gray-200",
      gray: " bg-gray-300",
    },
  },
};

const Dropdown = ({
  label,
  children,
  size = "transparent",
  defaultColor = "gray",
}: DropdownProps) => {
  const [state, setState] = useState<"open" | "closed">("closed");
  const dropdownRef = useRef<HTMLDivElement | null>(null);

  const handleDropdownClick = (e: React.MouseEvent<HTMLDivElement>) => {
    setState((prev) => (prev === "open" ? "closed" : "open"));
  };

  const handleClickOutside = useCallback(
    (e: MouseEvent) => {
      if (
        state === "open" &&
        e.target &&
        dropdownRef.current &&
        dropdownRef.current.contains(e.target as any) === false
      ) {
        setState("closed");
      }
    },
    [state, dropdownRef.current],
  );
  useEffect(() => {
    document.addEventListener("mousedown", handleClickOutside);

    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, [handleClickOutside]);
  return (
    <div ref={dropdownRef} className=" block relative" data-state={state}>
      <div
        className={`${DropdownStyle.size[size]} ${DropdownStyle.color[defaultColor]} ${state === "open" ? DropdownStyle.color.open[defaultColor] : ""} relative flex items-center px-2 h-8 rounded-lg cursor-pointer pr-[30px] border border-gray-100`}
        onClick={handleDropdownClick}
      >
        <div className=" flex items-center truncate text-[13px] font-medium mr-1.5 text-gray-900">
          <div className=" truncate" title={label}>
            {label}
          </div>
          {state === "open" ? (
            <MdKeyboardArrowUp className=" absolute top-[9px] right-2 w-3.5 h-3.5 text-gray-500" />
          ) : (
            <MdKeyboardArrowDown className=" absolute top-[9px] right-2 w-3.5 h-3.5 text-gray-500" />
          )}
        </div>
      </div>
      {state === "open" && children}
    </div>
  );
};

export default Dropdown;
