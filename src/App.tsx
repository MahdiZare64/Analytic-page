import React from "react";
import AnalyticChart from "./pages/AnalyticChart";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";

const queryClient = new QueryClient();

function App() {
  return (
    <QueryClientProvider client={queryClient}>
      <AnalyticChart />
    </QueryClientProvider>
  );
}

export default App;
