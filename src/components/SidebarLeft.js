import React from "react";
import logo from "../assets/logo.svg";
import { sidebarMenu } from "../utils/menu";
import { NavLink } from "react-router-dom";
const notActiveSide  = ' text-[13px] items-center gap-4 flex  py-2 px-[25px]'
const activeSide = 'bg-[#3A313C] border-l-2 border-[#9A49C5] text-[#D3C9BC] text-[13px] items-center gap-4 flex  py-2 px-[25px]'

function SidebarLeft() {
  return (
    <div className="flex flex-col">
      <div className="w-full h-[70px] py-[15px]   px-[25px] flex justify-start items-center">
        <NavLink to=''>
        <img src={logo} alt="Logo" className="w-[120px] h-10"/>
        </NavLink>
      </div>
      <div className="flex flex-col">
        {sidebarMenu.map((item) => (
          <NavLink key={item.path} to={item.path} end= {item.end} className={( {isActive} ) => isActive ? activeSide : notActiveSide}>
            <span className="">{item.icon}</span>
            <span  className="font-bold">{item.text}</span>
          </NavLink>
        ))}
      </div>
    </div>
  );
}

export default SidebarLeft;
