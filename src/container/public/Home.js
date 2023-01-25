import React, { useEffect } from "react";
import { Header, Sections } from "../../components";
import * as apis from "../../api";
import Slider from "../../components/Slider";

function Home() {

  return (
    <div className="">
      <div>
        <Slider />
        <Sections />
      </div>
      <div>

      </div>
    </div>
  );
}

export default Home;
