import React from "react";
import logo from "../assets/logo.svg";
import { sidebarMenu, sideLib, sideNavbarMenu } from "../utils/menu";
import { NavLink } from "react-router-dom";
const notActiveSide =
  " text-[13px] items-center gap-4 flex h-[50px] tablet:h-fit py-2 px-[25px]";
const activeSide =
  "bg-[#3A313C] border-l-2 border-[#9A49C5] text-[#D3C9BC] h-[50px] tablet:h-fit text-[13px] items-center gap-4 flex  py-2 px-[25px]";

function SidebarLeft() {
  return (
    <div className="flex h-full flex-col">
      <div className="w-full h-[70px] tablet:py-[15px] tablet:px-[25px] flex justify-start  items-center">
        <NavLink to="">
          <img src={logo} alt="Logo" className="tablet:w-[120px] w-[50px] ml-2 h-10" />
        </NavLink>
      </div>
      <div className=" tablet:justify-start  flex flex-col h-full">
        <div className="flex flex-col">
          {sidebarMenu.map((item) => (
            <NavLink
              key={item.path}
              to={item.path}
              end={item.end}
              className={({ isActive }) =>
                isActive ? activeSide : notActiveSide
              }
            >
              <span className="">{item.icon}</span>
              <span className="tablet:flex hidden font-bold">{item.text}</span>
            </NavLink>
          ))}
        </div>
        <div className="flex items-center justify-center my-4">
          <div className="border-b border-[#ffffff47] w-[80%] items-center"></div>
        </div>
        <div className="flex flex-col">
          {sideNavbarMenu.map((item) => (
            <NavLink
              key={item.path}
              to={item.path}
              end={item.end}
              className={({ isActive }) =>
                isActive ? activeSide : notActiveSide
              }
            >
              <span>{item.icon}</span>
              <span className="font-bold tablet:flex hidden">{item.text}</span>
            </NavLink>
          ))}
        </div>
        <div className="tablet:flex hidden items-center justify-center mx-[20px] my-[10px] rounded-2xl bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500 ">
          <div className="text-xs flex flex-col justify-center text-center py-[15px] px-[4px]">
            <div className="mb-2.5 px-[4px] font-bold">
              Nghe nhạc không quảng cáo cùng kho nhạc VIP
            </div>
            <button className="py-[6px] w-[150px] m-auto text-black font-bold  bg-yellow-400 rounded-full">
              NÂNG CẤP VIP
            </button>
          </div>
        </div>

        <div className="flex text-xs flex-col">
          <div className="ml-[25px] tablet:flex hidden font-bold mt-[15px] mb-[8px]">
            THƯ VIỆN
          </div>
          <div className="">
            {sideLib.map((item) => (
              <NavLink
                key={item.path}
                to={item.path}
                end={item.end}
                className={({ isActive }) =>
                  isActive ? activeSide : notActiveSide
                }
              >
                <span>{item.icon}</span>
                <span className="font-bold tablet:flex hidden">
                  {item.text}
                </span>
              </NavLink>
            ))}
          </div>
        </div>
      </div>
      <div className="tablet:flex hidden cursor-pointer h-[54px] flex-col mb-[90px]  my-4">
        <div className="border-b border-[#ffffff47] w-full items-center"></div>
        <div className="h-full flex items-center px-[28px]">
          + Tạo playlist mới{" "}
        </div>
      </div>
    </div>
  );
}

export default SidebarLeft;
