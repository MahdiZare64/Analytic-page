import React from "react";
import { Chart as ChartJS, CategoryScale } from "chart.js/auto";
import { Bar } from "react-chartjs-2";
import { ChartColors } from "../utils/enums";

ChartJS.register(CategoryScale);

function FullChart() {
  return (
    <div className="bg-white w-full p-3 rounded-xl">
      <Bar
        data={{
          labels: ["time 1", "time 2", "time 3"],
          datasets: [
            {
              label: "hourly lower price",
              backgroundColor: ChartColors.green,
              data: [1, 1, 1],
              borderRadius: 8,
            },
            {
              label: "hourly average price",
              backgroundColor: ChartColors.yellow,
              data: [2, 2, 2],
              borderRadius: 8,
            },
            {
              label: "hourly higher price",
              backgroundColor: ChartColors.red,
              data: [3, 3, 7],
              borderRadius: 8,
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
