import icons from "./icons"

const { MdOutlineMusicVideo,
    MdOutlineExplore,
    TbDeviceAnalytics,
    RiUserFollowLine,
    CiMusicNote1,
    BiCategory,
    AiOutlineStar,
    RiVipLine,
    RiFolderMusicLine,
    RiPlayListAddFill,
    MdOutlineRecentActors, } = icons
export const sidebarMenu = [
    {
        path: 'mymusic',
        text: 'Cá nhân',
        icon: <MdOutlineMusicVideo size={20} />
    },
    {
        path: '',
        text: 'Khám phá',
        icon: <MdOutlineExplore size={20} />,
        end: true
    },
    {
        path: 'zingchart',
        text: 'Zing chart',
        icon: <TbDeviceAnalytics size={20} />
    },
    {
        path: 'follow',
        text: 'Theo dõi',
        icon: <RiUserFollowLine size={20} />
    },
]

export const sideNavbarMenu = [
    {
        path: 'moi-phat-hanh',
        text: 'Nhạc Mới',
        icon: <CiMusicNote1 size={20} />
    },
    {
        path: 'hub',
        text: 'Thế Loại',
        icon: <BiCategory size={20} />
    },
    {
        path: 'top100',
        text: 'Top 100',
        icon: <AiOutlineStar size={20} />
    },
    {
        path: 'the-loai-video',
        text: 'MV',
        icon: <RiVipLine size={20} />
    },
]

export const sideLib = [
    {
        path: 'bai-hat',
        text: 'Bài hát',
        icon: <RiFolderMusicLine size={20} />
    },
    {
        path: 'play-list',
        text: 'PlayList',
        icon: <RiPlayListAddFill size={20} />
    },
    {
        path: 'gan-day',
        text: 'Gần đây',
        icon: <MdOutlineRecentActors size={20} />
    },

]