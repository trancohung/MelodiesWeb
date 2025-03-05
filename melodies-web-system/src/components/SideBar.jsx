import React, { useState } from 'react';
import { menu, menuData } from '../utils/sideBar';

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
  UserOutlined
} from '@ant-design/icons';

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
  LogoutOutlined: LogoutOutlined
};

const SideBar = () => {
  return (
    <>
      <div className='bg-[#0E1920] text-white p-10 flex flex-col justify-start items-start w-96 min-h-screen gap-6'>
        <h1 className='w-full text-4xl font-bold'>MeLoDies</h1>
        <div className='space-y-4 w-full'>
          {menu.map((status) => (
            <MenuCard key={status.menuId} menu={status} menuData={menuData} />
          ))}
          
        </div>
      </div>
    </>
  );
};

const MenuCard = ({menu, menuData}) => {
  // console.log(menuData);
  const groupedMenuData = menuData.filter(item => item.menuId === menu.menuId);
  return (
      <>
          <div className="w-full">
              <h1 className="text-xl text-[#EE10B0] mb-2">{menu.menuName}</h1>
              <div className="text-2xl font-bold space-y-2">
                  {groupedMenuData.map((item) => {
                      const IconComponent = iconMap[item.icon];
                      return (
                          <div key={item.menuDataId} className="flex gap-4 items-center">
                              <div>{IconComponent && <IconComponent />}</div>
                              <h2 className="text-xl">{item.menuName}</h2>
                          </div>
                      );
                  })}
              </div>
          </div>
      </>
  );
}
export default SideBar;