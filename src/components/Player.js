import React, { useEffect, useRef, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import * as apis from "../api";
import icons from "../utils/icons";
import * as action from "../store/action";
import moment from "moment";
import { toast, ToastContainer } from "react-toastify";

const {
  AiOutlineHeart,
  FiMoreHorizontal,
  MdSkipNext,
  FaRandom,
  MdSkipPrevious,
  IoIosRepeat,
  BsPlay,
  BsPause,
} = icons;
var intervalId;
function Player() {
  const [audio, setAudio] = useState(new Audio());
  const { currentSongId, isPlaying, durationSong, songs, atAlbum } =
    useSelector((state) => state.music);
  const dispatch = useDispatch();
  const [songInfo, setSongInfo] = useState();
  const trackRef = useRef();
  const [isShuffle, setIsShuffle] = useState(false);
  const [isRepeat, setIsRepeat] = useState(false)
  const [loading, setLoading] = useState(false)
  useEffect(() => {
    const fetchDetailSong = async () => {
      const music = await apis?.apiGetDetailSong(currentSongId);
      if (music) setSongInfo(music?.data.data);
    };

    const fetchSong = async () => {
      const songPlay = await apis?.apiGetSong(currentSongId);
      if (songPlay.data.err === 0) {
        audio.pause();
        setAudio(new Audio(songPlay?.data.data["128"]));
        dispatch(action.setCurrentAudio(new Audio(songPlay?.data.data["128"])))
        fetchDetailSong();
      } else if (songPlay.data.err === -1110) {
        toast.warn("Không phát được bài vip!!");
      }
    };
    fetchSong();
  }, [currentSongId]);

  const [runTimeSong, setRunTimeSong] = useState("00:00");
  const thumbRef = useRef();
  useEffect(() => {
    if (isPlaying) {
      intervalId = setInterval(() => {
        let percent =
          Math.round((audio.currentTime * 10000) / songInfo.duration) / 100;
        setRunTimeSong(moment.utc(audio.currentTime * 1000).format("mm:ss"));
        thumbRef.current.style.cssText = `right: ${100 - percent}%`;
      }, 1000);
    } else {
      setRunTimeSong("00:00");
      intervalId && clearInterval(intervalId);
    }
  }, [isPlaying]);

  useEffect(() => {
    audio.load();
    if (isPlaying) {
      audio.play();
    }
  }, [audio]);

  useEffect(() => {
    const handleEnded = () => {
      if(isShuffle) {
        handelShuffle()
      }
      else if(isRepeat) {
        handleNextSong()
      } 
      else {
        audio.pause()
        dispatch(action.playMusic(false))
      }
    }
    audio.addEventListener('ended', handleEnded)
    
    return () => {
      audio.removeEventListener('ended', handleEnded)
    }
  }, [audio])
  

  const handlePlayAndPause = () => {
    if (isPlaying) {
      audio.pause();
      dispatch(action.playMusic(false));
    } else {
      audio.play();
      dispatch(action.playMusic(true));
    }
  };

  const handleClickProgressBar = (e) => {
    const trackRect = trackRef.current.getBoundingClientRect();
    const percent =
      Math.round(((e.clientX - trackRect.left) * 10000) / trackRect.width) /
      100;
    thumbRef.current.style = `right: ${100 - percent}%`;
    audio.currentTime = (percent * songInfo.duration) / 100;
    setRunTimeSong(
      moment
        .utc(Math.round((percent * songInfo.duration) / 100))
        .format("mm:ss")
    );
  };
  const handleNextSong = () => {
    if (songs) {
      let currentSongIndex;
      songs?.forEach((item, index) => {
        if (item.encodeId === currentSongId) currentSongIndex = index;
      });
      dispatch(action.setCurrentSongId(songs[currentSongIndex + 1].encodeId));
    }
  };
  const handlePreviousSong = () => {
    if (songs) {
      let currentSongIndex;
      songs?.forEach((item, index) => {
        if (item.encodeId === currentSongId) currentSongIndex = index;
      });
      dispatch(action.setCurrentSongId(songs[currentSongIndex - 1].encodeId));
      dispatch(action.playMusic(true));
    }
  };
  const handelShuffle = () => {
    const randomSongIndex = Math.round(Math.random() * songs?.length) - 1;
    console.log(randomSongIndex, songs.length);
    dispatch(action.setCurrentSongId(songs[randomSongIndex].encodeId));
    dispatch(action.playMusic(true));
    setIsShuffle((pre) => !pre);
  };

  return (
    <div className=" flex bg-player-bar px-5  h-full">
      <div className="w-[30%] flex-auto flex-1 gap-4 flex items-center">
        <img
          src={songInfo?.thumbnail}
          title="thumbnail"
          className="w-16 h-16 rounded-md"
        />
        <div className="flex font-semibold flex-col">
          <span className="text-white text-[14px]">{songInfo?.title}</span>
          <span className="text-sm text-gray-500">
            {songInfo?.artistsNames}
          </span>
        </div>
        <div className="flex gap-3">
          <AiOutlineHeart size={18} />
          <FiMoreHorizontal size={18} />
        </div>
      </div>
      <div className="w-[40%] items-center gap-2 flex flex-col flex-auto">
        <div className="gap-8 flex h-[50px] items-center justify-center  ">
          <span
            className={`${isShuffle && "text-purple-600"} cursor-pointer`}
            title="Bật phát ngẫu nhiên"
            onClick={() => setIsShuffle(pre => !pre)}
          >
            <FaRandom size={18} />
          </span>
          <span
            onClick={handlePreviousSong}
            className={`${songs ? "cursor-pointer" : "text-gray-500"}`}
          >
            <MdSkipPrevious size={26} />
          </span>
          <span
            onClick={handlePlayAndPause}
            className=" cursor-pointer border p-1 rounded-[50%] hover:text-select-color hover:border-select-color "
          >
            {isPlaying ? (
              <BsPause size={30} />
            ) : (
              <BsPlay className="ml-1" size={30} />
            )}
          </span>
          <span
            onClick={handleNextSong}
            className={`${songs ? "cursor-pointer" : "text-gray-500"} `}
          >
            <MdSkipNext size={26} />
          </span>
          <span onClick={() => setIsRepeat(pre => !pre)}  className={`cursor-pointer ${isRepeat && 'text-select-color'}`} title="Bật pháp lại tất cả">
            <IoIosRepeat size={26} />
          </span>
        </div>
        <div className="w-full flex justify-center text-[12px]">
          <div>{runTimeSong}</div>
          <div
            onClick={handleClickProgressBar}
            ref={trackRef}
            className=" cursor-pointer w-3/4 rounded-l-full rounded-r-full relative hover:h-[6px] mt-auto mb-auto ml-3 mr-3 h-[3px] bg-[#5A5154]"
          >
            <div
              ref={thumbRef}
              className="absolute bottom-0 rounded-l-full top-0 left-0  rounded-r-full  bg-[#FEF3E0]"
            ></div>
          </div>
          <div>{moment.unix(songInfo?.duration).format("mm:ss")}</div>
        </div>
      </div>
      <div className="w-[30%]  flex-auto ">volume</div>
      <ToastContainer
        position="top-right"
        autoClose={5000}
        hideProgressBar={false}
        closeOnClick={true}
        pauseOnHover={true}
        draggable={true}
        progress={undefined}
        theme="dark"
      />
    </div>
  );
}

export default Player;
