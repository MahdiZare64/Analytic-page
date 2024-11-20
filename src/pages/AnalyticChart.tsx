import React from "react";
import OLHCVChart from "../components/OLHCVChart";
import ExchangeSwiper from "../components/ExchangeSwiper";

function Analytic() {
  return (
    <main className="w-full h-full min-h-screen d-block bg-gray-50">
      <div className="w-full max-w-full flex pt-8 px-4">
        <div className="w-7/12 pr-2">
          <OLHCVChart />
        </div>

        <div className="w-5/12 pl-2">
          <ExchangeSwiper />
        </div>
      </div>
    </main>
  );
}

export default Analytic;
