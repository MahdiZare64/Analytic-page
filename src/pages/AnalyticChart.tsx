import React from "react";
import OLHCVChart from "../components/OLHCVChart";

function Analytic() {
  return (
    <main className="w-full h-full min-h-screen d-block bg-gray-50">
      <div className="w-100 flex pt-8 px-4">
        <div className="w-7/12">
          <OLHCVChart />
        </div>
      </div>
    </main>
  );
}

export default Analytic;
