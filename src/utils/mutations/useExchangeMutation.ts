import { useMutation, useQueryClient } from "@tanstack/react-query";
import { getExchangeVol } from "../apis";

const useExchangeMutation = () => {
  const queryClient = useQueryClient();

  return useMutation({
    mutationFn: getExchangeVol,
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ["ExchangeVol"] });
      // console.log("success");
    },
  });
};

export default useExchangeMutation;
