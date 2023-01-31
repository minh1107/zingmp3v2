import React, { useEffect, useState } from "react";
import Scrollbars from "react-custom-scrollbars-2";
import { useSelector } from "react-redux";
import buttonImg from "../../assets/img/buttonImg.png";
import { ListSongs } from "../../components";
import { FavoriteSong, Upload } from "../../components/personal";
import SongItem from "../../components/SongItem";

function Personal() {
  const [sectionShow, setSectionShow] = useState(1);
  const [buttonShow, setButtonShow] = useState(1);
  const { currentSongData, playListData, currentSongId, songs } = useSelector(
    (state) => state.music
  );
  console.log(songs);
  return (
    <div className="w-full flex flex-col px-[59px]">
      <div className="py-[70px] text-[40px] flex gap-3 font-bold">
        Thư viện <img className="rounded-full h-[60px]" src={buttonImg} />{" "}
      </div>
      <div className="flex text-[14px] gap-4  border-b-2 border-gray-600">
        <div
          onClick={() => setSectionShow(1)}
          className="cursor-pointer border-red w-[52px] pb-[15px] relative"
        >
          BÀI HÁT
          <div
            className={`absolute bottom-[-2px] right-0 left-0 w-full h-[2px] bg-select-color ${`${
              sectionShow === 1 ? "flex" : "hidden"
            }`}`}
          >
            {" "}
          </div>
        </div>
        <div
          onClick={() => setSectionShow(2)}
          className="cursor-pointer border-red w-[64px] pb-[15px] relative"
        >
          PODCAST
          <div
            className={`absolute bottom-[-2px] right-0 left-0 w-full h-[2px] bg-select-color ${`${
              sectionShow === 2 ? "flex" : "hidden"
            }`}`}
          >
            {" "}
          </div>
        </div>
        <div
          onClick={() => setSectionShow(3)}
          className="cursor-pointer border-red w-[48px] pb-[15px] relative"
        >
          ALBUM
          <div
            className={`absolute bottom-[-2px] right-0 left-0 w-full h-[2px] bg-select-color ${`${
              sectionShow === 3 ? "flex" : "hidden"
            }`}`}
          >
            {" "}
          </div>
        </div>
        <div
          onClick={() => setSectionShow(4)}
          className="cursor-pointer border-red w-[22px] pb-[15px] relative"
        >
          MV
          <div
            className={`absolute bottom-[-2px] right-0 left-0 w-full h-[2px] bg-select-color ${`${
              sectionShow === 4 ? "flex" : "hidden"
            }`}`}
          >
            {" "}
          </div>
        </div>
      </div>
      <div className="mt-[28px]">
        <div>
          <div
            className={`${
              sectionShow === 1 ? "flex" : "hidden"
            } gap-4 items-center`}
          >
            <div
              onClick={() => setButtonShow(1)}
              className={`${
                buttonShow === 1
                  ? " bg-select-color border-none hover:text-white"
                  : ""
              } hover:border-select-color  hover:text-select-color cursor-pointer border px-2.5 py-[2px] text-[12px] rounded-full`}
            >
              YÊU THÍCH
            </div>
            <div
              onClick={() => setButtonShow(2)}
              className={`${
                buttonShow === 2
                  ? " bg-select-color border-none hover:text-white"
                  : ""
              } hover:border-select-color cursor-pointer hover:text-select-color border px-2.5 py-[2px] text-[12px] rounded-full`}
            >
              ĐÃ TẢI LÊN
            </div>
          </div>
          <div>
            <div
              className={`${
                buttonShow === 1 && sectionShow === 1 ? "block" : "hidden"
              }`}
            >
              <FavoriteSong />
            </div>
            <div
              className={`${
                buttonShow === 2 && sectionShow === 1 ? "block" : "hidden"
              } `}
            >
              <Upload data={true} textButton='Tải lên ngay' linkImg="https://zmp3-static.zmdcdn.me/skins/zmp3-v6.1/images/icons/empty-album-dark.png" textInfo='Chưa có bài hát tải lên trong thư viện cá nhân'/>
            </div>
          </div>
        </div>
        <div>
          <div
            className={`${
              sectionShow === 2 ? "flex" : "hidden"
            } gap-4 items-center`}
          >
            <div
              onClick={() => setButtonShow(1)}
              className={`${
                buttonShow === 1
                  ? " bg-select-color border-none hover:text-white"
                  : ""
              } hover:border-select-color  hover:text-select-color cursor-pointer border px-2.5 py-[2px] text-[12px] rounded-full`}
            >
              YÊU THÍCH
            </div>
            <div
              onClick={() => setButtonShow(2)}
              className={`${
                buttonShow === 2
                  ? " bg-select-color border-none hover:text-white"
                  : ""
              } hover:border-select-color cursor-pointer hover:text-select-color border px-2.5 py-[2px] text-[12px] rounded-full`}
            >
              ĐÃ TẢI LÊN
            </div>
            <div
              onClick={() => setButtonShow(3)}
              className={`${
                buttonShow === 3
                  ? " bg-select-color border-none hover:text-white"
                  : ""
              } hover:border-select-color cursor-pointer hover:text-select-color border px-2.5 py-[2px] text-[12px] rounded-full`}
            >
              CHƯƠNG TRÌNH
            </div>
          </div>
          <div>
            <div
              className={`${
                buttonShow === 1 && sectionShow === 2 ? "block" : "hidden"
              }`}
            >
              <Upload data={false} textInfo='Không có tập mới' linkImg='https://zmp3-static.zmdcdn.me/skins/zmp3-v6.1/images/icons/episode-empty-1.png'/>
            </div>
            <div
              className={`${
                buttonShow === 2 && sectionShow === 2 ? "block" : "hidden"
              }`}
            >
              <Upload data={false} textInfo='Không có tập mới' linkImg='https://zmp3-static.zmdcdn.me/skins/zmp3-v6.1/images/icons/episode-empty-1.png'/>
            </div>
            <div
              className={`${
                buttonShow === 3 && sectionShow === 2 ? "block" : "hidden"
              }`}
            >
              <Upload data={true} textButton='Khám phá ngay' textInfo='Không có podcast trong thư viện cá nhân' linkImg='https://zmp3-static.zmdcdn.me/skins/zmp3-v6.1/images/icons/record-dark.svg'/>
            </div>
          </div>
        </div>
        <div className={`${sectionShow === 3 ? "block" : "hidden"} items-center` }>
          <Upload data={false} textInfo='Chưa có album trong thư viện cá nhân' linkImg='https://zmp3-static.zmdcdn.me/skins/zmp3-v6.1/images/icons/empty-album-dark.png'/>
        </div>
        <div className={`${sectionShow === 4 ? "block" : "hidden"} items-center`}>
          <Upload data={false} textInfo='Chưa có MV nào trong thư viện cá nhân' linkImg='https://zmp3-static.zmdcdn.me/skins/zmp3-v6.1/images/icons/empty-mv-dark.png'/>
        </div>
      </div>
    </div>
  );
}

export default Personal;
