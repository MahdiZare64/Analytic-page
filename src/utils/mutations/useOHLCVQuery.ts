import { useQuery } from "@tanstack/react-query";
import { getOHLCV } from "../apis";

const useOHLCVQuery = () => {
  const query = useQuery({ queryKey: ["OHLCV"], queryFn: getOHLCV });

  return query.data?.Data.Data;
};

export default useOHLCVQuery;
