import { FC } from 'react';
import { currency } from '../../types';
import Converter from '../converter/converter';
import LastUpdated from './lastUpdated';
import Rate from './rate';

type Props = {
  rate: currency;
  rates: currency[];
};

const Hero: FC<Props> = async (props) => {
  return (
    <section className="mt-14 flex w-full relative h-full justify-evenly flex-wrap flex-col items-center gap-5 rounded-lg">
      <div className=" flex flex-col items-start text-center gap-5 h-fit">
        <div className="flex w-full  justify-between">
          <Rate mid_zwl={props.rate.mid_zwl} />
          <LastUpdated date_published={props.rate.date_published} />
        </div>
        <div className="w-1/2" id="disclamer">
          <p className="text-xs gap-2 text-zinc-300 text-left">
            <span className="font-bold">Disclamer:</span> We use the mid-market rate for
            our bank rate and converter. This is for informational purposes only. These
            values represent the daily average of the Bid and Ask rates published by The
            Reserve Bank of Zimbabwe.
          </p>
        </div>
      </div>
      {/* <Converter rates={props.rates} rate={props.rate} /> */}
    </section>
  );
};

export default Hero;
