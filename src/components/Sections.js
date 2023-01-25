import React, { memo } from "react";
import { useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";

function Sections() {
  const { playlist } = useSelector((state) => state.app);
  const navigate = useNavigate();
  console.log(playlist)
  return (
    <div className="mt-12 gap-5 flex flex-col">
      <div className="flex justify-between items-center">
        <p className="text-[20px] font-bold">{playlist?.title}</p>
        <span className="text-3">Tất cả</span>
      </div>
      <div>
        <ul className="flex justify-between items-center gap-[28px]">
          {playlist?.items?.map((item, index) => {
            console.log(item)
            if (index < 5)
              return (
                <li
                  key={index}
                  onClick={() => {
                    navigate(item?.link?.split(".")[0]);
                  }}
                  className="flex flex-col gap-2 cursor-pointer flex-1 w-1/5"
                >
                  <img
                    src={item?.thumbnail}
                    alt="Avatar"
                    className="w-full h-auto object-contain mb-[3px] rounded-md"
                  />
                  <span className="text-[14px] gap-[3px] flex flex-col">
                    <h3 className="mb-[4px]  font-bold">{item?.title}</h3>
                    <p className="text-text-color">
                      {" "}
                      {item?.sortDescription.length > 47
                        ? `${item?.sortDescription?.slice(0, 47)}...`
                        : item?.sortDescription}
                    </p>
                  </span>
                </li>
              );
          })}
        </ul>
      </div>
    </div>
  );
}

export default memo(Sections);
