import React, { useEffect } from "react";
import { ChartSection, Header, Sections } from "../../components";
import * as apis from "../../api";
import Slider from "../../components/Slider";
import Item from "../../components/SongItem";
import { useSelector } from "react-redux";
import Loading from "../../components/Loading";
import SongItem from "../../components/SongItem";
import NewRelease from "../../components/NewRelease";
import { Link } from "react-router-dom";

function Home() {
  const {
    playlist,
    newRelease,
    top100,
    hXone,
    artistTheme,
    recentPlaylist,
    hLiveRadio,
    newMusicEveryDay,
    newMusic,
    weekChart,
    favoriteArtist,
  } = useSelector((state) => state.app);
  const { isLoading } = useSelector((state) => state.app);
  return (
    <div className="px-[59px] relative">
      <div>
        <Slider />
        <Sections data={playlist} />
        <Sections data={artistTheme} />
        <NewRelease />
        <Sections data={recentPlaylist} />
        <Sections data={hLiveRadio} />
        <Sections data={top100} />
        <ChartSection />
        <div className="flex items-center justify-between w-full mt-12">
          {weekChart?.items?.map((item, index) => (
            <Link
              to={item?.link?.split(".")[0]}
              key={index}
              className=" w-[32%]"
            >
              <img
                src={item.cover}
                alt="cover"
                className="w-full object-cover rounded-md"
              />
            </Link>
          ))}
        </div>
        <div className="flex w-full mt-12 gap-2">
          {favoriteArtist?.items
            ?.filter((i, index) => index <= 7)
            ?.map((item, index) => {
              return (
                <div className="relative ">
                  <img className="rounded-[30%]" src={item?.thumbnail} />
                  <div className="absolute bottom-0 text-center w-full font-bold ">{item?.name}</div>
                </div>
              );
            })}
        </div>
        <Sections data={hXone} />
        <Sections data={newMusicEveryDay} />
        <Sections data={newMusic} />
        <Sections />
      </div>
      <div></div>
    </div>
  );
}

export default Home;
