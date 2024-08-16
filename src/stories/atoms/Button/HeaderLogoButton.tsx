import React from "react";
import Link from "next/link";
import Image from "next/image";
export interface HeaderLogoButtonProps {
  /**
   * Expand 상태의 Logo의 src
   */
  img_expand: string;
  /**
   * Collapse 상태의 Logo src
   */
  img_collapse?: string;
  /**
   * 로고 영역 클릭시 이동할 href
   */
  href: string;
  /**
   * 아이콘 우측 Title이 필요할 경우
   */
  children?: React.ReactNode;
  /**
   * Collapse시 mini size
   */
  mini?: boolean;
}

const HeaderLogoButton = ({
  img_expand,
  img_collapse,
  href,
  children,
  mini,
}: HeaderLogoButtonProps) => {
  return (
    <div className=" flex items-center">
      <Link href={href} className=" flex items-center">
        <Image
          src={mini ? img_collapse || img_expand : img_expand}
          alt="App logo"
          className={`${mini ? " w-8 h-8" : " w-auto h-10"} block object-contain`}
          width={100}
          height={40}
          loading="eager"
          priority={true}
        />
        {mini ? null : children}
      </Link>
    </div>
  );
};

export default HeaderLogoButton;
