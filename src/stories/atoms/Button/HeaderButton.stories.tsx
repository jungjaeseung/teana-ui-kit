import { Meta, StoryObj } from "@storybook/react";
import { PiFlowArrowLight } from "react-icons/pi";
import { HiDatabase } from "react-icons/hi";
import { MdSpaceDashboard } from "react-icons/md";
import { MdOutlineSpaceDashboard } from "react-icons/md";
import { HiOutlineDatabase } from "react-icons/hi";
import { MdSmartToy } from "react-icons/md";
import { PiFlowArrowFill } from "react-icons/pi";
import { MdOutlineSmartToy } from "react-icons/md";
import React, { useCallback, useState } from "react";
import HeaderButton from "./HeaderButton";

const meta = {
  title: "atoms/Buttons/HeaderButton",
  component: HeaderButton,
  parameters: {
    layout: "centered",
  },
  tags: ["autodocs"],
} satisfies Meta<typeof HeaderButton>;

export default meta;
type Story = StoryObj<typeof meta>;

export const 선택됨: Story = {
  args: {
    selected: true,
    IconSel: <PiFlowArrowFill />,
    IconNonSel: <PiFlowArrowLight />,
    href: "/application",
    label: "어플리케이션",
    onClick: () => {},
  },
};

export const 선택안됨: Story = {
  args: {
    ...선택됨.args,
    selected: false,
  },
};
const HeaderNavigation = () => {
  const [selected, setSelected] = useState<string>("/application");
  const onClick = useCallback(
    (label: string) => {
      setSelected(label);
    },
    [setSelected],
  );
  return (
    <div className=" flex items-center">
      <HeaderButton
        selected={selected === "/application"}
        IconSel={<PiFlowArrowFill />}
        IconNonSel={<PiFlowArrowLight />}
        label="어플리케이션"
        href="/application"
        onClick={onClick}
      />
      <HeaderButton
        selected={selected === "/dataset"}
        IconSel={<HiDatabase />}
        IconNonSel={<HiOutlineDatabase />}
        label="데이터셋"
        href="/dataset"
        onClick={onClick}
      />
      <HeaderButton
        selected={selected === "/monitor"}
        IconSel={<MdSpaceDashboard />}
        IconNonSel={<MdOutlineSpaceDashboard />}
        label="모니터링"
        href="/monitor"
        onClick={onClick}
      />
      <HeaderButton
        selected={selected === "/models"}
        IconSel={<MdSmartToy />}
        IconNonSel={<MdOutlineSmartToy />}
        label="모델관리"
        href="/models"
        onClick={onClick}
      />
    </div>
  );
};

export const 예시 = {
  render: () => <HeaderNavigation />,
};
