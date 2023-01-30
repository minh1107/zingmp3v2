import React, { useState } from "react";
import Scrollbars from "react-custom-scrollbars-2";
import { useSelector } from "react-redux";
import { Outlet } from "react-router-dom";
import { Header, Player, SidebarLeft, SidebarRight } from "../../components";
import Loading from "../../components/Loading";

function Public() {
  const [isShowRightSidebar, setIsShowRightSidebar] = useState(true);
  const { isLoading } = useSelector((state) => state.app);
  return (
    <div className="w-full h-screen relative flex flex-col bg-main-home text-white">
      <div className="w-full h-full flex flex-auto ">
        <div className=" h-screen  w-[240px] flex-none bg-left-bar">
          <SidebarLeft />
        </div>
        <div className="flex relative flex-col flex-auto  bg-main-home">
          {isLoading && (
            <div className="flex items-center justify-center absolute top-0 bottom-[90px] left-0 right-0 z-50 bg-main-home">
              <Loading />
            </div>
          )}
          <div className=" h-[70px] flex-none px-[59px] flex items-center">
            <Header />
          </div>
          <div className="flex-auto w-full">
            <Scrollbars autoHide style={{ width: "100%", height: "100%" }}>
              <Outlet />
            </Scrollbars>
          </div>
        </div>
        {isShowRightSidebar && (
          <div className="w-[329px] animate-scale-up-hor-left right-0 h-screen  bg-main-home  flex">
            <SidebarRight />
          </div>
        )}
      </div>
      <div className="fixed bottom-0 left-0 right-0 bg-player-bar h-[90px]">
        <Player setIsShowRightSidebar={setIsShowRightSidebar} />
      </div>
    </div>
  );
}

export default Public;
