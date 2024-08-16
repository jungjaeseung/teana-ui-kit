"use client";
import ClickableTextButton from "@/stories/atoms/Button/ClickableTextButton";
import React from "react";
import { FiFile } from "react-icons/fi";
import { FiFileText } from "react-icons/fi";
type GrayAreaProps = {};

const datas = [
  {
    id: "button1",
    text: "빈 상태로 시작",
    Icon: <FiFile />,
  },
  {
    id: "button2",
    text: "템플릿에서 시작",
    Icon: <FiFileText />,
  },
];

const GrayArea = ({}: GrayAreaProps) => {
  return (
    <div className={` bg-gray-200 w-[200px] rounded-md p-2`}>
      <div className=" px-4 pt-2 pb-1 text-xs font-medium leading-[18px] text-gray-500">
        앱 만들기
      </div>
      {datas.map((data) => (
        <ClickableTextButton
          key={data.id}
          id={data.id}
          onClick={() => {
            console.log("clicked:: " + data.id);
          }}
          text={data.text}
          defaultColor="transparent"
          Icon={data.Icon}
          font="medium"
        />
      ))}
    </div>
  );
};

export default GrayArea;
