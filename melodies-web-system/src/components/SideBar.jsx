import React from "react";
import { menu, menuData } from "../utils/sideBar";

import {
  CompassOutlined,
  FieldTimeOutlined,
  FolderAddOutlined,
  FolderViewOutlined,
  HeartOutlined,
  HomeOutlined,
  LogoutOutlined,
  ReloadOutlined,
  SettingOutlined,
  UnorderedListOutlined,
  UserOutlined,
} from "@ant-design/icons";
import { Link } from "react-router-dom";
import { useAuth } from "../context/AuthProvider";

const iconMap = {
  HomeOutlined: HomeOutlined,
  CompassOutlined: CompassOutlined,
  FolderViewOutlined: FolderViewOutlined,
  UserOutlined: UserOutlined,
  FieldTimeOutlined: FieldTimeOutlined,
  ReloadOutlined: ReloadOutlined,
  HeartOutlined: HeartOutlined,
  UnorderedListOutlined: UnorderedListOutlined,
  FolderAddOutlined: FolderAddOutlined,
  SettingOutlined: SettingOutlined,
  LogoutOutlined: LogoutOutlined,
};

const SideBar = () => {
  const { user } = useAuth();
  return (
    <>
      <div className="bg-[#0E1920] text-white p-10 flex flex-col justify-start items-start w-96 min-h-screen gap-6">
        <h1 className="w-full text-4xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-[#EE10B0] to-[#0E9EEFEB] to-70%">
          MeLoDies
        </h1>
        <div className="space-y-4 w-full">
          {menu.map((status) => (
            <MenuCard
              key={status.menuId}
              menu={status}
              menuData={menuData}
              user={user}
            />
          ))}
        </div>
      </div>
    </>
  );
};

const MenuCard = ({ menu, menuData, user }) => {
  // console.log(menuData);
  const groupedMenuData = menuData.filter(
    (item) => item.menuId === menu.menuId
  );

  const { logout } = useAuth();
  return (
    <>
      <div className="w-full">
        <h1 className="text-xl text-[#EE10B0] mb-2">{menu.menuName}</h1>
        <div className="text-2xl font-bold space-y-2">
          {groupedMenuData.map((item) => {
            const IconComponent = iconMap[item.icon];
            if (!user && item.icon === "LogoutOutlined") {
              return null;
            }
            if (item.icon === "LogoutOutlined") {
              return (
                <button
                  onClick={logout}
                  key={item.menuDataId}
                  className="flex gap-4 items-center cursor-pointer"
                >
                  <div>{IconComponent && <IconComponent />}</div>
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
                <div>{IconComponent && <IconComponent />}</div>
                <h2 className="text-xl">{item.menuName}</h2>
              </Link>
            );
          })}
        </div>
      </div>
    </>
  );
};
export default SideBar;
