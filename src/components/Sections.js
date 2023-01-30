import React, { memo, useState } from "react";
import { useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import SectionItem from "./SectionItem";

function Sections({ data, amount }) {
  return (
    <div className="mt-12 gap-5 flex flex-col">
      <div className="flex justify-between items-center">
        <p className="text-[20px] font-bold">{data?.title}</p>
        <span className="text-3">Tất cả</span>
      </div>
      <div>
        <ul className="flex justify-center  items-start gap-[28px]">
          {data?.items?.map((item, index) => {
            if (index < 5)
              return (
                <SectionItem item={item} index={item}/>
              );
          })}
        </ul>
      </div>
    </div>
  );
}

export default memo(Sections);
