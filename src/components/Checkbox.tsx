import React from "react";
import { ChartColors } from "../utils/enums";

interface Props {
  isActive: boolean;
  onClick: () => void;
  color: ChartColors;
  label: string;
}

function Checkbox({ isActive, onClick, color, label }: Props) {
  const clickHanlder = () => {
    if (onClick) {
      onClick();
    }
  };

  return (
    <div
      className="inline-flex items-center justify-center cursor-pointer"
      onClick={clickHanlder}
    >
      <div
        className="w-4 h-4 rounded-full mr-2 transition-all"
        style={{
          border: `2px solid ${color || ChartColors.green}`,
          backgroundColor: isActive ? color || ChartColors.green : "white",
        }}
      ></div>

      <p className="font-sans text-md text-dark">{label}</p>
    </div>
  );
}

export default Checkbox;
