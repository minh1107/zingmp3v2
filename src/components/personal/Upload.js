import React from "react";

function Upload({data, linkImg, textInfo, textButton}) {
  return (
    <div className="flex flex-col items-center justify-center gap-4 text-text-color">
      <img
        className="w-[120px]"
        // src="https://zmp3-static.zmdcdn.me/skins/zmp3-v6.1/images/icons/empty-album-dark.png"
        src={linkImg}
      />
      <div>{textInfo}</div>
      {data && <button className="px-[24px] rounded-full text-white py-[9px] bg-select-color">{textButton}</button>}
    </div>
  );
}

export default Upload;
