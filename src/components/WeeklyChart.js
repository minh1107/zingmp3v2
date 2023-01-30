import moment from "moment";
import React, { useEffect, useState } from "react";
import ImgChart from "../assets/img/week-chart-bg.jpg";
import buttonImg from "../assets/img/buttonImg.png";

function WeeklyChart({ data }) {
  const [topArea, setTopArea] = useState([]);
  const [showMore, setShowMore] = useState(true);
  const [selectButtonShow,setSelectButtonShow ] = useState()
  const handleShowMore = (index) => {
    if (showMore) {
        setSelectButtonShow(index)
        setShowMore(pre => !pre)
    } else {
        setSelectButtonShow(1000)
        setShowMore(pre => !pre)
    }
  };
  useEffect(() => {
    if (data) {
      for (const item in data) {
        if (Object.hasOwnProperty.call(data, item)) {
          const element = data[item];
          setTopArea((pre) => [...pre, element]);
        }
      }
    }
  }, [data]);
  console.log(topArea[1]);
  return (
    <div className="flex w-full h-[580px] mt-[30px] relative items-center ">
      <img
        src={ImgChart}
        alt=""
        className="w-full absolute top-0 bottom-0 right-0 left-0" 
      />
      <div className="bg-[#21142E] opacity-90  absolute top-0 bottom-0 right-0 left-0"></div>
      <div className="absolute top-0 px-[59px]  pt-[30px] pb-[20px]  bottom-[-90px] right-0 left-0">
        <div className="text-[40px] mb-2 font-bold">Bảng Xếp Hạng Tuần</div>
        <div className="flex items-center justify-between">
          {topArea?.map((item, index) => {
            if (index < 3)
              return (
                <div className="flex  py-[20px] w-[30%] px-[10px] flex-col bg-[#30233a92] rounded-xl ">
                  <div className="flex text-[24px] gap-2 ml-[40px] mb-[10px]">
                    {item.country}
                    <img src={buttonImg} className=" rounded-full" />
                  </div>
                  <div className="flex flex-col">
                    {item?.items.map((sonItem, index) => {
                      if (index < 5)
                        return (
                          <div className="text-[12px] text-[#ffffff95] flex w-full border-b-[#ffffff25] hover:border-none border-b h-[60px] hover:bg-[#2F2532] hover:rounded-md p-[10px]  items-center">
                            <div className="flex-6 flex gap-2 items-center">
                              <div className=" text-[32px]">{index + 1}</div>
                              <div className="border-b-2 border-b-[#ffffff75] w-[12px] "></div>
                              <div className="flex gap-2 items-center">
                                <img
                                  src={sonItem?.thumbnail}
                                  className="rounded-md h-[40px] w-[40px] cursor-pointer"
                                />
                                <div className="flex flex-col">
                                  <span className="text-white text-[14px]">
                                    {sonItem?.title}
                                  </span>
                                  <span className="hover:text-select-color cursor-pointer">{sonItem?.artistsNames}</span>
                                </div>
                              </div>
                            </div>
                            <div className="flex-1">
                              {moment.unix(sonItem?.duration).format("mm:ss")}
                            </div>
                          </div>
                        );
                    })}
                    <div className="w-full flex items-center justify-center">
                      <button
                        onClick={() => handleShowMore(index)}
                        className="border rounded-full px-[25px] py-[5px]  hover:bg-[#803685] mt-[20px] "
                      >
                        {index === selectButtonShow ? "Xem thêm" : "Ẩn đi"}
                      </button>
                    </div>
                  </div>
                </div>
              );
          })}
        </div>
      </div>
    </div>
  );
}

export default WeeklyChart;
