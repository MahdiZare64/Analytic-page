import React, { useEffect, useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import ExchangeVolChart from "./ExchangeVolChart";
import useExchangeMutation from "../utils/mutations/useExchangeMutation";
import useExchangeQuery from "../utils/mutations/useExchangeQuery";
import timeFormat from "../utils/timeFormar";

function ExchangeSwiper() {
  const [maxValue, setMaxValue] = useState<number | undefined>(undefined);

  const data = useExchangeQuery();
  const mutation = useExchangeMutation();

  useEffect(() => {
    mutation.mutate();

    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  useEffect(() => {
    if (data) {
      const max = data.reduce(function (prev, current) {
        return prev && prev.volume > current.volume ? prev : current;
      });

      setMaxValue(max.volume + max.volume * 0.15);
    }
  }, [data]);

  return (
    <div className="bg-white w-full p-3 rounded-xl">
      <Swiper spaceBetween={50} slidesPerView={1}>
        {data?.map((item) => (
          <SwiperSlide key={item.time}>
            <ExchangeVolChart
              label={timeFormat(item.time)}
              value={item.volume}
              maxValue={maxValue}
            />
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
}

export default ExchangeSwiper;
