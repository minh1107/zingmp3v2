import React from "react";
import icons from "../utils/icons";
import Search from "./Search";
import Avartar from '../assets/img/logo.webp'

const {
  AiOutlineArrowLeft,
  AiOutlineArrowRight,
  RiVipDiamondLine,
  AiOutlineSetting,
  GiClothes,
} = icons;
function Header() {
  return (
    <div className="flex justify-between opacity-80 bg-main-home w-full ">
      <div className="flex gap-6 w-3/4">
        <div className="hidden tablet:flex text-gray-400 gap-6 items-center">
          <span>
            <AiOutlineArrowLeft size={24} />
          </span>
          <span>
            <AiOutlineArrowRight size={24} />
          </span>
        </div>
        <Search />
      </div>
      <div className="tablet:flex hidden gap-3 text-white">
        <span className="p-2 rounded-full cursor-pointer bg-[#38303B]">
          <GiClothes size={24} />
        </span>
        <span className="p-2 relative rounded-full cursor-pointer bg-[#38303B]">
          <RiVipDiamondLine size={24} />
          <div className="absolute bottom-0 right-0 left-[57%] top-[55%] translate-x-[-50%] translate-y-[-50%] text-[8px]">VIP</div>
        </span>
        <span className="p-2 rounded-full cursor-pointer bg-[#38303B]">
          <AiOutlineSetting size={24} />
        </span>
        <img
          className="w-[38px] rounded-full cursor-pointer"
          src={Avartar}
        />
      </div>
    </div>
  );
}

export default Header;
