import React from 'react';

type Props = {
  mid_zwl: number;
};

const Rate = (props: Props) => {
  return (
    <div className="flex gap-3 flex-col items-start justify-center">
      <p className="text-lg text-zinc-300 text-left">
        Offical bank rate for 1 United States Dollar equals
      </p>
      <div className="flex w-full gap-1">
        <h1 className="text-5xl font-extrabold text-left ">
          {Number(props.mid_zwl).toFixed(3)} United states dollars
        </h1>
      </div>
    </div>
  );
};

export default Rate;
