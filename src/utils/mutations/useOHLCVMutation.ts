import { useMutation, useQueryClient } from "@tanstack/react-query";
import { getOHLCV } from "../apis";

const useOHLCVMutation = () => {
  const queryClient = useQueryClient();

  return useMutation({
    mutationFn: getOHLCV,
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ["OHLCV"] });
      // console.log("success");
    },
  });
};

export default useOHLCVMutation;
