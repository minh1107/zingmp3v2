import React from "react";
import icons from "../utils/icons";
const {BsSearch} =  icons
function Search() {
  return (
    <div className="flex text-white">
    <span className= "bg-search-bar rounded-l-[20px] pl-4 py-2.5 cursor-pointer  m-auto">
        <BsSearch size={20} />
    </span>
      <input 
        className="flex  outline-none px-4 py-2 bg-search-bar  rounded-r-[20px] h-10"
        type={"text"}
        placeholder={'Tìm kiếm bài hát, nghệ sĩ, lời bài hát,...'}
      />
    </div>
  );
}

export default Search;
