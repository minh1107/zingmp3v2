import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import * as action from '../store/action'

const removeClassAnimate = (sliderEls, i) => {
  sliderEls[i]?.classList.remove(
    "animate-slide-right",
    "order-last",
    "z-20",
    "animate-slide-left-1",
    "order-first",
    "z-10"
  );
  sliderEls[i]?.classList.remove("animate-slide-left-2", "order-2", "z-30");
};
const addClassAnimate = (sliderEls, max, min, i) => {
  sliderEls[max]?.classList.add("animate-slide-right", "order-last", "z-30");
  sliderEls[min]?.classList.add("animate-slide-left-1", "order-first", "z-20");
  sliderEls[max - i]?.classList.add("animate-slide-left-2", "order-2", "z-10");
};
function Slider() {

  const banner = useSelector((state) => state.app);
  const dispatch = useDispatch()
  const navigate = useNavigate('')

  useEffect(() => {
    const sliderEls = document.getElementsByClassName("slider-item");
    let min = 0;
    let max = 2;
    const interValId = setInterval(() => {
      if (min === 4 && max === 0) {
        for (let i = 0; i < 5; i++) {
          removeClassAnimate(sliderEls, i);
        }
        sliderEls[4].style.cssText = "display: block";
        sliderEls[5].style.cssText = "display: block";
        sliderEls[0].style.cssText = "display: block";
        sliderEls[1].style.cssText = "display: none";
        sliderEls[2].style.cssText = "display: none";
        sliderEls[3].style.cssText = "display: none";
        addClassAnimate(sliderEls, max, min, -5);
      } else if (max === 1 && min === 5) {
        for (let i = 0; i < 5; i++) {
          removeClassAnimate(sliderEls, i);
        }
        sliderEls[5].style.cssText = "display: block";
        sliderEls[0].style.cssText = "display: block";
        sliderEls[1].style.cssText = "display: block";
        sliderEls[2].style.cssText = "display: none";
        sliderEls[3].style.cssText = "display: none";
        sliderEls[4].style.cssText = "display: none";
        addClassAnimate(sliderEls, max, min, 1);
      } else {
        for (let i = 0; i < sliderEls.length; i++) {
          removeClassAnimate(sliderEls, i);
          if (i <= max && i >= min) {
            sliderEls[i].style.cssText = "display: block"; // hiển thị 3 cái đầu
          } else {
            sliderEls[i].style.cssText = "display: none"; //  0 1 2 - 123 - 234- 345 - 450 - 501
          }
        }
        addClassAnimate(sliderEls, max, min, 1);
      }

      min += 1;
      max += 1;
      if (min === 4 && max === 6) {
        min = 4;
        max = 0;
      }
      if (min === 5 && max === 1) {
        min = 5;
        max = 1;
      }
      if (min === 6 && max === 2) {
        min = 0;
        max = 2;
      }
    }, 3000);
    return () => {
      interValId && clearInterval(interValId);
    };
  }, []);

  const slider = banner?.banner?.items;
  const handleClickBanner = (item) => {
    if(item.type === 1) {
      dispatch(action.setCurrentSongId(item.encodeId))
      dispatch(action.playAlbum(true))
      dispatch(action.playMusic(false))
      dispatch(action.setPlaylist(null))
    } else if(item?.type === 4) {
      navigate(item?.link.split('.')[0])
    } else {
      dispatch(action.playAlbum(false))
    }
  };

  
  return (
    <div className="tablet:flex hidden gap-4 w-full  pt-8">
      {slider?.map((item, index) => (
        <img
          onClick={() => handleClickBanner(item)}
          key={index}
          src={item.banner}
          className={`slider-item object-contain w-1/3 px-15 rounded-lg ${
            index <= 2 ? "block" : "hidden"
          } `}
        />
      ))}
    </div>
  );
}

export default Slider;
