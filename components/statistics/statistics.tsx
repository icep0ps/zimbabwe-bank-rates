import React from 'react';
import Statistic from './statistic';

type Props = {};

const Statistics = (props: Props) => {
  return (
    <div className="p-5 border rounded-3xl ">
      <h1 className="text-xl mb font-bold">Currency statistics</h1>
      <p className="text-xs font-normal">
        We use the mid-market rate for our bank rate and converter.
      </p>
      <div className="flex justify-between  py-10">
        <Statistic name="Bid" />
        <Statistic name="Ask" />
        <Statistic name="Mid" />
        <Statistic name="Bid (ZWL)" />
        <Statistic name="Ask (ZWL)" />
      </div>
    </div>
  );
};

export default Statistics;
