import React from 'react';
import Statistic from './statistic';
import { currency } from '@/types';

type Props = {
  data: currency | null;
};

const Statistics = (props: Props) => {
  return (
    <div className="p-5 border rounded-3xl ">
      <h1 className="text-xl mb font-bold">Statistics</h1>
      <p className="text-xs font-normal">
        United states dollar (USD) statistics against Zimbabwe gold (ZiG).
      </p>
      {props.data ? (
        <div className="flex justify-between py-10 flex-wrap gap-5">
          <Statistic name="Bid" value={props.data.bid} />
          <Statistic name="Ask" value={props.data.ask} />
          <Statistic name="Mid" value={props.data.mid_rate} />
          <Statistic name="Bid (ZiG)" value={props.data.bid_zwl} currency="ZiG" />
          <Statistic name="Ask (ZiG)" value={props.data.ask_zwl} currency="ZiG" />
        </div>
      ) : (
        <h1>No offical rate found</h1>
      )}
    </div>
  );
};

export default Statistics;
