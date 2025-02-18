import { useState } from "react";
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

export default MenuCard;