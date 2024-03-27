import React from 'react';

type Props = {
  mid_zwl: number;
};

const Rate = (props: Props) => {
  return (
    <div className="flex gap-5 flex-col items-start">
      <p className="text-xl">The offical bank rate today is</p>
      <div className="flex w-full gap-1">
        <h1 className="text-5xl font-extrabold text-center ">
          {Number(props.mid_zwl).toFixed(3)} ZWL
        </h1>
        <p className="text-green-600 font-semibold text-xs  items-end  flex px-4">
          2.5% this month
        </p>
      </div>
    </div>
  );
};

export default Rate;
