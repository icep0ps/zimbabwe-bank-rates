import React from 'react';

type Props = {
  mid_zwl: number;
};

const Rate = (props: Props) => {
  return (
    <div className="flex gap-3 flex-col items-start justify-center">
      <p className="text-base text-zinc-300 text-left">
        Offical bank rate for 1 United States Dollar equals
      </p>
      <div className="flex w-full gap-1">
        <h1 className="text-5xl font-extrabold text-left break-words">
          <span className="text-primary flex">{Number(props.mid_zwl).toFixed(3)}</span>
          <span className="flex gap-4 items-end">Zimbabwe Gold </span>
        </h1>
      </div>
    </div>
  );
};

export default Rate;
