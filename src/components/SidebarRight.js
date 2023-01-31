import React, { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import icons from "../utils/icons";
import PlayListRightBar from "./PlayListRightBar";

const { FcAlarmClock, FcFullTrash } = icons;

function SidebarRight() {
  const {currentSongData, currentSongId,songs } = useSelector(state => state.music)
  const [isRecent, setIsRecent] = useState(false);
  const [currentSong,setCurrentSong ]  = useState({})
  useEffect(() => {
    const song = currentSongData?.find((item) => (item.encodeId === currentSongId))
    setCurrentSong(song)
  }, [currentSongData])
  return (
    <div className="w-full flex-col text-[12px] hidden tablet:flex">
      <div className=" h-[70px] p-[14px] flex justify-around w-full py-[14px] px-2 items-center">
        <div className="w-[233px] border-none bg-[#2F2532] p-[2px] rounded-full items-center justify-center flex">
          <span onClick={() => setIsRecent(pre => !pre)} className={`${!isRecent && 'bg-[#6D6367]'} cursor-pointer border-none text-center w-[50%] border-l-2 pl-2 rounded-full px-[10px] py-[5px]`}>
            Danh sách phát
          </span>
          <span onClick={() => setIsRecent(pre => !pre)} className={`${isRecent && 'bg-[#6D6367]'} cursor-pointer border-none text-center w-[50%] border-r-2 pr-2 rounded-full px-[10px] py-[5px]`}>
            Nghe gần đây
          </span>
        </div>
        <span className="bg-[#2F2532] cursor-pointer p-[6px] rounded-full">
          <FcAlarmClock size={20} />
        </span>
        <span className="bg-[#2F2532] cursor-pointer p-[6px] rounded-full">
          <FcFullTrash size={20} />
        </span>
      </div>
      <div className="w-full">
        <div className={` ${!isRecent ? 'flex' : 'hidden'} w-[329px]` }>
          <PlayListRightBar isRecent={!isRecent} songs={songs}/>
        </div>
        <div className={` ${isRecent ? 'flex' : 'hidden'}`}>
        <PlayListRightBar songs={songs}/>
        </div>
      </div>
    </div>
  );
}

export default SidebarRight;
