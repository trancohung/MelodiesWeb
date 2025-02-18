import React, { useState } from 'react';
import MenuCard from '../MenuCard/MenuCard';
import { menu, menuData } from '../../data/data';


const Menu = () => {
  return (
    <>
      <div className='bg-[#0E1920] text-white p-10 flex flex-col justify-between items-start w-1/5 h-full'>
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
export default Menu;