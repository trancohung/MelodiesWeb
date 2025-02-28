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

const Menu = () => {
  return (
    <>
      <div className='bg-[#0E1920] text-white p-10 flex flex-col justify-between items-start w-84 min-h-screen'>
        <h1 className='px-6 text-4xl font-bold '>MeLoDies</h1>
        <div>
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
          <div className="m-2 p-2">
              <h1 className="text-xl text-[#EE10B0]">{menu.menuName}</h1>
              <div className="text-2xl font-bold pt-2">
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
export default Menu;