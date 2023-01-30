import moment from "moment";
import React, { memo, useRef, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import * as actions from "../store/action";
import icons from "../utils/icons";

const { BiPlay } = icons;
function SongItem({ item }) {
  const dispatch = useDispatch();
  const [buttonPlay, setButtonPlay] = useState(false);
  const RefImg = useRef();
  const handelMouseLeave = () => {
    setButtonPlay(false);
  };
  const handelMouseEnter = () => {
    setButtonPlay(true);
  };

  return (
    <div
      useRef={RefImg}
      onMouseEnter={handelMouseEnter}
      onMouseLeave={handelMouseLeave}
      className="flex focus:bg-slate-50 hover:bg-hover-color rounded-md p-[10px] min-[1024px]:w-[30%] w-[45%] gap-[10px]"
    >
      <div className="relative">
        <img
          onClick={() => {
            dispatch(actions.setCurrentSongId(item.encodeId));
            dispatch(actions.playMusic(true));
          }}
          src={item?.thumbnail}
          className="cursor-pointer rounded-md h-[60px] w-[60px]"
        />
        {buttonPlay && (
          <span className="absolute cursor-pointer top-0 bottom-0 left-0 right-0 flex items-center justify-center">
            <BiPlay size={25} />
          </span>
        )}
      </div>
      <div>
        <div className="text-[14px] font-medium">
          {item?.title.length > 40
            ? `${item?.title.slice(0, 40)}...`
            : item?.title}
        </div>
        <div className="text-[12px] hover:text-select-color  text-text-color cursor-pointer">
          {item?.artistsNames.length > 40
            ? `${item?.artistsNames}...`
            : item?.artistsNames}
        </div>
        <div className="text-[12px] text-text-color">
          {moment(item?.releaseDate * 1000).fromNow()}
        </div>
      </div>
    </div>
  );
}

export default memo(SongItem);
