import React from "react";
import icons from "../utils/icons";
import Search from "./Search";

const { AiOutlineArrowLeft, AiOutlineArrowRight } = icons;
function Header() {
  return (
    <div className="flex justify-between bg-main-home w-full ">
      <div className="flex gap-6 w-full flex-1">
        <div className="flex text-gray-400 gap-6 items-center">
          <span>
            <AiOutlineArrowLeft size={24} />
          </span>
          <span>
            <AiOutlineArrowRight size={24} />
          </span>
        </div>
        <div className="flex items-center ">
            <Search />
        </div>
      </div>
      <div className="text-white">dang nhap</div>
    </div>
  );
}

export default Header;
