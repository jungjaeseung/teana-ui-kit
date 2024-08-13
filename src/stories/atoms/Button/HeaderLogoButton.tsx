import React from "react";
import Link from "next/link";
import Image from "next/image";
export interface HeaderLogoButtonProps {
  img: string;
  href: string;
}

const HeaderLogoButton = ({ img, href }: HeaderLogoButtonProps) => {
  return (
    <div className=" flex items-center">
      <Link href={href}>
        <Image
          src={img}
          alt="App logo"
          className=" block w-auto h-10 object-contain"
          width={100}
          height={40}
          loading="eager"
        />
      </Link>
    </div>
  );
};

export default HeaderLogoButton;
