import React from "react";
import UserHeroIcon from "../atoms/Icon/UserHeroIcon";

export interface UserButtonProps {
  isCollapsed: boolean;
  userInfo: {
    id: string;
    name: string;
    img?: string;
  };
}

const UserButton = ({ isCollapsed, userInfo }: UserButtonProps) => {
  return (
    <div>
      <div className=" relative inline-block text-left">
        <div>
          <button
            type="button"
            className={`${isCollapsed ? " px-1" : " min-w-[176px] pr-2.5 pl-1"} inline-flex items-center rounded-[20px] py-1 text-sm text-gray-700 hover:bg-gray-200`}
          >
            <UserHeroIcon userInfo={userInfo} marginRight={!isCollapsed} />
            {!isCollapsed && <p className=" truncate">{userInfo.name}</p>}
          </button>
        </div>
      </div>
    </div>
  );
};

export default UserButton;
