import React, { useEffect, useState } from "react";
import Scrollbars from "react-custom-scrollbars-2";
import { useSelector } from "react-redux";
import SongItem from "./SongItem";
import * as apis from "../api";
import { apiGetDetailPlaylist } from "../api";

function PlayListRightBar({ songs, isRecent }) {
  const [songInfo, setSongInfo] = useState();
  const [playListData, setPlayListData] = useState();

  const { currentSongId } = useSelector((state) => state.music);
  const [bgRightBar, setBgRightBar] = useState(true);
  useEffect(() => {
    const fetchDetailPlaylist = async () => {
      const res = await apiGetDetailPlaylist(currentSongId);
      if (res.data.err === 0) {
        setPlayListData(res?.data.data);
      }
    };
    fetchDetailPlaylist();
  }, [currentSongId]);
  const fetchDetailSong = async () => {
    const music = await apis?.apiGetDetailSong(currentSongId);
    if (music) setSongInfo(music?.data.data);
  };
  useEffect(() => {
    fetchDetailSong();
  }, [currentSongId]);
  return (
    <Scrollbars
      style={{ width: "329px", height: "90vh" }}
      className="flex flex-col"
    >
      <div className={`${!isRecent ?  'hidden' : ''}   my-2`}>
        <SongItem bgRightBar={bgRightBar} item={songInfo} rightBar={true} />
        <div className="gap-2 flex mt-2 pl-[10px]">
         <span> Từ playlist:</span> <span className="text-select-color">{playListData?.title}</span>
        </div>
        <div className="pl-[10px] font-bold text-[14px]">Tiếp theo</div>
      </div>
      {songs?.map((item) => {
        return <SongItem item={item} rightBar={true} />;
      })}
    </Scrollbars>
  );
}

export default PlayListRightBar;
