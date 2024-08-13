import { Meta, StoryObj } from "@storybook/react";
import TextSearchInput from "./TextSearchInput";

const meta = {
  title: "atoms/Inputs/TextSearchInput",
  component: TextSearchInput,
  parameters: {
    layout: "centered",
  },
  tags: ["autodocs"],
} satisfies Meta<typeof TextSearchInput>;

export default meta;
type Story = StoryObj<typeof meta>;

export const 플레이스홀더있음: Story = {
  args: {
    name: "search_input",
    placeholder: "검색",
    autoComplete: "off",
  },
};

export const 플레이스홀더없음: Story = {
  args: {
    ...플레이스홀더있음.args,
    placeholder: undefined,
  },
};

export const Gray컬러: Story = {
  args: {
    ...플레이스홀더있음.args,
    defaultColor: "gray",
  },
};

export const Medium사이즈: Story = {
  args: {
    ...플레이스홀더있음.args,
    size: "medium",
  },
};

export const Large사이즈: Story = {
  args: {
    ...플레이스홀더있음.args,
    size: "large",
  },
};
