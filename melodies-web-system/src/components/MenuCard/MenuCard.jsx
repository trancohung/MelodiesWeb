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

const MenuCard = ({name}) => {
    console.log(name);
    return (
        <>
            <div className="m-2 p-2">
                <h1 className="text-xl text-[#EE10B0]">{name.menuName}</h1>
                <div className="text-2xl font-bold">
                    <div className="flex gap-4">
                        <div>Icon</div>
                        <h2>Home</h2>
                    </div>
                    <div className="flex gap-4">
                        <div>Icon</div>
                        <h2>Discover</h2>
                    </div>
                    <div className="flex gap-4">
                        <div>Icon</div>
                        <h2>Albums</h2>
                    </div>
                    <div className="flex gap-4">
                        <div>Icon</div>
                        <h2>Artist</h2>
                    </div>
                </div>
            </div>
        </>
    );
}

export default MenuCard;