import React, { useState } from "react";
import OLHCVChart from "../components/OLHCVChart";
import ExchangeSwiper from "../components/ExchangeSwiper";
import IndexChanger from "../components/IndexChanger";

function Analytic() {
  const [higher, setHigher] = useState<boolean>(true);
  const [average, setAverage] = useState<boolean>(true);
  const [lower, setLower] = useState<boolean>(true);

  const higherChangeHandler = () => {
    setHigher(!higher);
  };

  const averageChangeHandler = () => {
    setAverage(!average);
  };

  const lowerChangeHandler = () => {
    setLower(!lower);
  };

  return (
    <main className="min-h-screen bg-gray-50">
      <div className="container mx-auto">
        <div className="w-full max-w-full flex pt-8">
          <div className="w-7/12 pr-2">
            <OLHCVChart
              higherVisible={higher}
              averageVisible={average}
              lowerVisible={lower}
            />
          </div>

          <div className="w-5/12 pl-2">
            <ExchangeSwiper />
          </div>
        </div>

        <div className="w-full mt-4">
          <IndexChanger
            higherVisible={higher}
            setHigherVisible={higherChangeHandler}
            averageVisible={average}
            setAverageVisible={averageChangeHandler}
            lowerVisible={lower}
            setLowerVisible={lowerChangeHandler}
          />
        </div>
      </div>
    </main>
  );
}

export default Analytic;
