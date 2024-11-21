import React from "react";
import Checkbox from "./Checkbox";
import { ChartColors } from "../utils/enums";

interface Props {
  higherVisible: boolean;
  setHigherVisible: () => void;
  averageVisible: boolean;
  setAverageVisible: () => void;
  lowerVisible: boolean;
  setLowerVisible: () => void;
}

function IndexChanger({
  higherVisible,
  setHigherVisible,
  averageVisible,
  setAverageVisible,
  lowerVisible,
  setLowerVisible,
}: Props) {
  return (
    <div className="bg-white w-full h-full p-3 rounded-xl">
      <h1 className="font-sans text-lg font-semibold text-black text-center">
        Indexes:{" "}
      </h1>

      <div className="grid grid-cols-3 mt-5">
        <Checkbox
          label="Higher"
          isActive={higherVisible}
          onClick={setHigherVisible}
          color={ChartColors.green}
        />

        <Checkbox
          label="Average"
          isActive={averageVisible}
          onClick={setAverageVisible}
          color={ChartColors.yellow}
        />

        <Checkbox
          label="Lower"
          isActive={lowerVisible}
          onClick={setLowerVisible}
          color={ChartColors.red}
        />
      </div>
    </div>
  );
}

export default IndexChanger;
