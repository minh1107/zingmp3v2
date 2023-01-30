import moment from "moment";
import React, { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import SongItem from "./SongItem";

function NewRelease() {
  const { newRelease } = useSelector((state) => state.app);
  const [isActived, setIsActived] = useState('all');
  const [itemRelease, setItemRelease] = useState()
  useEffect(() => {
    if (isActived === 'all' ) {
      setItemRelease(newRelease?.items?.all)
    } else if(isActived ==='vPop') {
      setItemRelease(newRelease?.items.vPop)
    } else if(isActived ==='others') {
      setItemRelease(newRelease?.items.others)
    }
  }, [isActived, newRelease])
  return (
    <div className="mt-12 ">
      <div className="flex justify-between items-center mb-5">
        <p className="text-[20px] font-bold">{newRelease?.title}</p>
        <span className="text-3">Tất cả</span>
      </div>
      <div className="flex items-center mb-4 gap-4">
        <button onClick={() => setIsActived('all')}
          className={`text-[12px] border bg-transparent rounded-full border-[#ffffff2f] px-[24px] py-1 ${isActived === 'all' && 'bg-select-color'}`}
        >
          TẤT CẢ
        </button>
        <button onClick={() => setIsActived('vPop')}
          className={`text-[12px] border bg-transparent rounded-full border-[#ffffff2f] px-[24px] py-1 ${isActived === 'vPop' && 'bg-select-color'}`}
        >
          VIỆT NAM
        </button>
        <button onClick={() => setIsActived('others')}
          className={`text-[12px] border bg-transparent rounded-full border-[#ffffff2f] px-[24px] py-1 ${isActived === 'others' && 'bg-select-color'}`}
        >
          QUỐC TẾ
        </button>
      </div>
      <div className="flex flex-wrap w-full gap-4">
        
        {itemRelease?.map((item, index) => {
            if(index < 15)
            return(
              <SongItem item={item}/>
        )
        })}
      </div>
    </div>
  );
}

export default NewRelease;
