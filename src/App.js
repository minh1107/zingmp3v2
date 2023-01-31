import { useEffect, useState } from "react";
import { toast, ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { useSelector, useDispatch } from "react-redux";
import { Home, Login, Personal, Public } from "./container/public";
import { Routes, Route } from "react-router-dom";
import path from "./utils/path";
import * as actions from './store/action'
import Album from "./container/public/Album";
import WeekRank from "./container/public/WeekRank";
import ZingChart from "./container/public/ZingChart";
import Follow from "./container/public/Follow";

function App() {
  const dispath = useDispatch()

  useEffect(() => {
    const data = dispath(actions.getHome())
  }, []);
  return (
    <div className="">
      <Routes>
        <Route path={path.PUBLIC} element={<Public />}>
          <Route path={path.HOME} element={<Home />} />
          <Route path={path.LOGIN} element={<Login />} />
          <Route path={path.MY_MUSIC} element={<Personal />} />
          <Route path={path.ALBUM_TITLE_PID} element={<Album />} />
          <Route path={path.PLAYLIST_TITLE_PID} element={<Album />} />
          <Route path={path.WEEKRANK_TITLE_PID} element={<WeekRank />} />
          <Route path={path.ZINGCHART_TITLE_PID} element={<ZingChart />} />
          <Route path={path.ZINGCHART_TITLE_PID} element={<ZingChart />} />
          <Route path={path.FOLLOW} element={<Follow />} />
          
          <Route path={path.STAR} element={<Home />} />
        </Route>
      </Routes>
    </div>
  );
}

export default App;
