import { useQuery } from "@tanstack/react-query";
import { getExchangeVol } from "../apis";

const useExchangeQuery = () => {
  const query = useQuery({ queryKey: ["ExchangeVol"], queryFn: getExchangeVol });

  return query.data?.Data;
};

export default useExchangeQuery;
