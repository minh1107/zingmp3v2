import React, { memo, useEffect, useState } from "react";
import { Line } from "react-chartjs-2";
import bgChart from "../assets/img/bg-chart.jpg";
import { Chart } from "chart.js/auto";
import { useSelector } from "react-redux";
import icons from '../utils/icons'

function ChartSection() {
  const [data, setData] = useState(null);
  const { zingChart, zingRank } = useSelector((state) => state.app);
  const [points, setPoints] = useState([])
  const options = {
    responsive: true,
    pointRadius: 0,
    aspectRatio: 4,
    scales: {
      y: {
        ticks: { display: false },
        grid: { color: "rgba(255,255,255,0.2)", drawTicks: false },
        min: zingChart?.minScore,
        max: zingChart?.maxScore,
        border: { dash: [4, 5] },
      },
      x: {
        ticks: { color: "white" },
        grid: { color: "transparent" },
      },
    },
    plugins: {
      legend: false,
    },
    hover: {
      mode: "dataset",
      intersect: false,
    },
  };
  useEffect(() => {
    const labels = zingChart?.times
      ?.filter((item) => +item?.hour % 2 === 0)
      ?.map((item) => `${item?.hour}:00`);
    const datasets = [];
    for (let i = 0; i < 3; i++) {
      
      datasets.push({
        data:
          zingChart?.items[Object.keys(zingChart?.items)[i]]
            ?.filter((item) => +item.hour % 2 === 0)
            ?.map((item) => item.counter) || {},
        borderColor: i === 0 ? "#4392BA" : i === 1 ? "#27B489" : "#E24C46",
        tension: 0.2,
        borderWidth: 2,
        pointBackgroundColor: "white",
        pointHoverRadius: 4,
        borderHitRadius: "green",
        pointHoverBorderWidth: 4,
        pointBorderColor: i === 0 ? "#4392BA" : i === 1 ? "#27B489" : "#E24C46",
      });
    }
    setData({ labels, datasets });
  }, [zingChart]);

  useEffect(() => {
    let ratio = []
    let total = 0
    if(zingRank) {
      for(let i=0;i<2;i++) {
        total +=zingRank[i]?.score
      }
      zingRank?.map((item) => (
        ratio.push(Math.round(((item.score)/total)*100))
      ))
        setPoints(ratio)
    }
  }, [zingRank])
  const {BiPlay, CiPlay1} = icons

  return (
    <div className="mt-12 relative hidden tablet:block max-h-[410px]">
      <img
        src={bgChart}
        alt="bg-chart"
        className="w-full max-h-[410px] object-cover rounded-md"
      />
      <div className="absolute rounded-md top-0 bottom-0 right-0 left-0  bg-gradient-to-t to-[#7a0a84da] from-[#2d1741e0]"></div>
      <div className="m-4 flex flex-col absolute rounded-md top-0 bottom-0 right-0 left-0">
        <h3 className="text-[28px] text-white font-bold pb-4 flex gap-3">#ZingChart <BiPlay className="border rounded-full p-1 mr-1" size={40} /></h3>
        <div className="h-full flex-3 flex gap-4">
          <div className="gap-[10px] w-[40%] h-full rounded-md flex items-center flex-col">
            {zingRank?.map((item, index) => {
              if(index < 3)
              return (
                <div className="flex w-full items-center rounded-md h-80px gap-4 hover:bg-[#803685] bg-[#601e67ba] p-[10px]">
                  <div className="flex-1 text-[30px]">{index + 1}</div>
                  <img src={item?.thumbnail} className='h-[60px]' title="song " />
                  <div className="flex-6">
                    <div className="text-[14px] w-full ">{item?.title}</div>
                    <div className="text-[12px] font-thin">{item?.artistsNames}</div>
                  </div>
                  <div className="flex-1">{points[index]}%</div>
                </div>
              );
            })}
            <button className=" border rounded-full w-[30%] py-[5px] px-[25px] hover:bg-[#803685] mt-2">Xem thêm</button>
          </div>
          <div className="w-[65%]">
            {data && <Line data={data} options={options} />}
          </div>
        </div>
      </div>
    </div>
  );
}

export default memo(ChartSection);
