import { faker } from '@faker-js/faker';
import React from 'react';

type Props = {};

const Rates = (props: Props) => {
  return (
    <div className="flex flex-col">
      <div className="flex flex-col gap-4 mb-5">
        <h1 className="text-3xl font-bold" id="exchange_rates">
          Other currencies
        </h1>
        <p className={'text-sx'}>
          Our tables are meticulously updated with the latest information posted by the
          Reserve Bank of Zimbabwe, ensuring you have access to reliable and
          up-to-the-minute data.
        </p>
      </div>

      <div className="flex gap-5">
        <div className="w-full p-3 border rounded-lg  flex justify-between items-end relative">
          <div className="w-5/6">
            <h6 className=" uppercase text-3xl">{faker.finance.currencyCode()}</h6>
            <p className="text-zinc-300">{faker.finance.currencyName()}</p>
          </div>
          <p className="text-xs ">+0.02% from last month</p>
        </div>

        <div className="w-full  border rounded-lg p-3 flex justify-between items-end">
          <div className="w-5/6">
            <h6 className=" uppercase text-3xl">{faker.finance.currencyCode()}</h6>
            <p className="text-zinc-300">{faker.finance.currencyName()}</p>
          </div>
          <p className="text-xs ">+0.02% from last month</p>
        </div>

        <div className="w-full  border rounded-lg p-3 flex justify-between items-end">
          <div className="w-5/6">
            <h6 className=" uppercase text-3xl">{faker.finance.currencyCode()}</h6>
            <p className="text-zinc-300"> {faker.finance.currencyName()}</p>
          </div>
          <p className="text-xs ">+0.02% from last month</p>
        </div>

        <div className="w-full  border rounded-lg p-3 flex justify-between items-end">
          <div className="w-5/6">
            <h6 className=" uppercase text-3xl">{faker.finance.currencyCode()}</h6>
            <p className="text-zinc-300">{faker.finance.currencyName()}</p>
          </div>
          <p className="text-xs ">+0.02% from last month</p>
        </div>
      </div>
    </div>
  );
};

export default Rates;
