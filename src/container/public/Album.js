import moment from "moment";
import React, { useEffect, useState } from "react";
import Scrollbars from "react-custom-scrollbars-2";
import { Audio } from "react-loader-spinner";
import { useDispatch, useSelector } from "react-redux";
import { useParams } from "react-router-dom";
import { apiGetDetailPlaylist } from "../../api";
import { ListSong, ListSongs } from "../../components";
import * as actions from "../../store/action";
import icons from "../../utils/icons";

const {
  FiMusic,
  CiPlay1,
  BsPlayCircle,
  AiOutlineHeart,
  FiMoreHorizontal,
  AiPlay,
  AiOutlinePause,
  BsPauseCircle,
} = icons;
function Album() {
  const { title, pid } = useParams();
  const [playListData, setPlayListData] = useState();
  const [buttonPlay, SetButtonPlay] = useState(false);
  const dispatch = useDispatch();
  const { isPlaying, audio } = useSelector((state) => state.music);
  console.log(audio)
  useEffect(() => {
    if(buttonPlay) {
      dispatch(actions.playMusic(true))
    }else  {
      dispatch(actions.playMusic(false))
    }
    return () => {
      
    }
  }, [buttonPlay])
  const handlePlayAndPause = () => {
    SetButtonPlay(!isPlaying)
    dispatch(actions.playMusic(!isPlaying))
    if (isPlaying) {
      audio.pause();
      dispatch(actions.playMusic(false));
    } else {
      audio.play();
      dispatch(actions.playMusic(true));
    }

  }
  
  useEffect(() => {
    const fetchDetailPlaylist = async () => {
      const res = await apiGetDetailPlaylist(pid);
      if (res.data.err === 0) {
        setPlayListData(res?.data.data);
        console.log(playListData);
        dispatch(actions.setPlaylist(res?.data?.data?.song?.items));
      }
    };
    fetchDetailPlaylist();
  }, []);
  return (
    <div className="flex flex-col bg-main-home gap-8 w-full pt-5">
      <div className="flex gap-8 w-full pt-5 ">
        <div className="flex-none w-[300px]  mb-4">
          <div className="relative">
            <img
              className={`w-full  object-contain  shadow-md ${
                isPlaying
                  ? "animate-rotate-center rounded-full"
                  : "animate-rotate-center-pause"
              }`}
              src={playListData?.thumbnailM}
              alt="thumb"
            />
            <div
              onClick={handlePlayAndPause}
              className=" absolute cursor-pointer top-[50%]  text-[45px]  left-[50%] translate-x-[-50%] translate-y-[-50%]"
            >
              {!buttonPlay ? (
                <BsPlayCircle />
              ) : (
                <div className="border-[2px] rounded-full m-auto flex p-2">
                  <Audio
                    height="30"
                    width="30"
                    color="white"
                    ariaLabel="audio-loading"
                    wrapperStyle={{}}
                    wrapperClass="wrapper-class"
                    visible={true}
                  />
                </div>
              )}
            </div>
          </div>

          <div className="flex flex-col items-center  text-[12px] text-[#ffffff80] ">
            <div className="text-white text-5 mt-3 text-[20px]">
              {playListData?.title}
            </div>
            <div className="m-2 text-center ">
              <span className="m-2">Cập nhật :</span>
              <span>
                {moment
                  .unix(playListData?.contentLastUpdate)
                  .format("DD/MM/YYYY")}
              </span>
            </div>
            <div className="text-center">{playListData?.artistsNames}</div>
            <div>
              {Math.round(playListData?.like / 1000)}
              <span className="ml-[1px]">k người yêu thích</span>
            </div>
            <button
              onClick={handlePlayAndPause}
              className="flex items-center justify-center py-2 px-4 flex-col text-[16px] bg-[#9b4de0] text-white rounded-full my-4"
            >
              {!buttonPlay ? (
                <div className="flex items-center gap-2">
                  <CiPlay1 /> Tiếp tục phát
                </div>
              ) : (
                <div className="flex items-center gap-2">
                  <AiOutlinePause /> Tạm dừng
                </div>
              )}
            </button>
            <div className="flex gap-3">
              <AiOutlineHeart
                size={30}
                className="rounded-full cursor-pointer text-white bg-[#2F2532] p-[6px]"
              />
              <FiMoreHorizontal
                size={30}
                className="rounded-full cursor-pointer text-white bg-[#2F2532] p-[6px]"
              />
            </div>
          </div>
        </div>
        <Scrollbars
          style={{ width: "auto", height: "1000px" }}
          className="flex-auto overflow-auto scroll-smooth"
        >
          <span className="text-sm">
            <span className="text-gray-600">Lời tựa</span>
            <span>
              {"   "}
              {playListData?.sortDescription}
            </span>
          </span>
          <div>
            <ListSongs totalDuration={playListData?.song.totalDuration} />
          </div>
        </Scrollbars>
      </div>
      <div>
        {playListData?.genres.map((item) => {
          return <div>{item.name}</div>;
        })}
      </div>
    </div>
  );
}

export default Album;
