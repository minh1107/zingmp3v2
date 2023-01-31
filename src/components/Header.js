import React from "react";
import icons from "../utils/icons";
import Search from "./Search";

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
          <div className="absolute bottom-0 right-0 left-[57%] top-[55%] translate-x-[-50%] translate-y-[-50%]  ">VIP</div>
        </span>
        <span className="p-2 rounded-full cursor-pointer bg-[#38303B]">
          <AiOutlineSetting size={24} />
        </span>
        <img
          className="w-[38px] rounded-full cursor-pointer"
          src="https://scontent.fhan2-5.fna.fbcdn.net/v/t39.30808-1/316277964_3455229864721898_7607558342622733801_n.jpg?stp=dst-jpg_s320x320&_nc_cat=106&ccb=1-7&_nc_sid=7206a8&_nc_ohc=EaNDGkwvh4EAX-EZTaf&_nc_ht=scontent.fhan2-5.fna&oh=00_AfAF09-6u8cWWlUBgVNSKHj4NFKsZNKEGcJ-ffDr7G1mNA&oe=63DC7DE2"
        />
      </div>
    </div>
  );
}

export default Header;
