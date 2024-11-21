import React, { useEffect, useState } from "react";
import { Bar } from "react-chartjs-2";
import { ChartColors } from "../utils/enums";
import useOHLCVMutation from "../utils/mutations/useOHLCVMutation";
import useOHLCVQuery from "../utils/mutations/useOHLCVQuery";
import timeFormat from "../utils/timeFormar";
import Spinner from "./Spinner";

interface Props {
  higherVisible: boolean;
  averageVisible: boolean;
  lowerVisible: boolean;
}

function FullChart({ higherVisible, averageVisible, lowerVisible }: Props) {
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
    const newLabels = [];
    const newLow = [];
    const newAvg = [];
    const newHigh = [];

    if (data) {
      for (const item of data) {
        newLabels.push(timeFormat(item.time));

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
    <div className="bg-white w-full h-full p-3 rounded-xl flex justify-center items-center min-h-60">
      {data ? (
        <Bar
          data={{
            labels: labels,
            datasets: [
              {
                label: "Hourly Lower Price",
                backgroundColor: ChartColors.green,
                data: lowList,
                borderRadius: 5,
                hidden: !higherVisible,
              },
              {
                label: "Hourly Average Price",
                backgroundColor: ChartColors.yellow,
                data: avgList,
                borderRadius: 5,
                hidden: !averageVisible,
              },
              {
                label: "Hourly Higher Price",
                backgroundColor: ChartColors.red,
                data: highList,
                borderRadius: 5,
                hidden: !lowerVisible,
              },
            ],
          }}
          options={{
            responsive: true,
          }}
        />
      ) : (
        <Spinner />
      )}
    </div>
  );
}

export default FullChart;
