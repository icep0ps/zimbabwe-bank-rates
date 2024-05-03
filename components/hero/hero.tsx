import { FC } from 'react';
import Rate from './rate';
import LastUpdated from './lastUpdated';
import CurrencyConverter from '../converter/converter';
import { currency } from '../../types';

type Props = {
  rate: currency;
  rates: currency[];
};

const Hero: FC<Props> = async (props) => {
  return (
    <section className="flex w-full relative h-full justify-between items-center gap-10 rounded-3xl p-5">
      <div className=" flex flex-col items-start text-center gap-5 h-fit w-full">
        <div className="flex w-full justify-between">
          <Rate mid_zwl={props.rate.mid_zwl} />
        </div>
        <div id="disclamer">
          <LastUpdated
            date_published={props.rate.date_published}
            previous_mid_rate_zwl={Number(props.rate.previous_mid_rate_zwl)}
            previous_date_published={props.rate.previous_date_published}
          />
          <p className="text-xs gap-2 text-left mt-5 bg-secondary p-3 rounded-2xl">
            <span className="font-bold ">Disclamer:</span> We use the mid-market rate for
            our bank rate and converter. This is for informational purposes only. These
            values represent the daily average of the Bid and Ask rates published by The
            Reserve Bank of Zimbabwe.
          </p>
        </div>
      </div>
      <CurrencyConverter rate={props.rate} rates={props.rates} />
    </section>
  );
};

export default Hero;
