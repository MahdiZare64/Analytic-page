import React from "react";
import { Bar } from "react-chartjs-2";
import { ChartColors } from "../utils/enums";

interface Props {
  label: string;
  value: number;
  maxValue?: number;
}

function ExchangeVolChart({ label, value, maxValue }: Props) {
  return (
    <div className="w-full h-full flex justify-center items-center">
      <Bar
        data={{
          labels: [label],
          datasets: [
            {
              label: "Hourly Lower Price",
              backgroundColor: ChartColors.green,
              data: [value],
              borderRadius: 5,
              barThickness: 30,
            },
          ],
        }}
        options={{
          scales: {
            y: {
              min: 0,
              max: maxValue || undefined,
            },
          },
        }}
      />
    </div>
  );
}

export default ExchangeVolChart;
