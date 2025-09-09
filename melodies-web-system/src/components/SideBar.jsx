import React from "react";
import { menu, menuData } from "../utils/sideBar";
import * as Icons from "@ant-design/icons";
import { Link } from "react-router-dom";
import { useAuth } from "../context/AuthProvider";
import { roleMenu } from "../utils/roleMenu";

const SideBar = () => {
  const { user, logout } = useAuth();

  if (!user) return null;

  const role = user.role;
  const allowedMenuIds = roleMenu[role] || [];

  return (
    <div className="bg-[#0E1920] text-white p-10 flex flex-col justify-start items-start w-96 min-h-screen gap-6">
      <h1 className="w-full text-4xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-[#EE10B0] to-[#0E9EEFEB] to-70%">
        MeLoDies
      </h1>
      <div className="space-y-4 w-full">
        {menu.map((status) => {
          const groupedMenuData = menuData.filter((item) => {
            const isAllowedGroup = allowedMenuIds.includes(item.menuId);
            if (role === "artist" && item.menuDataId === 12) return true;
            return (
              item.menuId === status.menuId &&
              isAllowedGroup &&
              item.menuDataId !== 12
            );
          });

          if (groupedMenuData.length === 0) return null;

          return (
            <div key={status.menuId} className="w-full">
              <h1 className="text-xl text-[#EE10B0] mb-2">{status.menuName}</h1>
              <div className="text-2xl font-bold space-y-2">
                {groupedMenuData.map((item) => {
                  const IconComponent = Icons[item.icon];
                  if (item.icon === "LogoutOutlined") {
                    return (
                      <button
                        onClick={logout}
                        key={item.menuDataId}
                        className="flex gap-4 items-center cursor-pointer"
                      >
                        {IconComponent && <IconComponent />}
                        <h2 className="text-xl">{item.menuName}</h2>
                      </button>
                    );
                  }
                  return (
                    <Link
                      to={item.path}
                      key={item.menuDataId}
                      className="flex gap-4 items-center"
                    >
                      {IconComponent && <IconComponent />}
                      <h2 className="text-xl">{item.menuName}</h2>
                    </Link>
                  );
                })}
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default SideBar;
