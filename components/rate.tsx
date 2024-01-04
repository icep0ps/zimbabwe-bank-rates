import { FC } from 'react';
import { currency } from '../types';
import Converter from './converter/converter';

type Props = {
  rate: currency;
  rates: currency[];
};

const Rate: FC<Props> = async (props) => {
  return (
    <section className="flex py-4 w-full relative h-full justify-evenly flex-wrap">
      <div className=" flex flex-col items-start w-3/6 justify-evenly">
        <div className="flex flex-wrap">
          <div className="flex flex-col gap-2">
            <span className="font-bold text-xs">Last updated · 03 Jan, 21:09 UTC </span>
            <p className="text-zinc-300">1 United States Dollar equals</p>
            <h1 className={'text-4xl text-wrap font-bold'}>
              {props.rate.mid_zwl} Zimbabwean dollars
            </h1>
          </div>
        </div>

        <p className="text-sm flex flex-col gap-2 text-zinc-300">
          We use the mid-market rate for our bank rate and converter. This is for
          informational purposes only. These values represent the daily average of the Bid
          and Ask rates published by The Reserve Bank of Zimbabwe.
        </p>
      </div>

      <Converter rates={props.rates} />
    </section>
  );
};

export default Rate;
