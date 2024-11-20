import React from "react";
import AnalyticChart from "./pages/AnalyticChart";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { Chart as ChartJS, CategoryScale } from "chart.js/auto";

const queryClient = new QueryClient();
ChartJS.register(CategoryScale);

function App() {
  return (
    <QueryClientProvider client={queryClient}>
      <AnalyticChart />
    </QueryClientProvider>
  );
}

export default App;
