import moment from "moment";
import React, { memo, useRef, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import * as actions from "../store/action";
import icons from "../utils/icons";

const { BiPlay } = icons;
function SongItem({ item, rightBar, bgRightBar, index }) {
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
      key={index}
      useRef={RefImg}
      onMouseEnter={handelMouseEnter}
      onMouseLeave={handelMouseLeave}
      className={`${!rightBar ? 'min-[1024px]:w-[30%] w-[45%]' : ''} flex flex-col tablet:flex-row ${bgRightBar ? 'bg-select-color' : ''} focus:bg-slate-50 hover:bg-hover-color rounded-md p-[10px]  gap-[10px]`}
    >
      <div className="relative">
        <img
          src={item?.thumbnail}
          className={`${!rightBar ? 'h-[60px] w-[60px]' : 'h-[40px] w-[40px]'} cursor-pointer rounded-md`}
        />
        {buttonPlay && (
          <span           onClick={() => {
            dispatch(actions.setCurrentSongId(item.encodeId));
            dispatch(actions.playMusic(true));
          }} className="absolute cursor-pointer top-0 bottom-0 left-0 right-0 flex items-center justify-center">
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
     {!rightBar &&   <div className="text-[12px] text-text-color">
          {moment(item?.releaseDate * 1000).fromNow()}
        </div>}
      </div>
    </div>
  );
}

export default memo(SongItem);
