import React from 'react';

type Props = {
  name: string;
  value: number;
  currency?: string;
};

const Statistic = (props: Props) => {
  return (
    <div className=" pl-0 pr-5 border-r">
      <h6 className="text-zinc-300 uppercase">{props.name}</h6>
      <p className="text-2xl ">
        {parseFloat(props.value.toString()).toFixed(2)}{' '}
        {props.currency ? props.currency : 'USD'}
      </p>
      <p className="text-xs text-zinc-300"></p>
    </div>
  );
};

export default Statistic;
