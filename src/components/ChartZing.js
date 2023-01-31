import React, { memo, useEffect, useState } from "react";
import { Line } from "react-chartjs-2";
import bgChart from "../assets/img/bg-chart.jpg";
import { useSelector } from "react-redux";
import icons from "../utils/icons";
const { BiPlay } = icons;
function ChartZing() {
  const [data, setData] = useState(null);
  const { zingChart } = useSelector((state) => state.app);
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


  return (
    <div className="">
      <div className="pt-12 h-[450px]  relative ">
        <img
          src={bgChart}
          alt="bg-chart"
          className="w-full  h-[450px] mb-12 absolute top-0 object-cover rounded-md grayscale"
        />
        <div className="absolute px-[59px] rounded-md top-0 bottom-0 right-0 left-0  bg-gradient-to-t to-[#231133cd] from-[#170D1B]">
          <h3 className="mt-10 text-[40px] text-white font-bold pb-4 mb-10 items-center flex gap-3">
            #ZingChart{" "}
            <BiPlay className="border rounded-full p-1 mr-1" size={40} />
          </h3>
          {data && <Line data={data} options={options} />}
        </div>
      </div>
    </div>
  );
}

export default memo(ChartZing);
