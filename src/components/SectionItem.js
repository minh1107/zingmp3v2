import React, { useRef, useState } from "react";
import icons from "../utils/icons";
import { Navigate, useNavigate } from "react-router-dom";

const { AiOutlineHeart, BiPlay, BsPlayCircle, CiPlay1, BsThreeDots } = icons;
function SectionItem({ item, index }) {
  const [isHover, setIsHover] = useState();
  const navigate = useNavigate();
  const imageRef = useRef();
  const handleMouseEnter = (e) => {
    setIsHover(true);
    imageRef.current.classList?.add("animate-image-zoom");
    imageRef.current.classList?.remove("animate-image-zoom-out");
  };
  const handleMouseDown = (e) => {
    setIsHover(false);
    imageRef.current.classList?.remove("animate-image-zoom");
    imageRef.current.classList?.add("animate-image-zoom-out");
  };
  return (
    <li
      key={index}
      onClick={() => {
        navigate(item?.link?.split(".")[0], { state: { playAlbum: false } });
      }}
      className="flex flex-col gap-2 cursor-pointer flex-1 "
    >
      <div
        onMouseLeave={handleMouseDown}
        onMouseEnter={handleMouseEnter}
        className="relative overflow-hidden rounded-md"
      >
        <img
          ref={imageRef}
          src={item?.thumbnail}
          alt="Avatar"
          className=" w-full h-auto object-contain mb-[3px] rounded-md"
        />
        {isHover && (
          <div className="flex items-center justify-center gap-8  absolute top-0 bottom-0 left-0 right-0 bg-overlay-30">
            <span>
              <AiOutlineHeart size={20} />
            </span>
            <span>
              <BiPlay
                onClick={(e) => {
                    e.stopPropagation()
                  navigate(item?.link?.split(".")[0], {
                    state: { playAlbum: true },
                  });
                }}
                size={45}
                className="border rounded-full pl-1 text-white"
              />
            </span>
            <span>
              <BsThreeDots size={20} />
            </span>
          </div>
        )}
      </div>
      <span className="text-[14px] gap-[3px] flex flex-col">
        <h3 className="mb-[4px]  font-bold">{item?.title}</h3>
        <p className="text-text-color">
          {item?.sortDescription?.length > 47
            ? `${item?.sortDescription?.slice(0, 47)}...`
            : item?.sortDescription}
        </p>
      </span>
    </li>
  );
}

export default SectionItem;
