import Image from "next/image";
import React from "react";

export interface UserHeroIconProps {
  userInfo: {
    id: string;
    name: string;
    img?: string;
  };
  marginRight?: boolean;
}

const UserHeroIcon = ({ userInfo, marginRight = false }: UserHeroIconProps) => {
  return userInfo.img === undefined || userInfo.img === "" ? (
    <div
      className={`${marginRight ? " mr-2" : ""} shrink-0 flex items-center rounded-full bg-purple-400 w-[32px] h-[32px] text-[32px] leading-[32px]`}
    >
      <div className=" text-center text-white scale-[0.4] w-[32px] h-[32px]">
        {userInfo.name[0]}
      </div>
    </div>
  ) : (
    <div
      className={`${marginRight ? " mr-2" : ""} shrink-0 flex items-center rounded-full overflow-hidden bg-purple-400 w-[32px] h-[32px]`}
    >
      <Image
        src={userInfo.img}
        alt="user profile image"
        className=" block object-contain"
        width={32}
        height={32}
        loading="eager"
        priority={true}
      />
    </div>
  );
};

export default UserHeroIcon;
