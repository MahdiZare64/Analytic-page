import React, { useEffect, useState } from "react";
import { Chart as ChartJS, CategoryScale } from "chart.js/auto";
import { Bar } from "react-chartjs-2";
import { ChartColors } from "../utils/enums";
import useOHLCVMutation from "../utils/mutations/useOHLCVMutation";
import useOHLCVQuery from "../utils/mutations/useOHLCVQuery";

ChartJS.register(CategoryScale);

function FullChart() {
  const [labels, setLabels] = useState<string[] | []>([]);
  const [lowList, setLowList] = useState<number[] | []>([]);
  const [avgList, setAvgList] = useState<number[] | []>([]);
  const [highList, setHighList] = useState<number[] | []>([]);
  const data = useOHLCVQuery();

  const mutation = useOHLCVMutation();

  useEffect(() => {
    mutation.mutate();

    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  useEffect(() => {
    console.log(data);

    const newLabels = [];
    const newLow = [];
    const newAvg = [];
    const newHigh = [];

    if (data) {
      for (const item of data) {
        const date = new Date(item.time * 1000);
        newLabels.push(date.toLocaleTimeString());

        newLow.push(item.low);
        newHigh.push(item.high);
        newAvg.push((item.low + item.high) / 2);
      }
    }

    setLabels(newLabels);
    setLowList(newLow);
    setAvgList(newAvg);
    setHighList(newHigh);
  }, [data]);

  return (
    <div className="bg-white w-full p-3 rounded-xl">
      <Bar
        data={{
          labels: labels,
          datasets: [
            {
              label: "Hourly Lower Price",
              backgroundColor: ChartColors.green,
              data: lowList,
              borderRadius: 5,
            },
            {
              label: "Hourly Average Price",
              backgroundColor: ChartColors.yellow,
              data: avgList,
              borderRadius: 5,
            },
            {
              label: "Hourly Higher Price",
              backgroundColor: ChartColors.red,
              data: highList,
              borderRadius: 5,
            },
          ],
        }}
        options={{
          responsive: true,
        }}
      />
    </div>
  );
}

export default FullChart;
