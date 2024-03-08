import { FC } from 'react';
import { currency } from '../types';
import Converter from './converter/converter';

type Props = {
  rate: currency;
  rates: currency[];
};

const Rate: FC<Props> = async (props) => {
  return (
    <section className="flex py-4 w-full relative h-full justify-evenly flex-wrap flex-col items-center gap-5">
      <div className=" flex flex-col items-start text-center w-3/4 gap-2">
        <p className="font-bold text-xs text-center w-full">
          Last updated ·{' '}
          {new Date(props.rate.date_published).toLocaleDateString('en-us', {
            weekday: 'long',
            year: 'numeric',
            month: 'long',
            day: 'numeric',
          })}
        </p>
        <p className="text-sm flex flex-col gap-2 text-zinc-300">
          We use the mid-market rate for our bank rate and converter. This is for
          informational purposes only. These values represent the daily average of the Bid
          and Ask rates published by The Reserve Bank of Zimbabwe.
        </p>
      </div>

      <Converter rates={props.rates} rate={props.rate} />
    </section>
  );
};

export default Rate;
