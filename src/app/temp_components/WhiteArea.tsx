"use client";
import ClickableTextButton from "@/stories/atoms/Button/ClickableTextButton";
import React from "react";

type WhiteAreaProps = {};

const datas = [
  {
    id: "button1",
    text: "설정",
    arrow: false,
  },
  {
    id: "button2",
    text: "로드맵 및 피드백",
    arrow: true,
  },
  {
    id: "button3",
    text: "커뮤니티",
    arrow: true,
  },
  {
    id: "button4",
    text: "도움말 센터",
    arrow: true,
  },
];

const WhiteArea = ({}: WhiteAreaProps) => {
  return (
    <div className={` bg-white w-[200px] rounded-md p-1`}>
      {datas.map((data) => (
        <ClickableTextButton
          id={data.id}
          onClick={() => {
            console.log("clicked:: " + data.id);
          }}
          text={data.text}
          rightArrowIcon={data.arrow}
          textSize="large"
        />
      ))}
    </div>
  );
};

export default WhiteArea;
