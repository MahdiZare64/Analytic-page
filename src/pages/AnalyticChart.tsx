import React from "react";
import FullChart from "../components/FullChart";

function Analytic() {
  return (
    <main className="w-full h-full min-h-screen d-block bg-gray-50">
      <div className="w-100 flex pt-8 px-4">
        <div className="w-7/12">
          <FullChart />
        </div>
      </div>
    </main>
  );
}

export default Analytic;
