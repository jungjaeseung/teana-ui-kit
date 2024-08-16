import { Meta, StoryObj } from "@storybook/react";
import { RxDashboard } from "react-icons/rx";
import { IoExpandOutline } from "react-icons/io5";
import { MdOutlineIntegrationInstructions } from "react-icons/md";
import React, { useCallback, useState } from "react";
import DefaultButton from "./DefaultButton";

const meta = {
  title: "atoms/Buttons/DefaultButton",
  component: DefaultButton,
  parameters: {
    layout: "centered",
  },
  tags: ["autodocs"],
} satisfies Meta<typeof DefaultButton>;

export default meta;
type Story = StoryObj<typeof meta>;

export const 선택됨: Story = {
  args: {
    id: "id1",
    selected: true,
    Icon: <RxDashboard />,
    label: "모두",
    onClick: () => {},
  },
};

export const 선택안됨: Story = {
  args: {
    ...선택됨.args,
    selected: false,
  },
};

export const 아이콘없음: Story = {
  args: {
    ...선택됨.args,
    Icon: undefined,
  },
};

const datas = [
  {
    label: "모두",
    Icon: RxDashboard,
    id: "id1",
  },
  {
    label: "RAG",
    Icon: IoExpandOutline,
    id: "id2",
  },
  {
    label: "Instruction",
    Icon: MdOutlineIntegrationInstructions,
    id: "id3",
  },
];
const HeaderNavigation = () => {
  const [selected, setSelected] = useState<string>("id1");
  const onClick = useCallback(
    (id: string) => {
      setSelected(id);
    },
    [setSelected],
  );
  return (
    <div className=" flex relative">
      {datas.map((data) => (
        <DefaultButton
          key={data.id}
          selected={selected === data.id}
          label={data.label}
          Icon={<data.Icon />}
          id={data.id}
          onClick={onClick}
        />
      ))}
    </div>
  );
};

export const 예시 = {
  render: () => <HeaderNavigation />,
};
