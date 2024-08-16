import React from "react";
import HeaderLogoButton from "../atoms/Button/HeaderLogoButton";
import HeaderNavTitleContent from "../molecules/HeaderNavTitleContent";
import Dropdown from "@/app/temp_components/Dropdown";
import TextSearchInput from "../atoms/Input/TextSearchInput";
import NavButton from "../atoms/Button/NavButton";
import HeaderFooter from "../organisms/HeaderFooter";
import { userInfo } from "os";

export interface LeftHeaderProps {
  /**
   * Collapse 여부
   */
  isCollapsed: boolean;
  /**
   * Collapse/Expand 전환 handler
   */
  collapseHandler: () => void;
  /**
   * 로고 정보 / 로고 클릭시 이동할 href
   */
  appInfo: {
    img_expand: string;
    img_collapse: string;
    href: string;
  };
  /**
   * dropdown data
   */
  dropdownData: { id: string; name: string }[];
  /**
   * Menu 영역의 Info
   */
  menuInfo: {
    label: string;
    IconNonSel: React.JSX.Element;
    IconSel: React.JSX.Element;
    href: string;
    admin?: boolean;
  }[];
  /**
   * General 영역의 Info
   */
  generalInfo: {
    label: string;
    IconNonSel: React.JSX.Element;
    IconSel: React.JSX.Element;
    href: string;
    admin?: boolean;
  }[];
  /**
   * Menu/General의 선택 여부 boolean Array.
   *
   * Array Length는 menuInfo.length + generalInfo.length
   */
  selectedArr: boolean[];
  /**
   * 현재 User의 Info
   */
  userInfo: {
    id: string;
    name: string;
    img?: string;
    auth: string;
  };
}

const LeftHeader = ({
  isCollapsed,
  collapseHandler,
  appInfo,
  dropdownData,
  menuInfo,
  generalInfo,
  selectedArr,
  userInfo,
}: LeftHeaderProps) => {
  return (
    <div
      className={`${isCollapsed ? " w-14" : " w-[216px]"} shrink-0 flex flex-col bg-background-default-subtle border-r border-divider-burn transition-all`}
    >
      {/** 로고 영역 */}
      <div className={`${isCollapsed ? " p-2" : " p-3"} shrink-0`}>
        <div className=" relative">
          <div
            className={`${isCollapsed ? " p-1 rounded-lg hover:bg-gray-100" : " p-1"} block`}
          >
            <HeaderLogoButton
              img_expand={appInfo.img_expand}
              img_collapse={appInfo.img_collapse}
              href={appInfo.href}
              mini={isCollapsed}
            />
          </div>
        </div>
      </div>

      {/** 구분선 */}
      <div
        className={`${isCollapsed ? " w-6" : " w-[190px]"} mt-1 mx-auto h-[1px] bg-divider-subtle`}
      />

      {/** Workspace Dropbox Area */}
      <HeaderNavTitleContent
        title="Workspace"
        isCollapsed={isCollapsed}
        hideContentWhenCollapsed={true}
      >
        <Dropdown label="모두보기" defaultColor="lightGray">
          <div className=" z-[1000] absolute left-0 top-[calc(100%+6px)]">
            <div className=" relative w-[240px] bg-white rounded-lg border-[0.5px] border-gray-200 shadow-lg">
              <div className=" p-2 border-b-[0.5px] border-black/5">
                <TextSearchInput
                  name="workspace"
                  size="transparent"
                  placeholder="워크스페이스 검색"
                  onChange={(e) => {
                    console.log("워크스페이스 검색 ::", e.target.value);
                  }}
                />
              </div>
              <div className=" p-1 max-h-72 overflow-auto">
                {dropdownData.map((i) => (
                  <div
                    className=" flex items-center gap-2 pl-3 py-[6px] pr-2 rounded-lg cursor-pointer hover:bg-gray-100"
                    key={i.id}
                  >
                    <div
                      className=" grow text-sm text-gray-700 leading-5 truncate"
                      title={i.name}
                    >
                      {i.name}
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </Dropdown>
      </HeaderNavTitleContent>
      {/** Menu Navigation Area */}
      <HeaderNavTitleContent
        title="Menu"
        isCollapsed={isCollapsed}
        isGrow={true}
      >
        {menuInfo.map((i, idx) => (
          <NavButton
            key={i.href}
            label={i.label}
            href={i.href}
            selected={selectedArr[idx]}
            mini={isCollapsed}
            IconSel={i.IconSel}
            IconNonSel={i.IconNonSel}
          />
        ))}
      </HeaderNavTitleContent>
      {/** General Navigation Area */}
      <HeaderNavTitleContent title="General" isCollapsed={isCollapsed}>
        {generalInfo.map((i, idx) => (
          <NavButton
            key={i.href}
            label={i.label}
            href={i.href}
            selected={selectedArr[idx + menuInfo.length]}
            mini={isCollapsed}
            IconSel={i.IconSel}
            IconNonSel={i.IconNonSel}
            requireAdmin={i.admin}
            isUserAdmin={userInfo.auth === "admin"}
          />
        ))}
      </HeaderNavTitleContent>

      <HeaderFooter
        isCollapsed={isCollapsed}
        collapseHandler={collapseHandler}
        userInfo={userInfo}
      />
    </div>
  );
};

export default LeftHeader;
