import React from 'react';
import { currency } from '@/types';
import { Currencies } from 'currencies-map';

type Props = {
  data: currency[];
};

const Rates = (props: Props) => {
  const rates = props.data.slice(1, 5);
  return (
    <div className="flex flex-col">
      <div className="flex flex-col gap-4 mb-5">
        <h1 className="text-3xl font-bold text-primary" id="exchange_rates">
          Other currencies
        </h1>
        <p className={'text-sx'}>
          Our tables are meticulously updated with the latest information posted by the
          Reserve Bank of Zimbabwe, ensuring you have access to reliable and
          up-to-the-minute data.
        </p>
      </div>

      <div className="flex gap-5">
        {rates.map((rate) => (
          <div className="w-full p-3 border rounded-lg  flex justify-between items-end relative">
            <div className="w-5/6">
              <h6 className=" uppercase text-3xl">{rate.currency}</h6>
              <p className="text-zinc-300">
                {Currencies.names.get(rate.currency.trim())}
              </p>
            </div>
            <p className="text-xs ">+0.02% from last month</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Rates;
