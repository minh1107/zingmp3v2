import icons from "./icons"

const { RiFolderMusicFill, MdOutlineExplore, IoMdAnalytics, RiUserFollowLine } = icons
export const sidebarMenu = [
    {
        path: 'mymusic',
        text: 'Cá nhân',
        icon: <RiFolderMusicFill size={24} />
    },
    {
        path: '',
        text: 'Khám phá',
        icon: <MdOutlineExplore size={24} />,
        end: true
    },
    {
        path: 'zingchart',
        text: 'Zing chart',
        icon: <IoMdAnalytics size={24} />
    },
    {
        path: 'follow',
        text: 'Theo dõi',
        icon: <RiUserFollowLine size={24} />
    },
]