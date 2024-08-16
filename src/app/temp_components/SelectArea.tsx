"use client";
import DefaultButton from "@/stories/atoms/Button/DefaultButton";
import React, { useState } from "react";
import { IoExpandOutline } from "react-icons/io5";
import { MdOutlineIntegrationInstructions } from "react-icons/md";
import { RxDashboard } from "react-icons/rx";

type SelectAreaProps = {};

const datas1 = [
  {
    id: "all",
    label: "모두",
    Icon: <RxDashboard />,
  },
  {
    label: "RAG",
    Icon: <IoExpandOutline />,
    id: "id2",
  },
  {
    label: "Instruction",
    Icon: <MdOutlineIntegrationInstructions />,
    id: "id3",
  },
];

const SelectArea = ({}: SelectAreaProps) => {
  const [selected, setSelected] = useState(datas1[0].id);
  return (
    <div className=" relative flex">
      {datas1.map((data) => (
        <DefaultButton
          key={data.id}
          selected={selected === data.id}
          label={data.label}
          id={data.id}
          Icon={data.Icon}
          onClick={() => {
            console.log("clicked:" + data.id);
            setSelected(data.id);
          }}
        />
      ))}
    </div>
  );
};

export default SelectArea;
