import React from "react";
import Scrollbars from "react-custom-scrollbars-2";
import { useSelector } from "react-redux";
import ListSongs from "../ListSongs";

function FavoriteSong() {
  const { playListData } = useSelector((state) => state.music);
  return (
    <div>
      <Scrollbars
        style={{ width: "auto", height: "1000px" }}
        className="flex-auto overflow-auto scroll-smooth"
      >
        <div>
          <ListSongs totalDuration={playListData?.song.totalDuration} />
        </div>
      </Scrollbars>
    </div>
  );
}

export default FavoriteSong;
