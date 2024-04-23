import React from 'react';
import { faker } from '@faker-js/faker';

type Props = {
  name: string;
};

const Statistic = (props: Props) => {
  return (
    <div className=" pl-0 pr-5 border-r">
      <h6 className="text-zinc-300 uppercase">{props.name}</h6>
      <p className="text-2xl ">
        {faker.number.float({
          fractionDigits: 2,
          min: 1000,
          max: 10000,
        })}{' '}
        USD
      </p>
      <p className="text-xs text-zinc-300">+19% from last month</p>
    </div>
  );
};

export default Statistic;
