import React from "react";
import { Outlet } from "react-router-dom";
import { Header, Player, SidebarLeft, SidebarRight } from "../../components";

function Public() {
  return (
    <div className="w-full h-screen relative flex flex-col  text-white">
      <div className="w-full h-full flex flex-auto ">
        <div className=" h-screen  w-[240px] flex-none bg-left-bar">
          <SidebarLeft />
        </div>
        <div className="flex-auto px-[59px]  bg-main-home">
          <div className="h-[70px] flex items-center">
            <Header />
          </div>
          <Outlet />
          <div className="w-full h-[500px]"></div>
        </div>
        <div className="w-[329px]  right-0 h-screen flex-none  bg-main-home hidden tablet:flex">
          <SidebarRight />
        </div>
      </div>
      <div className="fixed bottom-0 left-0 right-0 bg-player-bar h-[90px]">
        <Player />
      </div>
    </div>
  );
}

export default Public;
