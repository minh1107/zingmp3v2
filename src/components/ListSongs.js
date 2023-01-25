import moment from "moment";
import React, { memo } from "react";
import { useSelector } from "react-redux";
import ListSong from "./ListSong";

function ListSongs({ totalDuration}) {
  const {songs} = useSelector(state => state.music)
  return (
    <div className="w-full flex flex-col p-[10px]  text-xs text-[#ffffff80]">
      <div className="flex justify-between items-center font-semibold mr-3"> 
        <span>BÀI HÁT</span>
        <span className="">ALBUM</span>
        <span>THỜI GIAN</span>
      </div>
      <div className="flex flex-col mt-4 mr-3">
      {songs?.map((item, index) => (
        index < 50 ? <ListSong key={index} songData = {item} /> : ''
      ))}
      </div>
      <span>
        <span>{`${songs?.length} bài hát`}</span>
        <span>{moment.utc(totalDuration * 1000).format("HH:mm:ss")}</span>
      </span>
    </div>
  );
}

export default ListSongs;
