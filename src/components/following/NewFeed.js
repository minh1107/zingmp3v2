import React from "react";
import icons from "../../utils/icons";

const { FcLike, FaRegComment } = icons;
function NewFeed({ avatar, name, caption, image, likeCount, commentCount }) {
  return (
    <div className="bg-[#2F2532] p-[20px] rounded-xl m-[10px] tablet:w-[30%] ">
        <div className="flex items-center mb-[10px] gap-2">
          <div>
            <img src={avatar} className="h-[40px] w-[40px] rounded-full" />
          </div>
          <div>
            <div>{name}</div>
            <div>16 tháng 11 lúc 14:14</div>
          </div>
          <div className="w-2 h-2 rounded-full bg-white"></div>
          <div>Quan tâm</div>
        </div>
        <div className="flex-auto">
          <div className="mb-2">
            {caption}Vẻ đẹp không nằm trên gò má của người thiếu nữ Mà nó nằm
            trong ánh mắt của kẻ si tình ♥️
          </div>
          <img className="rounded-xl" src={image} />
        </div>
        <div className="flex mt-[20px] items-center gap-2">
          <div className="mr-[30px] gap-2 items-center flex ">
            <span>
              <FcLike />
            </span>
            <span>{likeCount} 482</span>
          </div>
          <div className="flex items-center gap-2">
            <span>
              <FaRegComment />
            </span>
            <span>{commentCount} 1</span>
          </div>
        </div>
    </div>
  );
}

export default NewFeed;
