import React, { useEffect, useState } from "react";
import icons from "../utils/icons";

const {
  RiVipFill,
  GiMicrophone,
  TfiNewWindow,
  BsFillVolumeUpFill,
  BsMusicNoteList,
  BsFillVolumeMuteFill,
} = icons;
function RightPlayer({ setIsShowRightSidebar, setAudio, audio }) {
  const [toggleOnOffVolume, setToggleOnOffVolume] = useState(true);
  const [volume, SetVolume] = useState(audio.value * 100);
  const [previous, setPrevious] = useState(volume)
  const handleChange = (e) => {
    SetVolume(e.target.value);
    audio.volume = e.target.value/100;
  };
  const handleOnOffVolume = () => {
    setToggleOnOffVolume(!toggleOnOffVolume);
    if (!toggleOnOffVolume) {
      SetVolume(previous)
      audio.volume = previous/100;      
    } else {
      setPrevious(volume)
      audio.volume = 0;
      SetVolume(0)
    }
  };
  
  return (
    <div className="flex h-full items-center gap-2">
      <span className="cursor-not-allowed hover:bg-[#2F2532] rounded-full p-2">
        <RiVipFill size={18} />
      </span>
      <span className="cursor-pointer hover:bg-[#2F2532] rounded-full p-2">
        <GiMicrophone size={18} />
      </span>
      <span className="cursor-pointer hover:bg-[#2F2532] rounded-full p-2">
        <TfiNewWindow size={18} />
      </span>

      <span onClick={handleOnOffVolume} className="cursor-pointer hover:bg-[#2F2532] rounded-full p-2">
        {toggleOnOffVolume ? (
          <BsFillVolumeUpFill size={18} />
        ) : (
          <BsFillVolumeMuteFill size={18} />
        )}
      </span>
      <span className="flex ">
        <input
          onChange={handleChange}
          type="range"
          step={1}
          min={0}
          max={100}
          value={volume}
          className="h-[3px] w-[70px] bg-white"
        />
      </span>
      <span
        onClick={() => setIsShowRightSidebar((pre) => !pre)}
        className="cursor-pointer hover:opacity-50  bg-select-color p-[5px] rounded-md hover:opacity-90"
      >
        <BsMusicNoteList size={18} />
      </span>
    </div>
  );
}

export default RightPlayer;
