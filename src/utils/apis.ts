import { OHLCVGet } from "./interface/OHLCV";

export const getOHLCV = async () => {
  const response = await fetch(
    "https://min-api.cryptocompare.com/data/v2/histohour?fsym=BTC&tsym=USD&limit=10",
    {
      method: "GET",
      headers: {
        authorization: `Apikey ${process.env.APIKEY}`,
      },
    }
  );

  return response.json() as Promise<OHLCVGet>;
};