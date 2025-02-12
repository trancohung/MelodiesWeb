import { CompassOutlined, FieldTimeOutlined, FolderAddOutlined, FolderViewOutlined, HeartOutlined, HomeOutlined, LogoutOutlined, ReloadOutlined, SettingOutlined, UnorderedListOutlined, UserOutlined } from '@ant-design/icons';

// dữ liệu menu
export const menu = [
    { menuId: 1, menuName: 'Menu' },
    { menuId: 2, menuName: 'Library' },
    { menuId: 3, menuName: 'Playlist and favorite' },
    { menuId: 4, menuName: 'Genral' },
]

export const menuData = [
    {
        menuDataId: 1,
        menuName: 'Home',
        icon: 'HomeOutlined',
        menuId: 1,
    },
    {
        menuDataId: 2,
        menuName: 'Discover',
        icon: 'CompassOutlined',
        menuId: 1,
    },
    {
        menuDataId: 3,
        menuName: 'Albums',
        icon: 'FolderViewOutlined',
        menuId: 1,
    },
    {
        menuDataId: 4,
        menuName: 'Artists',
        icon: 'UserOutlined',
        menuId: 1,
    },
    {
        menuDataId: 5,
        menuName: 'Recently Added',
        icon: 'FieldTimeOutlined',
        menuId: 2,
    },
    {
        menuDataId: 6,
        menuName: 'Most Played',
        icon: 'ReloadOutlined',
        menuId: 2,
    },
    {
        menuDataId: 7,
        menuName: 'Your Favorites',
        icon: 'HeartOutlined',
        menuId: 3,
    },
    {
        menuDataId: 8,
        menuName: 'Your Playlist',
        icon: 'UnorderedListOutlined',
        menuId: 3,
    },
    {
        menuDataId: 9,
        menuName: 'Add Playlist',
        icon: 'FolderAddOutlined',
        menuId: 3,
    },
    {
        menuDataId: 10,
        menuName: 'Setting',
        icon: 'SettingOutlined',
        menuId: 4,
    },
    {
        menuDataId: 11,
        menuName: 'LogOut',
        icon: 'LogoutOutlined',
        menuId: 4,
    },
]

