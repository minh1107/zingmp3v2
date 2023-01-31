import moment from "moment";
import React, { useState } from "react";

function TopChartList({ data }) {
  const [showMore, setShowMore] = useState(10);
  const handleShowMore = () => {
    if (showMore === 10) {
      setShowMore(100);
    } else setShowMore(10);
  };
  return (
    <div className="mt-[12px] flex flex-col  px-0 tablet:px-[59px]">
      {data?.map((item, index) => {
        if (index < showMore)
          return (
            <div className="text-[12px] text-[#ffffff95] flex w-full border-b-[#ffffff25] hover:border-none border-b h-[60px] hover:bg-[#2F2532] hover:rounded-md p-[10px]  items-center">
              <div className="flex-6 flex tablet:gap-4 gap-2 items-center">
                <div className="tablet:mx-3 text-[32px]">{index + 1}</div>
                <div className="border-b-2 border-b-[#ffffff75] w-[12px] "></div>
                <div className="flex gap-2 items-center">
                  <img
                    src={item.thumbnail}
                    className="rounded-md h-[40px] w-[40px]"
                  />
                  <div className="flex flex-col">
                    <span className="text-white text-[14px]">
                      {item?.title}
                    </span>
                    <span>{item?.artistsNames}</span>
                  </div>
                </div>
              </div>
              <div className="flex-3 hidden tablet:flex">{item?.album?.title}</div>
              <div className="flex-1 hidden tablet:flex">
                {moment.unix(item?.duration).format("mm:ss")}
              </div>
            </div>
          );
      })}
      <div className="w-full flex items-center justify-center">
        <button
          onClick={handleShowMore}
          className="border rounded-full px-[25px] py-[5px]  hover:bg-[#803685] mt-[20px] "
        >
          {showMore === 10 ? 'Xem thêm' : 'Ẩn đi'}
        </button>
      </div>
    </div>
  );
}

export default TopChartList;
