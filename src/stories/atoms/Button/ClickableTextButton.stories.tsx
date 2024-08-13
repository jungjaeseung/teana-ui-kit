import { Meta, StoryObj } from "@storybook/react";
import ClickableTextButton from "./ClickableTextButton";
import { FiFile } from "react-icons/fi";
import { FiFileText } from "react-icons/fi";

const meta = {
  title: "atoms/Buttons/ClickableTextButton",
  component: ClickableTextButton,
  parameters: {
    layout: "centered",
  },
  tags: ["autodocs"],
} satisfies Meta<typeof ClickableTextButton>;

export default meta;
type Story = StoryObj<typeof meta>;

const Container = ({
  children,
  color,
}: {
  children: React.ReactChild;
  color: "white" | "gray";
}) => {
  return (
    <div
      className={`${color === "white" ? " bg-white" : ""} w-[200px] rounded-md px-1 py-6`}
    >
      {children}
    </div>
  );
};

export const 기본_화이트: Story = {
  args: {
    id: "button1",
    onClick: (id) => {},
    text: "워크스페이스 생성",
    Icon: <FiFile />,
  },
};

export const 기본_배경색Transparent: Story = {
  args: {
    ...기본_화이트.args,
    defaultColor: "transparent",
  },
};

const Comp3 = () => (
  <ClickableTextButton
    id="button1"
    onClick={() => {}}
    text="8/3일 개최 예정인 토트넘 vs 바이에른 뮌헨과의 경기를 앞두고 있는 손흥민"
  />
);
export const 긴텍스트 = {
  render: () => (
    <Container color="white">
      <Comp3 />
    </Container>
  ),
};

const Comp2 = () => (
  <>
    <ClickableTextButton id="button1" onClick={() => {}} text="설정" />
    <ClickableTextButton
      id="button2"
      onClick={() => {}}
      text="로드맵 및 피드백"
      rightArrowIcon
    />
    <ClickableTextButton
      id="button3"
      onClick={() => {}}
      text="커뮤니티"
      rightArrowIcon
    />
    <ClickableTextButton
      id="button4"
      onClick={() => {}}
      text="도움말 센터"
      rightArrowIcon
    />
  </>
);
/**
 * 설정은 모달 오픈, 나머지는 페이지 이동 가정
 */
export const 예시_화이트_아이콘X = {
  render: () => (
    <Container color="white">
      <Comp2 />
    </Container>
  ),
};

const Comp1 = () => (
  <>
    <ClickableTextButton
      id="button1"
      onClick={() => {}}
      text="워크스페이스 생성"
      Icon={<FiFile />}
      defaultColor="transparent"
      font="medium"
      textSize="large"
    />
    <ClickableTextButton
      id="button2"
      onClick={() => {}}
      text="템플릿에서 시작"
      Icon={<FiFileText />}
      defaultColor="transparent"
      font="medium"
      textSize="large"
    />
  </>
);
export const 예시_배경색Transparent_아이콘O_폰트굵기미디엄_텍스트라지 = {
  render: () => (
    <Container color="gray">
      <Comp1 />
    </Container>
  ),
};
