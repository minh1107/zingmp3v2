import axios from "axios";
import React, { useEffect, useState } from "react";
import { CiLight } from "react-icons/ci";
import { getFollowing } from "../../api/follow";
import NewFeed from "../../components/following/NewFeed";
import { followingInfo } from "../../utils/url";

const urlImg =
  "https://zmp3-static.zmdcdn.me/skins/zmp3-v6.1/images/zma-2021/imgs/";
const listArtist = [
  "justatee",
  "trinh-thanh-binh",
  "erik",
  "onlyc",
  "karik",
  "chi-dan",
  "jack",
  "duc-phuc",
];
function Follow() {
  const [isRecent, setIsRecent] = useState(1);
  console.log(urlImg, listArtist[0]);
  useEffect(() => {
    const fetfollowing = async () => {
      const res = await getFollowing();
      console.log(res);
    };
    fetfollowing();
  }, []);

  return (
    <div className="tablet:px-[59px]">
      <div className="mt-[32px] flex items-center justify-center mb-[48px]">
        <div className="w-[80%] border-none tablet:text-[12px] bg-[#2F2532] p-[2px] rounded-full items-center justify-center flex">
          <span
            onClick={() => setIsRecent(1)}
            className={`${
              isRecent === 1 ? "bg-[#6D6367]" : ""
            } cursor-pointer border-none text-center w-[50%] border-l-2 pl-2 rounded-full tablet:px-[10px] px-[10px] py-[5px]`}
          >
            VIỆT NAM
          </span>
          <span
            onClick={() => setIsRecent(2)}
            className={`${
              isRecent === 2 ? "bg-[#6D6367]" : ""
            } cursor-pointer border-none text-center w-[50%] border-r-2 pr-2 rounded-full px-[10px] py-[5px]`}
          >
            US-UK
          </span>
          <span
            onClick={() => setIsRecent(3)}
            className={`${
              isRecent === 3 ? "bg-[#6D6367]" : ""
            } cursor-pointer border-none text-center w-[50%] border-r-2 pr-2 rounded-full px-[10px] py-[5px]`}
          >
            K-POP
          </span>
          <span
            onClick={() => setIsRecent(4)}
            className={`${
              isRecent === 4 ? "bg-[#6D6367]" : ""
            } cursor-pointer border-none text-center w-[50%] border-r-2 pr-2 rounded-full px-[10px] py-[5px]`}
          >
            HOA NGỮ
          </span>
          <span
            onClick={() => setIsRecent(5)}
            className={`${
              isRecent === 5 ? "bg-[#6D6367]" : ""
            } cursor-pointer border-none text-center w-[50%] border-r-2 pr-2 rounded-full px-[10px] py-[5px]`}
          >
            NỖI BẬT
          </span>
        </div>
      </div>
      <div>
        <div
          className={`flex-col`}
        >
          <div className="tablet:flex hidden">
            {listArtist?.map((item, index) => {
              let img = "";
              img = urlImg + item + ".png";
              if (index < 7)
                return (
                  <div className="hover:opacity-70  cursor-pointer" key={index}>
                    <img src={img} className='' />
                  </div>
                );
            })}
          </div>
          <div className="flex tablet:flex-row flex-col mt-20 flex-wrap ">
            {followingInfo.map((item) => (
              <NewFeed
                image={item.image}
                avatar={item.image}
                name={item.name}
              />
            ))}
          </div>
        </div>
        <div>1</div>
        <div>2</div>
        <div>3</div>
        <div>4</div>
        {/* className={`${isRecent === 2 ? "flex" : "hidden"}`}
        className={`${isRecent === 3 ? "flex" : "hidden"}`}
        className={`${isRecent === 4 ? "flex" : "hidden"}`}
        className={`${isRecent === 5 ? "flex" : "hidden"}`} */}
      </div>
    </div>
  );
}

export default Follow;
