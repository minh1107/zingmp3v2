import { useEffect, useState } from "react";
import { toast, ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { useSelector, useDispatch } from "react-redux";
import { Home, Login, Personal, Public } from "./container/public";
import { Routes, Route } from "react-router-dom";
import path from "./utils/path";
import * as actions from './store/action'
import Album from "./container/public/Album";

function App() {
  const dispath = useDispatch()

  useEffect(() => {
    const data = dispath(actions.getHome())
  }, []);
  return (
    <div>
      <Routes>
        <Route path={path.PUBLIC} element={<Public />}>
          <Route path={path.HOME} element={<Home />} />
          <Route path={path.LOGIN} element={<Login />} />
          <Route path={path.MY_MUSIC} element={<Personal />} />
          <Route path={path.ALBUM_TITLE_PID} element={<Album />} />
          <Route path={path.PLAYLIST_TITLE_PID} element={<Album />} />
          
          <Route path={path.STAR} element={<Home />} />
        </Route>
      </Routes>
    </div>
  );
}

export default App;
