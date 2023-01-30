import React, { useState } from "react";
import { useSelector } from "react-redux";
import icons from "../utils/icons";

const { FcAlarmClock, FcFullTrash } = icons;

function SidebarRight() {
  const {currentSongData} = useSelector(state => state.music)
  const [isRecent, setIsRecent] = useState(false);
  return (
    <div className="flex w-full flex-col text-[12px]">
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
      <div>
        <div className={` ${!isRecent ? 'flex' : 'hidden'}`}>
          
        </div>
        <div className={` ${isRecent ? 'flex' : 'hidden'}`}>gan day</div>
      </div>
    </div>
  );
}

export default SidebarRight;
